"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiMail, FiExternalLink, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiBehance } from "react-icons/si";
import type { IconType } from "react-icons";
import { useMood } from "@/context/MoodContext";
import { useVibeTheme } from "@/context/VibeThemeContext";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import CalBookingButton from "@/components/CalBookingButton";

interface DirectLink {
  label: string;
  value: string;
  href: string;
  icon: IconType;
}

const directLinks: DirectLink[] = [
  { label: "Email",    value: "patelkrenil150@gmail.com",        href: "mailto:patelkrenil150@gmail.com",       icon: FiMail },
  { label: "GitHub",   value: "github.com/krenilpatel11",         href: "https://github.com/krenilpatel11",       icon: FiGithub },
  { label: "LinkedIn", value: "linkedin.com/in/krenilpatel",      href: "https://linkedin.com/in/krenilpatel",    icon: FiLinkedin },
  { label: "Agency",   value: "labelflow.store",                  href: "https://labelflow.store/",              icon: FiExternalLink },
  { label: "Behance",  value: "behance.net/krenilpatel2",         href: "https://www.behance.net/krenilpatel2",  icon: SiBehance },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { currentMood } = useMood();
  const { currentTheme } = useVibeTheme();
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Load Typeform embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" ref={ref}>

        {/* Two-panel layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easing }}
          className="grid md:grid-cols-[45fr_55fr] rounded-2xl overflow-hidden border border-[var(--border)] mb-0"
        >
          {/* LEFT panel — Typeform embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="bg-[var(--card-bg)] min-h-[700px] relative"
          >
            {/* Typeform embed */}
            <div 
              data-tf-live="01KQN3EEEH0XQX0XBXV3BHN2Y0"
              className="absolute inset-0 w-full h-full"
              style={{ minHeight: '700px' }}
            />
          </motion.div>

          {/* RIGHT panel — accent color with pattern, persona-based title + Schedule Meeting button */}
          <div 
            className="relative text-white p-10 md:p-14 flex flex-col justify-between min-h-[700px] overflow-hidden transition-colors duration-700"
            style={{ backgroundColor: currentMood.accentHex }}
          >
            {/* Subtle darker overlay for better pattern contrast */}
            <div className="absolute inset-0 bg-black/10" />
            
            {/* Abstract pattern overlay - MORE visible */}
            <PatternBackground pattern="abstract" opacity={0.4} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Available badge */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for projects
              </span>

              <motion.h2
                key={currentTheme.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-display leading-[1.05] mb-6 text-white"
              >
                {currentTheme.variants.contact.title}
              </motion.h2>

              <motion.p
                key={`${currentTheme.id}-contact-subtitle`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base text-white/90 mb-8 leading-relaxed"
              >
                {currentTheme.variants.contact.subtitle}
              </motion.p>

              <p className="text-xs text-white/70 uppercase tracking-widest mb-2 font-semibold">Drop us a line</p>
              <a
                href="mailto:patelkrenil150@gmail.com"
                className="text-base font-semibold underline underline-offset-4 text-white/90 hover:text-white transition-opacity"
              >
                patelkrenil150@gmail.com
              </a>
            </div>

            {/* Schedule Meeting Button at bottom */}
            <div className="mt-10 relative z-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
                Prefer a quick meeting?
              </p>
              
              <CalBookingButton variant="contact">
                <motion.span
                  key={currentTheme.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentTheme.variants.contact.ctaButton || "Book a 30-Min Call"}
                </motion.span>
              </CalBookingButton>
            </div>
          </div>
        </motion.div>

        {/* Horizontal strip of direct links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: easing }}
          className="mt-0"
        >
          {directLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between group border-b border-[var(--border)] py-4 hover:border-[var(--accent)] transition-colors"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                  <Icon size={13} />
                  {item.label}
                </span>
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                  {item.value}
                  <ArrowUpRight
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
