"use client";

import { useMood } from "@/context/MoodContext";
import { PatternBackground } from "./PatternBackground";
import { ReactNode } from "react";

type PatternType = "dots" | "grid" | "diagonal" | "hexagon" | "waves" | "circuit";

interface MoodBackgroundProps {
  children: ReactNode;
  pattern?: PatternType;
  patternOpacity?: number;
  gradientOpacity?: number;
  useAccentBg?: boolean;
  className?: string;
}

export function MoodBackground({
  children,
  pattern = "dots",
  patternOpacity = 0.03,
  gradientOpacity = 0.08,
  useAccentBg = false,
  className = "",
}: MoodBackgroundProps) {
  const { currentMood } = useMood();

  return (
    <div className={`relative ${className}`}>
      {/* Base background - either accent color or default */}
      {useAccentBg ? (
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{ backgroundColor: currentMood.accentHex }}
        />
      ) : (
        <div className="absolute inset-0 bg-[var(--background)]" />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${currentMood.accentHex}, transparent)`,
          opacity: gradientOpacity,
        }}
      />

      {/* Pattern overlay */}
      <PatternBackground pattern={pattern} opacity={patternOpacity} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
