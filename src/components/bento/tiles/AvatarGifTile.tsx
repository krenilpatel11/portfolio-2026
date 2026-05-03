"use client";

import { motion } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { vibeOrder, vibes } from "@/lib/vibes";
import { useMood } from "@/context/MoodContext";

export function AvatarGifTile() {
  const { currentVibe, setVibe } = useVibeTheme();
  const { currentMood } = useMood();

  const preferReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-[var(--border)] overflow-hidden noise-overlay accent-reactive h-full"
      style={{
        background: `linear-gradient(135deg, ${currentVibe.colors.primary}15, ${currentVibe.colors.primary}05)`,
        transition: "background 0.7s ease",
      }}
    >
      {/* Terminal tag */}
      <div className="absolute top-3 left-3 text-xs font-mono text-[var(--muted)] opacity-60 z-10">
        $ whoami
      </div>

      {/* Vibe emoji buttons */}
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        {vibeOrder.map((vibeId) => {
          const vibe = vibes[vibeId];
          const isActive = vibeId === currentVibe.id;
          return (
            <button
              key={vibeId}
              onClick={() => setVibe(vibeId)}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-base transition-all backdrop-blur-sm ${
                isActive
                  ? "scale-110"
                  : "opacity-40 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                boxShadow: isActive ? `0 0 0 2px ${vibe.colors.primary}` : "none",
                backgroundColor: isActive ? `${vibe.colors.primary}30` : "rgba(0,0,0,0.3)",
              }}
              title={vibe.label}
            >
              {vibe.emoji}
            </button>
          );
        })}
      </div>

      {/* Full-tile avatar video/gif - no circle */}
      {currentMood.avatar && !preferReducedMotion ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={currentMood.avatar.poster}
          className="w-full h-full object-cover"
        >
          <source src={currentMood.avatar.video.webm} type="video/webm" />
          <source src={currentMood.avatar.video.mp4} type="video/mp4" />
        </video>
      ) : currentMood.avatar ? (
        <img
          src={currentMood.avatar.placeholder}
          alt={currentMood.label}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[var(--card-bg)]">
          <span className="text-6xl">{currentMood.emoji}</span>
        </div>
      )}
    </motion.div>
  );
}
