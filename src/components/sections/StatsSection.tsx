"use client";
import React from "react";
import { motion as motionFramer } from "framer-motion";
import { Code2, Sparkles, Award, Flame, Star, GitFork, ArrowUpRight } from "lucide-react";

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

export default function StatsSection() {
  return (
    <section 
      id="stats" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,247,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Metrics
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Coding & <span className="italic font-light text-primary">Algorithmic</span> Analytics
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LeetCode Panel (5 Cols) */}
          <motionFramer.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md p-6 md:p-8 flex flex-col justify-between"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 50px rgba(0,0,0,0.6)",
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(239,143,0,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Title block */}
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
                  LeetCode Analytics
                </span>
              </div>
              <a 
                href="https://leetcode.com/u/tushargupta1208/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-mono text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-1"
              >
                @tushargupta1208 <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            {/* Main ratings and Total Solve counts */}
            <div className="py-6 flex justify-between items-center gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">
                  Contest Rating
                </span>
                <span className="text-3xl font-extrabold text-white mt-1 block font-poppins tracking-wide">
                  1,758
                </span>
                <span className="text-[10px] text-amber-500 font-medium font-poppins mt-0.5 flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" /> Top 10% Solver
                </span>
              </div>

              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Circular indicator underlay */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="38" stroke="#f59e0b" strokeWidth="6" fill="transparent"
                    strokeDasharray="238" strokeDashoffset="45" strokeLinecap="round" className="transition-all duration-1000" />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xl font-black text-white block leading-none font-outfit">180+</span>
                  <span className="text-[8px] uppercase tracking-widest text-neutral-500 mt-0.5 font-mono">Solved</span>
                </div>
              </div>
            </div>

            {/* Sub Solve Breakdown list */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              {[
                { name: "Easy Problems", solved: 60, total: 80, color: "bg-emerald-500" },
                { name: "Medium Problems", solved: 95, total: 120, color: "bg-amber-500" },
                { name: "Hard Problems", solved: 25, total: 40, color: "bg-rose-500" }
              ].map((tier, idx) => (
                <div key={tier.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-poppins text-neutral-400">
                    <span className="font-medium">{tier.name}</span>
                    <span className="font-mono text-white">{tier.solved} / {tier.total}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motionFramer.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(tier.solved / tier.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className={`h-full ${tier.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motionFramer.div>

          {/* GitHub Panel (7 Cols) */}
          <motionFramer.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md p-6 md:p-8 flex flex-col justify-between"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 50px rgba(0,0,0,0.6)",
            }}
          >
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[radial-gradient(circle_at_bottom_left,rgba(0,247,255,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Header info */}
            <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
                  GitHub Contribution Activity
                </span>
              </div>
              <a 
                href="https://github.com/Tushar-1208-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-mono text-neutral-400 hover:text-primary transition-colors flex items-center gap-1"
              >
                @Tushar-1208-cyber <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            {/* Live contribution graph (color matches cyan primary) */}
            <div className="w-full py-4 flex flex-col items-center justify-center overflow-x-auto">
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mb-4 self-start">
                Annual Coding Grid
              </span>
              <div className="w-full min-w-[600px] flex justify-center bg-white/[0.01] p-3 border border-white/5 rounded-2xl">
                {/* Embedded live chart stylized inside dark background */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://ghchart.rshah.org/00f7ff/Tushar-1208-cyber"
                  alt="Tushar-1208-cyber GitHub contribution graph"
                  width="720"
                  height="120"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(0,247,255,0.15))"
                  }}
                />
              </div>
            </div>

            {/* Quick stats boxes */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/5 text-center">
              <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                <Flame className="h-4.5 w-4.5 text-accent-pink mx-auto mb-1 animate-bounce" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Streak</span>
                <span className="text-base font-bold text-white block mt-0.5">45 Days</span>
              </div>

              <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                <Star className="h-4.5 w-4.5 text-primary mx-auto mb-1" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Total Stars</span>
                <span className="text-base font-bold text-white block mt-0.5">120+</span>
              </div>

              <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                <GitFork className="h-4.5 w-4.5 text-purple-400 mx-auto mb-1" />
                <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Forks</span>
                <span className="text-base font-bold text-white block mt-0.5">38 Total</span>
              </div>
            </div>

          </motionFramer.div>
        </div>
      </div>
    </section>
  );
}
