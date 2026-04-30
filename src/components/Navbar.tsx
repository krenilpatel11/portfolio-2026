"use client";
import { motion } from "framer-motion";
import { Menu, Mail } from "lucide-react";
import { resume } from "@/data/resume";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo + email */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          {/* Triangle logo */}
          <div className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
              <path d="M14 3L25 23H3L14 3Z" stroke="#111" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-neutral-400 text-sm font-medium hidden sm:block">·</span>
          <a
            href={`mailto:${resume.email}`}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block"
          >
            {resume.email}
          </a>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-neutral-100 transition-colors"
        >
          <Menu size={18} className="text-neutral-600" />
        </motion.button>
      </div>
    </nav>
  );
}
