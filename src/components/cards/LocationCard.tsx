"use client";
import { motion } from "framer-motion";

export default function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm flex flex-col h-full"
    >
      {/* Map-like visual */}
      <div className="flex-1 bg-neutral-100 relative min-h-[140px] overflow-hidden">
        {/* Abstract map grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 300 200"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 18} x2="300" y2={i * 18} stroke="#888" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 18} y1="0" x2={i * 18} y2="200" stroke="#888" strokeWidth="0.5" />
          ))}
          {/* Road-like shapes */}
          <path d="M30 80 Q80 60 140 90 Q200 120 260 100" stroke="#555" strokeWidth="2" fill="none" />
          <path d="M0 130 Q70 110 130 140 Q190 170 300 150" stroke="#555" strokeWidth="1.5" fill="none" />
          <path d="M100 0 Q120 60 110 130 Q100 180 115 200" stroke="#555" strokeWidth="1.5" fill="none" />
          <circle cx="150" cy="100" r="5" fill="#f97316" />
          <circle cx="150" cy="100" r="12" fill="#f97316" opacity="0.2" />
        </svg>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full border border-neutral-200">
          Map
        </div>
      </div>

      {/* City name */}
      <div className="p-5 text-center">
        <p className="text-2xl font-bold tracking-widest text-neutral-900 uppercase">Vadodara</p>
        <p className="text-xs tracking-widest uppercase text-neutral-400 mt-0.5">Gujarat, India</p>
        <p className="text-xs text-neutral-300 mt-1">22.3072° N, 73.1812° E</p>
      </div>
    </motion.div>
  );
}
