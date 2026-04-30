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
  metrics?: { label: string; value: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}
