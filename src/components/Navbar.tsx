"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { resume } from "@/data/resume";
import { useVibeTheme } from "@/context/VibeThemeContext";

export default function Navbar() {
  const { currentTheme } = useVibeTheme();

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

        {/* Right side - Book Meeting button + Hamburger */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:block"
          >
            <button
              data-cal-namespace="15min"
              data-cal-link="krenil-patel-0050/15min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 border border-neutral-300 rounded-lg hover:border-neutral-400 hover:bg-neutral-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <motion.span
                key={currentTheme.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentTheme.variants.contact.ctaButton || "Book Meeting"}
              </motion.span>
            </button>
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
      </div>
    </nav>
  );
}
