"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiDotnet,
  SiFigma,
} from "react-icons/si";
import { FiCloud } from "react-icons/fi";
import type { IconType } from "react-icons";

const rotatingWords = ["PRODUCTS", "EXPERIENCES", "SOLUTIONS"];

interface FloatingChip {
  icon?: IconType;
  iconEmoji?: string;
  label: string;
  color: string;
  x: number;
  y: number;
  rotate: number;
  delay: number;
}

const floatingChips: FloatingChip[] = [
  { icon: SiReact,        label: "React 19",       color: "bg-cyan-50 border-cyan-200 text-cyan-700",       x: 54, y: 6,  rotate: -3, delay: 1.2  },
  { icon: SiNextdotjs,    label: "Next.js 15",      color: "bg-zinc-900 border-zinc-700 text-white",         x: 72, y: 14, rotate: 4,  delay: 1.35 },
  { icon: SiTypescript,   label: "TypeScript",      color: "bg-blue-50 border-blue-200 text-blue-700",       x: 82, y: 30, rotate: -5, delay: 1.5  },
  { icon: FiCloud,       label: "Azure AI-102 ✓", color: "bg-orange-50 border-orange-200 text-orange-700", x: 58, y: 42, rotate: 6,  delay: 1.65 },
  { icon: SiDotnet,       label: ".NET Core",       color: "bg-violet-50 border-violet-200 text-violet-700", x: 76, y: 54, rotate: -4, delay: 1.8  },
  { iconEmoji: "🧠",      label: "AI Builder",      color: "bg-emerald-50 border-emerald-200 text-emerald-700", x: 55, y: 65, rotate: 3,  delay: 1.95 },
  { icon: SiFigma,        label: "Figma",           color: "bg-pink-50 border-pink-200 text-pink-700",       x: 82, y: 74, rotate: -6, delay: 2.1  },
  {                       label: "LabelFlow.store ↗", color: "bg-amber-50 border-amber-200 text-amber-700",   x: 62, y: 86, rotate: 5,  delay: 2.25 },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108,60,225,0.08), transparent)",
      }}
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-violet-300/8 blur-[100px]" />
      </div>

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating chips — desktop only */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 z-10">
        {floatingChips.map((chip, i) => {
          const Icon = chip.icon;
          return (
            <motion.div
              key={chip.label}
              className={`absolute inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold shadow-sm border ${chip.color}`}
              style={{ left: `${chip.x}%`, top: `${chip.y}%` }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 0.92,
                scale: 1,
                rotate: chip.rotate,
                x: mousePos.x * -20,
                y: mousePos.y * -14,
              }}
              transition={{
                opacity: { delay: chip.delay, duration: 0.6 },
                scale: { delay: chip.delay, duration: 0.6 },
                x: { type: "spring", stiffness: 50, damping: 18 },
                y: { type: "spring", stiffness: 50, damping: 18 },
              }}
            >
              {Icon && <Icon size={14} />}
              {chip.iconEmoji && <span className="text-[13px] leading-none">{chip.iconEmoji}</span>}
              {chip.label}
            </motion.div>
          );
        })}
      </div>

      {/* Inner content wrapper */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[var(--muted)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Full Stack Engineer · Vadodara, India
          </span>
        </motion.div>

        {/* Name display */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: easing }}
            className="text-[clamp(3rem,7vw,7rem)] font-black tracking-[-0.04em] text-[var(--foreground)] leading-[1]"
          >
            KRENIL PATEL
          </motion.h1>
        </div>

        {/* Main headline — 3 lines */}
        <div className="max-w-5xl mt-6">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: easing }}
              className="text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]"
            >
              Turning bold ideas
            </motion.div>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.32, ease: easing }}
              className="text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]"
            >
              into digital
            </motion.div>
          </div>

          {/* Line 3 — rotating accent word */}
          <div className="overflow-hidden mt-1 pb-2">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.44, ease: easing }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className="inline-block text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white bg-[var(--accent)] px-5 py-1 rounded-2xl"
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
          transition={{ duration: 0.7, delay: 0.9, ease: easing }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2.5 bg-[var(--foreground)] text-[var(--background)] font-semibold px-7 py-4 rounded-full text-sm hover:opacity-80 transition-opacity"
          >
            See My Work
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2.5 border border-[var(--border)] text-[var(--foreground)] font-semibold px-7 py-4 rounded-full text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Start a Project
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed hidden md:block">
            I build scalable apps, AI-powered tools,<br />and beautiful interfaces.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-[var(--muted)]"
        />
        <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">Scroll</span>
      </motion.div>
    </section>
  );
}
