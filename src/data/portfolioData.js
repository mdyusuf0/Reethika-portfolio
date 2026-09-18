// ============================================================
// portfolioData.js — Centralized configuration for Chilukuri Uma Reethika
// ============================================================

export const personalInfo = {
  name: "Chilukuri Uma Reethika",
  firstName: "Reethika",
  brandName: "Chilukuri Uma Reethika",
  title: "Full Stack Developer",
  location: "Tadepalligudem, Andhra Pradesh, India",
  phone: "+91 62812 18773",
  emails: {
    primary: "umareethikachilukuri@gmail.com",
    secondary: "",
  },
  summary:
    "Full Stack Developer with hands-on experience building responsive, user-centric web applications using React.js and modern JavaScript. Experienced in REST API integration, role-based access control, real-time dashboards, and Figma prototyping. Seeking opportunities to contribute to real-world projects and continue growing as a developer.",
  resumeUrl: "/Reethika_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/reethika-chilukuri",
  github: "https://github.com/reethikachilukuri",
  email: "mailto:umareethikachilukuri@gmail.com",
  phone: "tel:+916281218773",
  whatsapp: "https://wa.me/916281218773",
};

export const heroContent = {
  greeting: "Hi, I'm Chilukuri Uma Reethika",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "Full Stack Developer specializing in responsive React applications, scalable Node.js architectures, REST APIs, and modern UI/UX design.",
  ctaPrimary: { text: "Explore Projects", href: "#projects" },
  ctaSecondary: {
    text: "Get In Touch",
    href: "mailto:umareethikachilukuri@gmail.com?subject=Portfolio Inquiry",
  },
  ctaResume: { text: "Download Resume", href: "/Reethika_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, I'm <span class="text-white text-xl font-black mx-1 tracking-wide uppercase">Reethika</span>, a Full Stack Developer with hands-on experience building responsive, user-centric web applications using React.js and modern JavaScript. Experienced in REST API integration, role-based access control, real-time dashboards, and Figma prototyping. Passionate about engineering clean web applications and solving real-world problems.`,
  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "REST APIs",
    "Firebase Auth",
    "Figma",
  ],
};

export const processContent = {
  badge: "Engineering Lifecycle",
  heading: "Systematic Development Architecture",
  description:
    "I follow a modular, user-focused engineering methodology to design intuitive user interfaces, architect reliable backend systems, and deploy performant web applications.",
  cards: [
    {
      number: "01",
      title: "Discover & System Design",
      text: "Analyzing user needs, structuring data models in MongoDB, and planning end-to-end component hierarchies for seamless scalability."
    },
    {
      number: "02",
      title: "UI/UX & Prototyping",
      text: "Drafting high-fidelity wireframes in Figma, defining intuitive interaction flows, and creating design systems with responsive design principles."
    },
    {
      number: "03",
      title: "Frontend Engineering",
      text: "Developing modular, reusable React.js components with clean state management, smooth transitions, and accessibility standards."
    },
    {
      number: "04",
      title: "API & Backend Integration",
      text: "Implementing robust Node.js/Express.js REST APIs, configuring Role-Based Access Control (RBAC), and integrating secure Firebase authentication."
    },
    {
      number: "05",
      title: "Optimization & Deployment",
      text: "Optimizing bundle sizes, minimizing render cycles (achieving an 18% load time reduction), and deploying continuous pipelines on Vercel."
    }
  ],
  endText: "Built for performance and usability!"
};

export const capabilityMatrix = {
  categories: [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Modular UI Components"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "MongoDB Atlas", "REST APIs", "Firebase Authentication", "Role-Based Access Control (RBAC)"]
    },
    {
      title: "UI/UX & Design",
      skills: ["Figma", "Wireframing", "Interactive Prototyping", "User-Centered Design", "Design Systems"]
    },
    {
      title: "Tools & Professional Strengths",
      skills: ["Git", "GitHub", "Visual Studio Code", "Vercel", "Problem Solving", "Teamwork", "Communication", "Time Management"]
    }
  ]
};

export const impactMetrics = [
  { value: "18%", label: "Load Time Optimization" },
  { value: "78%", label: "NPTEL Elite IoT Score" },
  { value: "7.5", label: "B.Tech CGPA" },
  { value: "500", label: "CodeChef Rating" },
  { value: "5+", label: "Web Applications" },
];

