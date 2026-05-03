"use client";

import { useMood } from "@/context/MoodContext";
import { useTheme } from "next-themes";

type PatternType = "dots" | "grid" | "diagonal" | "hexagon" | "waves" | "circuit" | "abstract" | "organic" | "geometric";

interface PatternBackgroundProps {
  pattern?: PatternType;
  opacity?: number;
  className?: string;
}

export function PatternBackground({
  pattern = "dots",
  opacity,
  className = "",
}: PatternBackgroundProps) {
  const { currentMood } = useMood();
  const { theme } = useTheme();

  // Use CSS variable opacity if not specified, with higher values for light theme
  const finalOpacity = opacity !== undefined ? opacity : (theme === "light" ? 0.15 : 0.06);

  const renderPattern = () => {
    const color = currentMood.accentHex;

    switch (pattern) {
      case "abstract":
        // Complex abstract pattern for Contact card - highly visible
        return (
          <pattern id="abstract" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            {/* Large flowing curves */}
            <path d="M0 150 Q 75 50, 150 150 T 300 150" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
            <path d="M0 200 Q 75 100, 150 200 T 300 200" stroke={color} strokeWidth="2.5" fill="none" opacity="0.4" />
            <path d="M0 100 Q 75 0, 150 100 T 300 100" stroke={color} strokeWidth="2" fill="none" opacity="0.35" />
            
            {/* Large decorative circles */}
            <circle cx="75" cy="75" r="50" stroke={color} strokeWidth="2.5" fill="none" opacity="0.35" />
            <circle cx="225" cy="225" r="60" stroke={color} strokeWidth="3" fill="none" opacity="0.3" />
            <circle cx="225" cy="75" r="40" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
            <circle cx="75" cy="225" r="45" stroke={color} strokeWidth="2.5" fill="none" opacity="0.28" />
            
            {/* Small accent circles */}
            <circle cx="150" cy="150" r="8" fill={color} opacity="0.4" />
            <circle cx="50" cy="250" r="6" fill={color} opacity="0.35" />
            <circle cx="250" cy="50" r="7" fill={color} opacity="0.38" />
            <circle cx="280" cy="120" r="5" fill={color} opacity="0.32" />
            <circle cx="20" cy="180" r="6" fill={color} opacity="0.36" />
            
            {/* Diagonal lines */}
            <line x1="0" y1="50" x2="100" y2="50" stroke={color} strokeWidth="2" opacity="0.3" />
            <line x1="200" y1="250" x2="300" y2="250" stroke={color} strokeWidth="2" opacity="0.28" />
            <line x1="150" y1="0" x2="150" y2="80" stroke={color} strokeWidth="1.5" opacity="0.25" />
            <line x1="50" y1="150" x2="50" y2="230" stroke={color} strokeWidth="1.5" opacity="0.27" />
            
            {/* Dots cluster for texture */}
            <circle cx="270" cy="60" r="3" fill={color} opacity="0.4" />
            <circle cx="280" cy="70" r="2.5" fill={color} opacity="0.35" />
            <circle cx="260" cy="70" r="3" fill={color} opacity="0.38" />
            <circle cx="270" cy="80" r="2" fill={color} opacity="0.33" />
            
            {/* Additional geometric accent */}
            <rect x="180" y="180" width="40" height="40" stroke={color} strokeWidth="2" fill="none" opacity="0.25" transform="rotate(15 200 200)" />
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
        // Enhanced geometric shapes pattern - more visible
        return (
          <pattern id="geometric" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Larger shapes for better visibility */}
            <rect x="8" y="8" width="25" height="25" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="2" fill="none" opacity="0.45" />
            <polygon points="60,18 72,38 48,38" stroke={color} strokeWidth="2" fill="none" opacity="0.48" />
            
            {/* Additional accent shapes */}
            <line x1="8" y1="60" x2="33" y2="60" stroke={color} strokeWidth="1.5" opacity="0.4" />
            <line x1="60" y1="8" x2="60" y2="33" stroke={color} strokeWidth="1.5" opacity="0.4" />
            
            {/* Small decorative dots */}
            <circle cx="40" cy="40" r="3" fill={color} opacity="0.5" />
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
