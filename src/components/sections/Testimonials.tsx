"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-14" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
            Social Proof
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--foreground)] font-display">
            Trusted by builders & founders
          </h2>
        </motion.div>
      </div>

      {/* First marquee row — forward */}
      <div className="relative mb-5">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

        <div
          className="flex gap-6 animate-marquee"
          style={{ width: "max-content" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "running";
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[380px] shrink-0 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
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

      {/* Second marquee row — reverse */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

        <div
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "marquee 35s linear infinite reverse",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState =
              "running";
          }}
        >
          {[...doubled].reverse().map((t, i) => (
            <div
              key={i}
              className="w-[380px] shrink-0 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
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
