import type { Project, Testimonial } from "./types";

// Featured projects shown in hero section
export const featuredProjects: Project[] = [
  {
    slug: "viewvoice-ai-invoice-analytics",
    title: "ViewVoice",
    subtitle: "AI-Powered Invoice Intelligence Platform",
    description:
      "Full-stack AI-powered document intelligence platform conceptualized and developed by LabelFlow to automate invoice and receipt processing. Features Azure AI Document Intelligence, real-time analytics, and concurrent upload processing with 95% extraction accuracy.",
    tags: ["AI Powered", "Full Stack", "Azure AI", "Dashboard"],
    tech: ["React", "TypeScript", "ShadCN/UI", "Azure AI", "Node.js", "Vercel"],
    image: "/images/projects/viewvoice_float.webp",
    github: "https://github.com/krenilpatel11/ViewVoiceUI",
    live: "https://view-voice-ui.vercel.app/",
    category: "Web App",
    year: "2024",
    featured: true,
    metrics: [
      { label: "Extraction Accuracy", value: "95%" },
      { label: "Processing Time", value: "60% faster" },
      { label: "Cost Reduction", value: "40%" },
    ],
    caseStudy: {
      challenge: "Manual invoice processing was consuming 15+ hours weekly for small businesses, with error rates around 12-15%. Teams struggled with data entry, multiple file formats, inconsistent layouts, and the need to process invoices in bulk while maintaining accuracy.",
      solution: "Built an intelligent document processing platform leveraging Azure AI Document Intelligence for automated extraction. Implemented a modern React frontend with real-time progress tracking, batch upload capabilities, and instant data export. The system uses advanced OCR and machine learning to extract key fields like vendor details, amounts, dates, and line items from any invoice format.",
      implementation: [
        "Integrated Azure AI Document Intelligence API with custom field extraction models trained on diverse invoice layouts",
        "Built concurrent upload processing system supporting multiple file formats (PDF, PNG, JPG, JPEG) with real-time progress indicators",
        "Designed an intuitive dashboard with ShadCN/UI components featuring data tables, filtering, and instant CSV export functionality",
        "Implemented robust error handling and validation to ensure 95%+ extraction accuracy across various invoice templates",
        "Optimized frontend performance with React Query for efficient data fetching and caching",
        "Deployed on Vercel with edge functions for low-latency global access"
      ],
      results: [
        "Achieved 95% extraction accuracy across diverse invoice formats and layouts",
        "Reduced processing time by 60%, cutting 15-hour weekly tasks to under 6 hours",
        "Enabled simultaneous processing of up to 50 invoices with live progress tracking",
        "Delivered 40% cost reduction by eliminating manual data entry errors and rework",
        "Processed 500+ invoices in pilot phase with 98% user satisfaction rate",
        "Built scalable architecture handling 10,000+ documents monthly"
      ],
      images: [
        "/images/projects/viewvoice_float.webp",
        "/images/projects/viewVoicelight_float.webp",
        "/images/projects/ViewVoiceScreenShot.webp"
      ]
    }
  },
  {
    slug: "labelflow-digital-agency",
    title: "LabelFlow",
    subtitle: "Digital Agency & Creative Studio",
    description:
      "Founded and built LabelFlow — a full-service digital agency providing web development, UI/UX design, branding, and creative marketing solutions. Features service showcases, dynamic project portfolios, client testimonials, and integrated booking system.",
    tags: ["Agency", "Founder", "Branding", "Full Stack"],
    tech: ["Angular", "TypeScript", "Tailwind CSS", "GSAP", "Node.js"],
    image: "/images/projects/labelflow_feature.webp",
    github: "https://github.com/krenilpatel11/LabelFlow",
    live: "https://label-flow-psi.vercel.app/",
    category: "Agency",
    year: "2024",
    featured: true,
    metrics: [
      { label: "Client Projects", value: "15+" },
      { label: "Services Offered", value: "6" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    caseStudy: {
      challenge: "Small businesses and startups needed high-quality digital services but struggled to find affordable, reliable partners who understood modern web technologies and design trends. They required a one-stop solution for branding, web development, and digital marketing without the overhead of large agencies.",
      solution: "Founded LabelFlow as a boutique digital agency offering end-to-end services from brand identity to full-stack web applications. Built a stunning agency website showcasing our portfolio, services, and client success stories. Implemented smooth animations, interactive elements, and a modern tech stack to demonstrate technical expertise and design capabilities.",
      implementation: [
        "Architected agency website with Angular framework for robust, scalable performance",
        "Designed immersive UI/UX with Tailwind CSS and GSAP animations for fluid interactions",
        "Created comprehensive service offerings: Web Development, UI/UX Design, Branding, Logo Design, Social Media Marketing, and Graphic Design",
        "Built dynamic portfolio showcase with case studies, metrics, and client testimonials",
        "Integrated booking system for seamless client onboarding and project consultations",
        "Implemented responsive design ensuring flawless experience across all devices",
        "Optimized for performance with lazy loading, code splitting, and asset optimization"
      ],
      results: [
        "Successfully delivered 15+ client projects across web development, branding, and design",
        "Achieved 98% client satisfaction rate with consistent 5-star reviews",
        "Grew from solo founder to team of 3 designers and developers within 6 months",
        "Generated $50K+ revenue in first year through direct client acquisition",
        "Built strong portfolio attracting enterprise clients and startup partnerships",
        "Established LabelFlow as go-to agency for modern, innovative digital solutions"
      ],
      images: [
        "/images/projects/labelflow_feature.webp"
      ]
    }
  },
  {
    slug: "securitygate-community-platform",
    title: "NeighborlyHub",
    subtitle: "Gated Community Management Platform",
    description:
      "Modern, mobile-first application designed for residents, security staff, administrators, and service staff to simplify community living. Features visitor management, SOS alerts, complaint handling, and real-time notifications.",
    tags: ["Full Stack", "Real-Time", "Mobile-First", "Dashboard"],
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Socket.io"],
    image: "/images/projects/neighborlyhubdark_float.webp",
    github: "https://github.com/krenilpatel11/SecurityGateApp",
    live: "https://gate-community-hub.vercel.app/",
    category: "Web App",
    year: "2026",
    featured: true,
    metrics: [
      { label: "Active Communities", value: "50+" },
      { label: "Response Time", value: "<2s" },
      { label: "User Satisfaction", value: "92%" },
    ],
    caseStudy: {
      challenge: "Gated communities faced communication breakdowns between residents, security guards, administrators, and service providers. Manual visitor logging was time-consuming, emergency response was slow, and complaint resolution lacked transparency. Communities needed a unified platform for seamless operations and enhanced safety.",
      solution: "Developed NeighborlyHub, a comprehensive community management platform with role-based dashboards for four user types. Implemented real-time visitor management with QR code verification, instant SOS alerts with location tracking, transparent complaint tracking, and service provider coordination—all accessible via mobile-first interface.",
      implementation: [
        "Built full-stack architecture with React frontend and Node.js/Express backend",
        "Designed MongoDB database schema with optimized indexing for fast queries across 50+ communities",
        "Implemented Socket.io for real-time notifications and instant communication between users",
        "Created role-based authentication system with JWT tokens and secure password hashing",
        "Developed QR code-based visitor verification system with photo capture and validation",
        "Built SOS alert system with geolocation tracking and immediate notification to security personnel",
        "Designed complaint management workflow with status tracking, photo attachments, and resolution timeline",
        "Implemented service provider portal for plumbers, electricians, and maintenance staff coordination",
        "Optimized mobile-first UI with responsive design and offline capabilities using service workers",
        "Integrated automated notifications via email and in-app alerts for critical events"
      ],
      results: [
        "Deployed across 50+ gated communities serving 10,000+ residents",
        "Reduced visitor entry time from 5 minutes to under 30 seconds with QR verification",
        "Achieved sub-2-second response time for SOS alerts with 100% delivery rate",
        "Increased complaint resolution speed by 65% through transparent tracking system",
        "Processed 25,000+ visitor entries monthly with zero security breaches",
        "Achieved 92% user satisfaction with 4.6/5 average rating across app stores",
        "Reduced administrative overhead by 40% through automation and digital workflows"
      ],
      images: [
        "/images/projects/neighborlyhubdark_float.webp",
        "/images/projects/neighborlyhub_float.webp"
      ]
    }
  },
  {
    slug: "imriel-training-management",
    title: "Training System",
    subtitle: "Enterprise Employee Training Platform",
    description:
      "Enterprise employee training platform built at IMRIEL Software with Angular, ASP.NET Core, SQL Server and Azure. REST APIs, cloud storage, and analytics dashboard. Improved training efficiency by 30%.",
    tags: ["Enterprise", "Dashboard", "Cloud"],
    tech: ["Angular", "ASP.NET Core", "SQL Server", "Azure", "Chart.js"],
    image: "/images/projects/training.webp",
    github: "https://github.com/krenilpatel11",
    category: "Dashboard",
    year: "2024",
    featured: true,
    metrics: [
      { label: "Efficiency Gain", value: "30%" },
      { label: "Test Coverage", value: "90%+" },
      { label: "Active Users", value: "500+" },
    ],
    caseStudy: {
      challenge: "IMRIEL Software needed a comprehensive training management system to streamline employee onboarding, track course completion, and measure learning outcomes. The existing manual process involved spreadsheets, email coordination, and paper-based assessments, leading to poor visibility into training progress, inconsistent record-keeping, and difficulty measuring training effectiveness across 500+ employees.",
      solution: "Developed a full-stack enterprise training platform with Angular frontend and ASP.NET Core backend, integrated with SQL Server and Azure Cloud. The system provides role-based dashboards for employees, trainers, and administrators, automated course enrollment, progress tracking, assessment management, and comprehensive analytics. Implemented secure cloud storage for training materials and real-time reporting for training compliance.",
      implementation: [
        "Built scalable backend architecture with ASP.NET Core Web API using repository pattern and dependency injection",
        "Designed normalized SQL Server database schema with optimized indexing for course, user, and assessment data",
        "Developed responsive Angular SPA with lazy loading, reactive forms, and Angular Material UI components",
        "Implemented Azure Blob Storage for secure training material uploads (videos, PDFs, presentations)",
        "Created role-based authentication with JWT tokens supporting Employee, Trainer, and Admin roles",
        "Built real-time progress tracking dashboard with Chart.js visualizations for completion rates and performance metrics",
        "Integrated email notification system for course assignments, deadline reminders, and completion certificates",
        "Implemented automated assessment grading with configurable pass/fail thresholds and retry policies",
        "Optimized API performance with caching, pagination, and asynchronous processing for large datasets",
        "Deployed to Azure App Service with CI/CD pipelines for automated testing and deployment"
      ],
      results: [
        "Improved training efficiency by 30%, reducing onboarding time from 4 weeks to 2.8 weeks",
        "Achieved 90%+ test coverage with comprehensive unit and integration tests",
        "Successfully onboarded 500+ active users across 12 departments with 98% adoption rate",
        "Reduced administrative overhead by 40% through automation of enrollment and tracking",
        "Increased course completion rates by 25% with automated reminders and progress tracking",
        "Generated 1,500+ training completion certificates automatically in first 6 months",
        "Enabled real-time visibility into training compliance with executive analytics dashboard"
      ],
      images: [
        "/images/projects/training.webp"
      ]
    }
  },
];

// All projects including featured and additional work
export const projects: Project[] = [
  ...featuredProjects,
  {
    slug: "sport-dynamic-website",
    title: "Sport",
    subtitle: "Dynamic and Responsive Sports Website",
    description:
      "Cutting-edge sports website designed to deliver an immersive and engaging user experience. Built with React, SCSS, and powerful animation libraries ensuring seamless performance and stunning visuals across all devices.",
    tags: ["Web Design", "Animation", "Responsive", "Landing Page"],
    tech: ["React", "SCSS", "Framer Motion", "GSAP"],
    image: "/images/projects/agency/sports.webp",
    live: "https://labelflow.store/",
    category: "Landing Page",
    year: "2024",
    featured: false,
    metrics: [
      { label: "Page Speed", value: "95/100" },
      { label: "Mobile Score", value: "98/100" },
    ],
  },
  {
    slug: "goodkit-saas-landing",
    title: "GoodKit",
    subtitle: "Progressive SaaS Platform",
    description:
      "Modern SaaS landing page with clean design, smooth animations, and conversion-optimized layouts. Features engaging UI, service showcases, and responsive design built for LabelFlow client.",
    tags: ["Landing Page", "SaaS", "Client Work", "Mobile Responsive"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/agency/goodkit.webp",
    category: "Landing Page",
    year: "2024",
    featured: false,
  },
  {
    slug: "trafalgar-healthcare",
    title: "Trafalgar",
    subtitle: "Progressive Virtual Healthcare Platform",
    description:
      "Revolutionary virtual healthcare platform designed to provide accessible, affordable, and high-quality healthcare services. Available on both mobile and online platforms ensuring healthcare is just a click away.",
    tags: ["Healthcare", "Mobile Responsive", "Web App"],
    tech: ["React", "Node.js", "TypeScript"],
    image: "/images/projects/agency/trafalgar.webp",
    category: "Web App",
    year: "2024",
    featured: false,
  },
  {
    slug: "portfolio-reactjs",
    title: "Portfolio V1",
    subtitle: "Interactive Portfolio using ReactJS",
    description:
      "Personal portfolio website showcasing projects and skills with dynamic and responsive user interface. Features interactive design, project showcases, and reflects dedication to continuous learning in web development.",
    tags: ["Portfolio", "Dashboard", "Mobile Responsive"],
    tech: ["React", "JavaScript", "CSS3"],
    image: "/images/projects/agency/portfolio_V1.webp",
    category: "Portfolio",
    year: "2023",
    featured: false,
  },
];

// Graphic Design Portfolio (External Link)
export const graphicPortfolio = {
  title: "Graphic Design Portfolio",
  subtitle: "Brand Identities, Packaging & Social Media",
  description: "Explore a range of graphic design projects on Behance, featuring unique brand identities, eye-catching packaging designs, and impactful social media campaigns.",
  categories: ["Logo Design", "Print Design", "Social Media Graphics", "Branding"],
  link: "https://www.behance.net/krenilpatel2",
  image: "https://mir-s3-cdn-cf.behance.net/user/276/4ba1ab477672439.5d9fd8f0c0bb8.jpg",
};
