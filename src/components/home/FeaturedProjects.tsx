import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden hover-minimal">
              <div className="aspect-[4/3] bg-secondary w-full relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-2xl font-heading uppercase tracking-widest">
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
                    <span key={t} className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
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

        <div className="bg-background border border-border rounded-xl p-8 md:p-12 text-center flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
            Want results like this?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let&apos;s discuss how we can build your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-foreground text-background rounded-xl font-medium hover-minimal"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 bg-background border border-border text-foreground rounded-xl font-medium hover:bg-secondary transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
