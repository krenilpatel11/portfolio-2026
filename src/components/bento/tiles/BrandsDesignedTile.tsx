"use client";

import { BentoTile } from "../BentoTile";
import { Palette } from "lucide-react";

export function BrandsDesignedTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center accent-reactive"
          style={{ backgroundColor: "var(--accent-color)" }}
        >
          <Palette className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold font-display accent-reactive" style={{ color: "var(--accent-color)" }}>
            50+
          </div>
          <h3 className="text-lg font-semibold mb-1">Brand Assets</h3>
          <p className="text-sm text-[var(--muted)]">Logos, identities & print designs</p>
        </div>
      </div>
    </BentoTile>
  );
}
