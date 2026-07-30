"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-6rem)] md:min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Subtle Background Texture - dot grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center w-full"
        variants={containerVars}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVars} className="inline-flex items-center gap-2 mb-6 bg-secondary px-3 py-1.5 rounded-full border border-border">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[0.95] text-foreground mb-6 font-heading">
          Abhijit Mungase. <br />
          <span className="block mt-2">
            Building Code That <span className="text-accent-blue">Moves The Needle.</span>
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p variants={itemVars} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Full-Stack Developer specializing in building real-world SaaS and mobile applications. Building AI-powered solutions and scalable web apps.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background rounded-xl font-medium hover-minimal flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-background border border-border text-foreground rounded-xl font-medium hover:bg-secondary transition-colors duration-300 flex items-center justify-center"
          >
            Book a Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
