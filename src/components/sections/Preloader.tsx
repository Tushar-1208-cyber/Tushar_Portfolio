"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast simulated premium progress loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Complete animation using GSAP
      const timeline = gsap.timeline({
        onComplete: onComplete,
      });

      timeline.to(".preloader-counter, .pg-eyes", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power3.in",
      });

      timeline.to(".preloader-bg", {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [progress, onComplete]);

  return (
    <div className="preloader-bg fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Immersive Copper-Gold Background Grid and Noise */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center transition-all duration-700"
        style={{
          background: "linear-gradient(135deg, #050816 0%, #0c0828 35%, #18082f 70%, #050816 100%)",
        }}
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0" 
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,247,255,0.12) 0%, transparent 65%)"
        }}
      />

      {/* Cyber Blink Eyes */}
      <div className="flex flex-col items-center gap-12 z-10">
        <div className="pg-eyes scale-[0.8] md:scale-100" />
        
        {/* Loader Status & Counter */}
        <div className="preloader-counter flex flex-col items-center gap-2">
          <span 
            className="text-4xl md:text-5xl font-extralight tracking-widest text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {String(progress).padStart(3, "0")}%
          </span>
          <div className="h-[2px] w-48 bg-white/10 overflow-hidden rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span 
            className="text-[10px] uppercase tracking-[0.4em] text-primary mt-2 font-mono animate-pulse"
          >
            Initializing Immersive Core
          </span>
        </div>
      </div>
    </div>
  );
}
