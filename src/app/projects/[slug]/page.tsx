import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    keywords: [
      project.title,
      ...project.tags,
      ...project.tech,
      project.category,
      "case study",
      "portfolio project",
      "Krenil Patel"
    ],
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      type: "article",
      url: `https://krenilpatel.dev/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.subtitle}`,
        }
      ],
      article: {
        publishedTime: `${project.year}-01-01T00:00:00.000Z`,
        authors: ["Krenil Patel"],
        tags: [...project.tags, ...project.tech],
      }
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `https://krenilpatel.dev/projects/${project.slug}`,
    },
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
              <span key={tag} className="text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1.5 rounded-full border border-[var(--accent)]/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(3rem,7vw,5rem)] font-bold tracking-[-0.04em] leading-[1] mb-4 font-display">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--accent)] font-semibold mb-6">{project.subtitle}</p>
          <p className="text-base text-[var(--muted)] leading-relaxed max-w-3xl">{project.description}</p>

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

        {/* Hero image */}
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] mb-16 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tech stack & Metrics */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-semibold border border-[var(--border)] text-[var(--foreground)] px-3 py-1.5 rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.metrics && (
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Key Metrics</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-4xl font-bold text-[var(--accent)]">{m.value}</p>
                    <p className="text-sm text-[var(--muted)] mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Case Study Content */}
        {project.caseStudy && (
          <div className="space-y-16">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4 font-display">The Challenge</h2>
              <p className="text-base text-[var(--muted)] leading-relaxed max-w-3xl">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-4 font-display">The Solution</h2>
              <p className="text-base text-[var(--muted)] leading-relaxed max-w-3xl">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-display">Implementation</h2>
              <div className="space-y-4 max-w-3xl">
                {project.caseStudy.implementation.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-sm font-bold border border-[var(--accent)]/20">
                      {index + 1}
                    </div>
                    <p className="text-base text-[var(--muted)] leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Images */}
            {project.caseStudy.images && project.caseStudy.images.length > 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.caseStudy.images.slice(1).map((img, index) => (
                  <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] relative">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-display">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
                {project.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/30 transition-colors">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent)] mt-2" />
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Next Project */}
        <div className="border-t border-[var(--border)] pt-16 mt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">Next Project</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between hover:text-[var(--accent)] transition-colors"
          >
            <div>
              <span className="text-3xl md:text-5xl font-bold tracking-tight font-display block mb-2">
                {nextProject.title}
              </span>
              <span className="text-sm text-[var(--muted)]">{nextProject.subtitle}</span>
            </div>
            <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
          </Link>
        </div>
      </div>
    </main>
  );
}
