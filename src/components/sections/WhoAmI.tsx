"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { ExperienceTile } from "../bento/tiles/ExperienceTile";
import { ProjectsTile } from "../bento/tiles/ProjectsTile";
import { CertificationsTile } from "../bento/tiles/CertificationsTile";
import { CurrentlyTile } from "../bento/tiles/CurrentlyTile";
import { BrandsDesignedTile } from "../bento/tiles/BrandsDesignedTile";
import { ProblemSolverTile } from "../bento/tiles/ProblemSolverTile";
import { BasedInTile } from "../bento/tiles/BasedInTile";
import { QuoteTile } from "../bento/tiles/QuoteTile";
import { FounderTile } from "../bento/tiles/FounderTile";
import { EducationTile } from "../bento/tiles/EducationTile";
import { AchievementTile } from "../bento/tiles/AchievementTile";
import { PatternBackground } from "../patterns/PatternBackground";
import { useMood } from "@/context/MoodContext";
import { SITE } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { vibeOrder, vibes } from "@/lib/vibes";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoAmI() {
  const { currentVibe, currentTheme, setVibe, cycleVibe } = useVibeTheme();
  const { currentMood } = useMood();
  const gridRef = useRef<HTMLDivElement>(null);

  const preferReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // GSAP stagger animation for grid items
  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.children;
    
    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Handle vibe click - if clicking same vibe, cycle to next video
  const handleVibeClick = (vibeId: string) => {
    if (vibeId === currentVibe.id) {
      // Same vibe clicked, cycle to alternate video
      cycleVibe();
    } else {
      // Different vibe clicked, switch to that vibe
      setVibe(vibeId as any);
    }
  };
  
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-[var(--background)] overflow-hidden scroll-mt-20"
    >
      {/* Pattern background */}
      <PatternBackground pattern="geometric" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header - vibe-reactive */}
        <div className="mb-12 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentVibe.id + "-label"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3"
            >
              Currently {currentVibe.label} {currentVibe.emoji}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentVibe.id + "-subtitle"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-8"
            >
              {currentVibe.motto}
            </motion.h2>
          </AnimatePresence>
          
          {/* Vibe-specific intro content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVibe.id + "-intro"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-base leading-relaxed text-[var(--muted)]">
                {currentVibe.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento Grid - Proper Tailwind Grid with classic layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Avatar Tile - spans 2 columns, 2 rows */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl border border-[var(--border)] p-4 overflow-hidden noise-overlay bg-gradient-to-br from-[var(--card-bg)] to-transparent group hover:border-[var(--accent)] transition-all duration-500">
            {/* Terminal tag */}
            <div className="absolute top-3 left-3 text-xs font-mono text-[var(--muted)] opacity-60 z-10">
              $ whoami
            </div>

            {/* Vibe emoji buttons (6 activities) - cycles between video1 and video2 */}
            <div className="absolute top-3 right-3 flex gap-1.5 z-10">
              {vibeOrder.map((vibeId) => {
                const vibe = vibes[vibeId];
                const isActive = vibeId === currentVibe.id;
                return (
                  <button
                    key={vibeId}
                    onClick={() => handleVibeClick(vibeId)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-base transition-all backdrop-blur-sm ${
                      isActive
                        ? "scale-110"
                        : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                    style={{
                      boxShadow: isActive ? `0 0 0 2px ${vibe.colors.primary}` : "none",
                      backgroundColor: isActive ? `${vibe.colors.primary}35` : "rgba(0,0,0,0.25)",
                    }}
                    title={`${vibe.label}${isActive ? ' (click to alternate GIF)' : ''}`}
                  >
                    {vibe.emoji}
                  </button>
                );
              })}
            </div>

            {/* Avatar GIF - larger size with reduced padding */}
            <div className="flex flex-col items-center justify-center h-full pt-6">
              <div className="w-64 h-64 md:w-80 md:h-80 mb-4 relative group-hover:scale-105 transition-transform duration-500">
                {currentMood.avatar && !preferReducedMotion ? (
                  <video
                    key={currentMood.avatar.video.webm} // Force re-render on video change
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={currentMood.avatar.poster}
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                    style={{
                      filter: `drop-shadow(0 0 40px ${currentVibe.colors.primary}60)`,
                      transition: "filter 0.7s ease",
                    }}
                  >
                    <source src={currentMood.avatar.video.webm} type="video/webm" />
                    <source src={currentMood.avatar.video.mp4} type="video/mp4" />
                  </video>
                ) : currentMood.avatar ? (
                  <img
                    src={currentMood.avatar.placeholder}
                    alt={currentMood.label}
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-full bg-[var(--card-bg)] border-2 border-[var(--border)]">
                    <span className="text-6xl">{currentMood.emoji}</span>
                  </div>
                )}
              </div>

              {/* Name and info below GIF */}
              <div className="text-center">
                <h3 className="text-2xl font-bold font-display mb-1.5">{SITE.name}</h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentVibe.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-[var(--muted)] mb-2.5"
                  >
                    {currentVibe.label} Mode {currentVibe.emoji}
                  </motion.p>
                </AnimatePresence>

                {/* Availability */}
                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: "#22C55E" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: "#22C55E" }}
                    />
                  </span>
                  <span className="text-xs text-[var(--muted)]">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Tile */}
          <div className="md:col-span-1">
            <ExperienceTile delay={0.1} />
          </div>

          {/* Projects Tile */}
          <div className="md:col-span-1">
            <ProjectsTile delay={0.15} />
          </div>

          {/* Certifications */}
          <div className="md:col-span-1">
            <CertificationsTile delay={0.2} />
          </div>

          {/* Currently */}
          <div className="md:col-span-1">
            <CurrentlyTile delay={0.25} />
          </div>

          {/* Brands Designed */}
          <div className="md:col-span-2">
            <BrandsDesignedTile delay={0.3} />
          </div>

          {/* Problem Solver */}
          <div className="md:col-span-2">
            <ProblemSolverTile delay={0.35} />
          </div>

          {/* Based In */}
          <div className="md:col-span-1">
            <BasedInTile delay={0.4} />
          </div>

          {/* Quote */}
          <div className="md:col-span-2">
            <QuoteTile delay={0.45} />
          </div>

          {/* Founder */}
          <div className="md:col-span-1">
            <FounderTile delay={0.5} />
          </div>

          {/* Education */}
          <div className="md:col-span-2">
            <EducationTile delay={0.55} />
          </div>

          {/* Achievement */}
          <div className="md:col-span-2">
            <AchievementTile delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
}
