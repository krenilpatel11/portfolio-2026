"use client";

import { BentoTile } from "../BentoTile";
import { Award } from "lucide-react";

export function CertificationsTile({ delay = 0 }: { delay?: number }) {
  const certs = [
    { name: "AI-102", full: "Azure AI Engineer Associate" },
    { name: "AZ-900", full: "Azure Fundamentals" },
    { name: "AI-900", full: "Azure AI Fundamentals" },
  ];

  return (
    <BentoTile delay={delay}>
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center accent-reactive"
          style={{ backgroundColor: "var(--accent-color)" }}
        >
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-3xl font-bold font-display accent-reactive" style={{ color: "var(--accent-color)" }}>
            3×
          </div>
          <h3 className="text-lg font-semibold">Microsoft Azure</h3>
        </div>
      </div>

      <ul className="space-y-2">
        {certs.map((cert) => (
          <li key={cert.name} className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 rounded-full accent-reactive" style={{ backgroundColor: "var(--accent-color)" }} />
            <span className="font-mono font-semibold">{cert.name}</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--muted)]">{cert.full}</span>
          </li>
        ))}
      </ul>
    </BentoTile>
  );
}
