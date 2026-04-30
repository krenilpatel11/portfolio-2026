"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section className="pt-28 pb-10 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Big headline */}
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-neutral-900 mb-2">
          <span className="inline-flex items-center gap-3">
            Hi, I&apos;m{" "}
            {/* Inline avatar */}
            <span className="inline-flex w-[0.95em] h-[0.95em] rounded-full overflow-hidden align-middle border-2 border-neutral-200 shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-[0.35em]">
                KP
              </div>
            </span>
            {resume.name}!
          </span>
        </h1>

        <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-neutral-400">I&apos;m a </span>
          <span className="text-neutral-900">Full Stack Engineer </span>
          <span className="text-neutral-400">at </span>
          <br />
          <span className="text-orange-500">IMRIEL Software.</span>{" "}
          {/* Open to work badge */}
          <span className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full align-middle shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to work
          </span>
        </h2>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-700 transition-colors text-white font-semibold px-8 py-4 rounded-full text-base shadow-sm"
          >
            Book a call
          </a>
          <p className="text-neutral-500 text-base max-w-xs leading-relaxed">
            Feel free to explore my portfolio and reach out—I&apos;d love to connect!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
