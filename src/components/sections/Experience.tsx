"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
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

        {/* Centered Featured Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {jobsData.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 sm:p-8 md:p-10 hover:border-cyan-400/40 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Background Ambient Glows & Matrix Grid */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(0,247,255,0.08)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-accent-pink to-accent opacity-75" />

              {/* Card Top: Role, Company & Verified Badge */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25 flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,247,255,0.1)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      Verified Industry Internship
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-accent-pink/80 bg-accent-pink/5 px-2.5 py-1 rounded-full border border-accent-pink/20">
                      {job.deptLabel}
                    </span>
                  </div>

                  <h3 className="text-white text-3xl md:text-4xl font-bold font-poppins tracking-wide group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-neutral-300 font-poppins">
                    <span className="font-semibold text-white tracking-wide">{job.company}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-accent-pink" />
                      {job.location}
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Right: Monogram & Dept Symbol */}
                <div className="hidden md:flex flex-col items-end shrink-0">
                  <span className="text-5xl leading-none font-serif text-accent-pink opacity-20 select-none">
                    {job.kanjiSymbol || "壱"}
                  </span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 mt-1 select-none">
                    DESIGN // PRODUCTION
                  </span>
                </div>
              </div>

              {/* Card Middle: Description & Key Deliverables */}
              <div className="my-8 space-y-6">
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-poppins">
                  {job.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-primary font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Key Responsibilities & Deliverables
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 shadow-sm">
                      <span className="text-primary text-[11px] font-mono tracking-wider block mb-1.5 font-semibold">
                        01 / PROTOTYPING
                      </span>
                      <p className="text-xs md:text-sm text-neutral-300 font-poppins leading-relaxed">
                        Designed user-centric high-fidelity UI/UX prototypes and wireframes in <strong className="text-white">Figma</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 shadow-sm">
                      <span className="text-primary text-[11px] font-mono tracking-wider block mb-1.5 font-semibold">
                        02 / VETGPT PRODUCT
                      </span>
                      <p className="text-xs md:text-sm text-neutral-300 font-poppins leading-relaxed">
                        Contributed significantly to <strong className="text-white">VetGPT Super Admin Panel</strong>, delivering interactive layouts and web elements.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 shadow-sm">
                      <span className="text-primary text-[11px] font-mono tracking-wider block mb-1.5 font-semibold">
                        03 / CREATIVE ASSETS
                      </span>
                      <p className="text-xs md:text-sm text-neutral-300 font-poppins leading-relaxed">
                        Crafted brand visual assets, marketing graphics, and digital product designs with <strong className="text-white">Canva</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom: Skills Pills */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 mr-1">
                    Skills:
                  </span>
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 border border-white/10 bg-white/[0.03] px-2.5 py-1 rounded-md hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
