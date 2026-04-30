"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Trophy } from "lucide-react";

export default function AchievementsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-orange-500 rounded-3xl p-6 flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200 mb-5">
        Achievements
      </p>
      <div className="flex flex-col gap-3 flex-1">
        {resume.achievements.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Trophy size={14} className="text-orange-200 shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-white leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
