"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ViewVoiceMockup } from "@/components/ProjectMockups";
import { PatternBackground } from "@/components/patterns/PatternBackground";

interface Service {
  title: string;
  detail: string;
}

const services: Service[] = [
  {
    title: "Web Application Development",
    detail:
      "I architect and ship full-stack web applications that handle real load — React, Angular, Next.js, and .NET Core. Clean code, 90%+ test coverage, built to scale from day one.",
  },
  {
    title: "AI & Cloud Solutions",
    detail:
      "3× Azure certified. I build AI pipelines that process documents at 95% accuracy, automate workflows, and surface insights your team can actually act on.",
  },
  {
    title: "UI/UX Design",
    detail:
      "Pixel-perfect from Figma to code. I design interfaces that convert visitors into clients — beautiful, accessible, fast.",
  },
  {
    title: "Backend & API Development",
    detail:
      "Rock-solid APIs with ASP.NET Core and Node.js. Authentication, rate limiting, documentation — the boring stuff done right so your product never fails.",
  },
  {
    title: "Graphic Design & Branding",
    detail:
      "50+ brand identities delivered. From logo to launch, I build brands that mean something. Photoshop, Illustrator, CorelDraw, Figma.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="services" className="relative py-24 md:py-36 border-t border-[var(--border)] overflow-hidden">
      {/* Pattern background */}
      <PatternBackground pattern="diagonal" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-[40%_55%] gap-12 md:gap-16 items-start">

          {/* Left column: heading + visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: easing }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display leading-[1.1]">
              We offer<br />many services
            </h2>

            {/* Visual card — website mockup */}
            <div className="hidden md:block bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-0 overflow-hidden" style={{ height: "300px" }}>
              <ViewVoiceMockup />
            </div>
          </motion.div>

          {/* Right column: service accordion */}
          <div className="md:pt-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: easing }}
                className="border-b border-[var(--border)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 group text-left"
                  aria-expanded={openIndex === i}
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
                  <FiArrowUpRight
                    size={18}
                    className={`shrink-0 ml-4 transition-all duration-300 text-[var(--muted)] group-hover:text-[var(--accent)] ${
                      openIndex === i ? "rotate-45 text-[var(--accent)]" : ""
                    }`}
                  />
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
