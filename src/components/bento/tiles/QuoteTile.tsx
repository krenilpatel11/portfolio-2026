"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import { BentoTile } from "../BentoTile";

export function QuoteTile({ delay = 0 }: { delay?: number }) {
  const { currentMood } = useMood();
  
  return (
    <BentoTile delay={delay} className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="relative">
        <div className="text-6xl md:text-7xl font-serif accent-reactive mb-4 leading-none" style={{ color: "var(--accent-color)", opacity: 0.2 }}>
        </div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={currentMood.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-base md:text-lg font-medium leading-relaxed mb-4"
          >
            {currentMood.variants.whoAmI.quote}
          </motion.blockquote>
        </AnimatePresence>
        <footer className="text-sm text-[var(--muted)]">
          — My guiding principle
        </footer>
      </div>
    </BentoTile>
  );
}
