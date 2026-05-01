"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FiMonitor, FiEdit, FiServer, FiCloud } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  detail: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Web Application Development",
    icon: FiMonitor,
    detail:
      "I architect and ship full-stack web applications that handle real load — React, Angular, Next.js, and .NET Core. Clean code, 90%+ test coverage, built to scale from day one.",
  },
  {
    title: "AI & Cloud Solutions",
    icon: FiCloud,
    detail:
      "3× Azure certified. I build AI pipelines that process documents at 95% accuracy, automate workflows, and surface insights your team can actually act on.",
  },
  {
    title: "UI/UX Design",
    icon: FiEdit,
    detail:
      "Pixel-perfect from Figma to code. I design interfaces that convert visitors into clients — beautiful, accessible, fast.",
  },
  {
    title: "Backend & API Development",
    icon: FiServer,
    detail:
      "Rock-solid APIs with ASP.NET Core and Node.js. Authentication, rate limiting, documentation — the boring stuff done right so your product never fails.",
  },
  {
    title: "Graphic Design & Branding",
    icon: SiFigma,
    detail:
      "50+ brand identities delivered. From logo to launch, I build brands that mean something. Photoshop, Illustrator, CorelDraw, Figma.",
  },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your goals, users, and constraints." },
  { num: "02", title: "Design",   desc: "Wireframes and prototypes — vision before code." },
  { num: "03", title: "Build",    desc: "Clean, tested, production-grade engineering." },
  { num: "04", title: "Deploy",   desc: "Ship fast, monitor closely, iterate smarter." },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="services" className="py-24 md:py-36 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" ref={ref}>

        {/* Heading */}
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
            I craft experiences<br />that convert
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Process flow card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="hidden md:block bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
              My Process
            </p>
            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => (
                <div key={step.num} className="relative flex gap-5">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div
                      className="absolute left-[19px] top-10 w-px bg-[var(--border)]"
                      style={{ height: "calc(100% - 8px)" }}
                    />
                  )}
                  {/* Number circle */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center z-10">
                    <span className="text-[10px] font-black text-[var(--accent)] tracking-tight">
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="text-base font-bold text-[var(--foreground)] mb-0.5">{step.title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service accordion */}
          <div>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
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
                      className={`flex items-center gap-3 text-lg font-semibold transition-colors ${
                        openIndex === i
                          ? "text-[var(--accent)]"
                          : "text-[var(--foreground)] group-hover:text-[var(--accent)]"
                      }`}
                    >
                      <Icon
                        size={17}
                        className={`shrink-0 transition-colors ${
                          openIndex === i ? "text-[var(--accent)]" : "text-[var(--muted)]"
                        }`}
                      />
                      {service.title}
                    </span>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
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
                        <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed pl-8">
                          {service.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
