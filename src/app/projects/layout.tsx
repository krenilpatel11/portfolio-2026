import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Full Stack Development Portfolio",
  description: "Explore my portfolio of web applications, AI solutions, and enterprise platforms. Featured projects include ViewVoice AI, LabelFlow Digital Agency, NeighborlyHub community platform, and Training Management System. Built with React, Angular, .NET Core, and Azure.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "full stack projects",
    "React projects",
    "Angular projects",
    ".NET Core projects",
    "Azure projects",
    "AI projects",
    "case studies",
    "Krenil Patel projects"
  ],
  openGraph: {
    title: "Projects — Krenil Patel Full Stack Development Portfolio",
    description: "Explore my portfolio of web applications, AI solutions, and enterprise platforms. Featured projects with detailed case studies.",
    type: "website",
    url: "https://krenilpatel.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Krenil Patel Full Stack Development Portfolio",
    description: "Explore my portfolio of web applications, AI solutions, and enterprise platforms.",
  },
  alternates: {
    canonical: "https://krenilpatel.dev/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
