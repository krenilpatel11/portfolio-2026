"use client";

import { motion } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import { useState, useEffect } from "react";

export function FloatingMoodToggle() {
  const { currentMood, nextMood } = useMood();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 2s delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    nextMood();
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform"
      style={{
        backgroundColor: currentMood.accentHex,
      }}
      title={`Switch vibe — currently: ${currentMood.label}`}
      aria-label="Switch mood"
    >
      <motion.span
        key={currentMood.id}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {currentMood.emoji}
      </motion.span>

      {/* Breathing pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: currentMood.accentHex,
          opacity: 0.4,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}
