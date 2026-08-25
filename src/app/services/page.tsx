"use client";

import Link from "next/link";
import { ArrowRight, Smartphone, Server, Zap, Shield, Repeat, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1],
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Aapke 2 services ke liye 2 alag colors
const iconColors = [
  "bg-blue-500", 
  "bg-purple-500"
];

const services = [
  {
    id: "mobile",
    title: "Mobile App Development",
    hook: "Native-quality experiences across iOS and Android.",
    icon: Smartphone,
    problem: "You need to reach users on their devices but don't want the overhead of managing two separate codebases (Swift and Kotlin) or dealing with sluggish hybrid wrappers.",
    solution: "I build robust, high-performance applications using React Native and Expo. You get native-level performance and a unified codebase that cuts development time and maintenance costs in half.",
    benefits: [
      { icon: Zap, label: "Fast Performance", desc: "Smooth 60fps animations and rapid load times." },
      { icon: Repeat, label: "Cross-Platform", desc: "One codebase deployed to both App Store and Google Play." },
      { icon: Shield, label: "Offline Support", desc: "Apps that work flawlessly even with poor connectivity." },
      { icon: CheckCircle2, label: "App Store Ready", desc: "I handle the complex submission and review process." }
    ]
  },
  {
    id: "saas",
    title: "SaaS Platforms & Web Apps",
    hook: "Scalable cloud software built for growth.",
    icon: Server,
    problem: "Off-the-shelf software doesn't fit your unique workflow, and building a custom SaaS from scratch often results in technical debt and unscalable architecture.",
    solution: "I architect custom web applications using Next.js, Node.js, and modern databases. I focus on multi-tenant architecture, robust authentication, and scalable infrastructure so your app can grow with your user base.",
    benefits: [
      { icon: Zap, label: "Next-Gen Stack", desc: "Built with the latest App Router and server components." },
      { icon: Shield, label: "Bank-Grade Security", desc: "Secure authentication, RBAC, and data encryption." },
      { icon: Server, label: "Cloud Scalability", desc: "Deployed on serverless infrastructure to handle traffic spikes." },
      { icon: CheckCircle2, label: "Stripe Integration", desc: "Seamless subscription and payment processing." }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header Animation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
            Engineering Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I deliver end-to-end product development, transforming complex business requirements into elegant, high-performing software.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((svc, svcIndex) => (
            <motion.div 
              key={svc.id} 
              id={svc.id} 
              className="scroll-mt-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              
              {/* Service Header */}
              <div className="flex items-center gap-6 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`w-14 h-14 ${iconColors[svcIndex % iconColors.length]} rounded-2xl flex items-center justify-center shadow-md transition-all duration-300`}
                >
                  <svc.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold font-heading text-foreground">{svc.title}</h2>
                  <p className="text-muted-foreground font-medium">{svc.hook}</p>
                </div>
              </div>

              {/* Problem & Solution (Clean Cards) */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
              >
                <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">The Problem</h3>
                  <p className="text-zinc-600 leading-relaxed">{svc.problem}</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Our Solution</h3>
                  <p className="text-zinc-900 leading-relaxed">{svc.solution}</p>
                </motion.div>
              </motion.div>

              {/* Benefits Cards */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              >
                {svc.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.06)" }}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white mb-1">{benefit.label}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{benefit.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-start"
              >
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-black text-white rounded-xl font-medium hover:bg-black/90 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-md"
                >
                  Discuss your {svc.title.toLowerCase()}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold font-heading text-zinc-900 dark:text-white mb-4">Not sure which service fits?</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            Let&apos;s hop on a brief call. I&apos;ll listen to your goals and recommend the best technical approach, even if we don&apos;t end up working together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
          >
            Schedule a Free Strategy Call
          </Link>
        </motion.div>

      </div>
    </div>
  );
}