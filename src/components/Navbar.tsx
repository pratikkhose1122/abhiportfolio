"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronDown, 
  ArrowRight, 
  Smartphone, 
  Rocket, 
  Code2 
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  {
    title: "Mobile App Development",
    desc: "Build high-performance Android, iOS and Flutter applications.",
    href: "/services#mobile",
    icon: Smartphone,
  },
  {
    title: "Startup & MVP Development",
    desc: "Transform ideas into launch-ready products quickly.",
    href: "/services#mvp",
    icon: Rocket,
  },
  {
    title: "Custom Software Solutions",
    desc: "Tailored software built around your business workflow.",
    href: "/services#custom",
    icon: Code2,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on page navigate
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight hover:text-accent-blue transition-colors">
          Abhijit Mungase
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          {/* Services Mega Menu Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-2 cursor-pointer ${
                servicesDropdownOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                }`}
              />
            </button>

            {/* Mega Menu Flyout Card */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-[36%] mt-3 w-[680px] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)] p-6 z-50 overflow-hidden"
                >
                  <div className="grid grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Column: Services List (7 cols) */}
                    <div className="col-span-7 flex flex-col justify-between pr-2">
                      <div>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4 block">
                          SERVICES
                        </span>
                        
                        <div className="space-y-1.5">
                          {servicesMenu.map((svc) => (
                            <Link
                              key={svc.title}
                              href={svc.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all duration-200 group text-left"
                            >
                              <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 transition-all shadow-sm">
                                  <svc.icon size={20} strokeWidth={2} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {svc.title}
                                  </h4>
                                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5 max-w-[250px]">
                                    {svc.desc}
                                  </p>
                                </div>
                              </div>
                              <ArrowRight
                                size={15}
                                className="text-zinc-300 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-2"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Featured Project (5 cols) */}
                    <div className="col-span-5 border-l border-zinc-100 dark:border-zinc-800/90 pl-6 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                          FEATURED PROJECT
                        </span>
                        <h4 className="text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100 mb-2">
                          MyGymBook
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                          Gym Management Platform built using Flutter and Supabase. Realtime synchronization across all devices.
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 mt-auto">
                        <Link
                          href="/projects/mygymbook"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                        >
                          View Study
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/25 transition-colors"
                        >
                          Let&apos;s Talk
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/photography"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Photography
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors shadow-sm shadow-blue-500/20"
            >
              Start a Project
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card border-b border-border shadow-lg py-6 px-6 md:hidden flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-y border-border/60 py-3">
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-3 space-y-2.5"
                  >
                    {servicesMenu.map((svc) => (
                      <Link
                        key={svc.title}
                        href={svc.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <svc.icon size={17} strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{svc.title}</p>
                          <p className="text-[11px] text-muted-foreground line-clamp-1">{svc.desc}</p>
                        </div>
                      </Link>
                    ))}
                    
                    <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 mt-3">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                        Featured Project
                      </span>
                      <p className="text-sm font-bold text-foreground">MyGymBook</p>
                      <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                        Gym Management Platform built using Flutter and Supabase.
                      </p>
                      <Link
                        href="/projects/mygymbook"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-block px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold"
                      >
                        View Study
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>

            <Link
              href="/photography"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Photography
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#25D366] text-white text-center rounded-xl font-medium flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={18} className="fill-white" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-medium shadow-md shadow-blue-500/20"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}