"use client";

import { BentoTile } from "../BentoTile";
import { Code2 } from "lucide-react";

export function ProblemSolverTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-[var(--muted)]" />
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold font-display accent-reactive" style={{ color: "var(--accent-color)" }}>
            400+
          </div>
          <h3 className="text-lg font-semibold mb-1">DSA Problems</h3>
          <p className="text-sm text-[var(--muted)]">LeetCode & competitive coding</p>
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
        <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">3★</span>
        <span className="text-xs text-amber-600 dark:text-amber-400">CodeChef</span>
      </div>
    </BentoTile>
  );
}
