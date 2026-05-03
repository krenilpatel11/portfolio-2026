"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { moods, moodOrder, type MoodId } from "@/lib/moods";
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

interface MoodSelectorProps {
  currentMoodId: MoodId;
  onMoodChange: (moodId: MoodId) => void;
}

export function MoodSelector({ currentMoodId, onMoodChange }: MoodSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentMood = moods[currentMoodId];
  const CurrentIcon = iconMap[currentMood.icon as keyof typeof iconMap];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMoodSelect = (moodId: MoodId) => {
    onMoodChange(moodId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)] transition-all duration-300 group"
        style={{
          boxShadow: isOpen ? `0 0 0 2px ${currentMood.accentHex}20` : "none",
        }}
      >
        {/* Icon */}
        <div
          className="p-1.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: `${currentMood.accentHex}20`,
            color: currentMood.accentHex,
          }}
        >
          <CurrentIcon className="w-4 h-4" strokeWidth={2.5} />
        </div>

        {/* Label */}
        <span className="text-sm font-semibold text-[var(--foreground)] hidden sm:inline">
          {currentMood.label}
        </span>

        {/* Chevron */}
        <ChevronDown
          className={`w-4 h-4 text-[var(--muted)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-64 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-2xl backdrop-blur-xl z-[100] overflow-hidden"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--border)",
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Choose Your Vibe
              </p>
            </div>

            {/* Mood Options */}
            <div className="max-h-[400px] overflow-y-auto p-2">
              {moodOrder.map((moodId) => {
                const mood = moods[moodId];
                const Icon = iconMap[mood.icon as keyof typeof iconMap];
                const isActive = moodId === currentMoodId;

                return (
                  <button
                    key={moodId}
                    onClick={() => handleMoodSelect(moodId)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--background)] transition-all duration-200 group"
                    style={{
                      backgroundColor: isActive ? `${mood.accentHex}15` : "transparent",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="p-2 rounded-lg transition-all duration-300 shrink-0"
                      style={{
                        backgroundColor: isActive ? mood.accentHex : `${mood.accentHex}20`,
                        color: isActive ? "white" : mood.accentHex,
                        boxShadow: isActive ? `0 4px 12px ${mood.accentHex}40` : "none",
                      }}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                    </div>

                    {/* Label + Emoji */}
                    <div className="flex items-center gap-2 flex-1 text-left">
                      <span className="text-sm font-semibold text-[var(--foreground)]">
                        {mood.label}
                      </span>
                      <span className="text-base">{mood.emoji}</span>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-mood"
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: mood.accentHex }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
