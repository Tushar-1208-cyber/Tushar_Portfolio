export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "AI/ML" | "Full Stack";
  github: string;
  demo: string;
  imageClass: string;
  bentoClass: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
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
      { label: "DSA Solved", value: "180+" },
      { label: "Projects", value: "15+" }
    ],
    socials: {
      github: "https://github.com/Tushar-1208-cyber",
      linkedin: "https://www.linkedin.com/in/tushar-gupta-52b6a5292/",
      leetcode: "https://leetcode.com/u/tushargupta1208/",
      email: "tushargupta1208@gmail.com"
    }
  },

  skills: [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 }
      ]
    },
    {
      title: "Frontend Tech",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TailwindCSS", level: 95 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend Core",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Mongoose", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git & GitHub", level: 92 },
        { name: "Postman", level: 90 },
        { name: "Vercel / CI/CD", level: 85 }
      ]
    }
  ],

  projects: [
    {
      id: "astro-ai",
      title: "Astro AI",
      subtitle: "Next-Gen Generative AI Ecosystem",
      description: "Multi-modal AI orchestrator integrating local LLMs with advanced semantic retrieval vectors and automated pipeline workers.",
      longDescription: "Astro AI is a high-performance generative AI workspace built on Next.js. It handles parallel multi-model execution, structured text embeddings, dynamic prompt-chaining, and real-time context injections. Utilizing customized LangGraph workers and local vectors, it slashes retrieval delays while maintaining supreme contextual precision.",
      tags: ["React.js", "JavaScript", "LangGraph", "Vector DB", "TailwindCSS"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber",
      demo: "https://github.com/Tushar-1208-cyber",
      imageClass: "from-[#00f7ff]/20 to-[#2563eb]/20",
      bentoClass: "md:col-span-2"
    },
    {
      id: "ai-customer-sentiment",
      title: "AI Customer Sentiment Engine",
      subtitle: "NLP & Business Intelligence Pipeline",
      description: "NLP-driven customer sentiment analysis engine processing text reviews to extract business intelligence and actionable insights.",
      longDescription: "A machine learning and NLP application that ingests unstructured customer feedback and sentiment data. Uses specialized tokenization and classification pipelines to calculate sentiment distributions, detect churn signals, and present real-time business insights.",
      tags: ["Python", "NLP", "Machine Learning", "Data Analytics", "React.js"],
      category: "AI/ML",
      github: "https://github.com/Tushar-1208-cyber/AI-Customer_Sentiment_Analysis_and_Business_Insight_Engline_Using_NLP",
      demo: "https://github.com/Tushar-1208-cyber/AI-Customer_Sentiment_Analysis_and_Business_Insight_Engline_Using_NLP",
      imageClass: "from-[#2563eb]/20 to-[#7c3aed]/20",
      bentoClass: "md:col-span-1"
    },
    {
      id: "prescripto",
      title: "Prescripto",
      subtitle: "Doctor Appointment & Healthcare Platform",
      description: "Full stack healthcare platform featuring online doctor appointment bookings, patient management, and scheduling dashboards.",
      longDescription: "Prescripto is an intuitive medical booking web application built for healthcare providers and patients. It offers real-time slot scheduling, doctor profiles, user authentication, and admin management for appointments.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      category: "Full Stack",
      github: "https://github.com/Tushar-1208-cyber",
      demo: "https://github.com/Tushar-1208-cyber",
      imageClass: "from-pink-500/20 to-[#00f7ff]/20",
      bentoClass: "md:col-span-2"
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
      deptLabel: "DESIGN LAB",
      certificateUrl: "/rannlab-certificate.jpg"
    }
  ] as Job[]
};
