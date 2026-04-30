"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Award } from "lucide-react";

export default function CertsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
        Certifications
      </p>
      <div className="flex flex-col gap-3 flex-1">
        {resume.certifications.map((cert, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
              <Award size={13} className="text-blue-600" />
            </div>
            <p className="text-sm text-neutral-700 leading-snug">{cert}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
