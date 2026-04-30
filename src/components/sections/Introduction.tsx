"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techBadges = [
  "React", "Angular", "Next.js", ".NET Core", "Azure", "TypeScript",
  "Node.js", "Docker", "SQL Server", "Tailwind CSS", "C#", "Figma",
  "MongoDB", "GSAP", "Framer Motion", "AI-102 Certified",
];

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const words = [
    { text: "Krenil Patel is a hard-working", bold: false },
    { text: "Full Stack Engineer", bold: true, accent: false },
    { text: "that propels good companies to build greatness.", bold: false },
    { text: "I'm a pragmatic", bold: false },
    { text: "creator", bold: true, accent: true },
    { text: "who gets kicks helping brands win through code, design, and", bold: false },
    { text: "AI-powered", bold: true, accent: true },
    { text: "digital experiences.", bold: false },
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto">
        <div ref={ref} className="max-w-4xl">
          <p className="text-[clamp(1.35rem,2.5vw,2.1rem)] font-medium leading-[1.7] text-[var(--muted)] tracking-tight">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`${
                  w.bold ? "font-bold text-[var(--foreground)]" : ""
                } ${w.accent ? "text-[var(--accent)]" : ""}`}
              >
                {w.text}{" "}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Tech Ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex whitespace-nowrap gap-0">
            <div className="animate-marquee flex gap-4 shrink-0">
              {[...techBadges, ...techBadges].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-medium px-4 py-2 rounded-full shrink-0 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
