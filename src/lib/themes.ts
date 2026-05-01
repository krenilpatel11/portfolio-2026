// 10 Technical Personas - Krenil's different professional facets
// Auto-changes every 10 minutes

export type ThemeId = 
  | "fullstack" 
  | "frontend" 
  | "backend"
  | "devops" 
  | "architect" 
  | "designer" 
  | "hacker"
  | "ai_engineer"
  | "visionary"
  | "founder";

export interface ThemeVariants {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroWords: string[];
  
  // About Section (WhoAmI)
  aboutTitle: string;
  description: string;
  tagline: string;
  
  // WhoAmI Tiles
  whoAmI: {
    currently: string;
    problemSolver: string;
    quote: string;
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    viewAllText: string;
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
}

export interface Theme {
  id: ThemeId;
  label: string;
  emoji: string;
  variants: ThemeVariants;
}

export const themes: Record<ThemeId, Theme> = {
  fullstack: {
    id: "fullstack",
    label: "Full Stack Engineer",
    emoji: "🔧",
    variants: {
      heroTitle: "Full Stack Engineer",
      heroSubtitle: "Building end-to-end solutions from database to deployment",
      heroWords: ["architecting", "developing", "deploying", "scaling", "optimizing"],
      aboutTitle: "The Complete Engineer",
      description: "I build complete systems. Front to back, database to UI, local to cloud. Angular, React, .NET Core, Azure—I speak all dialects fluently.",
      tagline: "Full stack mastery, zero gaps in the pipeline",
      whoAmI: {
        currently: "Architecting a microservices ecosystem with 99.9% uptime",
        problemSolver: "Connecting frontend dreams to backend reality through clean APIs and scalable architecture",
        quote: "Real engineers ship entire features, not just pieces. Full stack means full ownership."
      },
      projects: {
        title: "Full Stack Solutions",
        subtitle: "Complete applications from concept to production",
        viewAllText: "View Full Stack Work →"
      },
      services: {
        title: "End-to-End Development",
        subtitle: "From requirement gathering to deployment and beyond"
      },
      contact: {
        title: "Build Something Complete",
        subtitle: "Need a full-featured application? Let's architect it together.",
        ctaButton: "Start Full Stack Project"
      }
    },
  },
  
  frontend: {
    id: "frontend",
    label: "Frontend Specialist",
    emoji: "🎨",
    variants: {
      heroTitle: "Frontend Architect",
      heroSubtitle: "Crafting pixel-perfect interfaces that users love",
      heroWords: ["designing", "animating", "optimizing", "prototyping", "polishing"],
      aboutTitle: "The Interface Craftsman",
      description: "I transform designs into responsive, accessible, performant web experiences. React, Angular, TypeScript—I build UIs that feel native and scale to millions.",
      tagline: "Component libraries, design systems, 60fps animations",
      whoAmI: {
        currently: "Building a brutalist design system with accessibility at its core",
        problemSolver: "Turning complex user flows into intuitive interfaces through atomic design and user testing",
        quote: "A beautiful UI is worthless if it's not fast. Performance is a feature, not a luxury."
      },
      projects: {
        title: "Interface Gallery",
        subtitle: "Responsive, accessible, performant web experiences",
        viewAllText: "Explore UI Projects →"
      },
      services: {
        title: "Frontend Excellence",
        subtitle: "Modern web experiences built with cutting-edge frameworks"
      },
      contact: {
        title: "Design to Code",
        subtitle: "Have a design? I'll bring it to life, pixel-perfect.",
        ctaButton: "Start Frontend Project"
      }
    },
  },
  
  backend: {
    id: "backend",
    label: "Backend Engineer",
    emoji: "⚙️",
    variants: {
      heroTitle: "Backend Architect",
      heroSubtitle: "Engineering scalable APIs and bulletproof databases",
      heroWords: ["architecting", "optimizing", "securing", "caching", "scaling"],
      aboutTitle: "The Infrastructure Builder",
      description: ".NET Core, SQL, Redis, microservices—I build backend systems that handle millions of requests without breaking a sweat. APIs that developers love to use.",
      tagline: "RESTful APIs, event-driven architecture, sub-100ms responses",
      whoAmI: {
        currently: "Designing a distributed caching strategy for 10M+ daily users",
        problemSolver: "Optimizing database queries from seconds to milliseconds through indexing and strategic denormalization",
        quote: "Good backends are invisible. Great backends are unbreakable. Mine are both."
      },
      projects: {
        title: "Backend Systems",
        subtitle: "Scalable APIs serving millions of requests daily",
        viewAllText: "View Backend Work →"
      },
      services: {
        title: "Backend Engineering",
        subtitle: "High-performance APIs and database architecture"
      },
      contact: {
        title: "Scale Your Backend",
        subtitle: "Need APIs that handle millions? Let's architect it right.",
        ctaButton: "Build Scalable APIs"
      }
    },
  },
  
  devops: {
    id: "devops",
    label: "DevOps Engineer",
    emoji: "🚀",
    variants: {
      heroTitle: "DevOps Specialist",
      heroSubtitle: "Automating deployments, monitoring everything, sleeping peacefully",
      heroWords: ["automating", "deploying", "monitoring", "orchestrating", "securing"],
      aboutTitle: "The Automation Expert",
      description: "Docker, Kubernetes, Azure, CI/CD—I turn manual processes into automated pipelines. Zero-downtime deployments. Infrastructure as code. Observability everywhere.",
      tagline: "GitOps workflow, container orchestration, 99.99% uptime",
      whoAmI: {
        currently: "Building a Kubernetes cluster with auto-scaling and self-healing capabilities",
        problemSolver: "Reducing deployment time from hours to minutes through CI/CD automation and infrastructure as code",
        quote: "If you do it twice manually, automate it. If it can break, monitor it. If it's critical, replicate it."
      },
      projects: {
        title: "Infrastructure Projects",
        subtitle: "Automated pipelines and cloud infrastructure at scale",
        viewAllText: "View DevOps Work →"
      },
      services: {
        title: "Cloud & Automation",
        subtitle: "CI/CD pipelines and container orchestration"
      },
      contact: {
        title: "Automate Everything",
        subtitle: "Ready to ship faster and break less? Let's build your pipeline.",
        ctaButton: "Setup DevOps Pipeline"
      }
    },
  },
  
  architect: {
    id: "architect",
    label: "Software Architect",
    emoji: "🏛️",
    variants: {
      heroTitle: "Software Architect",
      heroSubtitle: "Designing systems that scale to millions and stand the test of time",
      heroWords: ["designing", "structuring", "blueprinting", "modeling", "strategizing"],
      aboutTitle: "The Systems Designer",
      description: "I design software architecture that scales horizontally, fails gracefully, and evolves naturally. SOLID principles. Domain-driven design. Event-driven architecture.",
      tagline: "Microservices, event sourcing, hexagonal architecture",
      whoAmI: {
        currently: "Architecting a multi-tenant SaaS platform with domain-driven design",
        problemSolver: "Decomposing monoliths into microservices while maintaining data consistency through event sourcing",
        quote: "Architecture is about trade-offs. Great architects know which compromises to make."
      },
      projects: {
        title: "System Designs",
        subtitle: "Scalable architectures built for growth and resilience",
        viewAllText: "View Architecture Work →"
      },
      services: {
        title: "Architecture Consulting",
        subtitle: "Strategic technical decisions for long-term success"
      },
      contact: {
        title: "Design for Scale",
        subtitle: "Building for millions of users? Let's architect it properly.",
        ctaButton: "Consult on Architecture"
      }
    },
  },
  
  designer: {
    id: "designer",
    label: "UI/UX Designer",
    emoji: "✨",
    variants: {
      heroTitle: "UI/UX Designer",
      heroSubtitle: "Creating interfaces that feel intuitive and look stunning",
      heroWords: ["designing", "prototyping", "illustrating", "animating", "crafting"],
      aboutTitle: "The Experience Craftsman",
      description: "Figma wizard. Typography obsessed. Color theory nerd. I design systems, not just screens. Every pixel placed with purpose. Every interaction choreographed for delight.",
      tagline: "Design systems, micro-interactions, accessibility-first",
      whoAmI: {
        currently: "Designing a design system that bridges brand and engineering",
        problemSolver: "Transforming complex enterprise workflows into simple, delightful user experiences through iterative prototyping",
        quote: "Good design is invisible. Great design is unforgettable. Perfect design makes people smile."
      },
      projects: {
        title: "Design Portfolio",
        subtitle: "Interfaces that convert visitors into loyal users",
        viewAllText: "View Design Work →"
      },
      services: {
        title: "Design Services",
        subtitle: "From wireframes to pixel-perfect production"
      },
      contact: {
        title: "Create Magic",
        subtitle: "Have a product idea? Let's design an experience users will love.",
        ctaButton: "Start Design Project"
      }
    },
  },
  
  hacker: {
    id: "hacker",
    label: "Security Engineer",
    emoji: "🔐",
    variants: {
      heroTitle: "Security Engineer",
      heroSubtitle: "Breaking things so you don't have to worry",
      heroWords: ["pentesting", "securing", "exploiting", "hardening", "fortifying"],
      aboutTitle: "The Security Guardian",
      description: "White hat warrior. OWASP evangelist. I find vulnerabilities before the bad guys do. SQL injection, XSS, CSRF—I know every attack vector and how to defend against them.",
      tagline: "Ethical hacking, penetration testing, secure by default",
      whoAmI: {
        currently: "Conducting security audits and pentesting production systems ethically",
        problemSolver: "Finding and patching vulnerabilities through systematic threat modeling and exploit development",
        quote: "Security isn't a feature—it's a mindset. Every line of code is a potential attack surface."
      },
      projects: {
        title: "Security Projects",
        subtitle: "Hardened systems and security tools that protect real users",
        viewAllText: "View Security Work →"
      },
      services: {
        title: "Security Services",
        subtitle: "Penetration testing and security consulting"
      },
      contact: {
        title: "Secure Your Stack",
        subtitle: "Worried about vulnerabilities? Let's find them before hackers do.",
        ctaButton: "Request Security Audit"
      }
    },
  },
  
  ai_engineer: {
    id: "ai_engineer",
    label: "AI Engineer",
    emoji: "🤖",
    variants: {
      heroTitle: "AI Engineer",
      heroSubtitle: "Building intelligent systems that learn and adapt",
      heroWords: ["training", "fine-tuning", "deploying", "optimizing", "architecting"],
      aboutTitle: "The AI Architect",
      description: "Azure AI certified. Computer vision, NLP, neural networks—I don't just use AI, I architect intelligent systems. 95% accuracy on production models serving millions.",
      tagline: "Machine learning pipelines, model optimization, real-time inference",
      whoAmI: {
        currently: "Fine-tuning LLMs for domain-specific enterprise applications",
        problemSolver: "Building document intelligence systems that extract structured data from unstructured inputs with 95%+ accuracy",
        quote: "AI isn't magic—it's math, data, and architecture. Get those right, and magic happens."
      },
      projects: {
        title: "AI Solutions",
        subtitle: "Intelligent systems powered by machine learning",
        viewAllText: "View AI Projects →"
      },
      services: {
        title: "AI Engineering",
        subtitle: "Custom ML models and intelligent automation"
      },
      contact: {
        title: "Build Intelligence",
        subtitle: "Ready to integrate AI into your product? Let's architect it.",
        ctaButton: "Start AI Project"
      }
    },
  },
  
  visionary: {
    id: "visionary",
    label: "Tech Visionary",
    emoji: "🔮",
    variants: {
      heroTitle: "Tech Visionary",
      heroSubtitle: "Seeing patterns before they emerge, building products from the future",
      heroWords: ["envisioning", "innovating", "disrupting", "pioneering", "transforming"],
      aboutTitle: "The Future Builder",
      description: "I don't follow trends—I spot them three moves ahead. Web3, edge computing, serverless architecture—I build products that feel like they're from tomorrow.",
      tagline: "Bleeding-edge tech, future-proof architecture, visionary products",
      whoAmI: {
        currently: "Prototyping WebAssembly apps that run at native speed in browsers",
        problemSolver: "Identifying emerging technologies and adapting them for real-world use cases before the market realizes they need them",
        quote: "The best way to predict the future is to build it. The best time to start is always now."
      },
      projects: {
        title: "Future Projects",
        subtitle: "Experimental tech and forward-thinking solutions",
        viewAllText: "Explore Innovations →"
      },
      services: {
        title: "Innovation Consulting",
        subtitle: "Emerging tech strategy and R&D prototyping"
      },
      contact: {
        title: "Shape Tomorrow",
        subtitle: "Ready to build something nobody's seen before? Let's innovate.",
        ctaButton: "Innovate Together"
      }
    },
  },
  
  founder: {
    id: "founder",
    label: "Founder",
    emoji: "🚀",
    variants: {
      heroTitle: "Technical Founder",
      heroSubtitle: "From zero to one, from idea to execution, from code to customers",
      heroWords: ["building", "launching", "scaling", "iterating", "executing"],
      aboutTitle: "The Builder",
      description: "Founded LabelFlow from scratch. Solo to profitable in 12 months. I wear all hats—developer, designer, marketer, salesperson. Execution over perfection.",
      tagline: "MVP to market fit, rapid iteration, customer-driven development",
      whoAmI: {
        currently: "Scaling a SaaS from 100 to 1000 users through product-led growth",
        problemSolver: "Turning ideas into MVPs in weeks, then iterating to product-market fit through relentless customer feedback",
        quote: "Ideas are worthless. Execution is everything. Ship fast, learn faster, iterate relentlessly."
      },
      projects: {
        title: "Built & Launched",
        subtitle: "Products that found product-market fit",
        viewAllText: "View Launches →"
      },
      services: {
        title: "Startup Consulting",
        subtitle: "MVP development and technical co-founding"
      },
      contact: {
        title: "Build Your Startup",
        subtitle: "Have an idea? Let's turn it into a business together.",
        ctaButton: "Start Building"
      }
    },
  },
};

export const themeOrder: ThemeId[] = [
  "fullstack",
  "frontend",
  "backend",
  "devops",
  "architect",
  "designer",
  "hacker",
  "ai_engineer",
  "visionary",
  "founder",
];
