"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Layout, 
  Terminal, 
  Database, 
  Cpu, 
  Palette, 
  Sparkles,
  Layers,
  CheckCircle2
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

const categoryIcons: Record<string, { icon: React.ReactNode; color: string; glow: string }> = {
  languages: {
    icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/10",
    glow: "rgba(0, 247, 255, 0.15)"
  },
  "ai-ml": {
    icon: <Brain className="h-5 w-5 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/10",
    glow: "rgba(168, 85, 247, 0.15)"
  },
  frontend: {
    icon: <Layout className="h-5 w-5 text-emerald-400" />,
    color: "from-emerald-500/20 to-cyan-500/10",
    glow: "rgba(16, 185, 129, 0.15)"
  },
  backend: {
    icon: <Terminal className="h-5 w-5 text-blue-400" />,
    color: "from-blue-500/20 to-indigo-500/10",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  databases: {
    icon: <Database className="h-5 w-5 text-amber-400" />,
    color: "from-amber-500/20 to-orange-500/10",
    glow: "rgba(245, 158, 11, 0.15)"
  },
  devops: {
    icon: <Cpu className="h-5 w-5 text-rose-400" />,
    color: "from-rose-500/20 to-red-500/10",
    glow: "rgba(244, 63, 94, 0.15)"
  },
  design: {
    icon: <Palette className="h-5 w-5 text-pink-400" />,
    color: "from-pink-500/20 to-purple-500/10",
    glow: "rgba(236, 72, 153, 0.15)"
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const categories: SkillCategory[] = portfolioData.skills;

  const filteredCategories = activeFilter === "all" 
    ? categories 
    : categories.filter((c) => c.id === activeFilter);

  const filterTabs = [
    { id: "all", label: "All Stack" },
    { id: "languages", label: "Languages" },
    { id: "ai-ml", label: "AI & GenAI" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "devops", label: "DevOps & Tools" },
    { id: "design", label: "UI/UX Design" }
  ];

  return (
    <section 
      id="skills" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden scroll-mt-28"
      style={{
        background: "linear-gradient(180deg, #050816 0%, #070716 50%, #050816 100%)",
      }}
    >
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-white/10 rounded-full animate-[spin_80s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-dashed border-white/5 rounded-full animate-[spin_120s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono font-medium">
              Technical Arsenal
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Symphony of <span className="italic font-light text-primary">Technologies</span>
          </motion.h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
          <p className="mt-3 text-sm md:text-base text-neutral-400 font-poppins max-w-2xl text-center">
            Production-grade competencies spanning modern full-stack architectures, GenAI engineering, and high-fidelity UI/UX design.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-black font-semibold shadow-[0_0_20px_rgba(0,247,255,0.3)]"
                    : "text-neutral-400 hover:text-white border border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const meta = categoryIcons[category.id] || categoryIcons.languages;
              const isWide = activeFilter === "all" && (idx === 0 || idx === 1);

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 md:p-7 hover:border-cyan-400/40 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between ${
                    isWide ? "lg:col-span-1" : ""
                  }`}
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Ambient Glow Spotlight */}
                  <div 
                    className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                    style={{ background: meta.glow }}
                  />

                  <div>
                    {/* Card Top: Icon, Title & Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl border border-white/10 bg-neutral-950/80 shadow-inner group-hover:scale-105 transition-transform duration-300">
                          {meta.icon}
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-bold font-poppins tracking-wide group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                            {category.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-neutral-300 font-poppins leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Skills Chips Matrix */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/chip flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-primary/50 transition-all duration-300 shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/80 group-hover/chip:scale-125 group-hover/chip:bg-primary transition-all" />
                          <span className="text-xs font-medium text-neutral-200 group-hover/chip:text-white font-poppins">
                            {skill.name}
                          </span>
                          {skill.status && (
                            <span className="text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-white/5 text-neutral-400 border border-white/5 group-hover/chip:text-primary/90 transition-colors">
                              {skill.status}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Competency Indicator Footer */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-neutral-500 font-mono text-[10px]">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>{category.skills.length} Validated Technologies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-1 rounded-full bg-primary/40" />
                      <span className="w-4 h-1 rounded-full bg-primary" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global Tech Summary Ribbon */}
        <div className="mt-16 p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.02] via-primary/[0.03] to-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-primary shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white font-poppins">End-to-End Execution Capability</h4>
              <p className="text-xs text-neutral-400 font-poppins">From Figma design & wireframes to cloud microservices and fine-tuned AI deployment.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-primary/10 text-primary border border-primary/20">
              35+ Tech Competencies
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Production Tested
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
