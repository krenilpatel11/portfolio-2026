"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { vibes } from "@/lib/vibes";

const tooltipMessages = [
  "Switch Krenil's energy",
  "Change the vibe",
  "Shift the mood",
  "Try a different energy",
  "See another side",
  "Mix up the energy",
  "Cycle through moods",
  "Feel a new vibe",
  "Toggle the energy",
  "Switch it up",
];

export function FloatingVibeToggle() {
  const { currentVibeId, cycleVibe } = useVibeTheme();
  const currentVibe = vibes[currentVibeId];
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");

  // Pick a random tooltip message when component mounts or vibe changes
  useEffect(() => {
    setTooltipMessage(tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)]);
  }, [currentVibeId]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main button - shows current energy */}
      <div className="relative">
        <motion.button
          onClick={cycleVibe}
          onMouseEnter={() => {
            setShowTooltip(true);
            // Pick a new random message on each hover
            setTooltipMessage(tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)]);
          }}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full shadow-xl transition-all backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${currentVibe.colors.primary}, ${currentVibe.colors.secondary})`,
            boxShadow: `0 8px 24px ${currentVibe.colors.primary}60`,
          }}
          title={tooltipMessage}
        >
          <span className="text-2xl">{currentVibe.emoji}</span>
          <span className="text-sm font-bold text-white whitespace-nowrap hidden sm:inline">
            {currentVibe.label}
          </span>
        </motion.button>

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg shadow-xl text-xs text-[var(--muted)] whitespace-nowrap z-50"
          >
            {tooltipMessage}
          </motion.div>
        )}
      </div>
    </div>
  );
}
