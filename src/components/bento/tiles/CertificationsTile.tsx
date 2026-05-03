"use client";

import { BentoTile } from "../BentoTile";
import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useVibeTheme } from "@/context/VibeThemeContext";

export function CertificationsTile({ delay = 0 }: { delay?: number }) {
  const { currentVibe } = useVibeTheme();
  
  // Get mood-reactive color
  const baseColor = currentVibe.colors.primary;
  const secondaryColor = currentVibe.colors.secondary;
  
  const certs = [
    { 
      name: "AI-102", 
      full: "Azure AI Engineer",
      icon: "🤖",
    },
    { 
      name: "AZ-900", 
      full: "Azure Fundamentals",
      icon: "☁️",
    },
    { 
      name: "AI-900", 
      full: "Azure AI Fundamentals",
      icon: "🧠",
    },
  ];

  return (
    <BentoTile delay={delay} className="hover:shadow-lg !min-h-[180px]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-700"
          style={{ 
            background: `linear-gradient(135deg, ${baseColor} 0%, ${secondaryColor} 100%)`,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
        </motion.div>
        <div>
          <div 
            className="text-3xl font-bold font-display transition-colors duration-700"
            style={{ color: baseColor }}
          >
            3×
          </div>
          <h3 className="text-xs font-semibold text-[var(--muted)]">Microsoft Certified</h3>
        </div>
      </div>

      {/* Certifications List */}
      <div className="space-y-2">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 * index, duration: 0.4 }}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[var(--card-bg)] transition-all group cursor-pointer"
          >
            <div className="text-base flex-shrink-0">{cert.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span 
                  className="font-mono font-bold text-xs transition-colors duration-700" 
                  style={{ color: index === 0 ? baseColor : index === 1 ? secondaryColor : baseColor }}
                >
                  {cert.name}
                </span>
                <CheckCircle2 
                  className="w-3 h-3 flex-shrink-0 transition-colors duration-700" 
                  style={{ color: baseColor }}
                />
              </div>
              <p className="text-xs text-[var(--muted)] truncate">{cert.full}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </BentoTile>
  );
}
