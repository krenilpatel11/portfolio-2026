"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiCode, FiCpu, FiFeather, FiZap, FiGlobe, FiCloud, FiLayers, FiShield, FiServer, FiMonitor } from "react-icons/fi";
import type { IconType } from "react-icons";
import { PatternBackground } from "@/components/patterns/PatternBackground";
import { useVibeTheme } from "@/context/VibeThemeContext";
import type { ThemeId } from "@/lib/themes";

// Define persona-specific cards for each theme
type PersonaCard = {
  icon: IconType;
  title: string;
  front: string;
  detail: string;
  gradient: string;
  accent: string;
  barColor: string;
};

const personaCards: Record<ThemeId, PersonaCard[]> = {
  fullstack: [
    {
      icon: FiCode,
      title: "The Orchestrator",
      front: "End-to-End Ownership",
      detail: "I conduct the entire symphony—frontend melodies, backend harmonies, database rhythms. Every layer speaks the same language: production-ready.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#6C3CE1",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiLayers,
      title: "The Bridge Builder",
      front: "Connecting All Layers",
      detail: "APIs aren't just endpoints—they're conversations. I design systems where frontend dreams meet backend reality seamlessly.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiZap,
      title: "The Shipper",
      front: "0 to Production",
      detail: "Ideas become features. Features become products. Products reach users. I don't just code—I ship, monitor, and iterate until it's perfect.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiServer,
      title: "The Stack Master",
      front: "All Technologies, One Vision",
      detail: "React, Angular, .NET Core, Azure, SQL—I don't pick favorites. I pick what solves the problem best and master it completely.",
      gradient: "from-orange-500/20 to-orange-300/10",
      accent: "#f97316",
      barColor: "from-orange-500 to-orange-300",
    },
    {
      icon: FiCloud,
      title: "The Architect",
      front: "Scalable by Design",
      detail: "500 users today. 5,000 tomorrow. 50,000 next year. I build systems that grow with ambition, not crumble under it.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
    {
      icon: FiGlobe,
      title: "The Problem Solver",
      front: "Real Solutions, Real Impact",
      detail: "Every feature solves a user pain. Every optimization saves time. Every refactor prevents future headaches. Engineering with empathy.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
  ],
  frontend: [
    {
      icon: FiMonitor,
      title: "The Pixel Perfectionist",
      front: "Every Detail Matters",
      detail: "1px off? I notice. Inconsistent spacing? Fixed. Janky animations? Smoothed to 60fps. The UI isn't done until it's flawless.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiFeather,
      title: "The Component Craftsman",
      front: "Reusable, Composable, Scalable",
      detail: "I build design systems, not just components. Every button, every card, every input—a building block for infinite possibilities.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiZap,
      title: "The Performance Hunter",
      front: "Fast is a Feature",
      detail: "Lazy loading, code splitting, memoization, virtualization—I obsess over milliseconds because users feel every one of them.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiCode,
      title: "The State Wizard",
      front: "Taming Complexity",
      detail: "Zustand, React Query, Context—I orchestrate state like a symphony. Complex UIs feel simple because chaos is organized beneath.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiGlobe,
      title: "The UX Advocate",
      front: "Users First, Always",
      detail: "Accessibility isn't optional. Responsive isn't extra. Loading states aren't afterthoughts. I build interfaces that respect humans.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
    {
      icon: FiLayers,
      title: "The Framework Fluent",
      front: "React, Angular, Next.js",
      detail: "Framework wars are noise. I master tools, not dogma. React's hooks, Angular's DI, Next.js SSR—I speak all dialects fluently.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
  ],
  backend: [
    {
      icon: FiServer,
      title: "The API Architect",
      front: "RESTful, Robust, Real-time",
      detail: "I design APIs that frontend devs love. Clear contracts, predictable errors, blazing speed. Communication done right.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiCpu,
      title: "The Database Whisperer",
      front: "SQL Optimization Master",
      detail: "Slow queries become instant. N+1 problems disappear. Indexes are poetry. I make databases sing at scale.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiShield,
      title: "The Security Guardian",
      front: "Zero Trust, Full Protection",
      detail: "Authentication, authorization, encryption, validation—security isn't bolted on, it's baked in from line one.",
      gradient: "from-red-500/20 to-red-300/10",
      accent: "#ef4444",
      barColor: "from-red-500 to-red-300",
    },
    {
      icon: FiZap,
      title: "The Performance Optimizer",
      front: "Milliseconds Matter",
      detail: "Caching strategies, async processing, connection pooling—I squeeze every ounce of speed from servers and databases.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiLayers,
      title: "The Microservices Maven",
      front: "Distributed by Design",
      detail: "Monoliths become services. Services become systems. I build backends that scale horizontally without breaking a sweat.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiCode,
      title: "The .NET Craftsman",
      front: "C# & ASP.NET Core",
      detail: "LINQ elegance, dependency injection patterns, middleware pipelines—I write backend code that's clean, testable, and bulletproof.",
      gradient: "from-purple-500/20 to-purple-300/10",
      accent: "#a855f7",
      barColor: "from-purple-500 to-purple-300",
    },
  ],
  devops: [
    {
      icon: FiCloud,
      title: "The Pipeline Master",
      front: "CI/CD Excellence",
      detail: "Push to main, tests run, deploy succeeds, users smile. Automation isn't magic—it's discipline and great tooling.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiServer,
      title: "The Infrastructure Sculptor",
      front: "Terraform & Azure",
      detail: "Infrastructure as code isn't just versioned—it's reviewed, tested, and deployed like any other feature. Infra is a product.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiLayers,
      title: "The Container Conductor",
      front: "Docker & Kubernetes",
      detail: "Apps run anywhere because they run everywhere the same. Containers democratize deployment—I orchestrate the chaos.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
    {
      icon: FiZap,
      title: "The Monitoring Ninja",
      front: "Observability is King",
      detail: "Logs, metrics, traces—I see everything. Problems are caught before users notice. Incidents become learning opportunities.",
      gradient: "from-orange-500/20 to-orange-300/10",
      accent: "#f97316",
      barColor: "from-orange-500 to-orange-300",
    },
    {
      icon: FiShield,
      title: "The Security Enforcer",
      front: "Secure by Default",
      detail: "Secrets in vaults, least privilege access, automated security scans—DevSecOps isn't a buzzword, it's how I build.",
      gradient: "from-red-500/20 to-red-300/10",
      accent: "#ef4444",
      barColor: "from-red-500 to-red-300",
    },
    {
      icon: FiCpu,
      title: "The Performance Engineer",
      front: "99.9% Uptime Culture",
      detail: "Auto-scaling, health checks, zero-downtime deploys—I build systems that sleep so developers don't have to.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
  ],
  architect: [
    {
      icon: FiLayers,
      title: "The System Designer",
      front: "Blueprints for Scale",
      detail: "I see the forest and every tree. Microservices, monoliths, event-driven, serverless—I choose architecture that fits, not trends.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiCpu,
      title: "The Trade-off Master",
      front: "Decisions with Consequences",
      detail: "Consistency vs availability. Latency vs throughput. Complexity vs maintainability. I weigh every choice like an engineer should.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiCloud,
      title: "The Cloud Native Thinker",
      front: "Born for the Cloud",
      detail: "I design systems that breathe cloud—elastic, resilient, distributed. Azure isn't just infrastructure, it's the foundation.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
    {
      icon: FiCode,
      title: "The Pattern Practitioner",
      front: "Design Patterns in Action",
      detail: "CQRS, Event Sourcing, Saga, Strangler Fig—patterns aren't academic, they're battle-tested solutions I implement daily.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiServer,
      title: "The Domain Expert",
      front: "Business Logic, Beautifully Modeled",
      detail: "Domain-driven design isn't hype—it's how complex systems stay understandable. Ubiquitous language bridges dev and business.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiZap,
      title: "The Future-Proofer",
      front: "Built to Evolve",
      detail: "Requirements change. Teams scale. Tech advances. I architect systems flexible enough to adapt without a rewrite.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
  ],
  designer: [
    {
      icon: FiFeather,
      title: "The Visual Storyteller",
      front: "Every Pixel Tells a Story",
      detail: "Design isn't decoration—it's communication. Colors convey emotion, spacing guides attention, animation reveals intention.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
    {
      icon: FiMonitor,
      title: "The Figma Virtuoso",
      front: "From Mockup to Masterpiece",
      detail: "Auto-layout, variants, components—I build design systems in Figma that developers love implementing. Handoff is seamless.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiGlobe,
      title: "The User Empathizer",
      front: "Design with Heart",
      detail: "I design for humans, not screens. Accessibility, readability, delight—if users feel friction, design failed.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiZap,
      title: "The Micro-Interaction Artist",
      front: "Details That Delight",
      detail: "Hover states, loading spinners, success animations—I sweat the small stuff because small stuff builds trust.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiLayers,
      title: "The Brand Builder",
      front: "50+ Identities Crafted",
      detail: "Logos, color systems, typography—I've shaped brands from nothing into something people remember and trust.",
      gradient: "from-red-500/20 to-red-300/10",
      accent: "#ef4444",
      barColor: "from-red-500 to-red-300",
    },
    {
      icon: FiCode,
      title: "The Design-Dev Bridge",
      front: "Designs That Ship",
      detail: "I design with code constraints in mind. Responsive by nature, performant by design, implementable without compromise.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
  ],
  hacker: [
    {
      icon: FiShield,
      title: "The Vulnerability Hunter",
      front: "Break to Build Better",
      detail: "XSS, CSRF, SQL injection, auth bypass—I find holes before attackers do. Security through offensive thinking.",
      gradient: "from-red-500/20 to-red-300/10",
      accent: "#ef4444",
      barColor: "from-red-500 to-red-300",
    },
    {
      icon: FiCode,
      title: "The Code Auditor",
      front: "Reading Between the Lines",
      detail: "Every line is a clue. Every pattern is evidence. I read code like a detective reads crime scenes—finding what others miss.",
      gradient: "from-orange-500/20 to-orange-300/10",
      accent: "#f97316",
      barColor: "from-orange-500 to-orange-300",
    },
    {
      icon: FiCpu,
      title: "The Exploit Craftsman",
      front: "Proof of Concept Master",
      detail: "Theoretical vulnerabilities become real exploits. I prove risk with code, not just reports. Show, don't tell.",
      gradient: "from-purple-500/20 to-purple-300/10",
      accent: "#a855f7",
      barColor: "from-purple-500 to-purple-300",
    },
    {
      icon: FiLayers,
      title: "The Defense Designer",
      front: "Security Architecture",
      detail: "Firewalls, WAF rules, rate limiting, encryption—I don't just find problems, I architect solutions that prevent entire classes of attacks.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiZap,
      title: "The Incident Responder",
      front: "Calm in Chaos",
      detail: "Breach detected? I'm already investigating. Logs analyzed, attack vectors identified, patches deployed. Firefighting with precision.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiGlobe,
      title: "The Ethical Guardian",
      front: "Hacker, Not Criminal",
      detail: "White hat mindset. Responsible disclosure. I break systems to make the internet safer, not for ego or profit.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
  ],
  ai_engineer: [
    {
      icon: FiCloud,
      title: "The AI Architect",
      front: "Azure AI-102 Certified",
      detail: "I don't just prompt AI—I architect it. Document Intelligence, Custom Vision, Language Understanding—built at 95% accuracy.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiCpu,
      title: "The Model Tamer",
      front: "From Raw Data to Intelligence",
      detail: "Fine-tuning, prompt engineering, RAG architectures—I transform large models into precise, production-ready solutions.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiCode,
      title: "The Integration Specialist",
      front: "AI Meets Real Apps",
      detail: "APIs, SDKs, embedding pipelines—I integrate AI into existing systems seamlessly. Intelligence without disruption.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiLayers,
      title: "The Pipeline Builder",
      front: "MLOps Done Right",
      detail: "Data ingestion, preprocessing, training, deployment, monitoring—I build AI pipelines that scale from prototype to production.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
    {
      icon: FiZap,
      title: "The Performance Optimizer",
      front: "Fast AI, Happy Users",
      detail: "Latency matters. Batch processing, caching, quantization—I make AI responses instant, not eventual.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiShield,
      title: "The Ethical AI Advocate",
      front: "Responsible Intelligence",
      detail: "Bias detection, fairness metrics, transparent decisions—I build AI that respects humans, not just optimizes metrics.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
  ],
  visionary: [
    {
      icon: FiGlobe,
      title: "The Trend Spotter",
      front: "What's Next?",
      detail: "I see patterns before they're trends. WebAssembly, Edge Computing, AI Agents—I experiment today with tomorrow's mainstream.",
      gradient: "from-purple-500/20 to-purple-300/10",
      accent: "#a855f7",
      barColor: "from-purple-500 to-purple-300",
    },
    {
      icon: FiZap,
      title: "The Innovation Driver",
      front: "First to Experiment",
      detail: "New framework? I'm testing it. New paradigm? I'm building with it. Safe bets are boring—I chase cutting edge.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
    {
      icon: FiLayers,
      title: "The Problem Reframer",
      front: "Question Everything",
      detail: "Best practices are starting points, not dogma. I challenge assumptions and find better ways to solve old problems.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiCloud,
      title: "The Product Thinker",
      front: "Tech Meets Business",
      detail: "I don't build for engineering beauty—I build for user impact and business value. Technology is a means, not an end.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#10b981",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiCode,
      title: "The Idea Generator",
      front: "10x Thinking",
      detail: "Incremental improvements are fine. 10x leaps are better. I push teams to think bigger, aim higher, build bolder.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiFeather,
      title: "The Storyteller",
      front: "Vision Through Words",
      detail: "Complex ideas become clear narratives. Technical visions inspire teams. I communicate the future others can't yet see.",
      gradient: "from-cyan-500/20 to-cyan-300/10",
      accent: "#06b6d4",
      barColor: "from-cyan-500 to-cyan-300",
    },
  ],
  founder: [
    {
      icon: FiZap,
      title: "The Builder",
      front: "LabelFlow: 0 to 1",
      detail: "Solo founder, solo developer, solo designer—I built LabelFlow from idea to profitable agency in 12 months. When I see a gap, I fill it.",
      gradient: "from-emerald-500/20 to-emerald-300/10",
      accent: "#22c55e",
      barColor: "from-emerald-500 to-emerald-300",
    },
    {
      icon: FiGlobe,
      title: "The Customer Listener",
      front: "Users, Not Assumptions",
      detail: "I ship, I listen, I iterate. Every feature is a hypothesis tested with real users. Founder ego kills products—empathy builds them.",
      gradient: "from-blue-500/20 to-blue-300/10",
      accent: "#3b82f6",
      barColor: "from-blue-500 to-blue-300",
    },
    {
      icon: FiLayers,
      title: "The Scrappy Operator",
      front: "Do More with Less",
      detail: "No funding? No team? No problem. I automate, outsource, and prioritize ruthlessly. Constraints breed creativity.",
      gradient: "from-amber-500/20 to-amber-300/10",
      accent: "#f59e0b",
      barColor: "from-amber-500 to-amber-300",
    },
    {
      icon: FiCode,
      title: "The Product Engineer",
      front: "Code Meets Business",
      detail: "I don't just implement features—I shape products. Technical founder means understanding both stack traces and customer pain.",
      gradient: "from-violet-500/20 to-violet-300/10",
      accent: "#8b5cf6",
      barColor: "from-violet-500 to-violet-300",
    },
    {
      icon: FiCpu,
      title: "The Risk Calculator",
      front: "Bold Bets, Smart Hedges",
      detail: "Founding is controlled chaos. I take big swings on vision, small steps on execution. Fail fast, learn faster, ship fastest.",
      gradient: "from-orange-500/20 to-orange-300/10",
      accent: "#f97316",
      barColor: "from-orange-500 to-orange-300",
    },
    {
      icon: FiZap,
      title: "The Growth Hacker",
      front: "Scale Through Systems",
      detail: "Product-market fit is just the start. I build growth loops, referral engines, content flywheels—systems that compound.",
      gradient: "from-pink-500/20 to-pink-300/10",
      accent: "#ec4899",
      barColor: "from-pink-500 to-pink-300",
    },
  ],
};

// Persona-specific titles
const personaTitles: Record<ThemeId, string> = {
  fullstack: "The Complete Stack",
  frontend: "Interface Mastery",
  backend: "Server-Side Supremacy",
  devops: "Infrastructure as Art",
  architect: "Systems Thinking",
  designer: "Crafting Experiences",
  hacker: "Security Mindset",
  ai_engineer: "Intelligence Engineered",
  visionary: "Future-Forward Thinking",
  founder: "Zero to One",
};

// Persona-specific descriptions
const personaDescriptions: Record<ThemeId, string> = {
  fullstack: "Six layers. One vision. From database schema to pixel-perfect UI—I orchestrate complete digital experiences.",
  frontend: "Six principles. One obsession. Explore the art and science of interfaces that users love and developers admire.",
  backend: "Six pillars. One foundation. Discover the engineering that powers applications, scales systems, and secures data.",
  devops: "Six dimensions. One mission. Automation, observability, and reliability—building infrastructure that never sleeps.",
  architect: "Six perspectives. One blueprint. Systems designed for scale, resilience, and evolution—architecture that lasts.",
  designer: "Six facets. One philosophy. Where aesthetics meet function, and every detail creates delight.",
  hacker: "Six skills. One mindset. Breaking systems to build them stronger—security through offensive thinking.",
  ai_engineer: "Six capabilities. One goal. Transforming raw intelligence into production-ready AI that solves real problems.",
  visionary: "Six traits. One mission. Spotting trends, challenging norms, and building the future others can't yet see.",
  founder: "Six lessons. One journey. From idea to profitable product—the entrepreneur's playbook for building from nothing.",
};

function getTitleForPersona(themeId: ThemeId): string {
  return personaTitles[themeId];
}

function getDescriptionForPersona(themeId: ThemeId): string {
  return personaDescriptions[themeId];
}

function DeckCard({
  card,
  index,
  activeIndex,
  onClick,
}: {
  card: PersonaCard;
  index: number;
  activeIndex: number;
  onClick: () => void;
}) {
  const isActive = index === activeIndex;
  const Icon = card.icon;
  const offset = index - activeIndex;
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        x: isActive ? 0 : offset * 28,
        rotate: isActive ? 0 : offset * 3,
        scale: isActive ? 1 : 0.92 - Math.abs(offset) * 0.03,
        zIndex: isActive ? 10 : 10 - Math.abs(offset),
        opacity: Math.abs(offset) > 2 ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: easing }}
      className={`absolute inset-0 cursor-pointer rounded-3xl bg-gradient-to-br ${card.gradient} border border-white/10 dark:border-white/10 p-8 flex flex-col justify-between shadow-xl overflow-hidden`}
      style={{
        backgroundColor: `color-mix(in srgb, ${card.accent} 12%, var(--card-bg))`,
      }}
    >
      {/* Icon + title */}
      <div>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{ backgroundColor: `${card.accent}20` }}
        >
          <Icon size={22} style={{ color: card.accent }} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">
          {card.front}
        </p>
        <h3 className="text-2xl font-bold text-[var(--foreground)] font-display">
          {card.title}
        </h3>
      </div>

      <div>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
          {card.detail}
        </p>
        {/* Gradient accent bar */}
        <div
          className={`h-1 w-full rounded-full bg-gradient-to-r ${card.barColor} opacity-70`}
        />
      </div>
    </motion.div>
  );
}

export default function DeveloperDeck() {
  const { currentTheme } = useVibeTheme();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Get cards for current theme/persona
  const cards = personaCards[currentTheme.id];

  // Reset active card when theme changes
  React.useEffect(() => {
    setActive(0);
  }, [currentTheme.id]);

  return (
    <section
      id="developer-deck"
      className="relative py-16 md:py-20 scroll-mt-20  bg-[var(--card-bg)] overflow-hidden"
    >
      {/* Pattern background - more visible */}
      <PatternBackground pattern="dots" opacity={0.06} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: easing }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTheme.id + "-label"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3"
              >
                {currentTheme.label} {currentTheme.emoji}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTheme.id + "-title"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-4"
              >
                {getTitleForPersona(currentTheme.id)}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTheme.id + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[var(--muted)] leading-relaxed mb-8 max-w-md"
              >
                {getDescriptionForPersona(currentTheme.id)}
              </motion.p>
            </AnimatePresence>

            {/* Dot navigation */}
            <div className="flex gap-2.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-[var(--accent)]"
                      : "w-2 bg-[var(--border)]"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-30"
                disabled={active === 0}
              >
                ←
              </button>
              <button
                onClick={() =>
                  setActive((a) => Math.min(cards.length - 1, a + 1))
                }
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors disabled:opacity-30"
                disabled={active === cards.length - 1}
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Right: card deck */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="relative h-80 md:h-96"
          >
            {/* Card stack depth layers — outside overflow-hidden so rotation peeks out */}
            <div
              className="absolute inset-2 rounded-3xl bg-violet-200/70 dark:bg-violet-950/40"
              style={{ transform: "rotate(4deg)", zIndex: 0 }}
            />
            <div
              className="absolute inset-4 rounded-3xl bg-violet-100/80 dark:bg-violet-900/20"
              style={{ transform: "rotate(7deg)", zIndex: -1 }}
            />

            {/* Cards container */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ zIndex: 1 }}
            >
              {cards.map((card, i) => (
                <DeckCard
                  key={card.title}
                  card={card}
                  index={i}
                  activeIndex={active}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
