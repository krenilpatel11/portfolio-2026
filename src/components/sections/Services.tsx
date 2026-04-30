"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    detail:
      "I build high-performance web apps using React, Angular, Next.js, and .NET Core. Fully responsive, SEO-optimized, and scalable for 500+ concurrent users. Clean architecture, SOLID principles, and 90%+ test coverage.",
  },
  {
    title: "AI & Cloud Solutions",
    detail:
      "Azure-certified AI engineer (AI-102). I automate document processing with Azure AI Document Intelligence, build intelligent dashboards, and deploy cloud-native solutions on Azure.",
  },
  {
    title: "UI/UX Design",
    detail:
      "From Figma wireframes to pixel-perfect implementations. I design interfaces that are both visually stunning and conversion-focused — crafted with accessibility and usability at the core.",
  },
  {
    title: "Backend & API Development",
    detail:
      "RESTful APIs with ASP.NET Core and Node.js following clean architecture principles. Strong emphasis on security, performance, documentation, and maintainability.",
  },
  {
    title: "Graphic Design & Branding",
    detail:
      "50+ marketing and branding assets created for real clients. Logo design, print media, social graphics. View the full portfolio on Behance and LabelFlow.",
  },
];

const collageBg = [
  "from-violet-200 to-violet-100",
  "from-blue-200 to-blue-100",
  "from-orange-200 to-orange-100",
  "from-green-200 to-green-100",
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
            What I do
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--foreground)] font-display">
            We offer<br />many services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="relative h-80 md:h-[500px] hidden md:block"
          >
            {collageBg.map((bg, i) => (
              <div
                key={i}
                className={`absolute rounded-2xl bg-gradient-to-br ${bg} shadow-md border border-white/60`}
                style={{
                  width: "62%",
                  height: "54%",
                  top: `${[0, 10, 28, 40][i]}%`,
                  left: `${[0, 22, 6, 28][i]}%`,
                  zIndex: i,
                  transform: `rotate(${[-2, 3, -1, 2][i]}deg)`,
                }}
              >
                <div className="p-4 flex flex-col gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="h-2 w-1/2 rounded bg-black/10 mt-1" />
                  <div className="h-2 w-3/4 rounded bg-black/10" />
                  <div className="h-2 w-2/5 rounded bg-black/10" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Service accordion */}
          <div>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: easing }}
                className="border-b border-[var(--border)] last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 group text-left"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      openIndex === i
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)] group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {service.title}
                  </span>
                  <div className="flex items-center gap-3">
                    <ArrowUpRight
                      size={16}
                      className={`text-[var(--muted)] group-hover:text-[var(--accent)] transition-all ${
                        openIndex === i ? "opacity-0 w-0" : ""
                      }`}
                    />
                    <ChevronDown
                      size={16}
                      className={`text-[var(--muted)] transition-transform ${
                        openIndex === i ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easing }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed">
                        {service.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
