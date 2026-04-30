"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "Feb 2024 – Present",
    role: "Software Engineer",
    company: "IMRIEL Software Pvt. Ltd.",
    location: "Vadodara, Gujarat",
    type: "Full-time",
    highlights: [
      "Built 5+ enterprise web modules using Angular and React",
      "Integrated Azure AI Document Intelligence — automated document extraction",
      "Built real-time analytics dashboards with Angular and Chart.js",
      "Maintained 90%+ test coverage across all production modules",
      "Led Agile/Scrum ceremonies; improved UI performance by 25%",
    ],
    tags: ["Angular", "React", "Azure AI", ".NET Core", "Chart.js"],
    color: "#6C3CE1",
    bg: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    period: "Oct 2023 – Jan 2024",
    role: "Web Development & Design Intern",
    company: "Dcycle Design Studio Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    type: "Internship",
    highlights: [
      "Built responsive interfaces using React, HTML5, CSS3, Tailwind CSS",
      "Delivered 3+ real client projects end-to-end",
      "Implemented pixel-perfect UI from Figma designs",
    ],
    tags: ["React", "Tailwind CSS", "Figma", "HTML5"],
    color: "#3b82f6",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    period: "Jan 2023 – Jul 2023",
    role: "Graphic Designer Intern",
    company: "Parul University",
    location: "Vadodara, Gujarat",
    type: "Internship",
    highlights: [
      "Created 50+ marketing and branding assets for university events",
      "Worked with Adobe Photoshop, Illustrator, and CorelDraw",
    ],
    tags: ["Photoshop", "Illustrator", "CorelDraw", "Branding"],
    color: "#f97316",
    bg: "bg-orange-50 dark:bg-orange-950/20",
  },
];

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">Career</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--foreground)]">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
                className="flex gap-8 pl-10 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-5 w-[15px] h-[15px] rounded-full border-2 border-[var(--background)] shadow"
                  style={{ backgroundColor: exp.color }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)]/40 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--foreground)]">{exp.role}</h3>
                      <p className="text-sm text-[var(--muted)] mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)]">
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--muted)] leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
