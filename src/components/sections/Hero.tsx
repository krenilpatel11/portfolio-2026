"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ViewVoiceMockup,
  SecurityGateMockup,
  TrainingMockup,
  SportMockup,
  LabelFlowMockup,
} from "@/components/ProjectMockups";
import { useMood } from "@/context/MoodContext";
import { PatternBackground } from "@/components/patterns/PatternBackground";

const mockupCards = [
  { Component: ViewVoiceMockup,    rotate: -2,   delay: 0.5 },
  { Component: SecurityGateMockup, rotate: 1,    delay: 0.6 },
  { Component: TrainingMockup,     rotate: -1,   delay: 0.7 },
  { Component: SportMockup,        rotate: 2,    delay: 0.8 },
  { Component: LabelFlowMockup,    rotate: -1.5, delay: 0.9 },
];

// Chips orbit around the headline block — widely spread, slow float
// x/y = offset from center (px), floatX/floatY = drift amplitude, dur = seconds per cycle
const floatingChips = [
  { label: "React",        color: "#61DAFB", x: -420, y: -60,  floatX: 8,  floatY: 12, dur: 9.0  },
  { label: "Next.js",      color: "#0a0a0a", x:  400, y: -80,  floatX: -9, floatY: 10, dur: 10.5 },
  { label: ".NET Core",    color: "#512BD4", x: -460, y:  60,  floatX: 10, floatY: -11,dur: 8.5  },
  { label: "TypeScript",   color: "#3178C6", x:  440, y:  50,  floatX: -8, floatY: 13, dur: 11.0 },
  { label: "Azure",        color: "#0089D6", x: -380, y:  150, floatX: 11, floatY: -9, dur: 9.8  },
  { label: "Angular",      color: "#DD0031", x:  360, y:  140, floatX: -9, floatY: 10, dur: 10.2 },
  { label: "Tailwind CSS", color: "#06B6D4", x:  120, y: -160, floatX: 7,  floatY: -12,dur: 8.8  },
  { label: "Docker",       color: "#2496ED", x: -140, y: -150, floatX: -8, floatY: 11, dur: 11.5 },
  { label: "AI-102 ✦",    color: "#6c3ce1", x:    0, y: -190, floatX: 6,  floatY: -10,dur: 9.5  },
];

function FloatingChip({
  label, color, x, y, floatX, floatY, dur, delay,
}: {
  label: string; color: string;
  x: number; y: number; floatX: number; floatY: number; dur: number; delay: number;
}) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.08}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [x, x + floatX, x - floatX * 0.5, x + floatX * 0.3, x],
        y: [y, y + floatY, y - floatY * 0.6, y + floatY * 0.4, y],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale:   { duration: 0.6, delay },
        x: { duration: dur, delay: delay + 0.6, repeat: Infinity, ease: "easeInOut" },
        y: { duration: dur * 1.3, delay: delay + 0.6, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: 8,
        touchAction: "none",
        cursor: "grab",
      }}
      whileHover={{ scale: 1.08 }}
      className="active:cursor-grabbing select-none"
    >
      <span
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap backdrop-blur-md"
        style={{
          backgroundColor: `${color}12`,
          color: color,
          border: `1px solid ${color}40`,
          boxShadow: `0 2px 12px ${color}18`,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { currentMood } = useMood();
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Use mood-specific rotating words
  const rotatingWords = currentMood.variants.heroWords;

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-0"
    >
      {/* Mood-reactive gradient background */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${currentMood.accentHex}14, transparent)`,
        }}
      />
      
      {/* Pattern overlay - more visible */}
      <PatternBackground pattern="organic" opacity={0.06} />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-700" 
          style={{ backgroundColor: `${currentMood.accentHex}20` }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-700"
          style={{ backgroundColor: `${currentMood.accentHex}14` }}
        />
      </div>

      {/* Inner content */}
      <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-10" style={{ zIndex: 20 }}>

        {/* Floating chips — anchored relative to this block */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          <div className="pointer-events-auto relative w-full h-full">
            {floatingChips.map((chip, i) => (
              <FloatingChip key={chip.label} {...chip} delay={0.8 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="flex items-center justify-center mb-3"
          style={{ position: "relative", zIndex: 20 }}
        >
          <span className="text-[1.05rem] md:text-[1.15rem] font-semibold tracking-wide text-[var(--foreground)]">
            Krenil Patel
          </span>
        </motion.div>

        {/* Label - mood-reactive subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easing }}
          className="flex items-center justify-center gap-3 mb-10"
          style={{ position: "relative", zIndex: 20 }}
        >
          <span className="w-6 h-px bg-[var(--muted)]" />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMood.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
            >
              {currentMood.variants.heroSubtitle}
            </motion.span>
          </AnimatePresence>
          <span className="w-6 h-px bg-[var(--muted)]" />
        </motion.div>

        {/* Headline - mood-reactive title */}
        <div className="text-center max-w-4xl mx-auto" style={{ position: "relative", zIndex: 20 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMood.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold font-display tracking-[-0.04em] leading-[1.05] text-[var(--foreground)] mb-4"
            >
              {currentMood.variants.heroTitle}
            </motion.div>
          </AnimatePresence>

          <div className="overflow-hidden mt-1 pb-2">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.41, ease: easing }}
              className="flex justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className="inline-block text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold font-display tracking-[-0.04em] leading-[1.1] text-white px-6 py-1 rounded-2xl accent-reactive"
                  style={{ backgroundColor: currentMood.accentHex }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: easing }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ position: "relative", zIndex: 20 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-80 transition-opacity"
          >
            See My Work ↓
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] font-semibold px-8 py-3.5 rounded-full text-sm hover:border-[var(--foreground)] transition-all"
          >
            Start a Project →
          </a>
        </motion.div>
      </div>

      {/* Mockup strip */}
      <div className="relative mt-14 overflow-hidden" style={{ zIndex: 20 }}>
        <div className="flex gap-4 items-end justify-center px-4 pb-0">
          {mockupCards.map(({ Component, rotate, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.75, delay, ease: easing }}
              style={{ rotate: `${rotate}deg` }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--border)] bg-[var(--card-bg)] shrink-0"
            >
              <div className="hidden md:block w-[260px] h-[168px]"><Component /></div>
              <div className="md:hidden w-[180px] h-[116px]"><Component /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
