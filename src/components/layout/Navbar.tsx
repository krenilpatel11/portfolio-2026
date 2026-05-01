"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, X } from "lucide-react";
import { useMood } from "@/context/MoodContext";
import { MoodSelector } from "@/components/mood/MoodSelector";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currentMood, nextMood, setMood } = useMood();

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Left: Avatar + Menu */}
          <div className="flex items-center gap-4">
            {/* Avatar - click to cycle moods */}
            <button
              onClick={nextMood}
              className="relative w-8 h-8 rounded-full overflow-hidden transition-all hover:scale-105 accent-reactive flex items-center justify-center bg-[var(--card-bg)]"
              style={{ boxShadow: `0 0 0 2px ${currentMood.accentHex}` }}
              title={`Current mood: ${currentMood.label}. Click to switch!`}
            >
              {currentMood.avatar ? (
                <Image
                  src={currentMood.avatar.placeholder}
                  alt={currentMood.label}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-lg">{currentMood.emoji}</span>
              )}
            </button>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile: "Menu" text button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-sm font-semibold text-[var(--foreground)] tracking-wide hover:text-[var(--accent)] transition-colors"
            >
              Menu
            </button>
          </div>

          {/* Center: Logo */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-[var(--foreground)] font-bold text-lg tracking-tight hover:text-[var(--accent)] transition-colors font-display"
          >
            KP<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Right: Mood Selector + Contact Us link + theme toggle */}
          <div className="flex items-center gap-4">
            {/* Mood Selector */}
            <MoodSelector currentMoodId={currentMood.id} onMoodChange={setMood} />
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden sm:block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors tracking-wide"
            >
              Contact Us
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 5% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 5% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 5% 5%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[var(--background)] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
            >
              <X size={18} />
            </button>

            {/* Theme toggle inside drawer */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl font-bold font-display text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-12 inline-flex bg-[var(--accent)] text-white font-bold px-10 py-4 rounded-full text-lg"
            >
              Let&apos;s Talk →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
