"use client";

import { BentoTile } from "../BentoTile";
import { Rocket, ExternalLink } from "lucide-react";

export function FounderTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay} href="https://labelflow.store/">
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center accent-reactive"
          style={{ backgroundColor: "var(--accent-color)" }}
        >
          <Rocket className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">Founder</h3>
          <p className="text-xl font-display font-bold mb-2">LabelFlow</p>
          <p className="text-sm text-[var(--muted)] mb-3">
            Digital agency for web dev, design & marketing
          </p>
          <div className="flex items-center gap-1.5 text-xs accent-reactive font-medium" style={{ color: "var(--accent-color)" }}>
            <span>Visit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </BentoTile>
  );
}
