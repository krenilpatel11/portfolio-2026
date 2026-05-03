"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for GSAP scroll animations with fade-in effect
 * @param options - Animation options
 */
export function useScrollAnimation(options?: {
  delay?: number;
  duration?: number;
  y?: number;
  start?: string;
  scrub?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const {
      delay = 0,
      duration = 0.8,
      y = 60,
      start = "top 85%",
      scrub = false,
    } = options || {};

    // Create scroll-triggered fade-in animation
    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: "play none none none",
          scrub: scrub,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options?.delay, options?.duration, options?.y, options?.start, options?.scrub]);

  return ref;
}

/**
 * Batch animation for multiple children elements
 */
export function useScrollBatchAnimation(options?: {
  stagger?: number;
  duration?: number;
  y?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;
    const {
      stagger = 0.1,
      duration = 0.8,
      y = 60,
    } = options || {};

    const animation = gsap.fromTo(
      children,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [options?.stagger, options?.duration, options?.y]);

  return containerRef;
}
