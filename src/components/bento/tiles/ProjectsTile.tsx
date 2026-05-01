"use client";

import { BentoTile } from "../BentoTile";
import { motion } from "framer-motion";

export function ProjectsTile({ delay = 0 }: { delay?: number }) {
  const techStack = [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    ".NET Core",
    "Azure AI",
    "Node.js",
    "SQL Server",
  ];

  return (
    <BentoTile delay={delay}>
      <div className="text-4xl md:text-5xl font-bold font-display mb-2 accent-reactive" style={{ color: "var(--accent-color)" }}>
        20+
      </div>
      <h3 className="text-lg font-semibold mb-1">Projects Delivered</h3>
      <p className="text-sm text-[var(--muted)] mb-4">Web apps, dashboards & AI tools</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
            className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-[var(--muted)]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </BentoTile>
  );
}
