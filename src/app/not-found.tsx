import Link from "next/link";
import { House } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#050816] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <span className="text-7xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-pink to-accent tracking-tighter">
          404
        </span>

        <h1 className="text-3xl font-bold text-white font-poppins tracking-wide">
          Page Not Found
        </h1>

        <p className="text-neutral-400 text-sm font-poppins leading-relaxed">
          The vector coordinate or page route you are searching for does not exist or has been shifted in hyperspace.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-primary/40 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:border-primary text-white font-poppins text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,247,255,0.15)]"
          >
            <House className="h-4 w-4 text-primary" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
