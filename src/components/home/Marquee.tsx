"use client";

import { motion } from "framer-motion";
import { BookOpen, Building, Code, Camera } from "lucide-react";

const clients = [
  { name: "My Kids Learning App", icon: BookOpen, industry: "EdTech" },
  { name: "Company Attendance System", icon: Building, industry: "Enterprise" },
  { name: "Premium Portfolio", icon: Code, industry: "Personal Brand" },
  { name: "Photography Website", icon: Camera, industry: "Creative" },
  // Duplicate within the array to ensure the marquee is wide enough for large screens
  { name: "My Kids Learning App", icon: BookOpen, industry: "EdTech" },
  { name: "Company Attendance System", icon: Building, industry: "Enterprise" },
  { name: "Premium Portfolio", icon: Code, industry: "Personal Brand" },
  { name: "Photography Website", icon: Camera, industry: "Creative" },
];

export function Marquee() {
  return (
    <section className="py-12 border-y border-border bg-card overflow-hidden">
      <div className="flex w-full group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex flex-none gap-16 md:gap-32 pr-16 md:pr-32 group-hover:[animation-play-state:paused]"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <client.icon className="text-muted-foreground w-6 h-6" />
                <span className="text-xl font-bold font-heading text-foreground">{client.name}</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                {client.industry}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
