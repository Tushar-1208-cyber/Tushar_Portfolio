"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Sparkles, CheckCircle2, Copy, Check, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tushargupta1208@gmail.com").then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setIsSending(false);
        setSentSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });

        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#00f7ff", "#7c3aed", "#f2b8c8", "#ffffff"],
        });

        setTimeout(() => setSentSuccess(false), 5000);
      } else {
        // Mailto fallback if API endpoint is unconfigured or errors
        const mailtoUri = `mailto:tushargupta1208@gmail.com?subject=${encodeURIComponent(
          form.subject || `Portfolio Inquiry from ${form.name}`
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )}`;
        window.location.href = mailtoUri;
        setIsSending(false);
        setSentSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      const mailtoUri = `mailto:tushargupta1208@gmail.com?subject=${encodeURIComponent(
        form.subject || `Portfolio Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoUri;
      setIsSending(false);
      setSentSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleFocus = (field: string) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  return (
    <section 
      id="contact" 
      className="relative w-full py-24 bg-[#050816] overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,247,255,0.02)_0%,transparent_80%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4.5 w-4.5 text-primary" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-primary font-mono">
              Inquire
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-extralight"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            Initiate a <span className="italic font-light text-primary">Connection</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-4" />
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left - Contact Details Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 z-10">
            <div className="space-y-6">
              <h3 className="text-white text-xl font-bold font-poppins tracking-wider">
                Let&apos;s Build Something Legendary
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-poppins max-w-sm">
                Have an idea, project requirement, or want to discuss full-time possibilities? Drop me a message and let&apos;s coordinate!
              </p>
            </div>

            <div className="space-y-5 my-8">
              {[
                { 
                  icon: <Mail className="h-5 w-5 text-primary" />, 
                  label: "Electronic Mail", 
                  val: "tushargupta1208@gmail.com",
                  href: "mailto:tushargupta1208@gmail.com"
                },
                { 
                  icon: <Phone className="h-5 w-5 text-accent-pink" />, 
                  label: "Mobile Line", 
                  val: "+91 9351635646",
                  href: "tel:+919351635646"
                },
                { 
                  icon: <MessageSquare className="h-5 w-5 text-emerald-400" />, 
                  label: "WhatsApp Direct", 
                  val: "+91 9351635646",
                  href: "https://wa.me/919351635646"
                },
                { 
                  icon: <MapPin className="h-5 w-5 text-purple-400" />, 
                  label: "Location", 
                  val: "Alwar, Rajasthan, India",
                  href: "https://maps.google.com/?q=Alwar,+Rajasthan,+India"
                }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center justify-between group p-2 rounded-2xl hover:bg-white/[0.01] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.02] group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">
                        {info.label}
                      </span>
                      <a 
                        href={info.href} 
                        className="text-white text-sm font-semibold font-poppins hover:text-primary transition-colors block mt-0.5"
                      >
                        {info.val}
                      </a>
                    </div>
                  </div>
                  {info.label === "Electronic Mail" && (
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-neutral-400 hover:text-primary hover:border-primary/40 bg-white/[0.02] transition-all flex items-center gap-1.5 cursor-pointer ml-2"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="text-neutral-600 text-xs font-mono select-none hidden lg:block">
              {/* SECURE PROTOCOL MOUNTED */}
            </div>
          </div>

          {/* Right - Premium Futuristic Form (7 Cols) */}
          <div className="lg:col-span-7 relative">
            {/* Ambient backglow */}
            <div className="absolute inset-0 bg-primary/2 rounded-3xl blur-2xl pointer-events-none" />

            <div 
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Succession Notification */}
              {sentSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary animate-pulse" />
                  <h3 className="text-white text-2xl font-bold font-poppins">Transmission Dispatched</h3>
                  <p className="text-xs text-neutral-400 font-poppins max-w-xs leading-relaxed">
                    Message dispatched successfully! A confetti cascade was triggered. I will analyze your inquiry and reply within 12 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-4 transition-all duration-300 font-poppins pointer-events-none text-xs ${
                        activeField === "name" || form.name
                          ? "-top-2.5 text-primary bg-[#060413] px-2 font-bold"
                          : "top-4 text-neutral-400"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-white text-sm font-poppins outline-none focus:border-primary/50 transition-all"
                      style={{
                        boxShadow: activeField === "name" ? "0 0 15px rgba(0,247,255,0.05)" : "none",
                      }}
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-4 transition-all duration-300 font-poppins pointer-events-none text-xs ${
                        activeField === "email" || form.email
                          ? "-top-2.5 text-primary bg-[#060413] px-2 font-bold"
                          : "top-4 text-neutral-400"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-white text-sm font-poppins outline-none focus:border-primary/50 transition-all"
                      style={{
                        boxShadow: activeField === "email" ? "0 0 15px rgba(0,247,255,0.05)" : "none",
                      }}
                    />
                  </div>

                  {/* Subject field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-4 transition-all duration-300 font-poppins pointer-events-none text-xs ${
                        activeField === "subject" || form.subject
                          ? "-top-2.5 text-primary bg-[#060413] px-2 font-bold"
                          : "top-4 text-neutral-400"
                      }`}
                    >
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onFocus={() => handleFocus("subject")}
                      onBlur={handleBlur}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-white text-sm font-poppins outline-none focus:border-primary/50 transition-all"
                      style={{
                        boxShadow: activeField === "subject" ? "0 0 15px rgba(0,247,255,0.05)" : "none",
                      }}
                    />
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-4 transition-all duration-300 font-poppins pointer-events-none text-xs ${
                        activeField === "message" || form.message
                          ? "-top-2.5 text-primary bg-[#060413] px-2 font-bold"
                          : "top-4 text-neutral-400"
                      }`}
                    >
                      Message Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-white text-sm font-poppins outline-none focus:border-primary/50 transition-all resize-none"
                      style={{
                        boxShadow: activeField === "message" ? "0 0 15px rgba(0,247,255,0.05)" : "none",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent border border-primary/20 hover:border-primary/50 text-white font-bold font-poppins text-sm uppercase tracking-widest cursor-pointer shadow-[0_0_20px_rgba(0,247,255,0.1)] hover:shadow-[0_0_30px_rgba(0,247,255,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        Dispatch Transmission
                      </>
                    )}
                  </button>

                  {/* Instant WhatsApp Quick Action */}
                  <a
                    href={`https://wa.me/919351635646?text=${encodeURIComponent(
                      form.message
                        ? `Hi Tushar, my name is ${form.name || "someone"}. ${form.message}`
                        : "Hi Tushar, I saw your portfolio and would like to connect!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold font-poppins text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-3 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    <span>Or Chat Directly on WhatsApp</span>
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
