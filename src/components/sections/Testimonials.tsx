"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { PatternBackground } from "@/components/patterns/PatternBackground";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-36 border-t border-[var(--border)] overflow-hidden"
    >
      {/* Pattern background */}
      <PatternBackground pattern="waves" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-14 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[var(--foreground)] font-display">
            What people say
          </h2>
        </motion.div>
      </div>

      {/* Single marquee row */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

        <div
          className="flex gap-6 animate-marquee"
          style={{ width: "max-content" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[360px] shrink-0 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="text-amber-400 text-xs mb-3 tracking-wide">
                ★★★★★
              </div>
              {/* Quote mark */}
              <div className="text-5xl font-serif text-[var(--accent)] leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-5 line-clamp-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent)] to-purple-400 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
