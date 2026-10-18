import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap, Users, UserCircle, Camera } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";

const iconMap = {
  GraduationCap,
  Users,
  UserCircle,
  Camera,
};

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project: Project, i: number) => {
            const IconComponent = iconMap[project.iconName] || UserCircle;

            return (
              <div 
                key={i} 
                className="group flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden hover-minimal transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="aspect-[4/3] bg-secondary/80 w-full relative flex items-center justify-center overflow-hidden">
                  {/* Colorful Icon Box */}
                  <div className={`w-16 h-16 ${project.boxColor} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Live Product Badge (Clickable) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all duration-200 backdrop-blur-md shadow-xs z-10"
                      title="Open Live Product"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Site
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                
                {/* Details Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      {project.industry}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">
                    {project.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions Row */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/60 mt-auto">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-foreground text-background text-xs font-bold inline-flex items-center gap-1.5 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
                      >
                        <span>Open Live Site</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground font-medium">Internal Platform</span>
                    )}

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 group/link transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 CTA SECTION */}
        <div className="bg-gradient-to-r from-[#4F1A81] via-[#1A4A8A] to-[#00C2FF] rounded-2xl p-10 md:p-14 text-center flex flex-col items-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading max-w-2xl leading-tight">
            Want results like this?
          </h3>
          <p className="text-blue-100/90 mb-8 text-lg max-w-xl">
            Let&apos;s discuss how we can build your next big idea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-[#1A4A8A] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}