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
  heroWords: string[]; // Rotating words in Hero section
  tagline: string;
  description: string;
  whoAmI: {
    currently: string; // "Currently" tile
    problemSolver: string; // "Problem Solver" tile
    quote: string; // Quote tile
  };
  contactCTA: string; // Contact section CTA text
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
      heroWords: ["experimenting", "analyzing", "discovering", "researching", "innovating"],
      tagline: "Hypothesis-driven development, data-backed decisions",
      description: "Scientific method meets software engineering. I experiment, measure, iterate. Every feature is a controlled test. Every metric tells a story.",
      whoAmI: {
        currently: "Running A/B tests on neural architectures",
        problemSolver: "Breaking complex systems into testable hypotheses, then proving them wrong until they're bulletproof",
        quote: "The best code is evidence-based. Test everything, assume nothing, measure twice."
      },
      contactCTA: "Let's experiment together"
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
      heroWords: ["coding", "debugging", "refactoring", "optimizing", "shipping"],
      tagline: "10,000+ hours of clean code and caffeine",
      description: "Terminal warrior. Vim enthusiast. Stack Overflow contributor. I speak fluent TypeScript, React, and regex. Dark mode forever.",
      whoAmI: {
        currently: "Refactoring legacy code into modern masterpieces",
        problemSolver: "Turning cryptic error messages into elegant solutions, one git commit at a time",
        quote: "Code that works is good. Code that others understand is great. Code you're proud of is art."
      },
      contactCTA: "Let's merge our branches"
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
      heroWords: ["designing", "crafting", "creating", "prototyping", "illustrating"],
      tagline: "Pixels with purpose, interfaces with soul",
      description: "I design experiences that make users smile. Figma wizard. Typography nerd. Color theory obsessed. Every pixel placed with intention.",
      whoAmI: {
        currently: "Designing a brutalist UI that breaks all the rules beautifully",
        problemSolver: "Transforming complex workflows into intuitive interfaces that feel like magic",
        quote: "Good design is invisible. Great design is unforgettable. Perfect design makes people feel something."
      },
      contactCTA: "Let's craft something beautiful"
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
      heroWords: ["exploiting", "penetrating", "securing", "breaking", "fortifying"],
      tagline: "Ethical hacking, unethical coffee consumption",
      description: "White hat warrior. OWASP evangelist. Pentester by day, bug bounty hunter by night. I break things so you don't have to worry.",
      whoAmI: {
        currently: "Fuzzing APIs and finding the vulnerabilities nobody sees",
        problemSolver: "Thinking like an attacker to build defenses that actually hold. Security isn't optional.",
        quote: "The best defense is knowing exactly how you'd attack yourself. Test every assumption."
      },
      contactCTA: "Let's secure the perimeter"
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
      heroWords: ["writing", "articulating", "storytelling", "composing", "expressing"],
      tagline: "Words that move minds, code that ships products",
      description: "I believe every interface tells a story. Every button is a promise. Every error message is an opportunity for empathy. Code and copy, perfectly balanced.",
      whoAmI: {
        currently: "Crafting microcopy that turns visitors into believers",
        problemSolver: "Finding the exact words that make complex ideas feel simple and technical docs read like poetry",
        quote: "The right words in the right order can change everything. Choose them carefully."
      },
      contactCTA: "Let's write the next chapter"
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
      heroWords: ["exploring", "discovering", "conquering", "pioneering", "venturing"],
      tagline: "Uncharted tech stacks, unexplored territories",
      description: "I thrive on the unknown. New frameworks? Let's try them. Bleeding edge tech? Sign me up. Every project is a mountain to climb.",
      whoAmI: {
        currently: "Learning Rust because memory safety is the new frontier",
        problemSolver: "Diving headfirst into unfamiliar domains and emerging with production-ready solutions",
        quote: "The best growth happens outside your comfort zone. Stay curious. Stay hungry."
      },
      contactCTA: "Let's explore the unknown"
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
      heroWords: ["riding", "cruising", "accelerating", "drifting", "conquering"],
      tagline: "Freedom on two wheels, execution at full throttle",
      description: "Triumph Bonneville owner. Weekend warrior. I code fast, ship faster. Life's too short for slow deploys and traffic jams.",
      whoAmI: {
        currently: "Planning a 500km coastal ride and a product launch—both this weekend",
        problemSolver: "Moving fast and fixing things. Agility over perfection. Momentum over hesitation.",
        quote: "The road doesn't wait. The competition doesn't sleep. Ship it, then iterate."
      },
      contactCTA: "Let's ride into the sunset"
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
      heroWords: ["architecting", "structuring", "engineering", "blueprinting", "constructing"],
      tagline: "Building systems that stand the test of scale",
      description: "I design infrastructure that scales to millions. Microservices. Event-driven. Cloud-native. SOLID principles aren't suggestions—they're law.",
      whoAmI: {
        currently: "Designing a distributed system that handles 10K requests/sec without breaking a sweat",
        problemSolver: "Turning monoliths into maintainable microservices and spaghetti code into clean architecture",
        quote: "Great architecture is invisible when it works and obvious when it doesn't. Plan for scale."
      },
      contactCTA: "Let's build something legendary"
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
      heroWords: ["strategizing", "planning", "executing", "orchestrating", "leading"],
      tagline: "Chess player mentality, product roadmap clarity",
      description: "I think three moves ahead. Technical decisions with business impact. OKRs. North star metrics. Execution that delivers ROI.",
      whoAmI: {
        currently: "Mapping Q2 technical strategy and aligning it with company goals",
        problemSolver: "Translating business requirements into technical reality while keeping teams unblocked and stakeholders happy",
        quote: "Strategy without execution is hallucination. Execution without strategy is chaos. Balance both."
      },
      contactCTA: "Let's plan world domination"
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
      heroWords: ["envisioning", "revolutionizing", "disrupting", "transforming", "manifesting"],
      tagline: "Seeing tomorrow's tech, building it today",
      description: "I see patterns before they emerge. Trends before they're trends. I build products that feel like they're from the future.",
      whoAmI: {
        currently: "Prototyping an AI-powered interface that reads user intent before they click",
        problemSolver: "Predicting user needs they don't know they have yet and building solutions that feel obvious in hindsight",
        quote: "The best way to predict the future is to invent it. Dream big, ship bigger."
      },
      contactCTA: "Let's shape the future"
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
