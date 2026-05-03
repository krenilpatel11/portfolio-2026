"use client";

import { BentoTile } from "../BentoTile";
import { Trophy } from "lucide-react";

export function AchievementTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center accent-reactive"
          style={{ backgroundColor: "var(--accent-color)" }}
        >
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Achievement</h3>
          <p className="text-base font-medium mb-1">🏆 AI Hackathon</p>
          <p className="text-sm text-[var(--muted)]">Runner-Up · Document Intelligence Project</p>
        </div>
      </div>
    </BentoTile>
  );
}
