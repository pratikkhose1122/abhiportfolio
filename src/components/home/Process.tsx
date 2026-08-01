"use client";

// Text badla nahi hai, bas design ke liye icons add kiye hain
import { Search, FileText, Palette, Code2, Bug, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your business needs, technical constraints, and long-term goals.",
      icon: Search,
    },
    {
      num: "02",
      title: "Requirements",
      desc: "Defining clear project scope, tech stack, and precise deliverables.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Design",
      desc: "Wireframing and UI/UX design focusing on conversion and usability.",
      icon: Palette,
    },
    {
      num: "04",
      title: "Development",
      desc: "Writing clean, scalable code with regular progress updates.",
      icon: Code2,
    },
    {
      num: "05",
      title: "Testing",
      desc: "Rigorous QA testing across devices to ensure a flawless experience.",
      icon: Bug,
    },
    {
      num: "06",
      title: "Launch & Support",
      desc: "Deployment to production and ongoing maintenance.",
      icon: Rocket,
    },
  ];

  // Har card ke liye alag Gradient Color (Blue, Purple, Orange, Green, etc.) 
  // Jaisa screenshot mein hai
  const iconGradients = [
    "bg-gradient-to-br from-[#00A3FF] to-[#0055FF]", // Blue
    "bg-gradient-to-br from-[#A855F7] to-[#7C3AED]", // Purple
    "bg-gradient-to-br from-[#F59E0B] to-[#EA580C]", // Orange
    "bg-gradient-to-br from-[#10B981] to-[#059669]", // Green
    "bg-gradient-to-br from-[#00A3FF] to-[#0055FF]", // Blue (Cycle)
    "bg-gradient-to-br from-[#A855F7] to-[#7C3AED]", // Purple (Cycle)
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-zinc-950 relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern (Like Screenshot) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] dark:bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section (Same text, improved design) */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-1.5 rounded-full shadow-sm mb-4">
            How We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-700 dark:text-purple-400 font-heading">
            Our Process
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-zinc-100 dark:border-zinc-800 group"
            >
              {/* Gradiant Colored Icon Box (Bilkul screenshot jaisa) */}
              <div className={`w-14 h-14 ${iconGradients[i % iconGradients.length]} rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:scale-105`}>
                <step.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Content (Unchanged) */}
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 font-heading">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}