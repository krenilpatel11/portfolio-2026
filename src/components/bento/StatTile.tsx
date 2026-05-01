"use client";

import { BentoTile } from "./BentoTile";
import { useCountUp } from "@/hooks/useCountUp";
import { ReactNode } from "react";

interface StatTileProps {
  value: string | number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  animated?: boolean;
  delay?: number;
  children?: ReactNode;
  className?: string;
}

export function StatTile({
  value,
  label,
  description,
  suffix = "",
  prefix = "",
  animated = false,
  delay = 0,
  children,
  className = "",
}: StatTileProps) {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;
  const { ref, displayValue } = useCountUp(
    isNaN(numericValue) ? 0 : numericValue,
    1.5,
    value.toString().includes(".") ? 2 : 0
  );

  const shouldAnimate = animated && !isNaN(numericValue);

  return (
    <BentoTile delay={delay} className={className}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="text-4xl md:text-5xl font-bold font-display mb-2 accent-reactive"
            style={{ color: "var(--accent-color)" }}
          >
            {prefix}
            {shouldAnimate ? displayValue : value}
            {suffix}
          </div>
          <h3 className="text-lg font-semibold mb-1">{label}</h3>
          {description && <p className="text-sm text-[var(--muted)]">{description}</p>}
        </div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </BentoTile>
  );
}
