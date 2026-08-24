"use client";

import { useState } from "react";
import { Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "web",
    budget: "$5,000 - $10,000",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const text = `💻 *NEW INQUIRY FROM PORTFOLIO* 💻
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🛠️ *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}
📝 *Details:* ${formData.details}`;

    window.open(getWhatsAppUrl(text), "_blank");
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
              Let's build something <span className="text-accent-blue">great together.</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
              Fill out the form or drop a quick WhatsApp message. I usually respond within minutes to discuss your timeline and roadmap.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">WhatsApp Direct</div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    {SITE_CONFIG.whatsappFormatted} (Instant Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Email</div>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-foreground hover:text-accent-blue transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Location</div>
                  <div className="font-medium text-foreground">{SITE_CONFIG.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Availability</div>
                  <div className="font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available for new projects & shoots
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-background border border-border p-8 md:p-10 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="bg-card border-border h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="bg-card border-border h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Required *</label>
                  <Select
                    defaultValue={formData.service}
                    onValueChange={(val) => setFormData({ ...formData, service: val })}
                  >
                    <SelectTrigger className="bg-card border-border h-12 rounded-xl relative z-10">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-xl z-50 max-h-[300px]">
                      <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                      <SelectItem value="Web Application">Web Application</SelectItem>
                      <SelectItem value="SaaS Platform">SaaS Platform</SelectItem>
                      <SelectItem value="Photography & Drone Films">Photography & Drone Films</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Estimated Budget *</label>
                  <Select
                    defaultValue={formData.budget}
                    onValueChange={(val) => setFormData({ ...formData, budget: val })}
                  >
                    <SelectTrigger className="bg-card border-border h-12 rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border border-border rounded-xl shadow-xl z-50 max-h-[300px]">
                      <SelectItem value="Less than ₹50,000">Less than ₹50,000</SelectItem>
                      <SelectItem value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</SelectItem>
                      <SelectItem value="₹1,50,000 - ₹3,00,000">₹1,50,000 - ₹3,00,000</SelectItem>
                      <SelectItem value="₹3,00,000+">₹3,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Project Details *</label>
                <Textarea
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell me about your project or shoot goals, timeline, and expectations..."
                  className="bg-card border-border min-h-[140px] resize-none rounded-xl"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                <MessageCircle size={18} className="fill-white" />
                {isSubmitting ? "Opening WhatsApp..." : "Send Inquiry via WhatsApp"}
              </button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                Direct WhatsApp contact: <strong className="text-foreground">{SITE_CONFIG.whatsappFormatted}</strong>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}