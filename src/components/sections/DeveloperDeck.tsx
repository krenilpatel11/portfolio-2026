"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, Brain, Puzzle, Palette, Rocket, Globe } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "The Engineer",
    front: "2.5+ yrs · Enterprise Web Apps",
    detail:
      "2.5+ years building enterprise web applications serving 500+ users. 5+ production modules. 90%+ test coverage. Clean architecture zealot. Angular, React, .NET Core — pick your poison.",
    gradient: "from-violet-500/20 to-violet-300/10",
    accent: "#6C3CE1",
  },
  {
    icon: Brain,
    title: "The AI Builder",
    front: "3× Microsoft Azure Certified",
    detail:
      "3× Microsoft Azure Certified (AI-102, AZ-900, AI-900). Built AI-powered document intelligence systems with 95% accuracy. Runner-up at AI Hackathon (IMRIEL × Allata).",
    gradient: "from-blue-500/20 to-blue-300/10",
    accent: "#3b82f6",
  },
  {
    icon: Puzzle,
    title: "The Problem Solver",
    front: "400+ DSA · 3★ CodeChef",
    detail:
      "400+ DSA problems solved. 3★ CodeChef. I don't just ship code — I think in algorithms, optimize for edge cases, and architect for scale from day one.",
    gradient: "from-orange-500/20 to-orange-300/10",
    accent: "#f97316",
  },
  {
    icon: Palette,
    title: "The Designer",
    front: "50+ Brand Assets · Figma",
    detail:
      "50+ branding and marketing assets created. Graphic design intern turned full-stack creative. I see the pixel AND the system. Figma, Photoshop, Illustrator, CorelDraw.",
    gradient: "from-pink-500/20 to-pink-300/10",
    accent: "#ec4899",
  },
  {
    icon: Rocket,
    title: "The Founder",
    front: "Founded LabelFlow Agency",
    detail:
      "Founded LabelFlow — a digital agency serving clients across web development, design, and marketing. From solo freelancer to building a brand. labelflow.store",
    gradient: "from-green-500/20 to-green-300/10",
    accent: "#22c55e",
  },
  {
    icon: Globe,
    title: "The Human",
    front: "Vadodara, Gujarat · 8.46 CGPA",
    detail:
      "Based in Vadodara, Gujarat. Fluent in English, Hindi, and Gujarati. School topper 87.86% SSC. B.Tech CSE (AI) — 8.46 CGPA. Lover of clean code and strong chai.",
    gradient: "from-amber-500/20 to-amber-300/10",
    accent: "#f59e0b",
  },
];

function DeckCard({ card, index, activeIndex, onClick }: {
  card: typeof cards[0];
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
      className={`absolute inset-0 cursor-pointer rounded-3xl bg-gradient-to-br ${card.gradient} border border-white/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xl`}
      style={{ backgroundColor: `color-mix(in srgb, ${card.accent} 12%, var(--card-bg))` }}
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
        <h3 className="text-2xl font-bold text-[var(--foreground)] font-display">{card.title}</h3>
      </div>

      <p className="text-[var(--muted)] text-sm leading-relaxed">{card.detail}</p>
    </motion.div>
  );
}

export default function DeveloperDeck() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: easing }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
              Who I am
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-6">
              The Developer<br />Deck
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-md">
              Six cards. Six facets of who I am. Click through to explore the engineer, creator, problem-solver, designer, founder, and human behind the code.
            </p>

            {/* Dot navigation */}
            <div className="flex gap-2.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border)]"
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
                onClick={() => setActive((a) => Math.min(cards.length - 1, a + 1))}
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
            className="relative h-80 md:h-96 overflow-hidden rounded-3xl"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
