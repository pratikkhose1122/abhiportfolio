"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Camera, FolderGit2, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface AppDockProps {
  onOpenSearch?: () => void;
  onOpenWhatsApp: () => void;
}

export function AppDock({ onOpenWhatsApp }: AppDockProps) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isPhotography = pathname === "/photography";
  const isProjects = pathname.startsWith("/projects");
  const isAbout = pathname === "/about";

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      isActive: isHome,
      isAction: false,
    },
    {
      name: "Photography",
      href: "/photography",
      icon: Camera,
      isActive: isPhotography,
      isAction: false,
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: FaWhatsapp,
      isActive: false,
      isAction: true,
      onClick: onOpenWhatsApp,
      isWhatsApp: true,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderGit2,
      isActive: isProjects,
      isAction: false,
    },
    {
      name: "About",
      href: "/about",
      icon: User,
      isActive: isAbout,
      isAction: false,
    },
  ];

  return (
    // Only visible on Mobile & Tablet view (hidden on md & desktop screens)
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 dark:bg-[#0c0d12]/95 backdrop-blur-2xl border-t border-border/80 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.5)] pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-1.5"
    >
      <div className="max-w-md mx-auto px-3 grid grid-cols-5 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isAction) {
            return (
              <button
                key={item.name}
                type="button"
                onClick={item.onClick}
                className="flex flex-col items-center justify-center py-1 transition-all group active:scale-90"
              >
                <div className="relative p-1 rounded-full text-[#25D366] group-hover:scale-110 transition-transform">
                  <Icon size={22} className="stroke-[2.2]" />
                  {/* Subtle online pulse dot */}
                  <span className="absolute top-0 right-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-[#25D366] rounded-full" />
                </div>
                <span className="text-[10px] font-semibold text-[#25D366] mt-0.5 tracking-tight">
                  {item.name}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 transition-all group active:scale-90 relative ${
                item.isActive
                  ? "text-accent-blue dark:text-blue-400 font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* Active Tab Pill Indicator */}
              {item.isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute -top-1.5 w-8 h-1 bg-accent-blue dark:bg-blue-400 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="p-1 rounded-full transition-transform group-hover:scale-105">
                <Icon
                  size={21}
                  className={`transition-colors ${
                    item.isActive ? "stroke-[2.5]" : "stroke-[1.9]"
                  }`}
                />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
