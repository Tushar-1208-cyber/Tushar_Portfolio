import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import StatsSection from "@/components/sections/StatsSection";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-[#050816]">
      {/* Dynamic capsule navigation bar */}
      <Navbar />

      {/* Hero section handles its own backdrop & 3D canvas */}
      <Hero />
      
      {/* Portfolio section stack */}
      <div className="relative w-full z-10 bg-background/50 backdrop-blur-[1px]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <StatsSection />
        <Services />
        <Contact />
      </div>

      {/* Elegant symmetric footer */}
      <Footer />
    </main>
  );
}
