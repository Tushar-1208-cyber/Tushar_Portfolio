export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  highlights?: string[];
  tags: string[];
  category: "AI/ML" | "Full Stack";
  github: string;
  demo?: string;
  imageClass: string;
  bentoClass: string;
}

export interface SkillItem {
  name: string;
  level: number;
  status?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  kanjiSymbol?: string;
  deptLabel: string;
  certificateUrl?: string;
}

export const portfolioData = {
  personal: {
    name: "Tushar Gupta",
    role: "Full Stack & AI Developer",
    tagline: "Fast enough to ship. Sharp enough to scale.",
    bio: [
      "I lead with curiosity. Ownership keeps me sharp. I find complex problems, deconstruct them into clean systems, and build robust digital architectures.",
      "Versatile by nature, I leverage modern developer ecosystems to build fast, scalable, and pixel-perfect applications."
    ],
    stats: [
      { label: "DSA Solved", value: "225+" },
      { label: "Projects", value: "15+" }
    ],
    socials: {
      github: "https://github.com/Tushar-1208-cyber",
      linkedin: "https://www.linkedin.com/in/tushar-gupta-52b6a5292/",
      leetcode: "https://leetcode.com/u/tushargupta1208/",
      email: "tushargupta1208@gmail.com",
      resume: "/resume.pdf",
      resumeDrive: "https://drive.google.com/file/d/1rTYt_5BwTcPd782tjRS1GH933kiPk3pg/view?usp=sharing"
    }
  },

  skills: [
    {
      id: "languages",
      title: "Languages & Core CS",
      badge: "ALGORITHMIC FOUNDATIONS",
      description: "Strong algorithmic problem solving, modern multi-paradigm programming, and object-oriented software engineering.",
      skills: [
        { name: "C++", level: 92, status: "Advanced / DSA" },
        { name: "Python", level: 90, status: "Full Stack / AI" },
        { name: "JavaScript (ES6+)", level: 92, status: "Core Web" },
        { name: "TypeScript", level: 88, status: "Type-Safe" },
        { name: "SQL", level: 86, status: "Relational Queries" },
        { name: "Data Structures & Algorithms", level: 94, status: "229+ Solved" },
        { name: "OOPs & System Design", level: 88, status: "Architecture" }
      ]
    },
    {
      id: "ai-ml",
      title: "AI, GenAI & ML",
      badge: "INTELLIGENT SYSTEMS",
      description: "Building production-grade GenAI pipelines, local LLM fine-tuning with PyTorch, and NLP analytics engines.",
      skills: [
        { name: "Google Gemini AI", level: 92, status: "LLM APIs" },
        { name: "TinyLlama 1.1B Fine-Tuning", level: 88, status: "Local Model" },
        { name: "PyTorch & CUDA", level: 82, status: "GPU Accel" },
        { name: "HuggingFace Transformers", level: 85, status: "Pipelines" },
        { name: "Aspect-Based Sentiment (ABSA)", level: 88, status: "NLP Engine" },
        { name: "Prompt Engineering", level: 92, status: "Orchestration" },
        { name: "Bandit AST Security Scanner", level: 86, status: "Code Auditing" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      badge: "MODERN INTERACTIVE UI",
      description: "Crafting blazing fast, responsive, and pixel-perfect user interfaces with dynamic motion physics.",
      skills: [
        { name: "React.js", level: 95, status: "Production" },
        { name: "Next.js 15 (App Router)", level: 92, status: "SSR / SSG" },
        { name: "Tailwind CSS", level: 96, status: "Styling Core" },
        { name: "HTML5 & Modern CSS3", level: 95, status: "Semantic" },
        { name: "Framer Motion", level: 90, status: "Fluid Motion" },
        { name: "Three.js / 3D Canvas", level: 82, status: "Visual Shaders" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      badge: "SCALABLE APIS & WEBRTC",
      description: "Architecting resilient server controllers, atomic database transactions, live WebRTC video, and Socket.io streams.",
      skills: [
        { name: "Node.js", level: 90, status: "Runtime" },
        { name: "Express.js", level: 92, status: "Microservices" },
        { name: "FastAPI", level: 86, status: "Async Python" },
        { name: "RESTful API Architecture", level: 94, status: "Standard" },
        { name: "WebRTC Video Streams", level: 84, status: "Live Audio/Video" },
        { name: "Socket.io", level: 88, status: "Real-Time Chat" },
        { name: "JWT & Secure Auth", level: 90, status: "Auth Guard" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Cloud",
      badge: "PERSISTENCE & SCHEMAS",
      description: "Designing optimized data schemas, transactional database safety, and modern serverless PostgreSQL.",
      skills: [
        { name: "MongoDB", level: 90, status: "NoSQL Core" },
        { name: "PostgreSQL (Neon DB)", level: 85, status: "Serverless SQL" },
        { name: "MySQL", level: 88, status: "Relational" },
        { name: "Mongoose ODM", level: 92, status: "Data Models" },
        { name: "Drizzle ORM", level: 86, status: "Edge Safe" },
        { name: "Firebase", level: 84, status: "Cloud Backend" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tooling",
      badge: "INFRASTRUCTURE & CI/CD",
      description: "Automating workflows with containerization, CI/CD pipelines, Git version control, and production deployments.",
      skills: [
        { name: "Docker", level: 84, status: "Containers" },
        { name: "Git & GitHub", level: 94, status: "Version Control" },
        { name: "Postman", level: 92, status: "API Testing" },
        { name: "CI/CD Automation", level: 85, status: "Pipelines" },
        { name: "Vercel Deployment", level: 90, status: "Edge Hosting" },
        { name: "Linux / Bash", level: 82, status: "Command Line" }
      ]
    },
    {
      id: "design",
      title: "UI/UX & Creative Tools",
      badge: "PRODUCT DESIGN LAB",
      description: "Translating complex functional requirements into intuitive wireframes, interactive design systems, and marketing assets.",
      skills: [
        { name: "Figma", level: 92, status: "Prototyping" },
        { name: "Canva", level: 95, status: "Visual Assets" },
        { name: "Admin Dashboard Design", level: 90, status: "VetGPT Experience" },
        { name: "Wireframing & Mockups", level: 92, status: "Information Arch" }
      ]
    }
  ],

  projects: [
    {
      id: "ai-website-generator",
      title: "AI Website Generator",
      subtitle: "Prompt-to-Website AI Builder with Real-Time Preview Sandbox",
      description: "Generates complete, modern, responsive websites from natural language prompts using Google Gemini AI, interactive chat refinement, live code playground, and Drizzle/Neon persistence.",
      longDescription: "A high-performance full-stack web builder that translates plain English prompts into production-ready websites. Integrates Google's Gemini AI with an interactive chat interface to customize layouts in real time. Features full project persistence using Drizzle ORM and Neon Serverless PostgreSQL, Clerk authentication, and pre-built component kits built on Radix UI and Tailwind CSS.",
      highlights: [
        "Natural language to complete responsive website generation with Google Gemini",
        "Interactive real-time chat interface to iteratively tweak UI/UX",
        "Live interactive code playground & preview sandbox",
        "Clerk user authentication with project saving & session history",
        "Drizzle ORM + Neon Serverless PostgreSQL persistence"
      ],
      tags: ["Next.js 15", "Google Gemini AI", "TypeScript", "TailwindCSS", "Drizzle ORM", "Neon DB", "Clerk Auth"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber/AI-Website_Generator",
      demo: "https://ai-website-generator-gamma-gold.vercel.app",
      imageClass: "from-cyan-500/20 via-blue-600/20 to-indigo-600/20",
      bentoClass: "md:col-span-2"
    },
    {
      id: "prescripto",
      title: "Prescripto",
      subtitle: "Enterprise Healthcare & Teleconsultation Platform",
      description: "Production-grade doctor consultation and booking platform featuring three-tier architecture (Patient, Doctor, Admin), atomic scheduling locks, WebRTC video calls, and Stripe/Razorpay payments.",
      longDescription: "An enterprise-grade, full-stack healthcare ecosystem built for seamless doctor-patient interactions. Solves double-booking with atomic database locks, incorporates WebRTC and Socket.io for end-to-end encrypted live video appointments, and implements a resilient payment refund engine with cryptographic webhook deduplication for Stripe and Razorpay.",
      highlights: [
        "Three-tier portal: Patient Booking, Doctor Workspace & Admin Moderation",
        "Atomic concurrency locks preventing double-booking of specialist slots",
        "Real-time WebRTC authenticated video rooms and Socket.io chat",
        "Dual payment integration (Stripe & Razorpay) with idempotent webhooks",
        "Digital prescription (Rx) generator and consultation history"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "Stripe", "Razorpay", "TailwindCSS"],
      category: "Full Stack",
      github: "https://github.com/Tushar-1208-cyber/Prescripto",
      demo: "https://prescripto-frontend-kappa-coral.vercel.app",
      imageClass: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
      bentoClass: "md:col-span-1"
    },
    {
      id: "astro-ai",
      title: "Astro AI",
      subtitle: "Privacy-First Educational Assistant Powered by Fine-Tuned Local LLMs",
      description: "On-device AI tutor powered by a custom fine-tuned TinyLlama 1.1B model on GPU. Delivers cloud-independent automated quiz generation, intelligent answer grading, and multi-lingual voice tutoring.",
      longDescription: "A privacy-centric educational AI platform designed for students and educators. Eliminates cloud API dependencies and recurring token bills by running a locally fine-tuned TinyLlama 1.1B LLM over a GPU-accelerated FastAPI microservice. Features automated test and quiz generation from study notes, semantic natural language grading, and speech-to-text voice tutoring.",
      highlights: [
        "Custom fine-tuned TinyLlama 1.1B LLM running 100% on-device (zero cloud leaks)",
        "GPU-accelerated FastAPI backend with CUDA pipeline optimization",
        "Automated curriculum quiz generation & smart semantic essay grading",
        "Multi-lingual interactive tutor with speech recognition and voice input",
        "Modern Next.js responsive interface with real-time streaming tokens"
      ],
      tags: ["Next.js 15", "FastAPI", "Python", "TinyLlama 1.1B", "PyTorch / CUDA", "HuggingFace", "TailwindCSS"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber/Astro-AI--Gen-Ai_Project",
      demo: "https://astro-ai-genai-fso7meubz-tushar-1208-cybers-projects.vercel.app",
      imageClass: "from-purple-600/20 via-indigo-600/20 to-blue-600/20",
      bentoClass: "md:col-span-1"
    },
    {
      id: "ai-customer-sentiment",
      title: "AI Customer Sentiment Engine",
      subtitle: "Aspect-Based NLP Analytics & Review Intelligence Pipeline",
      description: "Advanced NLP pipeline analyzing thousands of customer reviews with Aspect-Based Sentiment Analysis (ABSA) to isolate feature-level satisfaction (camera, battery, price) and churn signals.",
      longDescription: "An industrial-strength machine learning and NLP business intelligence pipeline. Goes beyond basic polarity classification to perform Aspect-Based Sentiment Analysis (ABSA), extracting specific entities and calculating granular sentiment vectors per product attribute. Surfaces real-time churn alerts, keyword trends, and interactive executive dashboards.",
      highlights: [
        "Aspect-Based Sentiment Analysis (ABSA) for pinpoint product feature scoring",
        "Processed and vectorized 50,000+ unstructured e-commerce reviews",
        "Automated customer churn signal detection and critical alert triggers",
        "Interactive analytics dashboards with sentiment distribution charts",
        "Modular pipeline supporting BERT/RoBERTa embeddings and TF-IDF baselines"
      ],
      tags: ["Python", "NLP / ABSA", "Transformers", "Scikit-Learn", "Pandas", "Matplotlib", "Streamlit"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber/AI-Customer_Sentiment_Analysis_and_Business_Insight_Engline_Using_NLP",
      demo: "https://ai-customer-sentiment-engine.vercel.app",
      imageClass: "from-amber-500/20 via-orange-600/20 to-red-600/20",
      bentoClass: "md:col-span-2"
    },
    {
      id: "securepatch",
      title: "SecurePatch",
      subtitle: "Autonomous AI Vulnerability Scanner & Automated Patch Verification",
      description: "Automated software security pipeline that detects vulnerabilities in Python repositories via Bandit AST scans and synthesizes verified, regression-tested code patches using local LLMs.",
      longDescription: "An AI-assisted cyber vulnerability detection and automated patch verification system. Ingests Python codebases, performs Bandit AST security scans, analyzes vulnerable code context using Abstract Syntax Trees, and orchestrates local LLMs to generate precise security fixes. Validates synthesized patches inside isolated Docker test runners against automated test suites.",
      highlights: [
        "Automated Bandit AST static vulnerability discovery & severity classification",
        "AST source context analysis for high-fidelity patch generation",
        "Multi-LLM benchmark evaluation measuring patch safety and compile rates",
        "Isolated Docker container execution for zero-risk patch verification",
        "Automated CI/CD security regression test runner"
      ],
      tags: ["Python", "FastAPI", "Docker", "Bandit AST", "LLM Code Synthesis", "Cybersecurity", "CI/CD Pipeline"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber/SecurePatch",
      demo: "https://securepatch-4hgfxjcaj-tushar-1208-cybers-projects.vercel.app",
      imageClass: "from-rose-600/20 via-pink-600/20 to-purple-600/20",
      bentoClass: "md:col-span-3"
    }
  ] as Project[],

  experience: [
    {
      id: "rannlab",
      role: "UI/UX Intern",
      company: "Rannlab Technologies Pvt. Ltd.",
      period: "June 2025 – July 2025",
      location: "Internship",
      description: "Designed user-centric UI/UX prototypes and high-fidelity interfaces using Figma. Created promotional creatives, marketing designs, and visual content using Canva. Actively contributed to the VetGPT Super Admin Panel Development project, designing interactive interface designs, dashboards, and responsive web elements.",
      skills: ["Figma", "Canva", "UI/UX Prototyping", "Admin Panel Design", "Wireframing", "Visual Design"],
      kanjiSymbol: "壱",
      deptLabel: "DESIGN LAB"
    }
  ] as Job[]
};