export const projects = [
  {
    id: "ai-research-assistant",
    number: "01",
    badge: "🤖 Generative AI & Web App",
    title: "AI Research Assistant",
    description:
      "An AI-powered research assistant web application that gathers information from trusted sources and books, generating structured reports with summaries, key technologies, practical applications, citations, and challenges. Features secure Firebase authentication and REST APIs managing research history in MongoDB.",
    techTags: ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "Gemini AI", "Serper API", "Google Books API"],
    links: {
      demo: "https://ai-research-assistant-tawny.vercel.app/login",
      github: "https://github.com/reethikachilukuri",
    },
    isFlagship: true,
  },
  {
    id: "biofactor-pulse",
    number: "02",
    badge: "🌾 Enterprise Field CRM & Operations",
    title: "BioFactor Pulse",
    description:
      "An enterprise agricultural field operations platform developed during internship at Cerevyn Solutions. Features real-time dashboards, field CRM modules, workforce tracking, live performance leaderboards, and automated attendance workflows. Engineered modular React UI components and optimized rendering, achieving an 18% reduction in page load time.",
    techTags: ["React.js", "REST APIs", "RBAC", "Workforce Tracking", "Live Dashboards", "Performance Optimization"],
    links: {
      demo: "https://intern-mu-one.vercel.app",
      github: null,
    },
    isFlagship: true,
  },
  {
    id: "insightful-ai",
    number: "03",
    badge: "🧠 RAG & Feedback Intelligence",
    title: "Insightful — Feedback Analysis Platform",
    description:
      "An AI-enhanced customer feedback intelligence platform. Integrates multi-channel customer reviews into MongoDB Atlas and Pinecone vector database, enabling sub-2-second natural language querying via RAG, sentiment auto-classification, emerging theme detection, and automatic Jira ticket generation.",
    techTags: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Pinecone", "Gemini API", "RAG Pipeline"],
    links: {
      demo: null,
      github: "https://github.com/reethikachilukuri",
    },
    isFlagship: true,
  },
  {
    id: "parking-management-system",
    number: "04",
    badge: "🚗 Smart Utility Platform",
    title: "Parking Management System",
    description:
      "A full-stack parking management system facilitating automated slot reservation, vehicle check-in/out tracking, live occupancy status, and an administrative control panel for facility oversight.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Dashboard Analytics"],
    links: {
      demo: "https://parking-management-system-umber.vercel.app",
      github: "https://github.com/reethikachilukuri",
    },
    isFlagship: false,
  },
  {
    id: "hungry-hub",
    number: "05",
    badge: "🍽️ Responsive Food Portal",
    title: "Hungry Hub — Food Website",
    description:
      "A multi-page food exploration web interface featuring clean mobile-first layouts, structured food categories, intuitive navigation flows, and strong visual hierarchy.",
    techTags: ["HTML5", "CSS3", "Responsive Web Design", "UI Design"],
    links: {
      demo: null,
      github: "https://github.com/reethikachilukuri",
    },
    isFlagship: false,
  },
];

export const experienceList = [
  {
    organization: "Cerevyn Solutions Pvt. Ltd.",
    role: "Full Stack / Frontend Developer Intern",
    duration: "Jun 2026 – Jul 2026",
    location: "Remote",
    responsibilities: [
      "Developed modular React UI components for BioFactor Pulse, an enterprise agricultural field operations platform.",
      "Engineered real-time dashboards, field CRM modules, and workforce tracking with live leaderboards and automated attendance workflows.",
      "Integrated REST APIs with client-side state management and enforced Role-Based Access Control (RBAC), improving rendering efficiency and lowering load times by 18%."
    ],
    tech: ["React.js", "REST APIs", "RBAC", "Real-Time Dashboards", "State Management"]
  },
  {
    organization: "National Institute of Technology, Tiruchirappalli",
    role: "Research Intern — Machine Learning",
    duration: "May 2025 – Jul 2025",
    location: "Tiruchirappalli, India",
    responsibilities: [
      "Researched machine learning algorithms and predictive model architectures under faculty guidance.",
      "Developed end-to-end Python data preprocessing and validation pipelines to clean datasets and improve predictive model accuracy.",
      "Evaluated model performance metrics against research benchmarks for structured validation."
    ],
    tech: ["Python", "Machine Learning", "Data Pipelines", "Model Validation"]
  },
  {
    organization: "SenNova Innovations Pvt. Ltd.",
    role: "Campus Ambassador",
    duration: "2025 – 2026",
    location: "SASI Institute of Technology",
    responsibilities: [
      "Awarded Certificate of Achievement for outstanding leadership and successful technology initiatives.",
      "Led student community engagement, organized workshops on emerging technologies, and facilitated technical outreach initiatives.",
      "Collaborated with cross-functional campus teams to promote development culture and AI learning."
    ],
    tech: ["Leadership", "Community Outreach", "Event Management", "Communication"]
  }
];

