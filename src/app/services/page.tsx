"use client";

import Link from "next/link";
import { ArrowRight, Smartphone, Server, Zap, Shield, Repeat, CheckCircle2, Rocket, Code2 } from "lucide-react";
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

// Colors for the 3 services
const iconColors = [
  "bg-blue-500", 
  "bg-purple-500",
  "bg-emerald-500"
];

const services = [
  {
    id: "mobile",
    title: "Mobile App Development",
    hook: "Build high-performance Android, iOS and Flutter applications.",
    icon: Smartphone,
    problem: "You need to reach users on their devices but don't want the overhead of managing separate codebases or dealing with sluggish hybrid wrappers.",
    solution: "I build robust, high-performance applications using Flutter, React Native, and native bridges. You get 60fps performance and a unified codebase that cuts development time and maintenance costs in half.",
    benefits: [
      { icon: Zap, label: "Fast Performance", desc: "Smooth 60fps animations and rapid load times." },
      { icon: Repeat, label: "Cross-Platform", desc: "One codebase deployed to both App Store and Google Play." },
      { icon: Shield, label: "Offline Support", desc: "Apps that work flawlessly even with poor connectivity." },
      { icon: CheckCircle2, label: "App Store Ready", desc: "I handle the complex submission and review process." }
    ]
  },
  {
    id: "mvp",
    title: "Startup & MVP Development",
    hook: "Transform ideas into launch-ready products quickly.",
    icon: Rocket,
    problem: "Validating your product idea takes too long with traditional agency cycles, wasting runway and missing initial market momentum.",
    solution: "I help founders and startups architect, design, and code conversion-focused Minimum Viable Products in weeks, not months. Clean code, scalable databases, and built-in user analytics.",
    benefits: [
      { icon: Zap, label: "Rapid Delivery", desc: "From concept to production launch in record turnaround time." },
      { icon: Shield, label: "Scalable Architecture", desc: "Built with modern Next.js and cloud databases that scale seamlessly." },
      { icon: Server, label: "Ready for Investors", desc: "Production-grade codebase and polished user experience." },
      { icon: CheckCircle2, label: "Analytics & Feedback", desc: "Integrated telemetry to observe real user behavior from day one." }
    ]
  },
  {
    id: "custom",
    title: "Custom Software Solutions",
    hook: "Tailored software built around your business workflow.",
    icon: Code2,
    problem: "Generic off-the-shelf software rarely fits specialized business workflows, creating bottlenecks, duplicate manual tasks, and fragmented data.",
    solution: "I build end-to-end custom software solutions, enterprise web portals, automated API integrations, and internal tooling crafted specifically for your team's operational needs.",
    benefits: [
      { icon: Zap, label: "Next-Gen Stack", desc: "Built with TypeScript, Next.js, and modern cloud databases." },
      { icon: Shield, label: "Enterprise Security", desc: "Granular role-based access control (RBAC) and encryption." },
      { icon: Server, label: "Automated Workflows", desc: "Eliminate repetitive tasks with custom webhooks and cron jobs." },
      { icon: CheckCircle2, label: "Ongoing Reliability", desc: "Thoroughly tested with clear documentation and support." }
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