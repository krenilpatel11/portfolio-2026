import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Krenil Patel`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft size={15} /> Back
          </Link>
          <span className="text-sm font-medium text-[var(--muted)]">{project.category} · {project.year}</span>
        </div>
      </nav>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-32 pb-24">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold bg-[var(--accent-light)] text-[var(--accent)] px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(3rem,7vw,7rem)] font-bold tracking-[-0.04em] leading-[1] mb-4 font-display">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--muted)] font-medium mb-6">{project.subtitle}</p>
          <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">{project.description}</p>

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] font-semibold px-6 py-3 rounded-full text-sm hover:opacity-80 transition-opacity"
              >
                Live Site <ArrowUpRight size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)] font-semibold px-6 py-3 rounded-full text-sm hover:border-[var(--accent)] transition-colors"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Project image placeholder */}
        <div className="w-full aspect-video rounded-3xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--border)] mb-16 flex items-center justify-center">
          <span className="text-[var(--accent)] font-bold text-lg opacity-40">{project.title}</span>
        </div>

        {/* Tech stack */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-semibold border border-[var(--border)] text-[var(--foreground)] px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.metrics && (
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Impact</p>
              <div className="flex gap-12">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-4xl font-bold text-[var(--foreground)]">{m.value}</p>
                    <p className="text-sm text-[var(--muted)] mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next Project */}
        <div className="border-t border-[var(--border)] pt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Next Project</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-3xl md:text-5xl font-bold tracking-tight font-display">
              {nextProject.title}
            </span>
            <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