export const educationList = [
  {
    institution: "SASI Institute of Technology and Engineering, Tadepalligudem",
    degree: "B.Tech — Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    duration: "2023 – 2027",
    location: "Andhra Pradesh, India",
    gpa: "CGPA: 7.5 | Core Focus: Data Structures, Web Technologies, Machine Learning, Database Systems"
  }
];

export const certificates = {
  featured: [
    {
      name: "Mastering GenAI: Building AI-Powered Applications",
      issuer: "PurpleLane",
      icon: "🤖",
      link: "/certificates/purplelane-genai.png",
      verifyLink: null,
      desc: "Comprehensive 2-week intensive workshop on architecting Generative AI applications and LLM workflows."
    },
    {
      name: "Full Stack Developer Internship Completion",
      issuer: "Cerevyn Solutions Pvt. Ltd.",
      icon: "💻",
      link: "/certificates/cerevyn-internship.png",
      verifyLink: null,
      desc: "Internship completion certificate verifying hands-on full stack contributions to the BioFactor Pulse platform."
    },
    {
      name: "Introduction to Internet of Things (Elite 78%)",
      issuer: "NPTEL / IIT Kharagpur / Swayam",
      icon: "🌐",
      link: "/certificates/nptel-iot.png",
      verifyLink: null,
      desc: "12-week proctored certification course funded by MoE, Govt. of India, completed with an Elite score of 78%."
    },
    {
      name: "MERN Stack Workshop",
      issuer: "PurpleLane & SASI",
      icon: "⚡",
      link: "/certificates/purplelane-mern.png",
      verifyLink: null,
      desc: "Hands-on workshop covering full-stack development with MongoDB, Express.js, React, and Node.js."
    },
    {
      name: "Machine Learning Research Internship",
      issuer: "NIT Tiruchirappalli",
      icon: "🔬",
      link: "/certificates/nit-trichy-ml.png",
      verifyLink: null,
      desc: "Research internship certificate for predictive modeling and data validation under Dr. Vinay Raj."
    },
    {
      name: "Campus Ambassador Certificate of Achievement",
      issuer: "SenNova Innovations Pvt. Ltd.",
      icon: "🏆",
      link: "/certificates/sennova-ambassador.png",
      verifyLink: null,
      desc: "Recognized for outstanding leadership, initiatives, and technical contributions to campus outreach."
    },
    {
      name: "Data Structures in C",
      issuer: "Great Learning Academy",
      icon: "📘",
      link: "/certificates/great-learning-c.png",
      verifyLink: null,
      desc: "Fundamental course on abstract data types, memory management, trees, and algorithmic complexity."
    },
    {
      name: "Artificial Intelligence Internship Completion",
      issuer: "SenNova Innovations Pvt. Ltd.",
      icon: "🧠",
      link: "/certificates/sennova-ai.png",
      verifyLink: null,
      desc: "Practical domain internship in Artificial Intelligence and core predictive concepts."
    }
  ]
};

export const technicalEvidence = [
  {
    src: "/evidence/system-architecture.png",
    alt: "High-Level Full Stack System Architecture",
    label: "Full Stack Architecture (React, Node, Express, MongoDB Atlas)",
    category: "System Design"
  },
  {
    src: "/evidence/rag-workflow.png",
    alt: "AI & RAG Pipeline Workflow",
    label: "RAG & Vector Retrieval Pipeline (Pinecone + Gemini API)",
    category: "AI Architecture"
  },
  {
    src: "/evidence/semantic-search.png",
    alt: "Semantic Search Architecture Flow",
    label: "Sub-2s Natural Language Querying Architecture",
    category: "Performance"
  },
  {
    src: "/evidence/core-ai-features.png",
    alt: "Core AI Features Breakdown",
    label: "Automated Feedback Ingestion & Sentiment Analysis",
    category: "Feature Matrix"
  },
  {
    src: "/evidence/problem-solution.png",
    alt: "Problem Statement and Solution Matrix",
    label: "Engineering Problem Statement to Solution Mapping",
    category: "Engineering Analysis"
  },
  {
    src: "/evidence/feedback-sources.png",
    alt: "Multi-Source Data Ingestion",
    label: "Multi-Channel Ingestion & Unstructured Data Processing",
    category: "Data Processing"
  }
];

export const footerContent = {
  taglines: [
    "Full Stack Developer",
    "React.js & Node.js Specialist",
    "REST APIs & Database Architecture",
  ],
  credential: "B.Tech CSE (AI & ML) — SASI Institute of Technology and Engineering",
  copyright: `© ${new Date().getFullYear()} Chilukuri Uma Reethika | Built with React & Vite`,
};
