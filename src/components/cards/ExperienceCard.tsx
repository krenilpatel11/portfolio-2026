"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function ExperienceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
        My Experience
      </p>
      <div className="flex flex-col gap-0 flex-1">
        {resume.experience.map((job, i) => (
          <div key={i} className="flex items-start gap-3 pb-4">
            <div className="flex flex-col items-center pt-1 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border-2 border-white ring-2 ring-neutral-200" />
              {i < resume.experience.length - 1 && (
                <div className="w-px flex-1 bg-neutral-200 mt-1 min-h-[24px]" />
              )}
            </div>
            <div className="pb-2">
              <p className="text-sm font-semibold text-neutral-900 leading-tight">{job.role}</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                {job.period} · {job.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
