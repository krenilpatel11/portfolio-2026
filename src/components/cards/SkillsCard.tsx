"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const categoryColors: Record<string, string> = {
  Frontend: "bg-violet-100 text-violet-700",
  Backend: "bg-blue-100 text-blue-700",
  "Database & Storage": "bg-emerald-100 text-emerald-700",
  "Cloud & DevOps": "bg-orange-100 text-orange-700",
  Tools: "bg-pink-100 text-pink-700",
  Practices: "bg-neutral-100 text-neutral-600",
};

export default function SkillsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
        Tech Stack
      </p>
      <div className="flex flex-col gap-4">
        {Object.entries(resume.skills)
          .slice(0, 4)
          .map(([category, skills]) => (
            <div key={category}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.slice(0, 6).map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      categoryColors[category] ?? "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
