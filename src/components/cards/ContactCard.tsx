"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Mail, ExternalLink, Phone, Trophy } from "lucide-react";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 rounded-3xl p-6 flex flex-col h-full"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
        Get in touch
      </p>

      <p className="text-white text-xl font-bold mb-2 leading-tight">
        Let&apos;s build something great together.
      </p>
      <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
        Open to full-time roles, freelance projects, and interesting collaborations.
      </p>

      <div className="flex flex-col gap-3 flex-1">
        <a
          href={`mailto:${resume.email}`}
          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
        >
          <Mail size={15} className="text-orange-400 shrink-0" />
          {resume.email}
        </a>
        <a
          href={resume.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
        >
          <ExternalLink size={15} className="text-orange-400 shrink-0" />
          github.com/krenilpatel11
        </a>
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
        >
          <ExternalLink size={15} className="text-orange-400 shrink-0" />
          linkedin.com/in/krenilpatel
        </a>
      </div>

      <a
        href={`mailto:${resume.email}`}
        className="mt-6 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm"
      >
        Say hello
      </a>
    </motion.div>
  );
}
