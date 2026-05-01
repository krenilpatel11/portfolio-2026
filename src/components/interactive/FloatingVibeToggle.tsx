"use client";

import { motion } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { vibes } from "@/lib/vibes";

export function FloatingVibeToggle() {
  const { currentVibeId, cycleVibe } = useVibeTheme();
  const currentVibe = vibes[currentVibeId];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main button - shows current energy */}
      <motion.button
        onClick={cycleVibe}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-5 py-3 rounded-full shadow-xl transition-all backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, ${currentVibe.colors.primary}, ${currentVibe.colors.secondary})`,
          boxShadow: `0 8px 24px ${currentVibe.colors.primary}60`,
        }}
        title={`Current Energy: ${currentVibe.label} - Click to shift`}
      >
        <span className="text-2xl">{currentVibe.emoji}</span>
        <span className="text-sm font-bold text-white whitespace-nowrap hidden sm:inline">
          {currentVibe.label}
        </span>
      </motion.button>
    </div>
  );
}
