"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FlaskConical, 
  Terminal, 
  Palette, 
  Shield, 
  Feather, 
  Compass, 
  Bike, 
  Building2, 
  TrendingUp, 
  Sparkles 
} from "lucide-react";
import type { MoodId } from "@/lib/moods";

const iconMap = {
  FlaskConical,
  Terminal,
  Palette,
  Shield,
  Feather,
  Compass,
  Bike,
  Building2,
  TrendingUp,
  Sparkles,
};

interface MoodChipPopupProps {
  isVisible: boolean;
  moodLabel: string;
  moodIcon: keyof typeof iconMap;
  accentColor: string;
}

export function MoodChipPopup({ isVisible, moodLabel, moodIcon, accentColor }: MoodChipPopupProps) {
  const Icon = iconMap[moodIcon];

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
            className="flex items-center gap-3 px-5 py-3 rounded-full border-2 shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: `${accentColor}20`,
              borderColor: accentColor,
              boxShadow: `0 8px 32px ${accentColor}40, 0 0 0 1px ${accentColor}20`,
            }}
          >
            {/* Icon with glow */}
            <div
              className="p-2 rounded-full"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 4px 12px ${accentColor}60`,
              }}
            >
              <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>

            {/* Label */}
            <span
              className="text-lg font-bold tracking-tight"
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
