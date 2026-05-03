export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "ShadCN/UI",
    ],
  },
  {
    label: "Backend",
    skills: [
      "ASP.NET Core",
      "C#",
      "Node.js",
      "REST APIs",
      "Microservices",
      "Clean Architecture",
    ],
  },
  {
    label: "Database",
    skills: [
      "SQL Server",
      "MySQL",
      "Redis",
      "Entity Framework",
      "LINQ",
      "MongoDB",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub",
    ],
  },
  {
    label: "AI & ML",
    skills: [
      "Azure AI",
      "Document Intelligence",
      "NLP",
      "Computer Vision",
      "AI-102 Certified",
    ],
  },
  {
    label: "Design",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDraw",
      "UI/UX Design",
    ],
  },
];
