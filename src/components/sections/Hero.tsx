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

const rotatingWords = ["PRODUCTS", "EXPERIENCES", "SOLUTIONS"];

const mockupCards = [
  { Component: ViewVoiceMockup,    rotate: -2,   delay: 0.5 },
  { Component: SecurityGateMockup, rotate: 1,    delay: 0.6 },
  { Component: TrainingMockup,     rotate: -1,   delay: 0.7 },
  { Component: SportMockup,        rotate: 2,    delay: 0.8 },
  { Component: LabelFlowMockup,    rotate: -1.5, delay: 0.9 },
];

// Chips orbit around the headline block
// x/y are % offsets within the hero content div
// floatX/floatY = gentle random drift amplitude in px
const floatingChips = [
  { label: "React",        color: "#61DAFB", tx: "#0a0a0a", x: -260, y: -30,  floatX: 6,  floatY: 10, dur: 5.2 },
  { label: "Next.js",      color: "#0a0a0a", tx: "#ffffff", x: 240,  y: -50,  floatX: -8, floatY: 8,  dur: 6.1 },
  { label: ".NET Core",    color: "#512BD4", tx: "#ffffff", x: -300, y: 40,   floatX: 7,  floatY: -9, dur: 4.8 },
  { label: "TypeScript",   color: "#3178C6", tx: "#ffffff", x: 280,  y: 30,   floatX: -6, floatY: 11, dur: 5.6 },
  { label: "Azure",        color: "#0089D6", tx: "#ffffff", x: -240, y: 100,  floatX: 9,  floatY: -7, dur: 6.4 },
  { label: "Angular",      color: "#DD0031", tx: "#ffffff", x: 220,  y: 90,   floatX: -7, floatY: 8,  dur: 5.0 },
  { label: "Tailwind CSS", color: "#06B6D4", tx: "#ffffff", x: 80,   y: -90,  floatX: 5,  floatY: -10,dur: 5.8 },
  { label: "Docker",       color: "#2496ED", tx: "#ffffff", x: -80,  y: -80,  floatX: -6, floatY: 9,  dur: 6.7 },
  { label: "AI-102 ✦",    color: "#6c3ce1", tx: "#ffffff", x: 0,    y: -120, floatX: 4,  floatY: -8, dur: 4.5 },
];

function FloatingChip({
  label, color, tx, x, y, floatX, floatY, dur, delay,
}: {
  label: string; color: string; tx: string;
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
        opacity: { duration: 0.5, delay },
        scale:   { duration: 0.5, delay },
        x: { duration: dur, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" },
        y: { duration: dur * 1.2, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" },
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
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/10 whitespace-nowrap"
        style={{ backgroundColor: color, color: tx }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108,60,225,0.08), transparent)",
      }}
    >
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-violet-300/[0.08] blur-[100px]" />
      </div>

      {/* Inner content */}
      <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-10" style={{ zIndex: 20 }}>

        {/* Floating chips — anchored relative to this block */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          <div className="pointer-events-auto relative w-full h-full">
            {floatingChips.map((chip, i) => (
              <FloatingChip key={chip.label} {...chip} delay={0.8 + i * 0.08} />
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

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easing }}
          className="flex items-center justify-center gap-3 mb-10"
          style={{ position: "relative", zIndex: 20 }}
        >
          <span className="w-6 h-px bg-[var(--muted)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Full Stack Engineer · Vadodara, India
          </span>
          <span className="w-6 h-px bg-[var(--muted)]" />
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto" style={{ position: "relative", zIndex: 20 }}>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: easing }}
              className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold font-display tracking-[-0.04em] leading-[1.05] text-[var(--foreground)]"
            >
              Turning bold ideas
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: easing }}
              className="text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold font-display tracking-[-0.04em] leading-[1.05] text-[var(--foreground)]"
            >
              into digital
            </motion.div>
          </div>

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
                  className="inline-block text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold font-display tracking-[-0.04em] leading-[1.1] text-white bg-[var(--accent)] px-6 py-1 rounded-2xl"
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
