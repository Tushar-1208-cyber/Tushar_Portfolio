"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Preloader from "./sections/Preloader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Custom Cursor tracking logic using GSAP for inertia
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (cursorDot) gsap.set(cursorDot, { x: e.clientX, y: e.clientY });
      if (cursorRing) {
        gsap.to(cursorRing, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.22,
          ease: "power2.out",
        });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        cursorRing && cursorDot &&
        (target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable") ||
        target.closest(".hoverable"))
      ) {
        gsap.to(cursorRing, {
          scale: 1.8,
          backgroundColor: "rgba(0, 247, 255, 0.08)",
          borderColor: "rgba(0, 247, 255, 0.8)",
          duration: 0.2,
        });
        gsap.to(cursorDot, {
          scale: 0.5,
          backgroundColor: "#00f7ff",
          duration: 0.2,
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        cursorRing && cursorDot &&
        (target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable") ||
        target.closest(".hoverable"))
      ) {
        gsap.to(cursorRing, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(242, 184, 200, 0.4)",
          duration: 0.2,
        });
        gsap.to(cursorDot, {
          scale: 1,
          backgroundColor: "#f2b8c8",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Top Page Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary via-accent to-accent-pink z-[10001] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Futuristic Trailing Custom Cursor */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
        style={{ backgroundColor: "#f2b8c8", transition: "transform 0.05s linear" }}
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] border -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ borderColor: "rgba(242, 184, 200, 0.4)", backgroundColor: "transparent", transition: "transform 0.12s ease-out" }}
      />

      {/* Main page content wrapped in noise overlay */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 noise-overlay z-50 pointer-events-none" />
        {children}
      </div>
    </>
  );
}
