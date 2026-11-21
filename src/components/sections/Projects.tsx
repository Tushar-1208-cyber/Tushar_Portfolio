"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, Globe, CheckCircle2 } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section 
      id="projects" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Showcase
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Record of <span className="italic font-light text-primary">Creation</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />

          {/* Tag Filter System */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {["All", "AI/ML", "Full Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium font-poppins uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-primary/20 text-white border border-primary/40 shadow-[0_0_15px_rgba(0,247,255,0.15)]"
                    : "bg-white/[0.02] text-neutral-400 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid with Direct Action Links & Rich Descriptions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md flex flex-col justify-between p-6 md:p-8 hover:border-primary/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${project.bentoClass}`}
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Background Ambient Glow Card Grid */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageClass} opacity-25 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                {/* Top Section */}
                <div className="flex justify-between items-start z-10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                      {project.category}
                    </span>
                    {project.demo && (
                      <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-poppins text-neutral-400 group-hover:text-primary transition-colors">
                    <span>Overview</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Middle Content Section */}
                <div className="z-10 flex-1 flex flex-col justify-start">
                  <h3 className="text-white text-2xl font-bold font-poppins tracking-wide group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-primary/80 mt-1 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  
                  {/* Expanded, highly readable description */}
                  <p className="text-sm text-neutral-300 font-poppins mt-3.5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9.5px] uppercase tracking-wider font-mono text-neutral-300 border border-white/10 bg-white/[0.03] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dedicated Bottom Action Bar with Direct Links */}
                <div className="z-20 mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/25 text-primary text-xs font-mono tracking-wider transition-all shadow-[0_0_12px_rgba(0,247,255,0.15)] group/link"
                      >
                        <Globe className="w-3.5 h-3.5 text-primary group-hover/link:rotate-12 transition-transform" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.02] text-neutral-400 text-[11px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>Deploying Soon</span>
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-neutral-300 hover:text-white text-xs font-mono tracking-wider transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline-block">
                    Click for Architecture ↗
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep Immersive Modal Preview Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/15 bg-[#080518] shadow-[0_30px_70px_rgba(0,247,255,0.1)] z-10 flex flex-col p-6 md:p-8"
            >
              {/* Corner decorative grids */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,247,255,0.08)_0%,transparent_70%)] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-primary/50 text-neutral-400 hover:text-white bg-white/[0.02] transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title & Subtitle */}
              <div className="pr-12">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary">
                  {selectedProject.category} Project
                </span>
                <h3 className="text-white text-3xl font-extrabold font-poppins mt-2 tracking-wide">
                  {selectedProject.title}
                </h3>
                <p className="text-sm italic text-neutral-400 font-poppins mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Scrollable Content Body */}
              <div className="my-6 space-y-5 overflow-y-auto pr-2 flex-1">
                {/* Long Description Text */}
                <div className="text-neutral-300 text-sm md:text-base leading-relaxed font-poppins">
                  {selectedProject.longDescription}
                </div>

                {/* Key Architecture Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-primary font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Key Capabilities & Engineering
                    </span>
                    <ul className="space-y-2 mt-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300 font-poppins">
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full Tech Stack Tags */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    Technologies & Libraries
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-white border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(0,247,255,0.03)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTAs - GitHub + Live Demo */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  {selectedProject.demo ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-xs uppercase tracking-widest font-mono text-white bg-gradient-to-b from-primary/20 to-primary/5 hover:from-primary/30 hover:border-primary shadow-[0_0_15px_rgba(0,247,255,0.2)] transition-all"
                    >
                      <Globe className="h-4 w-4 text-primary" />
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-400">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>Deployment Pending</span>
                    </div>
                  )}

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-xs uppercase tracking-widest font-mono text-neutral-300 hover:text-white hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.06] transition-all"
                  >
                    <Github className="h-4.5 w-4.5" />
                    Source Code
                  </a>
                </div>
                
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest select-none hidden sm:block">
                  Tushar Gupta Workspace
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
