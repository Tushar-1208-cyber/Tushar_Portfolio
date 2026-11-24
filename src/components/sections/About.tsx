"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Image from "next/image";

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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden scroll-mt-28"
      style={{
        background: "linear-gradient(180deg, #050816 0%, #080518 50%, #050816 100%)",
      }}
    >
      {/* Background Gradients and Ambient Spotlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Columns - Philosophy and Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Section Indicator */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-accent-pink" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-accent-pink/90 font-mono">
              About Me
            </span>
          </div>

          {/* Heading with Instrument Serif Styling */}
          <h2 
            className="text-5xl md:text-7xl text-white leading-[1.05] tracking-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            I&apos;m Tushar, a <br />
            <span className="mr-3 font-semibold text-white">creative</span>
            <span className="inline-block relative italic pb-2 text-primary">
              developer
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full origin-left" />
            </span>
          </h2>

          {/* Body Copy */}
          <div className="space-y-5 text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl font-poppins">
            <p>
              I lead with curiosity. Ownership keeps me sharp. I find complex problems, deconstruct them into clean systems, and build robust digital architectures.
            </p>
            <p>
              Versatile by nature, I leverage modern developer tools to move fast, while keeping architectural integrity, technical judgment, and pixel-perfect decisions <span className="text-white font-medium">mine</span>.
            </p>
          </div>

          {/* statistics cards */}
          <div 
            className="grid max-w-sm grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md"
            style={{ borderColor: "rgba(242,184,200,0.15)" }}
          >
            <div className="px-4 py-6 text-center hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-3xl font-bold text-white md:text-4xl font-instrument">225</span>
                <span className="text-sm font-semibold text-accent-pink font-instrument">+</span>
              </div>
              <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-mono">
                DSA Solved
              </span>
            </div>

            <div className="px-4 py-6 text-center hover:bg-white/[0.02] transition-colors duration-300">
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-3xl font-bold text-white md:text-4xl font-instrument">15</span>
                <span className="text-sm font-semibold text-accent-pink font-instrument">+</span>
              </div>
              <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-mono">
                Projects
              </span>
            </div>
          </div>

          {/* Elegant Tooltipped Socials */}
          <div className="flex items-center gap-6 pt-2">
            {[
              {
                icon: <Linkedin className="w-5 h-5" />,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/tushar-gupta-52b6a5292/",
              },
              {
                icon: <Github className="w-5 h-5" />,
                label: "GitHub",
                url: "https://github.com/Tushar-1208-cyber",
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                label: "LeetCode",
                url: "https://leetcode.com/u/tushargupta1208/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-3.5 rounded-full transition-all duration-300 bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-primary/40 hover:bg-white/[0.06]"
                aria-label={social.label}
              >
                <span className="relative z-10">{social.icon}</span>
                {/* Custom sliding hover tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-[10px] uppercase tracking-widest rounded bg-neutral-950 border border-white/10 text-primary opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-50">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Columns - Holographic Avatar Frame */}
        <div className="relative w-full items-center justify-center flex">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto aspect-square w-full max-w-[480px]"
          >
            {/* Sumeet-Style Complex Layered Gradients behind Avatar */}
            <div className="absolute right-[-8%] top-[8%] h-[84%] w-[54%] rounded-[2.5rem] opacity-75 blur-[70px] bg-gradient-to-tr from-primary via-accent to-[#e8467e] pointer-events-none" />
            <div className="absolute left-[-5%] bottom-[5%] h-[40%] w-[40%] rounded-full opacity-60 blur-[60px] bg-radial-gradient from-primary to-transparent pointer-events-none" />
            
            {/* Background glowing frame border */}
            <div className="absolute right-[-4%] top-[4%] h-[90%] w-[44%] rounded-[1.75rem] border border-white/[0.08] bg-white/[0.01] backdrop-blur-md pointer-events-none" />
            
            {/* Inner Profile Image Display Container with Real Photo & Sci-Fi HUD */}
            <div className="absolute left-0 top-[2%] h-[94%] w-[82%] overflow-hidden rounded-[1.75rem] border border-cyan-400/40 bg-zinc-950 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] translate-x-[15px] group">
              <Image
                src="/tushar-final-white.jpg"
                alt="Tushar Gupta"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle bottom gradient fade for footer badges */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
              
              {/* Neon border ring with subtle cyan inner glow */}
              <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-cyan-400/30 pointer-events-none shadow-[inset_0_0_20px_rgba(0,247,255,0.15)]" />

              {/* Sci-Fi Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />

              {/* Top Header Overlay: Name and Title */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-start justify-between pointer-events-none z-10">
                <div className="bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
                  <div className="text-[12px] sm:text-[13px] font-bold tracking-widest uppercase text-white font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    TUSHAR GUPTA
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono tracking-wider text-cyan-300 uppercase">
                    SOFTWARE DEVELOPER | ARCHITECT
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/65 backdrop-blur-md border border-cyan-400/30 text-[8px] sm:text-[9px] font-mono text-cyan-400">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  ONLINE
                </div>
              </div>

              {/* Bottom Footer Overlay: Tech Stack & System Label */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[8px] font-mono uppercase tracking-wider text-neutral-300">
                    C++
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[8px] font-mono uppercase tracking-wider text-neutral-300">
                    PYTHON
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[8px] font-mono uppercase tracking-wider text-neutral-300">
                    REACT
                  </span>
                </div>

                <div className="text-[8px] font-mono text-cyan-400/80 uppercase tracking-widest hidden sm:block">
                  FUTURE TECH
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
