"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { vibeOrder, vibes } from "@/lib/vibes";

export function FloatingVibeToggle() {
  const { currentVibeId, setVibe } = useVibeTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 flex flex-col gap-2"
          >
            {vibeOrder.map((vibeId) => {
              const vibe = vibes[vibeId];
              const isActive = vibeId === currentVibeId;
              
              return (
                <motion.button
                  key={vibeId}
                  onClick={() => setVibe(vibeId)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all ${
                    isActive
                      ? "bg-[var(--card-bg)] shadow-lg"
                      : "bg-[var(--card-bg)]/80 backdrop-blur-sm"
                  }`}
                  style={{
                    border: isActive ? `2px solid ${vibe.colors.primary}` : "2px solid transparent",
                    boxShadow: isActive ? `0 4px 20px ${vibe.colors.primary}40` : "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                  title={vibe.label}
                >
                  <span className="text-2xl">{vibe.emoji}</span>
                  <span className="text-sm font-semibold text-[var(--foreground)] whitespace-nowrap">
                    {vibe.label}
                  </span>
                </motion.button>
              );
            })}
            
            {/* Hint text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-[var(--muted)] text-center mt-2 px-4"
            >
              Change Krenil's Vibe
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button - shows current vibe */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all"
        style={{
          background: `linear-gradient(135deg, ${vibes[currentVibeId].colors.primary}, ${vibes[currentVibeId].colors.secondary})`,
          boxShadow: `0 8px 24px ${vibes[currentVibeId].colors.primary}60`,
        }}
        title={`Current Vibe: ${vibes[currentVibeId].label}`}
      >
        <span className="text-3xl">{vibes[currentVibeId].emoji}</span>
      </motion.button>
    </div>
  );
}
