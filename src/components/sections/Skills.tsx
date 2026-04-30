"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    color: "#6C3CE1",
    bg: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
    skills: ["React.js", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "ShadCN/UI", "Material UI"],
  },
  {
    label: "Backend",
    color: "#3b82f6",
    bg: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    skills: [".NET Core", "ASP.NET Web API", "C#", "Node.js", "REST APIs", "C++"],
  },
  {
    label: "Database",
    color: "#22c55e",
    bg: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    skills: ["SQL Server", "MySQL", "Azure SQL", "Entity Framework", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    color: "#f97316",
    bg: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    skills: ["Microsoft Azure", "Azure AI", "Azure Web Apps", "Docker", "CI/CD", "Git", "GitHub"],
  },
  {
    label: "AI & ML",
    color: "#8b5cf6",
    bg: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    skills: ["Azure AI Document Intelligence", "Azure Cognitive Services", "NLP", "Computer Vision"],
  },
  {
    label: "Design & Tools",
    color: "#ec4899",
    bg: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    skills: ["Figma", "Adobe Photoshop", "Illustrator", "CorelDraw", "Chart.js", "Postman", "VS Code"],
  },
];

const certs = [
  {
    title: "Azure AI Engineer Associate",
    code: "AI-102",
    desc: "AI solution design, Document Intelligence, NLP, Computer Vision",
    color: "#6C3CE1",
  },
  {
    title: "Azure Fundamentals",
    code: "AZ-900",
    desc: "Cloud architecture, security, and core Azure services",
    color: "#3b82f6",
  },
  {
    title: "AI Fundamentals",
    code: "AI-900",
    desc: "AI/ML concepts, Cognitive Services, Azure AI capabilities",
    color: "#8b5cf6",
  },
  {
    title: "TCS iON Career Edge",
    code: "YP",
    desc: "Young Professional certification — communication & workplace readiness",
    color: "#f97316",
  },
  {
    title: "AI Hackathon Runner-Up",
    code: "🏆",
    desc: "IMRIEL × Allata — Innovative AI-based solution",
    color: "#22c55e",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-10 border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
            Expertise
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-[var(--foreground)] font-display">
            Skills & Stack
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.07, ease: easing }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-5 rounded-full" style={{ backgroundColor: group.color }} />
                <p className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider">
                  {group.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full cursor-default ${group.bg}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certs */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
            Certifications & Achievements
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: easing }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-5 shadow-sm group hover:border-[var(--accent)] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.code}
                </div>
                <h4 className="text-sm font-bold text-[var(--foreground)] mb-1 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
