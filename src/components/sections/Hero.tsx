"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import CanvasBackground from "../CanvasBackground";

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

const roles = ["Full Stack Developer", "Backend Engineer", "Problem Solver", "System Design Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(80); // Typing speed
        if (displayText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(45); // Deleting speed
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  // Spotlight mouse follow effect
  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsapToSpotlight(clientX, clientY);
    };

    const gsapToSpotlight = (x: number, y: number) => {
      if (spotlight) {
        spotlight.style.background = `radial-gradient(ellipse 450px 450px at ${x}px ${y}px, rgba(0, 247, 255, 0.08) 0%, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-[#050816] overflow-x-clip flex flex-col justify-between isolate py-12 md:py-0"
    >
      {/* Dynamic 3D canvas backdrop particles */}
      <CanvasBackground />

      {/* Futuristic Cursor-Following Spotlight Overlay */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-10 transition-all duration-300"
        style={{
          background: "radial-gradient(ellipse 450px 450px at 50% 50%, rgba(0, 247, 255, 0.06) 0%, transparent 80%)",
        }}
      />

      {/* Grid background structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Ambient color mesh blobs */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] gradient-blob bg-[#2563eb]/10 z-0 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] gradient-blob bg-[#7c3aed]/10 z-0 animate-pulse" />

      {/* Main hero typography card container */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-7xl mx-auto z-20 w-full pt-16 relative">
        {/* Animated tag badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.25em] font-medium font-poppins mb-6 shadow-[0_0_15px_rgba(0,247,255,0.08)]"
        >
          Available for Opportunities
        </motion.div>

        {/* Serif Headline: Ship and Scale */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight px-4 max-w-5xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span className="font-light italic text-white/90">Fast enough to </span>
          <span className="font-semibold not-italic text-white">ship.</span>
          <br className="hidden md:block"/>
          <span className="font-light italic text-white/90"> Sharp enough to </span>
          <span className="font-semibold not-italic text-white">scale.</span>
        </motion.h1>

        {/* Gooey connected CTA, View Projects and Resume link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap justify-center"
        >
          {/* Sumeet-Style Gooey "Let's Connect" Button */}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-b from-white/12 to-white/3 px-1 py-1 transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(0,247,255,0.25)] hover:border-primary/50"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* SVG Gooey Filter */}
            <svg aria-hidden="true" className="absolute h-0 w-0" style={{ position: "absolute" }}>
              <defs>
                <filter id="connect-goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" />
                </filter>
              </defs>
            </svg>
            
            <span aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ filter: "url(#connect-goo)" }}>
              <span className="absolute inset-y-0 right-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:w-full" />
              <span className="absolute top-1/2 right-[-12%] h-4 w-4 -translate-y-[180%] rounded-full bg-white transition-all duration-[350ms] ease-out group-hover:right-[100%]" />
              <span className="absolute top-1/2 right-[-12%] h-5 w-5 translate-y-[90%] rounded-full bg-white transition-all duration-[550ms] ease-out group-hover:right-[80%]" />
            </span>
            
            <div className="relative flex items-center gap-6 pl-6 pr-1 py-1">
              <span className="font-semibold text-white text-sm tracking-wide font-poppins transition-colors duration-400 group-hover:text-black">
                Let&apos;s Connect
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-400 group-hover:scale-[0.9]">
                <ArrowRight className="h-5 w-5 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* View Projects link */}
          <button 
            onClick={() => scrollToSection("projects")}
            className="text-neutral-400 hover:text-primary hover:tracking-wide transition-all duration-300 text-sm font-medium tracking-widest font-poppins uppercase cursor-pointer px-4 py-2"
          >
            View Projects
          </button>

          {/* Download Resume Link */}
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-white/10 hover:border-primary/50 text-xs font-semibold uppercase tracking-widest font-poppins text-neutral-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-all"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Floating typing typewriter subtitle (fixed at bottom-center above fold) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-28 sm:bottom-20 inset-x-0 z-30 flex items-center justify-center gap-x-2 text-sm sm:text-base text-neutral-400 px-6 font-semibold"
      >
        <span className="whitespace-nowrap font-poppins text-xs md:text-sm tracking-widest uppercase">
          Hello, I&apos;m Tushar Gupta, a
        </span>
        <span 
          className="whitespace-nowrap text-white inline-block w-[180px] sm:w-[260px] font-outfit text-left text-primary font-bold drop-shadow-[0_0_10px_rgba(0,247,255,0.3)]"
        >
          {displayText}
          <span className="animate-ping ml-[2px] inline-block font-extrabold">_</span>
        </span>
      </motion.div>

      {/* Social links (Bottom left floating on larger screens) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-8 z-30 hidden md:flex items-center gap-5"
      >
        <a 
          href="https://github.com/Tushar-1208-cyber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors duration-300"
        >
          <Github className="h-5 w-5 hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://www.linkedin.com/in/tushar-gupta-52b6a5292/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors duration-300"
        >
          <Linkedin className="h-5 w-5 hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://leetcode.com/u/tushargupta1208/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-primary transition-colors duration-300"
        >
          <Code className="h-5 w-5 hover:scale-110 transition-transform" />
        </a>
        <div className="h-[1px] w-12 bg-white/10" />
      </motion.div>

      {/* Floating mouse-scroll indicator at the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-poppins">Scroll to explore</span>
        <div className="w-[18px] h-[30px] rounded-full border border-neutral-600 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[4px] h-[6px] bg-primary rounded-full"
          />
        </div>
      </motion.div>

      {/* Shadow gradient bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
