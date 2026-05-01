"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BentoTile } from "../BentoTile";
import { useMood } from "@/context/MoodContext";

export function ExperienceTile({ delay = 0 }: { delay?: number }) {
  const { currentMood } = useMood();
  
  const segments = [
    { label: "Enterprise", width: "35%", color: "#6C3CE1" },
    { label: "Full Stack", width: "30%", color: "#8B5CF6" },
    { label: "AI/Cloud", width: "20%", color: "#A78BFA" },
    { label: "Design", width: "10%", color: "#C4B5FD" },
    { label: "Leadership", width: "5%", color: "#DDD6FE" },
  ];

  return (
    <BentoTile delay={delay}>
      <div className="text-4xl md:text-5xl font-bold font-display mb-2 accent-reactive" style={{ color: "var(--accent-color)" }}>
        2.5+
      </div>
      <h3 className="text-lg font-semibold mb-1">Years Experience</h3>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentMood.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-[var(--muted)] mb-4"
        >
          {currentMood.variants.experienceSubtitle}
        </motion.p>
      </AnimatePresence>
      
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="transition-all duration-500"
              style={{ width: seg.width, backgroundColor: seg.color }}
              title={seg.label}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-[var(--muted)]">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </BentoTile>
  );
}
