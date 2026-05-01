"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowUpRight, FiGlobe, FiCpu, FiLayers, FiServer, FiEdit3 } from "react-icons/fi";
import { ViewVoiceMockup } from "@/components/ProjectMockups";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import { services } from "@/lib/services";
import { useMood } from "@/context/MoodContext";

// Icon mapping
const iconMap = {
  Globe: FiGlobe,
  Brain: FiCpu, // Using CPU icon for AI/Brain
  Palette: FiLayers,
  Server: FiServer,
  PenTool: FiEdit3,
};

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const { currentMood } = useMood();

  return (
    <section id="services" className="relative py-24 md:py-36  overflow-hidden">
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
            <div>
              <motion.h2
                key={currentMood.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display leading-[1.1]"
              >
                {currentMood.variants.services.title}
              </motion.h2>
              <motion.p
                key={`${currentMood.id}-services-subtitle`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm text-[var(--muted)] mt-2"
              >
                {currentMood.variants.services.subtitle}
              </motion.p>
            </div>

            {/* Visual card — website mockup */}
            <div className="hidden md:block bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-0 overflow-hidden" style={{ height: "300px" }}>
              <ViewVoiceMockup />
            </div>
          </motion.div>

          {/* Right column: service accordion */}
          <div className="md:pt-2">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || FiGlobe;
              const isOpen = openIndex === i;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: easing }}
                  className={`border-b border-[var(--border)] group relative ${
                    isOpen ? "bg-[var(--card-bg)]" : ""
                  } transition-all duration-300 rounded-lg ${isOpen ? "px-4 my-2" : ""}`}
                  style={{
                    boxShadow: isOpen ? "0 2px 12px -4px var(--accent)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Number + Icon + Title */}
                    <div className="flex items-center gap-4">
                      {/* Number indicator */}
                      <span className={`text-sm font-mono font-semibold transition-colors ${
                        isOpen ? "text-[var(--accent)]" : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      
                      {/* Icon */}
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isOpen 
                          ? "bg-[var(--accent)] text-white" 
                          : "bg-[var(--card-bg)] text-[var(--muted)] group-hover:bg-[var(--accent)] group-hover:text-white"
                      }`}>
                        <Icon size={20} />
                      </div>
                      
                      {/* Title */}
                      <span
                        className={`text-lg font-semibold transition-colors ${
                          isOpen
                            ? "text-[var(--accent)]"
                            : "text-[var(--foreground)] group-hover:text-[var(--accent)]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    
                    {/* Arrow */}
                    <FiArrowUpRight
                      size={18}
                      className={`shrink-0 ml-4 transition-all duration-300 ${
                        isOpen 
                          ? "rotate-45 text-[var(--accent)]" 
                          : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: easing }}
                        className="overflow-hidden"
                      >
                        {/* Description */}
                        <p className="pb-4 text-sm text-[var(--muted)] leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 pb-5">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--background)] border border-[var(--accent)] text-[var(--accent)] transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
