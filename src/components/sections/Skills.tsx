"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import {
  FiMonitor, FiServer, FiDatabase, FiCpu,
  FiFeather, FiAward, FiZap, FiCloud, FiExternalLink,
} from "react-icons/fi";
import {
  SiReact, SiAngular, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiDotnet, SiSharp, SiNodedotjs, SiMysql,
  SiMongodb, SiDocker, SiGit, SiGithub, SiFigma, SiPostman,
  SiHtml5, SiCss, SiRedis,
} from "react-icons/si";
import type { IconType } from "react-icons";

const skillIconMap: Record<string, IconType> = {
  "React.js": SiReact, Angular: SiAngular, "Next.js": SiNextdotjs,
  TypeScript: SiTypescript, JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss, ".NET Core": SiDotnet, "C#": SiSharp,
  "Node.js": SiNodedotjs, MySQL: SiMysql, MongoDB: SiMongodb,
  Docker: SiDocker, Git: SiGit, GitHub: SiGithub, Figma: SiFigma,
  Postman: SiPostman, HTML5: SiHtml5, CSS3: SiCss,
  "Microsoft Azure": FiCloud, "Azure AI": FiCpu,
  AWS: FiCloud, Redis: SiRedis,
};

const skillGroups = [
  {
    label: "Frontend",
    color: "#6C3CE1",
    bg: "rgba(108,60,225,0.1)",
    tx: "#6C3CE1",
    GroupIcon: FiMonitor,
    skills: ["React.js","Angular","Next.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","ShadCN/UI","Material UI"],
  },
  {
    label: "Backend",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    tx: "#3b82f6",
    GroupIcon: FiServer,
    skills: [".NET Core","ASP.NET Web API","C#","Node.js","REST APIs","C++"],
  },
  {
    label: "Database",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    tx: "#16a34a",
    GroupIcon: FiDatabase,
    skills: ["SQL Server","MySQL","Azure SQL","Entity Framework","MongoDB","Redis"],
  },
  {
    label: "Cloud & DevOps",
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    tx: "#ea580c",
    GroupIcon: FiCloud,
    skills: ["Microsoft Azure","AWS","Azure AI","Azure Web Apps","Docker","CI/CD","Git","GitHub","Kubernetes"],
  },
  {
    label: "AI & ML",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    tx: "#7c3aed",
    GroupIcon: FiCpu,
    skills: ["Azure AI Document Intelligence","Azure Cognitive Services","NLP","Computer Vision"],
  },
  {
    label: "Design & Tools",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    tx: "#db2777",
    GroupIcon: FiFeather,
    skills: ["Figma","Adobe Photoshop","Illustrator","CorelDraw","Chart.js","Postman","VS Code"],
  },
];

const certs = [
  {
    title: "Azure AI Engineer Associate",
    code: "AI-102",
    desc: "AI solution design, Document Intelligence, NLP, Computer Vision",
    color: "#6C3CE1",
    CertIcon: FiCpu,
    badge: "Microsoft",
    year: "2024",
  },
  {
    title: "Azure Fundamentals",
    code: "AZ-900",
    desc: "Cloud architecture, security, and core Azure services",
    color: "#3b82f6",
    CertIcon: FiCloud,
    badge: "Microsoft",
    year: "2024",
  },
  {
    title: "AI Fundamentals",
    code: "AI-900",
    desc: "AI/ML concepts, Cognitive Services, Azure AI capabilities",
    color: "#8b5cf6",
    CertIcon: FiCpu,
    badge: "Microsoft",
    year: "2024",
  },
  {
    title: "TCS iON Career Edge",
    code: "YP",
    desc: "Young Professional certification — communication & workplace readiness",
    color: "#f97316",
    CertIcon: FiAward,
    badge: "TCS iON",
    year: "2022",
  },
  {
    title: "AI Hackathon Runner-Up",
    code: "🏆",
    desc: "IMRIEL × Allata — Innovative AI-based solution",
    color: "#22c55e",
    CertIcon: FiZap,
    badge: "Achievement",
    year: "2024",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="skills" className="relative py-24 md:py-36  overflow-hidden">
      {/* Pattern background - more visible */}
      <PatternBackground pattern="hexagon" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
              Expertise
            </p>
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display leading-none">
              My Arsenal
            </h2>
          </div>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xs text-right hidden md:block">
            The tools I reach for every day — from frontend to cloud.
          </p>
        </motion.div>

        {/* ── Skill Groups ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08, ease: easing }}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300 group"
            >
              {/* Group header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: group.bg }}
                >
                  <group.GroupIcon size={15} style={{ color: group.color }} />
                </div>
                <p className="text-sm font-bold text-[var(--foreground)] tracking-wide">
                  {group.label}
                </p>
                <span
                  className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: group.bg, color: group.tx }}
                >
                  {group.skills.length}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, si) => {
                  const SkillIcon = skillIconMap[skill];
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: gi * 0.08 + si * 0.025 }}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--foreground)] bg-[var(--background)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] cursor-default transition-all"
                    >
                      {SkillIcon && <SkillIcon size={10} />}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: easing }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
                Credentials
              </p>
              <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold font-display tracking-tight text-[var(--foreground)]">
                Certifications & Achievements
              </h3>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: easing }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-5 overflow-hidden group cursor-default transition-all duration-300 hover:shadow-xl"
                style={{ boxShadow: `0 0 0 0 ${cert.color}00` }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${cert.color}18, transparent 70%)` }}
                />
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ backgroundColor: cert.color }}
                />

                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-4 mt-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cert.color}18` }}
                  >
                    <cert.CertIcon size={20} style={{ color: cert.color }} />
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                    style={{ color: cert.color, borderColor: `${cert.color}40`, backgroundColor: `${cert.color}10` }}
                  >
                    {cert.code}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--foreground)] mb-1.5 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
                  {cert.desc}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wide">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] text-[var(--muted)]">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
