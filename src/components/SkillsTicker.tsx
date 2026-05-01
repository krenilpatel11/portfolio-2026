"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Palette, 
  Server,
  Box,
  GitBranch,
  FileCode,
  Layers,
  Workflow,
  Terminal
} from "lucide-react";

// Flattened skills list with icons
const allSkills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Next.js", icon: Layers },
  { name: "Angular", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "ASP.NET Core", icon: Server },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Workflow },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Cloud },
  { name: "Redis", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "SQL Server", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "CI/CD", icon: Workflow },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Figma", icon: Palette },
  { name: "Azure AI", icon: Cpu },
  { name: "REST APIs", icon: Terminal },
  { name: "Microservices", icon: Workflow },
  { name: "Clean Architecture", icon: Layers },
];

// Duplicate for seamless loop
const duplicatedSkills = [...allSkills, ...allSkills];

export function SkillsTicker() {
  return (
    <div className="relative py-8 overflow-hidden border-y border-[var(--border)] bg-[var(--card-bg)]/30">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1 * (allSkills.length * 180)], // 180px = width per skill chip
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: allSkills.length * 3, // 3 seconds per skill
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] shrink-0 hover:border-[var(--accent)] hover:bg-[var(--card-bg)] transition-all duration-300 group"
              style={{ minWidth: "160px" }}
            >
              {/* Icon */}
              <div className="p-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300">
                <Icon className="w-4 h-4 text-[var(--muted)] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Skill name */}
              <span className="text-sm font-semibold text-[var(--foreground)] whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
