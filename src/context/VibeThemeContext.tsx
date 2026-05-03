"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { vibes, vibeOrder, type VibeId, type Vibe } from "@/lib/vibes";
import { themes, themeOrder, type ThemeId, type Theme } from "@/lib/themes";
import { MoodChipPopup } from "@/components/mood/MoodChipPopup";

interface VibeThemeContextType {
  // Vibe (personality - auto-changes every 5 mins)
  currentVibe: Vibe;
  currentVibeId: VibeId;
  setVibe: (vibeId: VibeId) => void;
  nextVibe: () => void;
  cycleVibe: () => void; // Same as nextVibe, just clearer naming for button
  vibeCounter: Record<VibeId, number>; // Track how many times each vibe has been shown
  
  // Theme (portfolio style - auto-changes every 10 mins)
  currentTheme: Theme;
  currentThemeId: ThemeId;
  setTheme: (themeId: ThemeId) => void;
  nextTheme: () => void;
  shuffleTheme: () => void;
}

const VibeThemeContext = createContext<VibeThemeContextType | undefined>(undefined);

const VIBE_COOKIE = "krenil-vibe";
const THEME_COOKIE = "krenil-theme";
const VIBE_COUNTER_COOKIE = "krenil-vibe-counter";
const VIBE_AUTO_CHANGE_MS = 5 * 60 * 1000; // 5 minutes
const THEME_AUTO_CHANGE_MS = 10 * 60 * 1000; // 10 minutes

export function VibeThemeProvider({ children }: { children: ReactNode }) {
  const defaultVibeCounter: Record<VibeId, number> = {
    coding: 0,
    designing: 0,
    gyming: 0,
    riding: 0,
    swimming: 0,
    hiking: 0,
  };

  const getInitialVibeId = (): VibeId => {
    const savedVibe = Cookies.get(VIBE_COOKIE) as VibeId | undefined;
    return savedVibe && vibes[savedVibe] ? savedVibe : "coding";
  };

  const getInitialThemeId = (): ThemeId => {
    const savedTheme = Cookies.get(THEME_COOKIE) as ThemeId | undefined;
    return savedTheme && themes[savedTheme] ? savedTheme : "fullstack";
  };

  const getInitialVibeCounter = (): Record<VibeId, number> => {
    const savedCounter = Cookies.get(VIBE_COUNTER_COOKIE);
    if (!savedCounter) {
      return defaultVibeCounter;
    }

    try {
      const parsed = JSON.parse(savedCounter);
      return {
        ...defaultVibeCounter,
        ...parsed,
      };
    } catch {
      return defaultVibeCounter;
    }
  };

  const [currentVibeId, setCurrentVibeId] = useState<VibeId>(getInitialVibeId);
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>(getInitialThemeId);
  const [vibeCounter, setVibeCounter] = useState<Record<VibeId, number>>(getInitialVibeCounter);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"vibe" | "theme">("vibe");

  const currentVibe = vibes[currentVibeId];
  const currentTheme = themes[currentThemeId];

  // Auto-change vibe every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVibeId((prev) => {
        const currentIndex = vibeOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % vibeOrder.length;
        const nextVibe = vibeOrder[nextIndex];
        Cookies.set(VIBE_COOKIE, nextVibe, { expires: 365 });
        // Increment counter
        setVibeCounter((prevCounter) => {
          const newCounter = { ...prevCounter, [nextVibe]: prevCounter[nextVibe] + 1 };
          Cookies.set(VIBE_COUNTER_COOKIE, JSON.stringify(newCounter), { expires: 365 });
          return newCounter;
        });
        return nextVibe;
      });
      setPopupType("vibe");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }, VIBE_AUTO_CHANGE_MS);

    return () => clearInterval(interval);
  }, []);

  // Auto-change theme every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeId((prev) => {
        const currentIndex = themeOrder.indexOf(prev);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        const nextTheme = themeOrder[nextIndex];
        Cookies.set(THEME_COOKIE, nextTheme, { expires: 365 });
        return nextTheme;
      });
      setPopupType("theme");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }, THEME_AUTO_CHANGE_MS);

    return () => clearInterval(interval);
  }, []);

  // Inject CSS variables for vibe colors
  useEffect(() => {
    document.documentElement.style.setProperty("--vibe-primary", currentVibe.colors.primary);
    document.documentElement.style.setProperty("--vibe-secondary", currentVibe.colors.secondary);
    document.documentElement.style.setProperty("--accent", currentVibe.colors.primary);
    document.documentElement.style.setProperty("--accent-color", currentVibe.colors.primary);
  }, [currentVibe]);

  const setVibe = (vibeId: VibeId) => {
    setCurrentVibeId(vibeId);
    Cookies.set(VIBE_COOKIE, vibeId, { expires: 365 });
    // Increment counter for this vibe
    setVibeCounter((prev) => {
      const newCounter = { ...prev, [vibeId]: prev[vibeId] + 1 };
      Cookies.set(VIBE_COUNTER_COOKIE, JSON.stringify(newCounter), { expires: 365 });
      return newCounter;
    });
    setPopupType("vibe");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const nextVibe = () => {
    setCurrentVibeId((prev) => {
      const currentIndex = vibeOrder.indexOf(prev);
      const nextIndex = (currentIndex + 1) % vibeOrder.length;
      const nextVibe = vibeOrder[nextIndex];
      Cookies.set(VIBE_COOKIE, nextVibe, { expires: 365 });
      // Increment counter for next vibe
      setVibeCounter((prevCounter) => {
        const newCounter = { ...prevCounter, [nextVibe]: prevCounter[nextVibe] + 1 };
        Cookies.set(VIBE_COUNTER_COOKIE, JSON.stringify(newCounter), { expires: 365 });
        return newCounter;
      });
      return nextVibe;
    });
    setPopupType("vibe");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const setTheme = (themeId: ThemeId) => {
    setCurrentThemeId(themeId);
    Cookies.set(THEME_COOKIE, themeId, { expires: 365 });
    setPopupType("theme");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const nextTheme = () => {
    setCurrentThemeId((prev) => {
      const currentIndex = themeOrder.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themeOrder.length;
      const nextTheme = themeOrder[nextIndex];
      Cookies.set(THEME_COOKIE, nextTheme, { expires: 365 });
      return nextTheme;
    });
    setPopupType("theme");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const shuffleTheme = () => {
    // Shuffle to a random theme (not current)
    const otherThemes = themeOrder.filter(t => t !== currentThemeId);
    const randomTheme = otherThemes[Math.floor(Math.random() * otherThemes.length)];
    setTheme(randomTheme);
  };

  return (
    <VibeThemeContext.Provider
      value={{
        currentVibe,
        currentVibeId,
        setVibe,
        nextVibe,
        cycleVibe: nextVibe, // Alias for clarity
        vibeCounter,
        currentTheme,
        currentThemeId,
        setTheme,
        nextTheme,
        shuffleTheme,
      }}
    >
      {children}
      
      {/* Popup for vibe/theme changes */}
      <MoodChipPopup
        isVisible={showPopup}
        moodLabel={popupType === "vibe" ? currentVibe.label : currentTheme.label}
        moodEmoji={popupType === "vibe" ? currentVibe.emoji : currentTheme.emoji}
        accentColor={currentVibe.colors.primary}
      />
    </VibeThemeContext.Provider>
  );
}

export function useVibeTheme() {
  const context = useContext(VibeThemeContext);
  if (context === undefined) {
    throw new Error("useVibeTheme must be used within a VibeThemeProvider");
  }
  return context;
}
