"use client";
import { motion } from "framer-motion";

const marqueeText =
  "Krenil Patel • Full Stack Engineer • LabelFlow • Azure Certified • Let's Build Together • ";

const footerLinks = {
  Work: [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Agency", href: "https://labelflow.store/" },
  ],
  Connect: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  Social: [
    { label: "GitHub", href: "https://github.com/krenilpatel11" },
    { label: "LinkedIn", href: "https://linkedin.com/in/krenilpatel" },
    { label: "Behance", href: "https://www.behance.net/krenilpatel2" },
    { label: "LabelFlow", href: "https://labelflow.store/" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] overflow-hidden">
      {/* Marquee */}
      <div className="py-8 overflow-hidden border-b border-[var(--border)]">
        <div className="flex whitespace-nowrap">
          <span className="animate-marquee flex shrink-0">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl font-bold text-[var(--foreground)] opacity-10 pr-8 font-display">
                {marqueeText}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold text-[var(--foreground)] mb-3">
              KP<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[180px]">
              Full Stack Engineer & Digital Creator based in Vadodara, India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-[var(--muted)]">
            © 2026 Krenil Patel. All Rights Reserved.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Built with Next.js, Tailwind CSS &amp; ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
