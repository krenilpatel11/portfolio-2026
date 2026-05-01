"use client";

import { motion } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import { moodOrder, type MoodId } from "@/lib/moods";
import { moods } from "@/lib/moods";

export function MoodSwitcher() {
  const { currentMoodId, setMood } = useMood();

  return (
    <div
      className="flex gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full"
      role="radiogroup"
      aria-label="Mood switcher"
    >
      {moodOrder.map((moodId) => {
        const mood = moods[moodId];
        const isActive = moodId === currentMoodId;

        return (
          <button
            key={moodId}
            onClick={() => setMood(moodId)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
            role="radio"
            aria-checked={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="activeMoodPill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: mood.accentHex }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-base">{mood.emoji}</span>
              <span className="hidden sm:inline">{mood.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
