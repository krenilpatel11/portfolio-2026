"use client";

import { BentoTile } from "../BentoTile";
import { Briefcase } from "lucide-react";

export function CurrentlyTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-[var(--muted)]" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">Currently</h3>
          <p className="text-sm text-[var(--muted)]">Software Engineer</p>
          <p className="text-base font-medium mt-1">@ IMRIEL Software</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs text-[var(--muted)]">Active · Feb 2024 - Present</span>
      </div>
    </BentoTile>
  );
}
