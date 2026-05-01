"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const rotatingWords = ["ENGINEERING", "DESIGN", "AI SOLUTIONS"];

const floatingItems = [
  { label: "ViewVoice AI", color: "bg-violet-100 border-violet-200 text-violet-800", x: 58, y: 8, rotate: 4 },
  { label: "SecurityGate", color: "bg-blue-100 border-blue-200 text-blue-800", x: 68, y: 34, rotate: -4 },
  { label: "Azure AI-102 ✓", color: "bg-orange-100 border-orange-200 text-orange-800", x: 54, y: 60, rotate: 3 },
  { label: "LabelFlow.store ↗", color: "bg-emerald-100 border-emerald-200 text-emerald-800", x: 70, y: 80, rotate: -5 },
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-20">

      {/* Subtle background grid — full viewport width */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating project cards — desktop only */}
      <div className="hidden lg:block pointer-events-none">
        {floatingItems.map((item, i) => (
          <motion.div
            key={item.label}
            className={`absolute ${item.color} rounded-xl px-3.5 py-2 text-xs font-semibold shadow-sm border`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 0.9,
              scale: 1,
              rotate: item.rotate,
              x: mousePos.x * -20,
              y: mousePos.y * -14,
            }}
            transition={{
              opacity: { delay: 1.2 + i * 0.15, duration: 0.6 },
              scale: { delay: 1.2 + i * 0.15, duration: 0.6 },
              x: { type: "spring", stiffness: 50, damping: 18 },
              y: { type: "spring", stiffness: 50, damping: 18 },
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>

      {/* Inner content wrapper */}
      <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-10">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easing }}
        className="flex items-center gap-3 mb-10"
      >
        <span className="w-8 h-px bg-[var(--muted)]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Full Stack Engineer · Vadodara, India
        </span>
      </motion.div>

      {/* Main headline — 3 lines, last line has the rotating word */}
      <div className="max-w-5xl">
        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: easing }}
            className="text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)]"
          >
            Elevating your ideas
          </motion.div>
        </div>

        {/* Line 2 */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: easing }}
            className="text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)]"
          >
            with exceptional
          </motion.div>
        </div>

        {/* Line 3 — rotating accent word */}
        <div className="overflow-hidden mt-1 pb-2">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.36, ease: easing }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: easing }}
                className="inline-block text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white bg-[var(--accent)] px-5 py-1 rounded-2xl"
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
        transition={{ duration: 0.7, delay: 0.8, ease: easing }}
        className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5"
      >
        <a
          href="#projects"
          onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
          className="group inline-flex items-center gap-2.5 bg-[var(--foreground)] text-[var(--background)] font-semibold px-7 py-4 rounded-full text-sm hover:opacity-80 transition-opacity"
        >
          View My Work
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="group inline-flex items-center gap-2.5 border border-[var(--border)] text-[var(--foreground)] font-semibold px-7 py-4 rounded-full text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
        >
          Book a Call
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>

        <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed hidden md:block">
          I build scalable apps, AI-powered tools,<br/>and beautiful interfaces.
        </p>
      </motion.div>

      </div>{/* end inner content wrapper */}

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
