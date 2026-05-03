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
      whileHover={{ 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] p-6 overflow-hidden group h-full min-h-[200px] flex flex-col hover:border-[var(--accent)]/50 transition-all duration-300 ${
        href ? "cursor-pointer hover:shadow-xl" : "hover:shadow-lg"
      } ${className}`}
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent"
          style={{
            background: "radial-gradient(circle at top right, var(--accent-color, #6366F1)10, transparent 70%)",
          }}
        />
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.1)",
          }}
        />
      </div>

      {label && (
        <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] opacity-60 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}
