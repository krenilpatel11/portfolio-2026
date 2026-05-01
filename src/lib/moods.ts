export type MoodId = 
  | "scientist" 
  | "coder" 
  | "designer" 
  | "hacker" 
  | "poet" 
  | "adventurer" 
  | "rider" 
  | "architect"
  | "strategist"
  | "visionary";

export interface MoodVariants {
  // Hero Section
  heroTitle: string; // Main title
  heroSubtitle: string; // Subtitle below title
  heroWords: string[]; // Rotating words in background
  
  // About/Tagline
  tagline: string;
  description: string;
  
  // WhoAmI Tiles
  whoAmI: {
    currently: string;
    problemSolver: string;
    quote: string;
  };
  
  // Projects Section
  projects: {
    title: string; // Section header
    subtitle: string; // Optional subtitle
    viewAllText: string; // CTA button text
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
  };
  
  // Experience Section
  experience: {
    title: string;
    subtitle: string;
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
  };
  
  // Contact Section
  contact: {
    title: string; // "Let's Collaborate"
    subtitle: string;
    ctaButton: string; // Submit button text
  };
}

export interface Mood {
  id: MoodId;
  label: string;
  emoji: string;
  icon: string; // Icon name for chip
  accentHex: string;
  accentGlow: string;
  variants: MoodVariants;
  avatar?: { // Optional avatar for backwards compatibility
    static: string;
    placeholder: string;
    video: { webm: string; mp4: string };
    gif: string;
    poster: string;
  };
}

