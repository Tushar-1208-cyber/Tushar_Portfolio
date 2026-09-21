"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, Globe } from "lucide-react";
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

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md flex flex-col justify-between p-6 md:p-8 hover:border-primary/30 transition-all duration-300 ${project.bentoClass}`}
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Background Ambient Glow Card Grid */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageClass} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-400">
                    <span className="text-xs font-poppins">Explore</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="z-10 mt-auto">
                  <h3 className="text-white text-2xl font-bold font-poppins tracking-wider group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-poppins mt-2 tracking-wide line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] uppercase tracking-widest font-mono text-neutral-400 border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#080518] shadow-[0_30px_70px_rgba(0,247,255,0.1)] z-10 flex flex-col p-6 md:p-8"
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

              {/* Long Description Text */}
              <div className="my-6 text-neutral-300 text-sm md:text-base leading-relaxed font-poppins flex-1 overflow-y-auto pr-2">
                {selectedProject.longDescription}
              </div>

              {/* Full Tech Stack Tags */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  Technologies Utilized
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

              {/* Bottom CTAs - GitHub + Live Demo */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-xs uppercase tracking-widest font-mono text-neutral-400 hover:text-white hover:border-white/30 bg-white/[0.01] hover:bg-white/[0.04] transition-all"
                  >
                    <Github className="h-4.5 w-4.5" />
                    Source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-xs uppercase tracking-widest font-mono text-white bg-gradient-to-b from-primary/10 to-transparent hover:from-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,247,255,0.15)] transition-all"
                  >
                    <Globe className="h-4.5 w-4.5 text-primary" />
                    Live Demo
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
