"use client";

import { BentoTile } from "../BentoTile";

export function QuoteTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay} className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="relative">
        <div className="text-6xl md:text-7xl font-serif accent-reactive mb-4 leading-none" style={{ color: "var(--accent-color)", opacity: 0.2 }}>
          "
        </div>
        <blockquote className="text-base md:text-lg font-medium leading-relaxed mb-4">
          There are two types of engineers: those who write code that works, and those who write code
          that <span className="accent-reactive font-semibold" style={{ color: "var(--accent-color)" }}>lasts</span>.
        </blockquote>
        <footer className="text-sm text-[var(--muted)]">
          — My guiding principle
        </footer>
      </div>
    </BentoTile>
  );
}
