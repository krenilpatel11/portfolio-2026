"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BentoTile } from "../BentoTile";
import { useMood } from "@/context/MoodContext";
import { useVibeTheme } from "@/context/VibeThemeContext";

export function ExperienceTile({ delay = 0 }: { delay?: number }) {
  const { currentMood } = useMood();
  const { currentVibe } = useVibeTheme();
  
  // Generate mood-reactive color segments based on accent color
  const baseColor = currentVibe.colors.primary;
  
  // Create color variants by adjusting opacity/brightness
  const segments = [
    { label: "Enterprise", width: "35%", opacity: 1 },
    { label: "Full Stack", width: "30%", opacity: 0.8 },
    { label: "AI/Cloud", width: "20%", opacity: 0.6 },
    { label: "Design", width: "10%", opacity: 0.4 },
    { label: "Leadership", width: "5%", opacity: 0.25 },
  ];

  return (
    <BentoTile delay={delay}>
      <div className="text-4xl md:text-5xl font-bold font-display mb-2 accent-reactive" style={{ color: "var(--accent-color)" }}>
        3+
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
      
      {/* Progress bar - mood reactive colors */}
      <div className="space-y-2">
        <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          {segments.map((seg) => (
            <motion.div
              key={seg.label}
              className="transition-all duration-700"
              style={{ 
                width: seg.width, 
                backgroundColor: baseColor,
                opacity: seg.opacity,
              }}
              initial={{ width: "0%" }}
              animate={{ width: seg.width }}
              transition={{ duration: 0.8, delay: delay + 0.2 }}
              title={seg.label}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full transition-colors duration-700"
                style={{ 
                  backgroundColor: baseColor,
                  opacity: seg.opacity,
                }}
              />
              <span className="text-[var(--muted)]">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </BentoTile>
  );
}
