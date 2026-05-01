export type MoodId = "developer" | "designer" | "gymer" | "swimmer" | "rider";

export interface Mood {
  id: MoodId;
  label: string;
  emoji: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentHex: string;
  accentGlow: string;
  bgGradient: string;
  darkBgGradient: string;
  icon: string;
  avatar: {
    static: string;
    placeholder: string;
    video: { webm: string; mp4: string };
    gif: string;
    poster: string;
  };
}

export const moods: Record<MoodId, Mood> = {
  developer: {
    id: "developer",
    label: "Developer",
    emoji: "👨‍💻",
    tagline: "Building the future, one commit at a time",
    description:
      "Full Stack Engineer crafting scalable web applications with React, Angular, .NET Core, and Azure. Clean architecture. 90%+ test coverage.",
    accentColor: "text-violet-500",
    accentHex: "#6C3CE1",
    accentGlow: "shadow-violet-500/30",
    bgGradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    darkBgGradient: "from-violet-950 via-purple-950 to-indigo-950",
    icon: "Code2",
    avatar: {
      static: "/avatars/static/developer.png",
      placeholder: "/avatars/static/developer-placeholder.svg",
      video: {
        webm: "/avatars/video/developer.webm",
        mp4: "/avatars/video/developer.mp4",
      },
      gif: "/avatars/gif/developer.gif",
      poster: "/avatars/posters/developer-poster.png",
    },
  },
  designer: {
    id: "designer",
    label: "Designer",
    emoji: "🎨",
    tagline: "Pixels with purpose, interfaces with soul",
    description:
      "UI/UX Designer and creative thinker. From Figma wireframes to pixel-perfect implementations. 50+ branding assets created.",
    accentColor: "text-rose-400",
    accentHex: "#FF6B6B",
    accentGlow: "shadow-rose-400/30",
    bgGradient: "from-rose-400/10 via-orange-300/5 to-transparent",
    darkBgGradient: "from-rose-950 via-pink-950 to-orange-950",
    icon: "Palette",
    avatar: {
      static: "/avatars/static/designer.png",
      placeholder: "/avatars/static/designer-placeholder.svg",
      video: {
        webm: "/avatars/video/designer.webm",
        mp4: "/avatars/video/designer.mp4",
      },
      gif: "/avatars/gif/designer.gif",
      poster: "/avatars/posters/designer-poster.png",
    },
  },
  gymer: {
    id: "gymer",
    label: "Fitness",
    emoji: "🏋️",
    tagline: "Discipline in the gym, discipline in the code",
    description:
      "Consistency builds muscle and software. Mindful reps, controlled form, steady progress.",
    accentColor: "text-purple-500",
    accentHex: "#9333EA",
    accentGlow: "shadow-purple-500/30",
    bgGradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    darkBgGradient: "from-purple-950 via-fuchsia-950 to-violet-950",
    icon: "Dumbbell",
    avatar: {
      static: "/avatars/static/gymer.png",
      placeholder: "/avatars/static/gymer-placeholder.svg",
      video: { webm: "/avatars/video/gymer.webm", mp4: "/avatars/video/gymer.mp4" },
      gif: "/avatars/gif/gymer.gif",
      poster: "/avatars/posters/gymer-poster.png",
    },
  },
  swimmer: {
    id: "swimmer",
    label: "Swimmer",
    emoji: "🏊",
    tagline: "Finding clarity in every stroke",
    description:
      "The pool is where the mind resets. Long calm laps, rhythmic breathing, quiet focus.",
    accentColor: "text-cyan-500",
    accentHex: "#06B6D4",
    accentGlow: "shadow-cyan-500/30",
    bgGradient: "from-cyan-500/10 via-teal-400/5 to-transparent",
    darkBgGradient: "from-cyan-950 via-teal-950 to-blue-950",
    icon: "Waves",
    avatar: {
      static: "/avatars/static/swimmer.png",
      placeholder: "/avatars/static/swimmer-placeholder.svg",
      video: {
        webm: "/avatars/video/swimmer.webm",
        mp4: "/avatars/video/swimmer.mp4",
      },
      gif: "/avatars/gif/swimmer.gif",
      poster: "/avatars/posters/swimmer-poster.png",
    },
  },
  rider: {
    id: "rider",
    label: "Rider",
    emoji: "🏍️",
    tagline: "Freedom on two wheels, sunset on the horizon",
    description:
      "A Triumph motorcycle, an empty road, golden hour sunset. Riding is freedom.",
    accentColor: "text-amber-500",
    accentHex: "#F59E0B",
    accentGlow: "shadow-amber-500/30",
    bgGradient: "from-amber-500/10 via-orange-400/5 to-transparent",
    darkBgGradient: "from-amber-950 via-orange-950 to-yellow-950",
    icon: "Bike",
    avatar: {
      static: "/avatars/static/rider.png",
      placeholder: "/avatars/static/rider-placeholder.svg",
      video: { webm: "/avatars/video/rider.webm", mp4: "/avatars/video/rider.mp4" },
      gif: "/avatars/gif/rider.gif",
      poster: "/avatars/posters/rider-poster.png",
    },
  },
};

export const moodOrder: MoodId[] = ["developer", "designer", "gymer", "swimmer", "rider"];

export const getNextMood = (current: MoodId): MoodId => {
  const i = moodOrder.indexOf(current);
  return moodOrder[(i + 1) % moodOrder.length];
};

export const getPrevMood = (current: MoodId): MoodId => {
  const i = moodOrder.indexOf(current);
  return moodOrder[(i - 1 + moodOrder.length) % moodOrder.length];
};
