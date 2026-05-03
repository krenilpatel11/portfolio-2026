"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects, graphicPortfolio } from "@/lib/projects";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import { useMood } from "@/context/MoodContext";
import Image from "next/image";
import { initCal, openCalModal } from "@/lib/cal-init";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: easing, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] mb-4 group-hover:border-[var(--accent)] transition-all duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
        
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
          {project.year} · {project.category}
        </p>
        
        <h3 className="text-2xl font-bold font-display text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-[var(--accent)] font-semibold mb-3">{project.subtitle}</p>
        
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium text-[var(--muted)]">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
        
        {/* Metrics chips */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                key={metric.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--background)] text-xs"
              >
                <span className="font-bold text-[var(--accent)]">{metric.value}</span>
                <span className="text-[var(--muted)]">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}

function GraphicPortfolioCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: easing }}
      className="group md:col-span-2 lg:col-span-3"
    >
      <a href={graphicPortfolio.link} target="_blank" rel="noopener noreferrer">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent border-2 border-[var(--accent)]/30 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_40px_rgba(var(--accent-rgb),0.2)] transition-all duration-500 overflow-hidden">
          
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="behance-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-[var(--accent)]" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#behance-grid)" />
            </svg>
          </div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                External Portfolio
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
              {graphicPortfolio.title}
            </h3>
            
            <p className="text-lg md:text-xl text-[var(--accent)] font-semibold mb-4">{graphicPortfolio.subtitle}</p>
            
            <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-2xl text-sm md:text-base">
              {graphicPortfolio.description}
            </p>
            
            {/* Category badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {graphicPortfolio.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] group-hover:border-[var(--accent)]/50 transition-colors"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            {/* View Portfolio CTA */}
            <div className="inline-flex items-center gap-2 text-[var(--accent)] font-bold group-hover:gap-3 transition-all text-sm md:text-base">
              <span>View Portfolio on Behance</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function AllProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const { currentMood } = useMood();

  useEffect(() => {
    initCal(); // Initialize Cal.com once
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Pattern background */}
      <PatternBackground pattern="dots" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 relative z-10">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: easing }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-display leading-[1.1] tracking-[-0.03em] text-[var(--foreground)] mb-3">
                All Projects
              </h1>
              <p className="text-base text-[var(--muted)] max-w-2xl">
                A comprehensive showcase of my work spanning web development, AI solutions, enterprise platforms, and agency projects. 
                Each project represents a unique challenge solved with modern technologies and thoughtful design.
              </p>
            </div>
            
            {/* Book Meeting Button */}
            <button
              onClick={openCalModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shrink-0 self-start md:self-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Meeting
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold text-[var(--accent)]">{projects.length}</div>
              <div className="text-sm text-[var(--muted)]">Web Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)]">{projects.filter(p => p.featured).length}</div>
              <div className="text-sm text-[var(--muted)]">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)]">{new Set(projects.map(p => p.category)).size}</div>
              <div className="text-sm text-[var(--muted)]">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--accent)]">1</div>
              <div className="text-sm text-[var(--muted)]">Design Portfolio</div>
            </div>
          </div>
        </motion.div>

        {/* Graphic Design Portfolio - Full Width Featured Card */}
        <GraphicPortfolioCard />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
