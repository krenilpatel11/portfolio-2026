"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Zap, ExternalLink } from "lucide-react";

export default function ProjectsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
        Featured Projects
      </p>
      <div className="flex flex-col gap-5 flex-1">
        {resume.projects.map((project, i) => (
          <div
            key={i}
            className="rounded-2xl bg-neutral-50 border border-neutral-100 p-4 hover:border-orange-200 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-bold text-neutral-900 leading-tight">{project.name}</h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full shrink-0">
                <Zap size={9} /> {project.metric}
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
