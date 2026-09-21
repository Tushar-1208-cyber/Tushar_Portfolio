"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { House, User, Briefcase, Phone, FileText, Code2, Award } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: <House className="h-5 w-5" /> },
  { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="h-5 w-5" /> },
  { name: "Projects", href: "#projects", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Experience", href: "#experience", icon: <Award className="h-5 w-5" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="h-5 w-5" /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Initials Logo (Top-Left on Desktop) */}
      <div className="fixed top-6 left-8 z-[999] hidden lg:block">
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group block font-outfit font-extrabold text-2xl tracking-tighter text-white hover:scale-105 transition-all duration-300"
        >
          TG<span className="text-primary group-hover:text-accent-pink transition-colors">.</span>
        </a>
      </div>

      {/* Floating Adaptive Glass Capsule Navbar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="fixed z-[999] bottom-6 md:bottom-auto md:top-6 inset-x-0 mx-auto border border-white/[0.1] rounded-full shadow-[0px_8px_32px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-lg flex items-center justify-center px-3 py-2 w-fit max-w-[95%] sm:max-w-fit gap-1 sm:gap-2"
        style={{
          boxShadow: "0 8px 32px 0 rgba(0, 247, 255, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="relative flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative z-10 items-center flex space-x-1 px-2.5 sm:px-4 py-2 rounded-full transition-colors duration-300 text-xs sm:text-sm font-medium ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {/* Active Indicator Underlay */}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderlay"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/5"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Mobile icon / Desktop label */}
                <span className="block md:hidden">{item.icon}</span>
                <span className="hidden md:block tracking-wide font-poppins">{item.name}</span>
              </a>
            );
          })}

          {/* Premium Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-xs font-semibold border border-primary/30 text-white px-3 sm:px-4 py-2 rounded-full ml-1 sm:ml-2 bg-gradient-to-b from-primary/20 via-transparent to-transparent hover:from-primary/30 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,247,255,0.2)] transition-all duration-300 shadow-inner flex items-center gap-1.5"
          >
            <span className="hidden sm:block">Resume</span>
            <FileText className="h-4 w-4 block sm:hidden" />
          </a>
        </div>
      </motion.div>
    </>
  );
}
