"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Abhijit delivered our SaaS MVP ahead of schedule. The code was exceptionally clean and the UI was exactly what we envisioned. True premium engineering.",
    name: "Abhijit Mungase",
    role: "Software Developer",
  },
  {
    quote: "Working with Abhijit felt like having an entire dev team at our disposal. The communication was flawless and the final product is scaling beautifully.",
    name: "Abhijit Mungase",
    role: "Software Developer",
  }
];

export function Testimonial() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 md:py-32 bg-card border-b border-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <Quote className="w-16 h-16 text-border mx-auto mb-8" />
        
        <div className="relative h-[200px] md:h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl font-heading font-medium text-foreground leading-relaxed mb-8">
                &quot;{testimonials[index].quote}&quot;
              </p>
              <div>
                <div className="font-bold text-foreground text-sm uppercase tracking-widest mb-1">
                  {testimonials[index].name}
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  {testimonials[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
