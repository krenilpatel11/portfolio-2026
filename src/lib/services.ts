export interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "High-performance web apps using React, Angular, Next.js, and .NET Core. Fully responsive, SEO-optimized, scalable for 500+ concurrent users.",
    tags: ["React", "Angular", "Next.js", ".NET Core"],
    icon: "Globe",
  },
  {
    title: "AI & Cloud Solutions",
    description:
      "Azure-certified AI engineer (AI-102). Automated document processing with Azure AI Document Intelligence, intelligent dashboards, cloud-native deployments.",
    tags: ["Azure AI", "Document Intelligence", "Cloud"],
    icon: "Brain",
  },
  {
    title: "UI/UX Design",
    description:
      "From Figma wireframes to pixel-perfect implementations. Interfaces that are visually appealing and conversion-focused.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    icon: "Palette",
  },
  {
    title: "Backend & API Development",
    description:
      "RESTful APIs with ASP.NET Core and Node.js following clean architecture, SOLID principles, and 90%+ test coverage.",
    tags: ["ASP.NET Core", "Node.js", "REST APIs"],
    icon: "Server",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "50+ marketing and branding assets created. Logo design, print design, social media graphics, complete brand identity systems.",
    tags: ["Branding", "Logo Design", "Print"],
    icon: "PenTool",
  },
];
