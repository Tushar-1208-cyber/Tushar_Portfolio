"use client";
import React from "react";
import { ArrowUp, Code } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-16 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[10rem] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Footer Top - Large Logo & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="text-center md:text-left">
            <h2 
              className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white font-outfit"
            >
              Tushar Gupta<span className="text-primary">.</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-500 font-mono mt-2 block">
              Architecting Digital Excellence
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 hover:border-primary/50 bg-white/[0.01] hover:bg-white/[0.04] text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Back to Top</span>
            <div className="p-1 rounded-full bg-white text-black group-hover:bg-primary transition-colors">
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Footer Bottom - Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 text-center sm:text-left">
          
          {/* Copyright copy */}
          <div className="text-neutral-500 text-xs font-poppins tracking-wider">
            &copy; {new Date().getFullYear()} Tushar Gupta. All rights reserved. 
            <span className="block sm:inline sm:ml-2 text-[10px] font-mono text-neutral-600">{"// Built with Next.js & React"}</span>
          </div>

          {/* Symmetrical active social list */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Tushar-1208-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tushar-gupta-52b6a5292/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://leetcode.com/u/tushargupta1208/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
