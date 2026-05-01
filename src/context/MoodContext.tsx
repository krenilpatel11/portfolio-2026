"use client";

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import { moods, getNextMood, getPrevMood, type MoodId, type Mood } from "@/lib/moods";
import { MoodChipPopup } from "@/components/mood/MoodChipPopup";

interface MoodContextType {
  currentMoodId: MoodId;
  currentMood: Mood;
  setMood: (id: MoodId) => void;
  nextMood: () => void;
  prevMood: () => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [currentMoodId, setCurrentMoodId] = useState<MoodId>("coder");
  const [showChip, setShowChip] = useState(false);

  // Update CSS variables when mood changes
  useEffect(() => {
    const mood = moods[currentMoodId];
    document.documentElement.style.setProperty("--accent-color", mood.accentHex);
    document.documentElement.style.setProperty("--accent", mood.accentHex);
    document.documentElement.style.setProperty("--accent-glow", mood.accentHex + "4D");
    document.documentElement.style.setProperty("--accent-light", mood.accentHex + "18"); // 10% opacity for light backgrounds
    
    // Save to cookie
    document.cookie = `mood=${currentMoodId};path=/;max-age=31536000`;
    
    // Show chip popup for 2 seconds
    setShowChip(true);
    const timer = setTimeout(() => setShowChip(false), 2000);
    return () => clearTimeout(timer);
  }, [currentMoodId]);

  // Restore from cookie on mount
  useEffect(() => {
    const savedMood = document.cookie
      .split("; ")
      .find((row) => row.startsWith("mood="))
      ?.split("=")[1];
    
    if (savedMood && savedMood in moods) {
      setCurrentMoodId(savedMood as MoodId);
    }
  }, []);

  const setMood = useCallback((id: MoodId) => {
    setCurrentMoodId(id);
  }, []);

  const handleNextMood = useCallback(() => {
    setCurrentMoodId((prev) => getNextMood(prev));
  }, []);

  const handlePrevMood = useCallback(() => {
    setCurrentMoodId((prev) => getPrevMood(prev));
  }, []);

  const currentMood = useMemo(() => moods[currentMoodId], [currentMoodId]);

  const value = useMemo(
    () => ({
      currentMoodId,
      currentMood,
      setMood,
      nextMood: handleNextMood,
      prevMood: handlePrevMood,
    }),
    [currentMoodId, currentMood, setMood, handleNextMood, handlePrevMood]
  );

  return (
    <MoodContext.Provider value={value}>
      {children}
      <MoodChipPopup
        isVisible={showChip}
        moodLabel={currentMood.label}
        moodIcon={currentMood.icon as any}
        accentColor={currentMood.accentHex}
      />
    </MoodContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodContext);
  if (context === undefined) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
}
