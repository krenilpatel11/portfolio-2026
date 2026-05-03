"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { SITE } from "@/lib/constants";

export function NameAvailabilityTile() {
  const { currentTheme } = useVibeTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="relative rounded-2xl border border-[var(--border)] p-4 overflow-hidden noise-overlay h-full flex flex-col justify-center"
      style={{
        background: "var(--card-bg)",
      }}
    >
      {/* Name */}
      <h3 className="text-xl font-bold font-display mb-2 text-center">{SITE.name}</h3>
      
      {/* Tagline */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentTheme.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-[var(--muted)] mb-3 text-center"
        >
          {currentTheme.variants.tagline}
        </motion.p>
      </AnimatePresence>

      {/* Availability - centered */}
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
    </motion.div>
  );
}
