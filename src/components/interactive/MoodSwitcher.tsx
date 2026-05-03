"use client";

import { motion } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { themeOrder } from "@/lib/themes";
import { themes } from "@/lib/themes";

export function MoodSwitcher() {
  const { currentThemeId, setTheme } = useVibeTheme();

  return (
    <div
      className="flex gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full"
      role="radiogroup"
      aria-label="Theme switcher"
    >
      {themeOrder.map((themeId) => {
        const theme = themes[themeId];
        const isActive = themeId === currentThemeId;

        return (
          <button
            key={themeId}
            onClick={() => setTheme(themeId)}
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
                layoutId="activeThemePill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-base">{theme.emoji}</span>
              <span className="hidden sm:inline">{theme.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
