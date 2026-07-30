import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight mb-4 inline-block">
              Abhijit Mungase
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Software Developer building production-ready mobile apps, SaaS platforms, and business software.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-foreground">Available for new projects</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Mail size={16} />
              <a href="mailto:abhijitmungase608@gmail.com" className="hover:text-foreground transition-colors">
                abhijitmungase608@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services#web" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#saas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SaaS Platforms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Abhijit Mungase. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
