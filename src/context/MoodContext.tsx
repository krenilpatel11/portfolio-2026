// Compatibility layer - maps old useMood to new useVibeTheme
// This allows components to work while we migrate them

import { useVibeTheme } from "./VibeThemeContext";

interface LegacyMood {
  id: string;
  label: string;
  emoji: string;
  accentHex: string;
  accentGlow: string;
  variants: {
    heroTitle: string;
    heroSubtitle: string;
    heroWords: string[];
    aboutTitle: string;
    aboutSectionTitle: string;
    aboutSectionSubtitle: string;
    aboutIntro: string;
    tagline: string;
    description: string;
    experienceSubtitle: string;
    whoAmI: {
      currently: string;
      problemSolver: string;
      quote: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewAllText: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      ctaButton: string;
    };
  };
  avatar?: {
    static: string;
    placeholder: string;
    video: { webm: string; mp4: string };
    gif: string;
    poster: string;
  };
}

export function useMood() {
  const { currentVibe, currentTheme, nextVibe } = useVibeTheme();
  
  // Merge vibe and theme into legacy mood format
  const currentMood: LegacyMood = {
    id: currentVibe.id,
    label: currentVibe.label,
    emoji: currentVibe.emoji,
    accentHex: currentVibe.colors.primary,
    accentGlow: `shadow-[${currentVibe.colors.primary}]/30`,
    variants: {
      heroTitle: currentTheme.variants.heroTitle,
      heroSubtitle: currentTheme.variants.heroSubtitle,
      heroWords: currentTheme.variants.heroWords,
      aboutTitle: currentTheme.variants.aboutTitle,
      aboutSectionTitle: currentTheme.variants.aboutSectionTitle,
      aboutSectionSubtitle: currentTheme.variants.aboutSectionSubtitle,
      aboutIntro: currentTheme.variants.aboutIntro,
      tagline: currentTheme.variants.tagline,
      description: currentTheme.variants.description,
      experienceSubtitle: currentTheme.variants.experienceSubtitle,
      whoAmI: currentTheme.variants.whoAmI,
      projects: currentTheme.variants.projects,
      services: currentTheme.variants.services,
      contact: currentTheme.variants.contact,
    },
    avatar: {
      static: currentVibe.poster,
      placeholder: currentVibe.poster,
      video: { 
        webm: currentVibe.videos.video1, 
        mp4: currentVibe.videos.video1 
      },
      gif: currentVibe.videos.video1,
      poster: currentVibe.poster,
    },
  };
  
  return {
    currentMood,
    currentMoodId: currentVibe.id,
    nextMood: nextVibe,
    setMood: () => {}, // No-op for compatibility
  };
}
