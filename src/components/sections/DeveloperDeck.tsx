"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCpu, FiFeather, FiZap, FiGlobe, FiCloud } from "react-icons/fi";
import type { IconType } from "react-icons";

const cards: {
  icon: IconType;
  title: string;
  front: string;
  detail: string;
  gradient: string;
  accent: string;
  barColor: string;
}[] = [
  {
    icon: FiCode,
    title: "The Engineer",
    front: "2.5+ yrs · Enterprise Web Apps",
    detail:
      "2.5+ years shipping enterprise web apps for 500+ users. Angular, React, .NET Core. 5+ production modules. 90%+ test coverage. I write code that lasts.",
    gradient: "from-violet-500/20 to-violet-300/10",
    accent: "#6C3CE1",
    barColor: "from-violet-500 to-violet-300",
  },
  {
    icon: FiCloud,
    title: "The AI Builder",
    front: "3× Microsoft Azure Certified",
    detail:
      "3× Azure certified (AI-102, AZ-900, AI-900). 95% accuracy on AI document pipelines. Hackathon runner-up. I don't just use AI — I build with it.",
    gradient: "from-blue-500/20 to-blue-300/10",
    accent: "#3b82f6",
    barColor: "from-blue-500 to-blue-300",
  },
  {
    icon: FiCpu,
    title: "The Problem Solver",
    front: "400+ DSA · 3★ CodeChef",
    detail:
      "400+ DSA problems. 3★ CodeChef. I think in systems, not just syntax. Every line I write has a reason.",
    gradient: "from-orange-500/20 to-orange-300/10",
    accent: "#f97316",
    barColor: "from-orange-500 to-orange-300",
  },
  {
    icon: FiFeather,
    title: "The Designer",
    front: "50+ Brand Assets · Figma",
    detail:
      "50+ brand assets. Figma → pixel-perfect code. I see design as a conversation between logic and beauty.",
    gradient: "from-pink-500/20 to-pink-300/10",
    accent: "#ec4899",
    barColor: "from-pink-500 to-pink-300",
  },
  {
    icon: FiZap,
    title: "The Founder",
    front: "Founded LabelFlow Agency",
    detail:
      "Founded LabelFlow — a digital agency. Solo to brand in 12 months. If there's a gap in the market, I build the product.",
    gradient: "from-green-500/20 to-green-300/10",
    accent: "#22c55e",
    barColor: "from-green-500 to-green-300",
  },
  {
    icon: FiGlobe,
    title: "The Human",
    front: "Vadodara, Gujarat · 8.46 CGPA",
    detail:
      "Based in Vadodara, Gujarat. B.Tech CSE (AI) — 8.46 CGPA. School topper. Fluent in 3 languages. Runs on chai and curiosity.",
    gradient: "from-amber-500/20 to-amber-300/10",
    accent: "#f59e0b",
    barColor: "from-amber-500 to-amber-300",
  },
];

function DeckCard({
  card,
  index,
  activeIndex,
  onClick,
}: {
  card: (typeof cards)[0];
  index: number;
  activeIndex: number;
  onClick: () => void;
}) {
  const isActive = index === activeIndex;
  const Icon = card.icon;
  const offset = index - activeIndex;
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        x: isActive ? 0 : offset * 28,
        rotate: isActive ? 0 : offset * 3,
        scale: isActive ? 1 : 0.92 - Math.abs(offset) * 0.03,
        zIndex: isActive ? 10 : 10 - Math.abs(offset),
        opacity: Math.abs(offset) > 2 ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: easing }}
      className={`absolute inset-0 cursor-pointer rounded-3xl bg-gradient-to-br ${card.gradient} border border-white/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xl overflow-hidden`}
      style={{
        backgroundColor: `color-mix(in srgb, ${card.accent} 12%, var(--card-bg))`,
      }}
    >
      {/* Icon + title */}
      <div>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: `${card.accent}20` }}
        >
          <Icon size={22} style={{ color: card.accent }} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
          {card.front}
        </p>
        <h3 className="text-2xl font-bold text-[var(--foreground)] font-display">
          {card.title}
        </h3>
      </div>

      <div>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
          {card.detail}
        </p>
        {/* Gradient accent bar */}
        <div
          className={`h-1 w-full rounded-full bg-gradient-to-r ${card.barColor} opacity-70`}
        />
      </div>
    </motion.div>
  );
}

export default function DeveloperDeck() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="developer-deck"
      className="py-24 md:py-36 border-t border-[var(--border)] bg-[var(--card-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: easing }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
              Who I am
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-4">
              Six sides of me.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-md">
              Click through to explore every dimension.
            </p>

            {/* Dot navigation */}
            <div className="flex gap-2.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-[var(--accent)]"
                      : "w-2 bg-[var(--border)]"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-30"
                disabled={active === 0}
              >
                ←
              </button>
              <button
                onClick={() =>
                  setActive((a) => Math.min(cards.length - 1, a + 1))
                }
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-30"
                disabled={active === cards.length - 1}
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Right: card deck */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="relative h-80 md:h-96"
          >
            {/* Card stack depth layers — outside overflow-hidden so rotation peeks out */}
            <div
              className="absolute inset-2 rounded-3xl bg-violet-200/70 dark:bg-violet-950/40"
              style={{ transform: "rotate(4deg)", zIndex: 0 }}
            />
            <div
              className="absolute inset-4 rounded-3xl bg-violet-100/80 dark:bg-violet-900/20"
              style={{ transform: "rotate(7deg)", zIndex: -1 }}
            />

            {/* Cards container */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ zIndex: 1 }}
            >
              {cards.map((card, i) => (
                <DeckCard
                  key={card.title}
                  card={card}
                  index={i}
                  activeIndex={active}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
