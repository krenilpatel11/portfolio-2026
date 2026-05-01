"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  label?: string;
  href?: string;
  animate?: boolean;
  delay?: number;
}

export function BentoTile({
  children,
  className = "",
  label,
  href,
  animate = true,
  delay = 0,
}: BentoTileProps) {
  const Component = href ? motion.a : motion.div;
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      {...linkProps}
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={href ? { scale: 1.02 } : undefined}
      className={`relative rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] p-6 overflow-hidden group ${
        href ? "cursor-pointer" : ""
      } ${className}`}
    >
      {label && (
        <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] opacity-60">
          {label}
        </span>
      )}
      {children}
    </Component>
  );
}
