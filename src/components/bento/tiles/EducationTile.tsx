"use client";

import { BentoTile } from "../BentoTile";
import { GraduationCap } from "lucide-react";

export function EducationTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-[var(--muted)]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Education</h3>
          <p className="text-base font-medium mb-1">B.Tech CSE (AI)</p>
          <p className="text-sm text-[var(--muted)] mb-2">Parul University</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-display accent-reactive" style={{ color: "var(--accent-color)" }}>
              8.46
            </span>
            <span className="text-xs text-[var(--muted)]">CGPA</span>
          </div>
        </div>
      </div>
    </BentoTile>
  );
}
