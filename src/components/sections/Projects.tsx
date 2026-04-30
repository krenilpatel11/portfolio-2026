"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import {
  ViewVoiceMockup,
  SecurityGateMockup,
  TrainingMockup,
  SportMockup,
  LabelFlowMockup,
} from "@/components/ProjectMockups";

const tagColors: Record<string, string> = {
  "AI Powered": "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  "Full Stack": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Azure AI": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Dashboard: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Enterprise: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  "Real-Time": "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  Cloud: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  "Web Design": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Agency: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Founder: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

const mockups = [ViewVoiceMockup, SecurityGateMockup, TrainingMockup, SportMockup, LabelFlowMockup];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const Mockup = mockups[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: easing }}
      className="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-b border-[var(--border)] last:border-0"
    >
      {/* Mockup image */}
      <div className={!isEven ? "md:order-2" : ""}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.4, ease: easing }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10 cursor-pointer group"
        >
          <Mockup />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          {/* Category chip */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-[var(--foreground)] shadow-sm">
            {project.category}
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className={!isEven ? "md:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
          {project.year}
        </p>
        <h3 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-1 tracking-tight">
          {project.title}
        </h3>
        <p className="text-base text-[var(--accent)] font-semibold mb-5">{project.subtitle}</p>
        <p className="text-[var(--muted)] leading-relaxed mb-6 text-[0.95rem]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                tagColors[tag] ?? "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-8 mb-6 py-5 border-y border-[var(--border)]">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl font-bold text-[var(--foreground)] tracking-tight">{m.value}</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-5 items-center">
          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-[var(--foreground)] border-b-2 border-[var(--foreground)] pb-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            Case Study
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Live Site
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
              Portfolio
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--foreground)]">
              Selected Projects
            </h2>
          </div>
          <a
            href="https://github.com/krenilpatel11"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors shrink-0"
          >
            View All on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
