"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { ExternalLink, Zap } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-2">Work</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] mb-12">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resume.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#f5f5f7] rounded-2xl p-6 border border-[#e5e5ea] flex flex-col"
            >
              {/* Metric badge */}
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4 self-start">
                <Zap size={12} />
                {project.metric}
              </div>

              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{project.name}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white border border-[#d2d2d7] text-[#3d3d3f] px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#6e6e73]">
                <span>{project.period}</span>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1d1d1f] hover:text-blue-600 transition-colors font-medium"
                  >
                  <ExternalLink size={14} /> View
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
