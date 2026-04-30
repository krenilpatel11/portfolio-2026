"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We kick off with a Discovery Call to understand your goals, tech requirements, and vision. This aligns our approach before writing a single line of code.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "I map out the system architecture, pick the right tech stack, and break down the work into clear milestones with realistic timelines.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "I build iteratively with clean, modular code. You get regular updates and can provide feedback at every stage.",
  },
  {
    number: "04",
    title: "Testing & Review",
    description:
      "Thorough unit testing, code reviews, and QA checks to ensure the product is stable, performant, and bug-free.",
  },
  {
    number: "05",
    title: "Delivery & Support",
    description:
      "Clean handoff with documentation, deployment support, and availability for post-launch follow-up.",
  },
];

export default function HowIWorkCard() {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
        How I work
      </p>

      <div className="flex-1 mb-5">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-2xl font-bold text-neutral-900 mb-2">
            {steps[active].number} {steps[active].title}
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {steps[active].description}
          </p>
        </motion.div>
      </div>

      {/* Step pills */}
      <div className="flex gap-2 flex-wrap">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
              i === active
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            Step {step.number}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
