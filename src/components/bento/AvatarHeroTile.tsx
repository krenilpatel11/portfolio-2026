"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import { moodOrder, moods } from "@/lib/moods";
import { AvatarDisplay } from "@/components/interactive/AvatarDisplay";
import { SITE } from "@/lib/constants";

export function AvatarHeroTile() {
  const { currentMood, setMood } = useMood();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-[var(--border)] p-8 overflow-hidden noise-overlay accent-reactive"
      style={{
        background: `linear-gradient(135deg, ${currentMood.accentHex}15, ${currentMood.accentHex}05)`,
        transition: "background 0.7s ease",
      }}
    >
      {/* Terminal tag */}
      <div className="absolute top-6 left-6 text-xs font-mono text-[var(--muted)] opacity-60">
        $ whoami
      </div>

      {/* Mood emoji buttons */}
      <div className="absolute top-6 right-6 flex gap-2">
        {moodOrder.map((moodId) => {
          const mood = moods[moodId];
          const isActive = moodId === currentMood.id;
          return (
            <button
              key={moodId}
              onClick={() => setMood(moodId)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all ${
                isActive
                  ? "scale-110"
                  : "opacity-40 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                boxShadow: isActive ? `0 0 0 2px ${mood.accentHex}` : "none",
                backgroundColor: isActive ? `${mood.accentHex}20` : "transparent",
              }}
              title={mood.label}
            >
              {mood.emoji}
            </button>
          );
        })}
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center justify-center mt-12 mb-8">
        <AvatarDisplay size="xl" animated showGlow />
      </div>

      {/* Name and tagline */}
      <div className="text-center">
        <h3 className="text-2xl font-bold font-display mb-2">{SITE.name}</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMood.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-[var(--muted)] mb-4"
          >
            {currentMood.variants.tagline}
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
