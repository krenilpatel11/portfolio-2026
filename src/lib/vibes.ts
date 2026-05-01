// Krenil's 5 Vibes - represents his personality/activities
// Auto-changes every 5 minutes

export type VibeId = "coding" | "designing" | "gyming" | "riding" | "swimming";

export interface Vibe {
  id: VibeId;
  label: string;
  emoji: string;
  colors: {
    primary: string;   // Main accent color
    secondary: string; // Secondary accent color
  };
  videos: {
    video1: string; // First WebM video
    video2: string; // Second WebM video
  };
  poster: string; // Poster image for video
}

export const vibes: Record<VibeId, Vibe> = {
  coding: {
    id: "coding",
    label: "Coding",
    emoji: "💻",
    colors: {
      primary: "#10B981",   // Emerald
      secondary: "#06B6D4", // Cyan
    },
    videos: {
      video1: "/avatars/gifs/coder1.webm",
      video2: "/avatars/gifs/coder2.webm",
    },
    poster: "/avatars/posters/magnific_modern-2d-cartoon-webtoon_2903716406.webp",
  },
  designing: {
    id: "designing",
    label: "Designing",
    emoji: "🎨",
    colors: {
      primary: "#FF6B6B",   // Coral
      secondary: "#EC4899", // Pink
    },
    videos: {
      video1: "/avatars/gifs/designer1.webm",
      video2: "/avatars/gifs/designer2.webm",
    },
    poster: "/avatars/posters/magnific_modern-2d-cartoon-webtoon_2903722568.webp",
  },
  gyming: {
    id: "gyming",
    label: "Gyming",
    emoji: "💪",
    colors: {
      primary: "#F59E0B",   // Amber
      secondary: "#F97316", // Orange
    },
    videos: {
      video1: "/avatars/gifs/gymer1.webm",
      video2: "/avatars/gifs/gymer2.webm",
    },
    poster: "/avatars/posters/magnific_modern-2d-cartoon-webtoon_2903885679.webp",
  },
  riding: {
    id: "riding",
    label: "Riding",
    emoji: "🏍️",
    colors: {
      primary: "#EF4444",   // Red
      secondary: "#DC2626", // Dark Red
    },
    videos: {
      video1: "/avatars/gifs/rider1.webm",
      video2: "/avatars/gifs/rider2.webm",
    },
    poster: "/avatars/posters/magnific_modern-2d-cartoon-webtoon_2903734519.webp",
  },
  swimming: {
    id: "swimming",
    label: "Swimming",
    emoji: "🏊",
    colors: {
      primary: "#3B82F6",   // Blue
      secondary: "#0EA5E9", // Sky Blue
    },
    videos: {
      video1: "/avatars/gifs/swimmer1.webm",
      video2: "/avatars/gifs/swimmer2.webm",
    },
    poster: "/avatars/posters/magnific_modern-2d-cartoon-webtoon_2903887646.webp",
  },
};

export const vibeOrder: VibeId[] = ["coding", "designing", "gyming", "riding", "swimming"];
