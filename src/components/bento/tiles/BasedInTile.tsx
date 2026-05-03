"use client";

import { BentoTile } from "../BentoTile";
import { MapPin } from "lucide-react";

export function BasedInTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[var(--muted)]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Based in</h3>
          <p className="text-xl font-display font-bold mb-1">Vadodara</p>
          <p className="text-sm text-[var(--muted)]">Gujarat, India 🇮🇳</p>
          <p className="text-xs text-[var(--muted)] mt-2">Open to remote opportunities</p>
        </div>
      </div>
    </BentoTile>
  );
}
