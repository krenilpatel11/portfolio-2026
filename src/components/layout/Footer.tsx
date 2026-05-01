"use client";

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
  Resources: [
    { label: "Resume", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Career", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-[var(--border)] overflow-hidden">
      {/* Giant marquee — oversized editorial text */}
      <div className="overflow-hidden py-4 border-b border-[var(--border)]">
        <div className="flex whitespace-nowrap">
          <span
            className="animate-marquee flex shrink-0"
            aria-hidden="true"
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-black font-display text-[var(--foreground)] pr-8"
                style={{
                  fontSize: "clamp(4rem,10vw,10rem)",
                  opacity: 0.07,
                  lineHeight: 1,
                }}
              >
                {marqueeText}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
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
