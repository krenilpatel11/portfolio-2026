"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import {
  ViewVoiceMockup,
  SecurityGateMockup,
  TrainingMockup,
  SportMockup,
  LabelFlowMockup,
} from "@/components/ProjectMockups";

const rotatingWords = ["PRODUCTS", "EXPERIENCES", "SOLUTIONS"];

const mockupCards = [
  { Component: ViewVoiceMockup,    rotate: -2,    delay: 0.5 },
  { Component: SecurityGateMockup, rotate: 1,     delay: 0.6 },
  { Component: TrainingMockup,     rotate: -1,    delay: 0.7 },
  { Component: SportMockup,        rotate: 2,     delay: 0.8 },
  { Component: LabelFlowMockup,    rotate: -1.5,  delay: 0.9 },
];

const floatingChips = [
  { label: "React",         color: "#61DAFB", tx: "#0a0a0a", x: "8%",  y: "18%" },
  { label: "Next.js",       color: "#0a0a0a", tx: "#ffffff", x: "78%", y: "12%" },
  { label: ".NET Core",     color: "#512BD4", tx: "#ffffff", x: "14%", y: "62%" },
  { label: "TypeScript",    color: "#3178C6", tx: "#ffffff", x: "82%", y: "55%" },
  { label: "Azure",         color: "#0089D6", tx: "#ffffff", x: "6%",  y: "38%" },
  { label: "Angular",       color: "#DD0031", tx: "#ffffff", x: "74%", y: "32%" },
  { label: "Tailwind CSS",  color: "#06B6D4", tx: "#ffffff", x: "88%", y: "76%" },
  { label: "Docker",        color: "#2496ED", tx: "#ffffff", x: "4%",  y: "80%" },
  { label: "AI-102 ✦",     color: "#6c3ce1", tx: "#ffffff", x: "50%", y: "8%"  },
];

function DraggableChip({
  label, color, tx, x, y, delay,
}: {
  label: string; color: string; tx: string; x: string; y: string; delay: number;
}) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.08, zIndex: 50 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", left: x, top: y, zIndex: 10, touchAction: "none" }}
      className="cursor-grab active:cursor-grabbing select-none"
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
      {/* Violet gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-violet-300/[0.08] blur-[100px]" />
      </div>

      {/* Floating draggable chips — behind text */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        <div className="pointer-events-auto relative w-full h-full">
          {floatingChips.map((chip, i) => (
            <DraggableChip key={chip.label} {...chip} delay={0.6 + i * 0.07} />
          ))}
        </div>
      </div>

      {/* Inner content wrapper */}
      <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-10" style={{ zIndex: 20 }}>

        {/* Name — Krenil Patel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="flex items-center justify-center mb-3"
        >
          <span className="text-[1.05rem] md:text-[1.15rem] font-semibold tracking-wide text-[var(--foreground)]">
            Krenil Patel
          </span>
        </motion.div>

        {/* Label — FULL STACK ENGINEER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easing }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-6 h-px bg-[var(--muted)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Full Stack Engineer · Vadodara, India
          </span>
          <span className="w-6 h-px bg-[var(--muted)]" />
        </motion.div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto">
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

          {/* Rotating accent pill */}
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

      {/* Horizontal mockup strip */}
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
              <div className="hidden md:block w-[260px] h-[168px]">
                <Component />
              </div>
              <div className="md:hidden w-[180px] h-[116px]">
                <Component />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
