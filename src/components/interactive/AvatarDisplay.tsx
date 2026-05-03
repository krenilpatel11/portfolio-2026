"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "hero";

const sizeMap: Record<AvatarSize, string> = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-48 h-48",
  xl: "w-64 h-64",
  hero: "w-[280px] h-[280px] md:w-[360px] md:h-[360px]",
};

interface AvatarDisplayProps {
  size?: AvatarSize;
  animated?: boolean;
  showGlow?: boolean;
  className?: string;
}

export function AvatarDisplay({
  size = "md",
  animated = false,
  showGlow = false,
  className = "",
}: AvatarDisplayProps) {
  const { currentMood } = useMood();

  const preferReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const shouldFloat = animated && !preferReducedMotion;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentMood.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: shouldFloat ? [0, -6, 0] : 0,
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
          y: shouldFloat
            ? {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined,
        }}
        className={`relative ${sizeMap[size]} ${className}`}
        style={{
          filter: showGlow
            ? `drop-shadow(0 0 40px ${currentMood.accentHex}40)`
            : undefined,
        }}
      >
        {/* Avatar display - video/image or emoji fallback */}
        {currentMood.avatar && !preferReducedMotion ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={currentMood.avatar.poster}
            className="w-full h-full object-cover rounded-full"
          >
            <source src={currentMood.avatar.video.webm} type="video/webm" />
            <source src={currentMood.avatar.video.mp4} type="video/mp4" />
            {/* Fallback image */}
            <Image
              src={currentMood.avatar.placeholder}
              alt={currentMood.label}
              fill
              className="object-cover rounded-full"
            />
          </video>
        ) : currentMood.avatar ? (
          <Image
            src={currentMood.avatar.placeholder}
            alt={currentMood.label}
            fill
            className="object-cover rounded-full"
          />
        ) : (
          /* Emoji fallback for moods without avatar assets */
          <div className="w-full h-full flex items-center justify-center rounded-full bg-[var(--card-bg)] border-2 border-[var(--border)]">
            <span className="text-[calc(var(--avatar-size)*0.5)] leading-none">
              {currentMood.emoji}
            </span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
