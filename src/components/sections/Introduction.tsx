"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiDotnet,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiTailwindcss,
  SiSharp,
  SiFigma,
  SiMongodb,
} from "react-icons/si";
import { FiCloud, FiDatabase } from "react-icons/fi";

const techBadges = [
  { label: "React" },
  { label: "Angular" },
  { label: "Next.js" },
  { label: ".NET Core" },
  { label: "Azure" },
  { label: "TypeScript" },
  { label: "Node.js" },
  { label: "Docker" },
  { label: "SQL Server" },
  { label: "Tailwind CSS" },
  { label: "C#" },
  { label: "Figma" },
  { label: "MongoDB" },
  { label: "Framer Motion" },
  { label: "AI-102 Certified" },
];

// Kept for potential future use but not rendered in the ticker icons
void SiReact; void SiAngular; void SiNextdotjs; void SiDotnet; void SiTypescript;
void SiNodedotjs; void SiDocker; void SiTailwindcss; void SiSharp; void SiFigma;
void SiMongodb; void FiCloud; void FiDatabase;

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="py-0 ">

      {/* Main text block — narrow centered with top/bottom border */}
      <div className="border-b border-[var(--border)] py-16 md:py-24">
        <div ref={ref} className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easing }}
            className="text-[1.15rem] md:text-[1.4rem] leading-[1.8] text-[var(--muted)]"
          >
            Krenil Patel is a hard-working{" "}
            <strong className="relative inline-block text-[var(--foreground)] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:rounded-full">
              Full Stack Engineer
            </strong>{" "}
            that propels good companies to build greatness. I&apos;m a pragmatic{" "}
            <strong className="text-[var(--foreground)] font-bold px-1.5 py-0.5 bg-[var(--accent-light)] rounded-md">
              creator
            </strong>{" "}
            who gets kicks helping brands win through code, design, and{" "}
            <strong className="text-[var(--accent)] font-bold">
              AI-powered
            </strong>{" "}
            digital experiences.
          </motion.p>
        </div>
      </div>

      {/* Tech Ticker Marquee */}
      <div className="py-6 overflow-hidden border-b border-[var(--border)]">
        <div className="flex whitespace-nowrap gap-0">
          <div className="animate-marquee flex gap-3 shrink-0">
            {[...techBadges, ...techBadges].map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center text-sm text-[var(--muted)] px-4 py-1.5 rounded-full border border-[var(--border)] shrink-0 cursor-default hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30 transition-colors"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
