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
  SiGreensock,
} from "react-icons/si";
import { FiZap, FiLayers, FiEye, FiCloud, FiDatabase } from "react-icons/fi";
import type { IconType } from "react-icons";

interface TechBadge {
  label: string;
  icon?: IconType;
}

const techBadges: TechBadge[] = [
  { label: "React",           icon: SiReact },
  { label: "Angular",         icon: SiAngular },
  { label: "Next.js",         icon: SiNextdotjs },
  { label: ".NET Core",       icon: SiDotnet },
  { label: "Azure",           icon: FiCloud },
  { label: "TypeScript",      icon: SiTypescript },
  { label: "Node.js",         icon: SiNodedotjs },
  { label: "Docker",          icon: SiDocker },
  { label: "SQL Server",      icon: FiDatabase },
  { label: "Tailwind CSS",    icon: SiTailwindcss },
  { label: "C#",              icon: SiSharp },
  { label: "Figma",           icon: SiFigma },
  { label: "MongoDB",         icon: SiMongodb },
  { label: "GSAP",            icon: SiGreensock },
  { label: "Framer Motion" },
  { label: "AI-102 Certified" },
];

const stats = [
  { value: "2.5+", label: "Years", sub: "Professional Experience" },
  { value: "10+",  label: "Projects", sub: "Shipped to Production" },
  { value: "500+", label: "Users", sub: "Across Live Applications" },
];

const differentiators = [
  {
    icon: FiZap,
    title: "I ship fast",
    desc: "From idea to production in days, not months. No bloat, no excuses.",
  },
  {
    icon: FiLayers,
    title: "Full stack depth",
    desc: "Frontend finesse, backend robustness, cloud scalability — I own the whole stack.",
  },
  {
    icon: FiEye,
    title: "Design-first thinking",
    desc: "Code that looks as good as it works. Every pixel is intentional.",
  },
];

const words = [
  { text: "Hi, I'm Krenil —", bold: false },
  { text: "a Full Stack Engineer", bold: true, accent: false },
  { text: "who turns ambitious ideas into polished,", bold: false },
  { text: "production-grade", bold: true, accent: true },
  { text: "software. I blend clean code with creative thinking to build apps that don't just work —", bold: false },
  { text: "they win.", bold: true, accent: true },
  { text: "From AI-powered document intelligence to pixel-perfect UIs, I ship products that", bold: false },
  { text: "scale, perform, and delight.", bold: true, accent: false },
];

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="py-24 md:py-36 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Animated word-by-word paragraph */}
        <div ref={ref} className="max-w-4xl">
          <p className="text-[clamp(1.35rem,2.5vw,2.1rem)] font-medium leading-[1.7] text-[var(--muted)] tracking-tight">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: easing }}
                className={`${w.bold ? "font-bold text-[var(--foreground)]" : ""} ${
                  w.accent ? "text-[var(--accent)]" : ""
                }`}
              >
                {w.text}{" "}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Stats grid */}
        <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
              className="flex flex-col gap-1"
            >
              <span className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[var(--foreground)] leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[var(--foreground)]">{stat.label}</span>
              <span className="text-xs text-[var(--muted)] leading-snug">{stat.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* "What makes me different" */}
        <div ref={cardsRef} className="mt-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easing }}
            className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-6"
          >
            What makes me different
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4">
            {differentiators.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: easing }}
                  className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{card.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex whitespace-nowrap gap-0">
            <div className="animate-marquee flex gap-4 shrink-0">
              {[...techBadges, ...techBadges].map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-medium px-4 py-2 rounded-full shrink-0 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    {Icon && <Icon size={13} />}
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
