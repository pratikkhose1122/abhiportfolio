import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Zap, Award, GraduationCap, Users, UserCircle, Camera } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";

const iconMap = {
  GraduationCap,
  Users,
  UserCircle,
  Camera,
};

export default function Projects() {
  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of production applications and creative platforms built for scale, performance, and impact.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <ShieldCheck size={16} className="text-blue-500" />
            Production Ready
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <Zap size={16} className="text-emerald-500" />
            High Performance
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <Award size={16} className="text-purple-500" />
            Clean Architecture
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PROJECTS.map((project: Project, i: number) => {
            const IconComponent = iconMap[project.iconName] || UserCircle;

            return (
              <div 
                key={i} 
                className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Visual Area */}
                <div className="aspect-[4/3] bg-secondary/70 w-full relative flex items-center justify-center">
                  <div className={`w-16 h-16 ${project.boxColor} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Live Badge */}
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
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      {project.industry}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
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
                      <span key={t} className="text-[11px] font-medium bg-background border border-border text-foreground px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
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

      </div>
    </div>
  );
}