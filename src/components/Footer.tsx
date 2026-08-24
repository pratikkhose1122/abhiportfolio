import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-br from-[#0B1120] via-[#0B2147] to-[#1A1B41] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Grid: Mobile par 1 column, Desktop par 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Column 1: Brand Info (Spans 2 columns on desktop) */}
          <div className="md:col-span-2">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight mb-3 inline-block text-white">
              Abhijit Mungase
            </Link>
            <p className="text-blue-100/80 mb-4 max-w-sm text-sm md:text-base">
              Software Developer & Cinematographer building production-ready apps, SaaS platforms, and luxury wedding films.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white">Available for new projects & shoots</span>
            </div>
            <div className="flex flex-col gap-2 mt-3 text-sm text-blue-100/80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-emerald-400" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-400 font-medium transition-colors"
                >
                  WhatsApp: {SITE_CONFIG.whatsappFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-blue-100/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#saas" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  SaaS Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-blue-100/80 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100/80 text-center md:text-left">
            © {currentYear} Abhijit Mungase. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}