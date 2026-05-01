"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import {
  ViewVoiceMockup,
  SecurityGateMockup,
  TrainingMockup,
  SportMockup,
  LabelFlowMockup,
} from "@/components/ProjectMockups";

const mockups = [ViewVoiceMockup, SecurityGateMockup, TrainingMockup, SportMockup, LabelFlowMockup];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const isEven = index % 2 === 0;
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const Mockup = mockups[index] ?? mockups[0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: easing }}
      className="grid md:grid-cols-[45fr_50fr] gap-10 md:gap-16 items-center py-14 border-b border-[var(--border)] last:border-0"
    >
      {/* Mockup image */}
      <div className={!isEven ? "md:order-2" : ""}>
        <motion.div
          whileHover={{ scale: 1.015, y: -3 }}
          transition={{ duration: 0.35, ease: easing }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] cursor-pointer group"
        >
          <Mockup />
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
        </motion.div>
      </div>

      {/* Text block */}
      <div className={!isEven ? "md:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
          {project.year}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold font-display text-[var(--foreground)] mb-2 tracking-tight leading-[1.1]">
          {project.title}
        </h3>
        <p className="text-base text-[var(--accent)] font-semibold mb-5">{project.subtitle}</p>
        <p className="text-[var(--muted)] leading-relaxed mb-6 text-[0.95rem]">
          {project.description}
        </p>

        {/* Category — plain text, no pill */}
        <p className="text-sm text-[var(--muted)] mb-6">{project.category}</p>

        {/* Single link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
        >
          Case Study <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block">↗</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" className="relative py-24 md:py-36 border-t border-[var(--border)] overflow-hidden">
      {/* Pattern background - more visible */}
      <PatternBackground pattern="grid" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section header — left-aligned, editorial style */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: easing }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-display leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
            Our past<br />project
          </h2>
          <a
            href="https://github.com/krenilpatel11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[var(--border)] px-4 py-2 text-sm hover:border-[var(--foreground)] transition-colors rounded-lg text-[var(--foreground)] shrink-0"
          >
            View All Cases <span>↗</span>
          </a>
        </motion.div>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
