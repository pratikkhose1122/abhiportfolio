import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Award, GraduationCap, Users, UserCircle, Camera } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "My Kids Learning App",
      industry: "EdTech",
      status: "Live & Active",
      description: "An intelligent learning and attendance management system designed for modern classrooms and parents.",
      tech: ["Next.js", "React Native", "Firebase"],
      slug: "my-kids-learning",
      icon: GraduationCap,
      // Design change: Solid colors bilkul image jaisa
      boxColor: "bg-blue-500",
    },
    {
      name: "Company Attendance System",
      industry: "Enterprise",
      status: "Production",
      description: "A robust internal portal for tracking employee attendance, leaves, and generating automated HR reports.",
      tech: ["React", "Node.js", "PostgreSQL"],
      slug: "company-attendance-system",
      icon: Users,
      boxColor: "bg-purple-500",
    },
    {
      name: "Premium Portfolio Website",
      industry: "Personal Brand",
      status: "Live",
      description: "A conversion-focused, dark-mode portfolio built to showcase software engineering projects and attract premium clients.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      slug: "developer-portfolio",
      icon: UserCircle,
      boxColor: "bg-emerald-500",
    },
    {
      name: "Photography Website",
      industry: "Creative",
      status: "Completed",
      description: "A visually stunning, performance-optimized website designed to highlight high-resolution photography collections.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      slug: "photography-website",
      icon: Camera,
      boxColor: "bg-orange-500",
    }
  ];

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
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
            A collection of production applications built for scale and performance.
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
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              
              {/* Image/Icon Area */}
              <div className="aspect-[4/3] bg-secondary w-full relative flex items-center justify-center">
                
                {/* Solid Color Icon Box (Bilkul pehli image jaisa design) */}
                <div className={`w-16 h-16 ${project.boxColor} rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105 duration-300`}>
                  <project.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
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
                  className="text-sm font-bold text-foreground flex items-center gap-2 group mt-auto hover:text-blue-500 transition-colors"
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