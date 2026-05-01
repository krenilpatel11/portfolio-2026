export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "IMRIEL Software Pvt. Ltd.",
    role: "Software Engineer",
    location: "Vadodara, Gujarat",
    period: "Feb 2024 — Present",
    current: true,
    bullets: [
      "Engineered 5+ enterprise web modules in Angular and React with TypeScript, improving UI performance by 25% across 500+ active users",
      "Automated document extraction using Azure AI Document Intelligence, reducing manual processing time by 60%",
      "Architected real-time analytics dashboards with Chart.js for data-driven stakeholder decisions",
      "Implemented RESTful APIs in ASP.NET Core following clean architecture and SOLID principles",
      "Maintained 90%+ unit test coverage; led code reviews and sprint planning in Agile/Scrum",
    ],
    tech: ["Angular", "React", "TypeScript", ".NET Core", "Azure AI", "SQL Server"],
  },
  {
    company: "Dcycle Design Studio Pvt. Ltd.",
    role: "Web Development Intern",
    location: "Ahmedabad, Gujarat",
    period: "Oct 2023 — Jan 2024",
    current: false,
    bullets: [
      "Built responsive, cross-browser web interfaces using React.js, Tailwind CSS, and HTML5 for 3+ client projects",
      "Delivered pixel-perfect UI implementations within sprint deadlines, collaborating with design and QA teams",
    ],
    tech: ["React", "Tailwind CSS", "HTML5", "JavaScript"],
  },
  {
    company: "Parul University",
    role: "Graphic Design Intern",
    location: "Vadodara, Gujarat",
    period: "Jan 2023 — Jul 2023",
    current: false,
    bullets: [
      "Created 50+ marketing and branding assets using Adobe Photoshop, Illustrator, and CorelDraw",
    ],
    tech: ["Photoshop", "Illustrator", "CorelDraw"],
  },
];
