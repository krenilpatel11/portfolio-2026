"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMood } from "@/context/MoodContext";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import { floatingProjects } from "@/lib/floating-projects";
import { openCalModal } from "@/lib/cal-init";

// Hook to ensure component only renders after hydration
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

// Chips orbit around the headline block — VERY widely spread, far from center
// x/y = offset from center (px), floatX/floatY = drift amplitude, dur = seconds per cycle
const floatingChips = [
  { label: "React",        color: "#61DAFB", x: -720, y: -150, floatX: 8,  floatY: 12, dur: 9.0  },
  { label: "Next.js",      color: "#9ca3af", x:  700, y: -170, floatX: -9, floatY: 10, dur: 10.5 },
  { label: ".NET Core",    color: "#512BD4", x: -760, y:  150, floatX: 10, floatY: -11,dur: 8.5  },
  { label: "TypeScript",   color: "#3178C6", x:  740, y:  140, floatX: -8, floatY: 13, dur: 11.0 },
  { label: "Azure",        color: "#0089D6", x: -680, y:  300, floatX: 11, floatY: -9, dur: 9.8  },
  { label: "Angular",      color: "#DD0031", x:  660, y:  290, floatX: -9, floatY: 10, dur: 10.2 },
  { label: "Tailwind CSS", color: "#06B6D4", x:  260, y: -330, floatX: 7,  floatY: -12,dur: 8.8  },
  { label: "Docker",       color: "#2496ED", x: -280, y: -320, floatX: -8, floatY: 11, dur: 11.5 },
  { label: "AI-102 ✦",    color: "#6c3ce1", x: -680, y:  -50, floatX: 6,  floatY: -10,dur: 9.5  },
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
  const mounted = useMounted();
  const { currentMood } = useMood();
  const { currentVibe } = useVibeTheme();
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Use mood-specific rotating words
  const rotatingWords = mounted ? currentMood.variants.heroWords : ["Building"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Mood-reactive gradient background */}
      {mounted && (
        <div 
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${currentMood.accentHex}14, transparent)`,
          }}
        />
      )}
      
      {/* Pattern overlay - more visible */}
      <PatternBackground pattern="organic" opacity={0.06} />

      {/* Gradient blobs */}
      {mounted && (
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
      )}

      {/* Inner content */}
      <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-10 flex-1 flex flex-col justify-center pt-12 pb-12" style={{ zIndex: 20 }}>

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
          {mounted && (
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
          )}
          <span className="w-6 h-px bg-[var(--muted)]" />
        </motion.div>

        {/* Headline - mood-reactive title */}
        <div className="text-center max-w-4xl mx-auto mb-8" style={{ position: "relative", zIndex: 20 }}>
          {mounted && (
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
          )}

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
                  style={mounted ? { backgroundColor: currentMood.accentHex } : { backgroundColor: "#6c3ce1" }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Theme-specific content (persona-based) */}
        {mounted && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMood.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center max-w-2xl mx-auto mb-10"
              style={{ position: "relative", zIndex: 20 }}
            >
              <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                {currentMood.variants.aboutIntro}
              </p>
              <p className="text-base md:text-lg text-[var(--foreground)] mb-3 leading-relaxed font-medium">
                {currentMood.variants.description}
              </p>
              <p className="text-sm text-[var(--muted)] italic">
                {currentMood.variants.tagline}
              </p>
            </motion.div>
          </AnimatePresence>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: easing }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ position: "relative", zIndex: 20 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-80 transition-opacity"
          >
            See My Work ↓
          </Link>
          <button
            onClick={openCalModal}
            className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] font-semibold px-8 py-3.5 rounded-full text-sm hover:border-[var(--foreground)] transition-all"
          >
            Start a Project →
          </button>
        </motion.div>
      </div>

      {/* Mockup grid - single line overlapping with subtle float and varied skew */}
      <div className="relative overflow-visible pb-32 -mt-8 px-4 md:px-2" style={{ zIndex: 20, transformStyle: "preserve-3d" }}>
        <div className="relative max-w-[1200px] mx-auto" style={{ height: "200px", transformStyle: "preserve-3d" }}>
          {/* All 8 cards in one line with overlap, varied heights, and subtle float */}
          {floatingProjects.map((card, index) => {
            // Calculate horizontal position with overlap
            // Mobile: start at 2% with 10% increment for better spacing
            // Desktop: start at 9% with 10.5% increment
            const baseLeft = 2 + (index * 10); // Mobile-first positioning
            const baseLeftDesktop = 9 + (index * 10.5); // Desktop positioning
            
            // Random vertical positions for more natural look
            const verticalOffsets = ["top-[5px]", "top-[25px]", "top-[15px]", "top-[35px]", "top-[10px]", "top-[30px]", "top-[20px]", "top-[40px]"];
            const verticalOffset = verticalOffsets[index];
            
            // Varied sizes for visual interest - smaller on mobile
            const sizes = [
              "w-[120px] md:w-[225px]",
              "w-[115px] md:w-[215px]",
              "w-[118px] md:w-[220px]",
              "w-[112px] md:w-[210px]",
              "w-[120px] md:w-[222px]",
              "w-[116px] md:w-[218px]",
              "w-[114px] md:w-[216px]",
              "w-[122px] md:w-[224px]",
            ];
            const size = sizes[index];
            
            return (
              <motion.div
                key={card.src}
                initial={{ opacity: 0, y: 50, rotate: card.rotate - 3 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: card.rotate 
                }}
                transition={{ 
                  duration: 0.9, 
                  delay: card.delay, 
                  ease: easing 
                }}
                className={`absolute ${verticalOffset} ${size}`}
                style={{ 
                  left: `${baseLeft}%`,
                  zIndex: 8 - index, // First cards appear on top
                  willChange: "transform, opacity",
                  WebkitTransform: `rotate(${card.rotate}deg)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >
                {/* Subtle floating animation wrapper */}
                <motion.div
                  animate={{
                    y: [0, -5, 0], // Reduced from -12 to -5
                    rotate: [card.rotate, card.rotate + 0.5, card.rotate], // Reduced from +1 to +0.5
                  }}
                  transition={{
                    duration: 4 + (index * 0.3), // Slower, more subtle
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="w-full h-full"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer">
                    <img 
                      src={card.src}
                      alt={card.alt}
                      width={225}
                      height={170}
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ zIndex: 30 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[var(--muted)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
