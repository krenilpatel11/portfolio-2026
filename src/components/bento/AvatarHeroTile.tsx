"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { vibeOrder, vibes } from "@/lib/vibes";
import { AvatarDisplay } from "@/components/interactive/AvatarDisplay";
import { SITE } from "@/lib/constants";

export function AvatarHeroTile() {
  const { currentVibe, currentTheme, setVibe } = useVibeTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-[var(--border)] p-4 overflow-hidden noise-overlay accent-reactive h-full flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${currentVibe.colors.primary}15, ${currentVibe.colors.primary}05)`,
        transition: "background 0.7s ease",
      }}
    >
      {/* Terminal tag */}
      <div className="absolute top-4 left-4 text-xs font-mono text-[var(--muted)] opacity-60">
        $ whoami
      </div>

      {/* Vibe emoji buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        {vibeOrder.map((vibeId) => {
          const vibe = vibes[vibeId];
          const isActive = vibeId === currentVibe.id;
          return (
            <button
              key={vibeId}
              onClick={() => setVibe(vibeId)}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-base transition-all ${
                isActive
                  ? "scale-110"
                  : "opacity-40 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                boxShadow: isActive ? `0 0 0 2px ${vibe.colors.primary}` : "none",
                backgroundColor: isActive ? `${vibe.colors.primary}20` : "transparent",
              }}
              title={vibe.label}
            >
              {vibe.emoji}
            </button>
          );
        })}
      </div>

      {/* Avatar - larger and centered */}
      <div className="flex-1 flex flex-col items-center justify-center mt-8 mb-4">
        <AvatarDisplay size="hero" animated showGlow />
      </div>

      {/* Name and tagline - compact */}
      <div className="text-center pb-2">
        <h3 className="text-2xl font-bold font-display mb-1">{SITE.name}</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTheme.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-[var(--muted)] mb-3"
          >
            {currentTheme.variants.tagline}
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
    </motion.div>
  );
}
