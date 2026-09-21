"use client";
import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Founder",
    company: "Kuzushi Labs",
    quote: "The voice WebRTC classification system built by Tushar is outstanding. His sub-100ms classifier cuts our token expenses by 35% and input latency by 95%. Strong architect.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Senior PM",
    company: "TechCorp Labs",
    quote: "Tushar delivered the Astro AI generative ecosystem ahead of schedule. The vector caching models and system architecture are highly scalable. Exceptional talent!",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "VP of Engineering",
    company: "Vardan Funds",
    quote: "Tushar's integration of stock sentiment trackers and automatic report alerts transformed our asset management operations. High technical judgment.",
    rating: 5
  },
  {
    name: "Emily Vance",
    role: "E-Commerce Founder",
    company: "LuxRetail Inc",
    quote: "The headless storefront built by Tushar loads in milliseconds and syncs multi-layered cart caches via Redis flawlessly. Exceptional attention to visual detail.",
    rating: 5
  }
];

export default function Testimonials() {
  // Double the data to create a seamless infinite loop
  const marqueeItems = [...testimonialsData, ...testimonialsData];

  return (
    <section 
      id="testimonials" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 right-0 h-44 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 -translate-y-1/2 pointer-events-none blur-[60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Feedback
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Accolades & <span className="italic font-light text-primary">Appreciation</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </div>
      </div>

      {/* Infinite Horizontal Marquee Loop */}
      <div className="w-full relative overflow-hidden py-4 mask-fade-horizontal">
        {/* Left and Right edge fades for seamless styling */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

        {/* Marquee Keyframes Injector */}
        <style>{`
          .marquee-track {
            display: flex;
            width: max-content;
            gap: 24px;
            animation: marquee 35s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .mask-fade-horizontal {
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }
        `}</style>

        {/* Double list track container */}
        <div className="marquee-track">
          {marqueeItems.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[380px] shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 relative group"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-8 h-8 w-8 text-white/[0.02] group-hover:text-primary/[0.04] transition-colors pointer-events-none" />

              {/* Accolade review stars */}
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 text-xs md:text-sm font-poppins leading-relaxed tracking-wide italic mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-extrabold text-white text-sm font-outfit shadow-inner">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold font-poppins">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase mt-0.5">
                    {testimonial.role} · <span className="text-primary">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
