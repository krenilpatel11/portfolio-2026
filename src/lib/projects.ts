import type { Project, Testimonial } from "./types";

export const projects: Project[] = [
  {
    slug: "viewvoice-ai-invoice-analytics",
    title: "ViewVoice",
    subtitle: "AI Invoice Analytics Platform",
    description:
      "AI-powered invoice processing application using React and Azure AI Document Intelligence. Automated vendor, tax, and financial data extraction at 95% accuracy with real-time analytics and concurrent upload processing.",
    tags: ["AI Powered", "Full Stack", "Azure AI", "Dashboard"],
    tech: ["React", "TypeScript", "ShadCN/UI", "Azure AI", "Node.js", "Vercel"],
    image: "/images/projects/viewvoice.jpg",
    github: "https://github.com/krenilpatel11/ViewVoiceUI",
    live: "https://view-voice-ui.vercel.app/",
    category: "Web App",
    year: "2024",
    metrics: [
      { label: "Extraction Accuracy", value: "95%" },
      { label: "Processing Time ↓", value: "60%" },
    ],
  },
  {
    slug: "securitygate-community-platform",
    title: "SecurityGate",
    subtitle: "Community Management Platform",
    description:
      "Full-stack gated community management platform with role-based dashboards for residents, security staff, and admins. Features visitor management, SOS alerts, complaint handling, and real-time notifications.",
    tags: ["Full Stack", "Real-Time", "Mobile-First"],
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    image: "/images/projects/securitygate.jpg",
    github: "https://github.com/krenilpatel11/SecurityGateApp",
    live: "https://gate-community-hub.vercel.app/",
    category: "Web App",
    year: "2026",
  },
  {
    slug: "imriel-training-management",
    title: "Training System",
    subtitle: "Enterprise Employee Training Platform",
    description:
      "Enterprise employee training platform built at IMRIEL Software with Angular, ASP.NET Core, SQL Server and Azure. REST APIs, cloud storage, and analytics dashboard. Improved training efficiency by 30%.",
    tags: ["Enterprise", "Dashboard", "Cloud"],
    tech: ["Angular", "ASP.NET Core", "SQL Server", "Azure", "Chart.js"],
    image: "/images/projects/training.jpg",
    category: "Dashboard",
    year: "2024",
    metrics: [
      { label: "Efficiency Gain", value: "30%" },
      { label: "Test Coverage", value: "90%+" },
      { label: "Active Users", value: "500+" },
    ],
  },
  {
    slug: "sport-dynamic-website",
    title: "Sport",
    subtitle: "Dynamic Sports Website",
    description:
      "Cutting-edge sports website designed for immersive user experience with dynamic animations and responsive design across all devices.",
    tags: ["Web Design", "Animation", "Responsive"],
    tech: ["React", "SCSS", "Framer Motion"],
    image: "/images/projects/sport.jpg",
    live: "https://labelflow.store/",
    category: "Landing Page",
    year: "2024",
  },
  {
    slug: "labelflow-digital-agency",
    title: "LabelFlow",
    subtitle: "Digital Agency Website",
    description:
      "Founded and built LabelFlow — a digital agency providing web development, graphic design, and creative marketing. Service showcases, project portfolios, testimonial carousels, and integrated booking.",
    tags: ["Agency", "Founder", "Branding"],
    tech: ["React", "Tailwind CSS", "GSAP"],
    image: "/images/projects/labelflow.jpg",
    live: "https://labelflow.store/",
    category: "Agency",
    year: "2024",
  },
];
