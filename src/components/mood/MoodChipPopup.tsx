"use client";
import { motion, AnimatePresence } from "framer-motion";

interface MoodChipPopupProps {
  isVisible: boolean;
  moodLabel: string;
  moodEmoji: string;
  accentColor: string;
}

export function MoodChipPopup({ isVisible, moodLabel, moodEmoji, accentColor }: MoodChipPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-24 right-6 z-[9999] pointer-events-none"
        >
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-full border shadow-xl backdrop-blur-md"
            style={{
              backgroundColor: `${accentColor}20`,
              borderColor: accentColor,
              boxShadow: `0 4px 16px ${accentColor}40, 0 0 0 1px ${accentColor}20`,
            }}
          >
            {/* Emoji */}
            <span className="text-2xl">{moodEmoji}</span>

            {/* Label */}
            <span
              className="text-sm font-bold tracking-tight"
              style={{ color: accentColor }}
            >
              {moodLabel}
            </span>
          </div>

          {/* Animated particles */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: accentColor }}
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                animate={{
                  x: `${50 + Math.cos((i * Math.PI * 2) / 6) * 100}%`,
                  y: `${50 + Math.sin((i * Math.PI * 2) / 6) * 100}%`,
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
