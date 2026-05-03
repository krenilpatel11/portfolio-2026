"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

/**
 * Smooth scroll magnet effect that snaps to section headers
 */
export function useSmoothScrollMagnet() {
  useEffect(() => {
    let isScrolling: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let magnetThreshold = 80; // Distance from section top to trigger magnet

    const handleScroll = () => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        // Only apply magnet if scrolling has stopped
        if (Math.abs(currentScrollY - lastScrollY) < 5) {
          const sections = document.querySelectorAll("section[id]");
          
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const distanceFromTop = Math.abs(currentScrollY - sectionTop);
            
            // If we're close to a section header, snap to it with smooth animation
            if (distanceFromTop < magnetThreshold && distanceFromTop > 0) {
              gsap.to(window, {
                scrollTo: { y: sectionTop, autoKill: false },
                duration: 0.4,
                ease: "power2.inOut",
              });
            }
          });
        }
        
        lastScrollY = currentScrollY;
      }, 150); // Wait 150ms after scroll stops
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);
}

/**
 * Enhanced smooth scrolling for anchor links
 */
export function useEnhancedSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link && link.hash) {
        e.preventDefault();
        const targetId = link.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          gsap.to(window, {
            scrollTo: { y: targetElement, offsetY: 80 },
            duration: 1,
            ease: "power3.inOut",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
