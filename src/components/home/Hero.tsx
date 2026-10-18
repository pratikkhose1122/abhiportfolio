"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040819] text-white pt-6 pb-16 md:py-16 lg:py-24 flex items-center min-h-[calc(100vh-6rem)]">
      {/* Ambient Background Lights & Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tech grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(56, 189, 248, 0.45) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        
        {/* Deep cyber gradient blooms */}
        <div className="absolute top-1/4 -right-16 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#040819] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Pill Badge */}
            <motion.div variants={itemVars} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#080f28]/90 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.18)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-cyan-200">
                  SOFTWARE DEVELOPER • AVAILABLE FOR PROJECTS
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVars} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.08] text-white font-heading mb-6"
            >
              I build <br />
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent">
                digital experiences
              </span> <br />
              that make an impact.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVars} 
              className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-xl leading-relaxed mb-8 font-normal"
            >
              I create modern web applications, mobile applications, and scalable software solutions that solve real problems and deliver great user experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#1e6bef] to-[#9333ea] shadow-[0_0_25px_rgba(0,198,255,0.35)] hover:shadow-[0_0_35px_rgba(147,51,234,0.55)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Send size={16} className="-rotate-12 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                <span>Explore My Work</span>
              </Link>
              
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#090f26]/80 hover:bg-[#0f1738] border border-cyan-500/30 hover:border-cyan-400/70 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Mail size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span>Let&apos;s Connect</span>
              </Link>
            </motion.div>

            {/* Social Links Row */}
            <motion.div variants={itemVars} className="flex items-center gap-4 text-slate-400">
              <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full mr-1" />
              
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:scale-115 transition-all duration-200"
              >
                <FaGithub size={19} />
              </a>
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:scale-115 transition-all duration-200"
              >
                <FaLinkedinIn size={19} />
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:scale-115 transition-all duration-200"
              >
                <FaInstagram size={19} />
              </a>
              <a
                href={SITE_CONFIG.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:scale-115 transition-all duration-200"
              >
                <FaXTwitter size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column (3D Glowing Developer Hologram) */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating Animation Container */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[540px] flex items-center justify-center"
            >
              {/* Hologram Radial Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/25 rounded-full blur-[80px] pointer-events-none transform scale-90" />
              
              {/* Subtle Outer Neon Ring */}
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-500/15 pointer-events-none animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-purple-500/20 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />

              {/* 3D Holographic Graphic with smooth mask & glow */}
              <div className="relative z-10 w-full overflow-hidden rounded-2xl [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]">
                <Image
                  src="/hero-3d-graphic-2x.png"
                  alt="Developer Ecosystem Hologram - Web Apps, Mobile Apps, Photography"
                  width={1068}
                  height={856}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:scale-[1.02] transition-transform duration-500 select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
