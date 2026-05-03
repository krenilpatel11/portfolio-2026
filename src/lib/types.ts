export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  category: string;
  year: string;
  featured?: boolean; // Highlighted projects in hero section
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    challenge: string;
    solution: string;
    implementation: string[];
    results: string[];
    images?: string[]; // Additional case study images
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}
