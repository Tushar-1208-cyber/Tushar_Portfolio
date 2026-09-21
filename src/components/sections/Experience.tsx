"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const jobsData = portfolioData.experience;
  return (
    <section 
      id="experience" 
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050816 0%, #07060f 20%, #09060f 50%, #07060f 80%, #050816 100%)",
      }}
    >
      {/* Decorative vertical connecting grid line */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[20px] top-[100vh] bottom-0 z-50 hidden lg:block pointer-events-none">
          <div className="w-12 h-full border-r border-dashed border-white/5" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-accent-pink" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-accent-pink/90 font-mono">
              Career Path
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Record of <span className="italic font-light text-primary">Service</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-pink to-transparent mt-4" />
          <p className="mt-3 text-sm italic text-neutral-500 font-instrument">
            Where the craft was forged
          </p>
        </div>

        {/* Experience Timeline Grid List */}
        <div className="max-w-4xl mx-auto space-y-16 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/30 via-accent-pink/30 to-accent/30 -translate-x-1/2 hidden md:block" />

          {jobsData.map((job, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline center node indicator */}
                <div className="absolute left-4 sm:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent-pink bg-neutral-950 z-20 shadow-[0_0_10px_rgba(242,184,200,0.5)] hidden md:block" />

                {/* Left/Right spaced flex spacing block */}
                <div className="w-full md:w-1/2" />

                {/* Card side (Left or Right depending on placement) */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div 
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md p-6 md:p-8 hover:border-accent-pink/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Background Decorative Matrix Vector */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-44 h-44 pointer-events-none opacity-[0.03] text-primary group-hover:opacity-[0.06] transition-opacity duration-500">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="0.8" />
                        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.4" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.4" />
                        <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.6" />
                      </svg>
                    </div>

                    {/* Timeline Left side bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-accent-pink to-accent pointer-events-none opacity-60" />

                    {/* Top Job Information */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-white text-2xl font-bold font-poppins tracking-wide group-hover:text-primary transition-colors">
                          {job.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded border border-primary/20">
                            {job.company}
                          </span>
                          <span className="text-neutral-500 text-xs font-poppins">•</span>
                          <span className="text-xs text-neutral-400 font-poppins flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-accent-pink" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Premium symbols (symbols, kanji, dept) */}
                      <div className="flex flex-col items-end gap-1.5 ml-4 shrink-0 text-right">
                        <span className="text-4xl leading-none font-serif text-accent-pink opacity-20 select-none">
                          {job.kanjiSymbol}
                        </span>
                        <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 select-none">
                          {job.deptLabel}
                        </span>
                      </div>
                    </div>

                    {/* Main Description */}
                    <p className="text-neutral-400 text-sm md:text-[14.5px] leading-relaxed font-poppins mb-6">
                      {job.description}
                    </p>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] uppercase tracking-widest font-mono text-neutral-300 border border-white/10 bg-white/[0.02] px-2.5 py-1 rounded hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Calendar Period (Bottom right card display) */}
                    <div className="flex items-center gap-1.5 mt-6 text-[10px] uppercase font-mono text-neutral-500">
                      <Calendar className="h-3.5 w-3.5 text-accent-pink" />
                      {job.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
