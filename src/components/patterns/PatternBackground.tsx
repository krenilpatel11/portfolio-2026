"use client";

import { useMood } from "@/context/MoodContext";

type PatternType = "dots" | "grid" | "diagonal" | "hexagon" | "waves" | "circuit" | "abstract" | "organic" | "geometric";

interface PatternBackgroundProps {
  pattern?: PatternType;
  opacity?: number;
  className?: string;
}

export function PatternBackground({
  pattern = "dots",
  opacity = 0.06,
  className = "",
}: PatternBackgroundProps) {
  const { currentMood } = useMood();

  const renderPattern = () => {
    const color = currentMood.accentHex;

    switch (pattern) {
      case "abstract":
        // Complex abstract pattern for Contact card
        return (
          <pattern id="abstract" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Flowing curves */}
            <path d="M0 100 Q 50 50, 100 100 T 200 100" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M0 150 Q 50 100, 100 150 T 200 150" stroke={color} strokeWidth="1.5" fill="none" opacity="0.3" />
            {/* Circles */}
            <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" />
            <circle cx="150" cy="150" r="40" stroke={color} strokeWidth="2" fill="none" opacity="0.2" />
            {/* Dots cluster */}
            <circle cx="180" cy="40" r="3" fill={color} opacity="0.4" />
            <circle cx="190" cy="50" r="2" fill={color} opacity="0.3" />
            <circle cx="170" cy="50" r="2.5" fill={color} opacity="0.35" />
            {/* Lines */}
            <line x1="20" y1="180" x2="80" y2="180" stroke={color} strokeWidth="1" opacity="0.3" />
            <line x1="120" y1="20" x2="180" y2="20" stroke={color} strokeWidth="1" opacity="0.25" />
          </pattern>
        );

      case "organic":
        // Organic flowing pattern
        return (
          <pattern id="organic" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
            <path 
              d="M0,75 Q37.5,25 75,75 T150,75" 
              stroke={color} 
              strokeWidth="2" 
              fill="none" 
              opacity="0.3"
            />
            <path 
              d="M0,100 Q37.5,50 75,100 T150,100" 
              stroke={color} 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.25"
            />
            <circle cx="37.5" cy="50" r="4" fill={color} opacity="0.3" />
            <circle cx="112.5" cy="50" r="3" fill={color} opacity="0.25" />
          </pattern>
        );

      case "geometric":
        // Geometric shapes pattern
        return (
          <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="30" height="30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="75" cy="75" r="15" stroke={color} strokeWidth="1.5" fill="none" opacity="0.25" />
            <polygon points="75,25 85,45 65,45" stroke={color} strokeWidth="1.5" fill="none" opacity="0.28" />
          </pattern>
        );

      case "dots":
        return (
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={color} />
          </pattern>
        );

      case "grid":
        return (
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        );

      case "diagonal":
        return (
          <pattern
            id="diagonal"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="12" stroke={color} strokeWidth="1" />
          </pattern>
        );

      case "hexagon":
        return (
          <pattern id="hexagon" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
              fill="none"
              stroke={color}
              strokeWidth="1"
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
              strokeWidth="1.5"
            />
          </pattern>
        );

      case "circuit":
        return (
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="3" fill={color} />
            <circle cx="75" cy="25" r="3" fill={color} />
            <circle cx="25" cy="75" r="3" fill={color} />
            <circle cx="75" cy="75" r="3" fill={color} />
            <path d="M25 25 L75 25 M25 75 L75 75 M25 25 L25 75 M75 25 L75 75" stroke={color} strokeWidth="1" fill="none" />
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
