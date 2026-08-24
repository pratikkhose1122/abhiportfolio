"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Camera, Smartphone, Server, FileText, User, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  { title: "Photography & Cinematography", subtitle: "Wedding, Pre-wedding, Drone films", href: "/photography", icon: Camera, category: "Creative" },
  { title: "Wedding Enquiry Form", subtitle: "Book your wedding shoot directly", href: "/photography#enquiry-form", icon: Camera, category: "Creative" },
  { title: "Mobile App Development", subtitle: "Cross-platform React Native & Expo", href: "/services#mobile", icon: Smartphone, category: "Services" },
  { title: "SaaS Platforms & Web Apps", subtitle: "Scalable Next.js cloud systems", href: "/services#saas", icon: Server, category: "Services" },
  { title: "My Kids Learning App", subtitle: "EdTech project case study", href: "/projects", icon: FileText, category: "Projects" },
  { title: "Company Attendance System", subtitle: "Enterprise HR attendance platform", href: "/projects", icon: FileText, category: "Projects" },
  { title: "About Abhijit", subtitle: "Experience, background, story", href: "/about", icon: User, category: "General" },
  { title: "Contact & Hire Me", subtitle: "Get in touch for new projects", href: "/contact", icon: Sparkles, category: "General" },
  { title: "Chat on WhatsApp", subtitle: "Direct message to Abhijit (+91 93077 24194)", href: "whatsapp", isExternal: true, icon: MessageCircle, category: "Action" },
];

export function SpotlightSearch({ isOpen, onClose }: SpotlightProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle keyboard navigation & Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by caller or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: (typeof SEARCH_ITEMS)[0]) => {
    onClose();
    if (item.href === "whatsapp") {
      window.open(getWhatsAppUrl(), "_blank");
    } else {
      router.push(item.href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-background/95 dark:bg-[#121318]/95 backdrop-blur-2xl border border-white/10 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/60">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search anything (e.g. Wedding, Mobile App, WhatsApp)..."
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base font-medium"
              />
              {query && (
                <button onClick={() => setQuery("")} className="p-1 text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              )}
              <button
                onClick={onClose}
                className="text-xs font-semibold px-2 py-1 bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-foreground/5 dark:hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-secondary dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-all">
                          <Icon size={18} className="text-foreground group-hover:text-accent-blue" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-foreground text-sm truncate flex items-center gap-2">
                            {item.title}
                            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                              {item.category}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground truncate">{item.subtitle}</div>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </button>
                  );
                })
              ) : (
                <div className="py-12 text-center text-muted-foreground text-sm">
                  No matching results for "{query}". Try searching for <span className="text-foreground">Photography</span> or <span className="text-foreground">WhatsApp</span>.
                </div>
              )}
            </div>

            {/* Quick Footer */}
            <div className="px-5 py-3 bg-secondary/50 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span>Navigate with click or touch</span>
              <div className="flex items-center gap-3">
                <span>Quick WhatsApp: <strong className="text-foreground">+91 93077 24194</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
