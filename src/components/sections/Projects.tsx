"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, featuredProjects } from "@/lib/projects";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import { useMood } from "@/context/MoodContext";

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const isEven = index % 2 === 0;
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: easing }}
      className="grid md:grid-cols-[45fr_50fr] gap-10 md:gap-16 items-center py-14 border-b border-[var(--border)] last:border-0"
    >
      {/* Project image */}
      <div className={!isEven ? "md:order-2" : ""}>
        <motion.div
          whileHover={{ scale: 1.015, y: -3 }}
          transition={{ duration: 0.35, ease: easing }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] cursor-pointer group hover:border-[var(--accent)] transition-all duration-300"
          style={{
            boxShadow: '0 0 0 0 var(--accent)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 16px -4px var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 0 var(--accent)';
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
          
          {/* Animated accent border overlay - reduced */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 border border-[var(--accent)] rounded-lg" />
          </div>
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

        {/* Tech stack tags with mood-reactive styling */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics (if available) with minimal chip design */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-all duration-300 group"
              >
                {/* Icon based on metric type */}
                <span className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                  {metric.label.toLowerCase().includes('user') && '👥'}
                  {metric.label.toLowerCase().includes('accuracy') && '🎯'}
                  {metric.label.toLowerCase().includes('speed') && '⚡'}
                  {metric.label.toLowerCase().includes('uptime') && '✅'}
                  {metric.label.toLowerCase().includes('performance') && '📊'}
                  {metric.label.toLowerCase().includes('time') && '⏱️'}
                  {metric.label.toLowerCase().includes('save') && '💰'}
                  {metric.label.toLowerCase().includes('reduction') && '📉'}
                  {metric.label.toLowerCase().includes('growth') && '📈'}
                  {metric.label.toLowerCase().includes('rating') && '⭐'}
                  {!metric.label.toLowerCase().match(/user|accuracy|speed|uptime|performance|time|save|reduction|growth|rating/) && '📌'}
                </span>
                <span className="text-sm font-bold text-[var(--accent)] transition-colors duration-700">
                  {metric.value}
                </span>
                <span className="text-xs text-[var(--muted)] font-medium">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Links with icons - GitHub & Live */}
        <div className="flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
          >
            Case Study <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block">↗</span>
          </Link>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
              aria-label="View GitHub repository"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
              aria-label="View live project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const { currentMood } = useMood();

  // Show only featured projects, or all if viewing all projects page
  const displayProjects = featuredProjects;

  return (
    <section id="projects" className="relative py-16 md:py-20 scroll-mt-20 overflow-hidden">
      {/* Pattern background - more visible */}
      <PatternBackground pattern="grid" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section header — mood-reactive */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: easing }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.h2 
              key={currentMood.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-display leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              key={`${currentMood.id}-subtitle`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-[var(--muted)] mt-2"
            >
              Showcasing my best work across web development, AI, and agency projects
            </motion.p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 border border-[var(--border)] px-4 py-2 text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors rounded-lg text-[var(--foreground)] shrink-0 group"
          >
            View All Projects
            <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </Link>
        </motion.div>

        {/* Project rows */}
        <div>
          {displayProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