export const moods: Record<MoodId, Mood> = {
  scientist: {
    id: "scientist",
    label: "Scientist",
    emoji: "🔬",
    icon: "FlaskConical",
    accentHex: "#06B6D4", // Cyan - research blue
    accentGlow: "shadow-cyan-500/30",
    variants: {
      heroTitle: "Data-Driven Engineer",
      heroSubtitle: "Turning hypotheses into production code, one experiment at a time",
      heroWords: ["experimenting", "analyzing", "discovering", "researching", "innovating"],
      tagline: "Hypothesis-driven development, data-backed decisions",
      description: "Scientific method meets software engineering. I experiment, measure, iterate. Every feature is a controlled test. Every metric tells a story.",
      whoAmI: {
        currently: "Running A/B tests on neural architectures",
        problemSolver: "Breaking complex systems into testable hypotheses, then proving them wrong until they're bulletproof",
        quote: "The best code is evidence-based. Test everything, assume nothing, measure twice."
      },
      projects: {
        title: "Experiments That Scaled",
        subtitle: "Data-backed solutions that passed every test",
        viewAllText: "View Research →"
      },
      services: {
        title: "Evidence-Based Solutions",
        subtitle: "Every service backed by measurable results"
      },
      experience: {
        title: "The Lab Journal",
        subtitle: "Years of controlled experiments in production"
      },
      skills: {
        title: "Research Tools",
        subtitle: "Technologies validated through rigorous testing"
      },
      testimonials: {
        title: "Peer Reviews",
        subtitle: "What fellow researchers say about the work"
      },
      contact: {
        title: "Let's Run an Experiment",
        subtitle: "Got a hypothesis? Let's test it together.",
        ctaButton: "Start the Research"
      }
    }
  },
  coder: {
    id: "coder",
    label: "Coder",
    emoji: "⌨️",
    icon: "Terminal",
    accentHex: "#10B981", // Emerald - terminal green
    accentGlow: "shadow-emerald-500/30",
    variants: {
      heroTitle: "Terminal Warrior",
      heroSubtitle: "Crafting elegant solutions in the command line trenches",
      heroWords: ["coding", "debugging", "refactoring", "optimizing", "shipping"],
      tagline: "10,000+ hours of clean code and caffeine",
      description: "Terminal warrior. Vim enthusiast. Stack Overflow contributor. I speak fluent TypeScript, React, and regex. Dark mode forever.",
      whoAmI: {
        currently: "Refactoring legacy code into modern masterpieces",
        problemSolver: "Turning cryptic error messages into elegant solutions, one git commit at a time",
        quote: "Code that works is good. Code that others understand is great. Code you're proud of is art."
      },
      projects: {
        title: "Code That Ships",
        subtitle: "Production-ready solutions built to last",
        viewAllText: "git log --all →"
      },
      services: {
        title: "Dev Services",
        subtitle: "From git init to production deploy"
      },
      experience: {
        title: "Commit History",
        subtitle: "Years of pull requests and code reviews"
      },
      skills: {
        title: "Tech Stack",
        subtitle: "Languages, frameworks, and tools I deploy daily"
      },
      testimonials: {
        title: "Code Reviews",
        subtitle: "What other developers say"
      },
      contact: {
        title: "Let's Merge Branches",
        subtitle: "Ready to collaborate? Let's write some code.",
        ctaButton: "git commit -m 'Start'"
      }
    }
  },
  designer: {
    id: "designer",
    label: "Designer",
    emoji: "🎨",
    icon: "Palette",
    accentHex: "#FF6B6B", // Coral - creative red
    accentGlow: "shadow-rose-400/30",
    variants: {
      heroTitle: "Pixel Perfectionist",
      heroSubtitle: "Crafting interfaces that users fall in love with",
      heroWords: ["designing", "crafting", "creating", "prototyping", "illustrating"],
      tagline: "Pixels with purpose, interfaces with soul",
      description: "I design experiences that make users smile. Figma wizard. Typography nerd. Color theory obsessed. Every pixel placed with intention.",
      whoAmI: {
        currently: "Designing a brutalist UI that breaks all the rules beautifully",
        problemSolver: "Transforming complex workflows into intuitive interfaces that feel like magic",
        quote: "Good design is invisible. Great design is unforgettable. Perfect design makes people feel something."
      },
      projects: {
        title: "Design Showcase",
        subtitle: "Interfaces that convert visitors into customers",
        viewAllText: "View Portfolio →"
      },
      services: {
        title: "Creative Services",
        subtitle: "From wireframes to pixel-perfect production"
      },
      experience: {
        title: "Design Journey",
        subtitle: "Years of crafting beautiful experiences"
      },
      skills: {
        title: "Design Arsenal",
        subtitle: "Tools and techniques for creating magic"
      },
      testimonials: {
        title: "Client Love",
        subtitle: "What clients say about the work"
      },
      contact: {
        title: "Let's Create Magic",
        subtitle: "Have a vision? Let's bring it to life.",
        ctaButton: "Start Designing"
      }
    }
  },
  hacker: {
    id: "hacker",
    label: "Hacker",
    emoji: "🔓",
    icon: "Shield",
    accentHex: "#14B8A6", // Teal - security green
    accentGlow: "shadow-teal-500/30",
    variants: {
      heroTitle: "Security Specialist",
      heroSubtitle: "Breaking systems to build better defenses",
      heroWords: ["exploiting", "penetrating", "securing", "breaking", "fortifying"],
      tagline: "Ethical hacking, unethical coffee consumption",
      description: "White hat warrior. OWASP evangelist. Pentester by day, bug bounty hunter by night. I break things so you don't have to worry.",
      whoAmI: {
        currently: "Fuzzing APIs and finding the vulnerabilities nobody sees",
        problemSolver: "Thinking like an attacker to build defenses that actually hold. Security isn't optional.",
        quote: "The best defense is knowing exactly how you'd attack yourself. Test every assumption."
      },
      projects: {
        title: "Security Audits",
        subtitle: "Systems hardened, vulnerabilities eliminated",
        viewAllText: "View Pentest Reports →"
      },
      services: {
        title: "Security Solutions",
        subtitle: "Protecting your systems from every angle"
      },
      experience: {
        title: "Security Track Record",
        subtitle: "Years of finding and fixing vulnerabilities"
      },
      skills: {
        title: "Hacking Tools",
        subtitle: "Technologies for offensive and defensive security"
      },
      testimonials: {
        title: "Security Wins",
        subtitle: "What clients say after we secured their systems"
      },
      contact: {
        title: "Let's Secure Your Stack",
        subtitle: "Ready to lock down your infrastructure? Let's audit.",
        ctaButton: "Request Pentest"
      }
    }
  },
  poet: {
    id: "poet",
    label: "Poet",
    emoji: "✍️",
    icon: "Feather",
    accentHex: "#A78BFA", // Purple - artistic violet
    accentGlow: "shadow-purple-400/30",
    variants: {
      heroTitle: "Digital Wordsmith",
      heroSubtitle: "Where prose meets code, and stories ship to production",
      heroWords: ["writing", "articulating", "storytelling", "composing", "expressing"],
      tagline: "Words that move minds, code that ships products",
      description: "I believe every interface tells a story. Every button is a promise. Every error message is an opportunity for empathy. Code and copy, perfectly balanced.",
      whoAmI: {
        currently: "Crafting microcopy that turns visitors into believers",
        problemSolver: "Finding the exact words that make complex ideas feel simple and technical docs read like poetry",
        quote: "The right words in the right order can change everything. Choose them carefully."
      },
      projects: {
        title: "Stories That Ship",
        subtitle: "Products that speak to users' hearts",
        viewAllText: "Read Case Studies →"
      },
      services: {
        title: "Content & Code",
        subtitle: "Technical writing meets user experience"
      },
      experience: {
        title: "Writing Journey",
        subtitle: "Years of crafting words that convert"
      },
      skills: {
        title: "Storytelling Tools",
        subtitle: "Languages for humans and machines"
      },
      testimonials: {
        title: "Reader Reviews",
        subtitle: "What users say about the experience"
      },
      contact: {
        title: "Let's Write the Story",
        subtitle: "Your product deserves words that resonate. Let's craft them.",
        ctaButton: "Start Writing"
      }
    }
  },
  adventurer: {
    id: "adventurer",
    label: "Adventurer",
    emoji: "🧗",
    icon: "Compass",
    accentHex: "#F59E0B", // Amber - explorer gold
    accentGlow: "shadow-amber-500/30",
    variants: {
      heroTitle: "Tech Explorer",
      heroSubtitle: "Conquering uncharted territories in the tech landscape",
      heroWords: ["exploring", "discovering", "conquering", "pioneering", "venturing"],
      tagline: "Uncharted tech stacks, unexplored territories",
      description: "I thrive on the unknown. New frameworks? Let's try them. Bleeding edge tech? Sign me up. Every project is a mountain to climb.",
      whoAmI: {
        currently: "Learning Rust because memory safety is the new frontier",
        problemSolver: "Diving headfirst into unfamiliar domains and emerging with production-ready solutions",
        quote: "The best growth happens outside your comfort zone. Stay curious. Stay hungry."
      },
      projects: {
        title: "Expeditions",
        subtitle: "Adventures in cutting-edge technology",
        viewAllText: "Explore Projects →"
      },
      services: {
        title: "Innovation Services",
        subtitle: "Pioneering solutions for bold challenges"
      },
      experience: {
        title: "Trail Map",
        subtitle: "Years of exploring new technical frontiers"
      },
      skills: {
        title: "Explorer's Toolkit",
        subtitle: "Technologies mastered on the journey"
      },
      testimonials: {
        title: "Fellow Explorers",
        subtitle: "What partners say about the adventure"
      },
      contact: {
        title: "Let's Explore Together",
        subtitle: "Ready for an adventure? Let's chart new territory.",
        ctaButton: "Start Expedition"
      }
    }
  },
  rider: {
    id: "rider",
    label: "Rider",
    emoji: "🏍️",
    icon: "Bike",
    accentHex: "#EF4444", // Red - adrenaline red
    accentGlow: "shadow-red-500/30",
    variants: {
      heroTitle: "Speed Demon",
      heroSubtitle: "Moving fast, breaking things, fixing them faster",
      heroWords: ["riding", "cruising", "accelerating", "drifting", "conquering"],
      tagline: "Freedom on two wheels, execution at full throttle",
      description: "Triumph Bonneville owner. Weekend warrior. I code fast, ship faster. Life's too short for slow deploys and traffic jams.",
      whoAmI: {
        currently: "Planning a 500km coastal ride and a product launch—both this weekend",
        problemSolver: "Moving fast and fixing things. Agility over perfection. Momentum over hesitation.",
        quote: "The road doesn't wait. The competition doesn't sleep. Ship it, then iterate."
      },
      projects: {
        title: "Fast Lanes",
        subtitle: "Projects built at breakneck speed",
        viewAllText: "Full Throttle →"
      },
      services: {
        title: "Speed Services",
        subtitle: "Rapid development, faster deployment"
      },
      experience: {
        title: "The Ride So Far",
        subtitle: "Years of shipping at velocity"
      },
      skills: {
        title: "Performance Kit",
        subtitle: "Technologies for maximum speed"
      },
      testimonials: {
        title: "Fellow Riders",
        subtitle: "What partners say about the pace"
      },
      contact: {
        title: "Let's Hit the Road",
        subtitle: "Ready to move fast? Let's ride together.",
        ctaButton: "Start Your Engine"
      }
    }
  },
  architect: {
    id: "architect",
    label: "Architect",
    emoji: "🏛️",
    icon: "Building2",
    accentHex: "#6366F1", // Indigo - structural blue
    accentGlow: "shadow-indigo-500/30",
    variants: {
      heroTitle: "System Architect",
      heroSubtitle: "Designing infrastructure that scales to millions",
      heroWords: ["architecting", "structuring", "engineering", "blueprinting", "constructing"],
      tagline: "Building systems that stand the test of scale",
      description: "I design infrastructure that scales to millions. Microservices. Event-driven. Cloud-native. SOLID principles aren't suggestions—they're law.",
      whoAmI: {
        currently: "Designing a distributed system that handles 10K requests/sec without breaking a sweat",
        problemSolver: "Turning monoliths into maintainable microservices and spaghetti code into clean architecture",
        quote: "Great architecture is invisible when it works and obvious when it doesn't. Plan for scale."
      },
      projects: {
        title: "Architectural Marvels",
        subtitle: "Systems engineered for scale and resilience",
        viewAllText: "View Blueprints →"
      },
      services: {
        title: "Architecture Services",
        subtitle: "Scalable solutions built on solid foundations"
      },
      experience: {
        title: "Building Portfolio",
        subtitle: "Years of designing systems that scale"
      },
      skills: {
        title: "Engineering Tools",
        subtitle: "Technologies for building at scale"
      },
      testimonials: {
        title: "Client Structures",
        subtitle: "What clients say about the architecture"
      },
      contact: {
        title: "Let's Build to Scale",
        subtitle: "Ready to architect something legendary? Let's design it.",
        ctaButton: "Start Blueprint"
      }
    }
  },
  strategist: {
    id: "strategist",
    label: "Strategist",
    emoji: "♟️",
    icon: "TrendingUp",
    accentHex: "#8B5CF6", // Violet - strategic purple
    accentGlow: "shadow-violet-500/30",
    variants: {
      heroTitle: "Technical Strategist",
      heroSubtitle: "Three moves ahead, always executing with purpose",
      heroWords: ["strategizing", "planning", "executing", "orchestrating", "leading"],
      tagline: "Chess player mentality, product roadmap clarity",
      description: "I think three moves ahead. Technical decisions with business impact. OKRs. North star metrics. Execution that delivers ROI.",
      whoAmI: {
        currently: "Mapping Q2 technical strategy and aligning it with company goals",
        problemSolver: "Translating business requirements into technical reality while keeping teams unblocked and stakeholders happy",
        quote: "Strategy without execution is hallucination. Execution without strategy is chaos. Balance both."
      },
      projects: {
        title: "Strategic Wins",
        subtitle: "Projects executed with precision and purpose",
        viewAllText: "View Strategy →"
      },
      services: {
        title: "Strategy Services",
        subtitle: "Technical roadmaps that deliver business value"
      },
      experience: {
        title: "Game Plan",
        subtitle: "Years of strategic technical execution"
      },
      skills: {
        title: "Strategic Arsenal",
        subtitle: "Technologies for winning long-term"
      },
      testimonials: {
        title: "Strategic Partners",
        subtitle: "What stakeholders say about the execution"
      },
      contact: {
        title: "Let's Plan Victory",
        subtitle: "Ready to execute with precision? Let's strategize.",
        ctaButton: "Plan Strategy"
      }
    }
  },
  visionary: {
    id: "visionary",
    label: "Visionary",
    emoji: "🔮",
    icon: "Sparkles",
    accentHex: "#EC4899", // Pink - future-forward pink
    accentGlow: "shadow-pink-500/30",
    variants: {
      heroTitle: "Future Builder",
      heroSubtitle: "Creating tomorrow's technology, today",
      heroWords: ["envisioning", "revolutionizing", "disrupting", "transforming", "manifesting"],
      tagline: "Seeing tomorrow's tech, building it today",
      description: "I see patterns before they emerge. Trends before they're trends. I build products that feel like they're from the future.",
      whoAmI: {
        currently: "Prototyping an AI-powered interface that reads user intent before they click",
        problemSolver: "Predicting user needs they don't know they have yet and building solutions that feel obvious in hindsight",
        quote: "The best way to predict the future is to invent it. Dream big, ship bigger."
      },
      projects: {
        title: "Future Visions",
        subtitle: "Products that feel ahead of their time",
        viewAllText: "See the Future →"
      },
      services: {
        title: "Tomorrow's Solutions",
        subtitle: "Visionary services for forward-thinking clients"
      },
      experience: {
        title: "Innovation Timeline",
        subtitle: "Years of predicting and building the future"
      },
      skills: {
        title: "Future Stack",
        subtitle: "Technologies shaping tomorrow"
      },
      testimonials: {
        title: "Early Adopters",
        subtitle: "What visionaries say about the future"
      },
      contact: {
        title: "Let's Shape Tomorrow",
        subtitle: "Ready to build the future? Let's envision it together.",
        ctaButton: "Create the Future"
      }
    }
  }
};

export const moodOrder: MoodId[] = [
  "scientist",
  "coder", 
  "designer",
  "hacker",
  "poet",
  "adventurer",
  "rider",
  "architect",
  "strategist",
  "visionary"
];

export const getNextMood = (current: MoodId): MoodId => {
  const i = moodOrder.indexOf(current);
  return moodOrder[(i + 1) % moodOrder.length];
};

export const getPrevMood = (current: MoodId): MoodId => {
  const i = moodOrder.indexOf(current);
  return moodOrder[(i - 1 + moodOrder.length) % moodOrder.length];
};
