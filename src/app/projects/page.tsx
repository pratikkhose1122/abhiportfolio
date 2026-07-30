import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "My Kids Learning App",
      industry: "EdTech",
      status: "Live & Active",
      description: "An intelligent learning and attendance management system designed for modern classrooms and parents.",
      tech: ["Next.js", "React Native", "Firebase"],
      slug: "my-kids-learning",
    },
    {
      name: "Company Attendance System",
      industry: "Enterprise",
      status: "Production",
      description: "A robust internal portal for tracking employee attendance, leaves, and generating automated HR reports.",
      tech: ["React", "Node.js", "PostgreSQL"],
      slug: "company-attendance-system",
    },
    {
      name: "Premium Portfolio Website",
      industry: "Personal Brand",
      status: "Live",
      description: "A conversion-focused, dark-mode portfolio built to showcase software engineering projects and attract premium clients.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      slug: "developer-portfolio",
    },
    {
      name: "Photography Website",
      industry: "Creative",
      status: "Completed",
      description: "A visually stunning, performance-optimized website designed to highlight high-resolution photography collections.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      slug: "photography-website",
    }
  ];

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of production applications built for scale and performance.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <ShieldCheck size={16} className="text-accent-blue" />
            Production Ready
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <Zap size={16} className="text-accent-blue" />
            High Performance
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
            <Award size={16} className="text-accent-blue" />
            Clean Architecture
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover-minimal">
              <div className="aspect-[4/3] bg-secondary w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-3xl font-heading uppercase tracking-widest">
                  {project.name.charAt(0)}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    {project.industry}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{project.name}</h3>
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
                
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-bold text-foreground flex items-center gap-2 group mt-auto"
                >
                  View Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
