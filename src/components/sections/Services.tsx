"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Cpu, Smartphone, Layers, BrainCircuit, Sparkles, ShieldCheck } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
}

const servicesData: Service[] = [
  {
    title: "Full Stack Web Apps",
    description: "Building end-to-end, high-performance web systems on Next.js 15, React, and modular serverless infrastructures with clean, responsive interfaces.",
    icon: <LayoutGrid className="h-6 w-6 text-primary" />,
    badge: "Next.js / MERN"
  },
  {
    title: "Robust Backend APIs",
    description: "Developing highly secure, microservice-based server controllers utilizing Node.js, Express, and FastAPI, mapped to optimized database structures.",
    icon: <Cpu className="h-6 w-6 text-[#7c3aed]" />,
    badge: "Node.js / Python"
  },
  {
    title: "System Design & Scale",
    description: "Architecting high-scale applications incorporating secure caching layers, distributed vector indexes, atomic concurrency locks, and load balancing.",
    icon: <Layers className="h-6 w-6 text-[#2563eb]" />,
    badge: "High Performance"
  },
  {
    title: "Generative AI Integrations",
    description: "Orchestrating smart application layers utilizing custom fine-tuned LLMs, LangGraph workflows, real-time STT/TTS channels, and semantic search.",
    icon: <BrainCircuit className="h-6 w-6 text-emerald-400" />,
    badge: "RAG & LLMs"
  },
  {
    title: "Immersive UI/UX Engineering",
    description: "Crafting fluid interactive interfaces incorporating 3D Canvas shaders, custom GSAP timelines, Lenis smooth scrolling, and micro-interactions.",
    icon: <Smartphone className="h-6 w-6 text-pink-400" />,
    badge: "Framer / Three.js"
  },
  {
    title: "DevOps & Cloud Security",
    description: "Deploying automated CI/CD pipelines, containerized microservices with Docker, AST static vulnerability scans, and cloud hosting across Vercel and Render.",
    icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
    badge: "Docker / CI/CD"
  }
];

// Single service card that handles mouse-glowing coordinate tracks
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md p-6 md:p-8 flex flex-col justify-between group hover:border-cyan-400/30 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)] min-h-[250px] h-full"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Background radial spotlight follow coordinate */}
      {hovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(0, 247, 255, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Decorative dot matrix grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Card Top Info */}
        <div className="flex justify-between items-start">
          <div className="p-3 bg-neutral-950 border border-white/10 rounded-2xl group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300 shadow-sm">
            {service.icon}
          </div>
          <span className="text-[9.5px] uppercase tracking-widest font-mono text-neutral-400 border border-white/10 bg-white/[0.03] px-3 py-1 rounded-full">
            {service.badge}
          </span>
        </div>

        {/* Card Bottom Info */}
        <div className="mt-5">
          <h3 className="text-white text-xl font-bold font-poppins tracking-wide group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-neutral-300/90 font-poppins mt-2.5 tracking-wide leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Services
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Craft & <span className="italic font-light text-primary">Capabilities</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
