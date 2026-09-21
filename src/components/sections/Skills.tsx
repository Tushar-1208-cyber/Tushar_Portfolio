"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Layout, Database, Terminal, Settings2, Sparkles 
} from "lucide-react";

import { portfolioData } from "@/data/portfolioData";

interface SkillCategoryWithIcon {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const iconsMap: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-5 w-5 text-[#00f7ff]" />,
  "Frontend Tech": <Layout className="h-5 w-5 text-[#7c3aed]" />,
  "Backend Core": <Terminal className="h-5 w-5 text-[#2563eb]" />,
  Databases: <Database className="h-5 w-5 text-emerald-400" />,
  "DevOps & Tools": <Settings2 className="h-5 w-5 text-amber-400" />
};

const skillCategories: SkillCategoryWithIcon[] = portfolioData.skills.map((cat) => ({
  ...cat,
  icon: iconsMap[cat.title] || <Code2 className="h-5 w-5 text-primary" />
}));

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section 
      id="skills" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050816 0%, #060515 50%, #050816 100%)",
      }}
    >
      {/* Background Orbits Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-dashed border-white/10 rounded-full animate-[spin_100s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Expertise
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
        </div>

        {/* Orbit Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Category Selection Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 z-10">
            {skillCategories.map((category, idx) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedCategory(idx)}
                className={`relative flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 group cursor-pointer ${
                  selectedCategory === idx
                    ? "bg-white/[0.04] border-primary/40 shadow-[0_0_20px_rgba(0,247,255,0.06)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                {/* Visual Glow Line inside active button */}
                {selectedCategory === idx && (
                  <motion.div
                    layoutId="activeSkillBar"
                    className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary to-accent rounded-l-2xl"
                  />
                )}
                
                {/* Category Icon */}
                <div className={`p-3 rounded-xl border bg-neutral-950 transition-transform group-hover:scale-110 ${
                  selectedCategory === idx ? "border-primary/30" : "border-white/10"
                }`}>
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-white text-base font-medium font-poppins tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Detailed Skill Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-stretch justify-center relative">
            {/* Ambient overlay bloom */}
            <div className="absolute inset-0 bg-primary/2 rounded-3xl blur-2xl pointer-events-none" />

            <div 
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex-1 flex flex-col justify-between"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Category Showcase Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg border border-white/10 bg-neutral-950">
                    {skillCategories[selectedCategory].icon}
                  </div>
                  <h3 className="text-white text-xl font-bold font-poppins tracking-wider">
                    {skillCategories[selectedCategory].title}
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest font-mono text-accent-pink uppercase animate-pulse">
                  System Loaded
                </span>
              </div>

              {/* Progress Bars List */}
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                {skillCategories[selectedCategory].skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-poppins text-neutral-300">
                      <span className="font-medium tracking-wide">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    {/* Animated custom bar container */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{
                          boxShadow: "0 0 10px rgba(0, 247, 255, 0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Vector Core Decorative Grid (replicates areysumeetji geometry) */}
              <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono">
                    Tushar Gupta Tech Core
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-1 bg-white/10 rounded-full" />
                  <div className="w-8 h-1 bg-primary/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
