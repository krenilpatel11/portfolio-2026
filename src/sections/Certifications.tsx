"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Award, Trophy } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-2">Recognition</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] mb-12">Certifications & Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#f5f5f7] rounded-2xl p-6 border border-[#e5e5ea]"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Award size={16} />
              </div>
              <h3 className="font-semibold text-[#1d1d1f]">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {resume.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#3d3d3f]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f5f5f7] rounded-2xl p-6 border border-[#e5e5ea]"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Trophy size={16} />
              </div>
              <h3 className="font-semibold text-[#1d1d1f]">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {resume.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#3d3d3f]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
