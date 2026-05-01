"use client";

import { useMood } from "@/context/MoodContext";

type PatternType = "dots" | "grid" | "diagonal" | "hexagon" | "waves" | "circuit";

interface PatternBackgroundProps {
  pattern?: PatternType;
  opacity?: number;
  className?: string;
}

export function PatternBackground({
  pattern = "dots",
  opacity = 0.03,
  className = "",
}: PatternBackgroundProps) {
  const { currentMood } = useMood();

  const renderPattern = () => {
    const color = currentMood.accentHex;

    switch (pattern) {
      case "dots":
        return (
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={color} />
          </pattern>
        );

      case "grid":
        return (
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "diagonal":
        return (
          <pattern
            id="diagonal"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth="0.5" />
          </pattern>
        );

      case "hexagon":
        return (
          <pattern id="hexagon" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
            <path
              d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "waves":
        return (
          <pattern id="waves" x="0" y="0" width="50" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 Q 12.5 0, 25 10 T 50 10"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "circuit":
        return (
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" fill={color} />
            <circle cx="75" cy="25" r="2" fill={color} />
            <circle cx="25" cy="75" r="2" fill={color} />
            <circle cx="75" cy="75" r="2" fill={color} />
            <path d="M25 25 L75 25 M25 75 L75 75 M25 25 L25 75 M75 25 L75 75" stroke={color} strokeWidth="0.3" fill="none" />
          </pattern>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${className}`}
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        <defs>{renderPattern()}</defs>
        <rect width="100%" height="100%" fill={`url(#${pattern})`} />
      </svg>
    </div>
  );
}
