"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY: motionScrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(motionScrollY, "change", (latest) => {
    setScrollY(latest);
    setIsScrolled(latest > 50);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return { scrollY, scrollProgress, isScrolled };
}
