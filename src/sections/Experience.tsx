"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-2">Career</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] mb-12">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {resume.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5ea]"
            >
              <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">{job.role}</h3>
                    <p className="text-[#6e6e73] text-sm">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium bg-[#f5f5f7] text-[#6e6e73] px-3 py-1.5 rounded-full">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#3d3d3f] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
