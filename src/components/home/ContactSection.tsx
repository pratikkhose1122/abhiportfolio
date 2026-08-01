"use client";

import { useState } from "react";
import { Mail, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Simulation)");
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
              Let&apos;s build something <span className="text-accent-blue">great together.</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-md leading-relaxed">
              Fill out the form with your project details, and I&apos;ll get back to you within 24 hours to schedule a free strategy call.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <a href="mailto:abhijitmungase608@gmail.com" className="font-medium text-foreground hover:text-accent-blue transition-colors">
                    abhijitmungase608@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</div>
                  <div className="font-medium text-foreground">Maharashtra, India (Remote)</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Availability</div>
                  <div className="font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available for new projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-background border border-border p-8 md:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name *</label>
                  <Input required placeholder="John Doe" className="bg-card border-border h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email *</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-card border-border h-12 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Required *</label>
                  {/* Height auto increment z-index fix kiya hai taaki dropdown page par cover na kare */}
                  <Select required>
                    <SelectTrigger className="bg-card border-border h-12 rounded-xl relative z-10">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    {/* Dropdown positioning fix kiya taaki wo cut na dikhe */}
                    <SelectContent className="bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-xl z-50 max-h-[300px]">
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="saas">SaaS Platform</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Estimated Budget *</label>
                  <Select required>
                    <SelectTrigger className="bg-card border-border h-12 rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-xl z-50 max-h-[300px]">
                      <SelectItem value="small">Less than $5,000</SelectItem>
                      <SelectItem value="medium">$5,000 - $10,000</SelectItem>
                      <SelectItem value="large">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Project Details *</label>
                <Textarea required placeholder="Tell me about your project, goals, and timeline..." className="bg-card border-border min-h-[150px] resize-none rounded-xl" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}