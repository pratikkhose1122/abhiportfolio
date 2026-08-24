import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// 🔥 Photography Project ka Data store kiya
const projectData: Record<string, any> = {
  "photography-website": {
    name: "Photography Website",
    category: "Creative",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    overview: "A visually stunning, performance-optimized website designed to highlight high-resolution photography collections. Built with modern tools to ensure fast loading times and beautiful, responsive galleries.",
    problem: "The client needed a digital platform that could showcase their high-resolution photography without compromising on speed or visual fidelity. Standard website templates felt too generic and lacked the immersive experience required.",
    solution: "We engineered a custom, image-first web experience using React and Framer Motion for smooth transitions. The site uses advanced image optimization techniques to load high-quality photos instantly on any device.",
    benefits: [
      "Blazing fast image load times using next-gen formats",
      "Immersive gallery with smooth Framer Motion animations",
      "Fully responsive design for mobile, tablet, and desktop",
      "SEO optimized for better discoverability"
    ],
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Next.js", "Vercel"],
    impact: [
      { value: "100%", label: "Client satisfaction" },
      { value: "60%", label: "Increase in mobile engagement" }
    ]
  },
  // Yaahan aap aur projects add kar sakte ho (e.g., e-commerce, SaaS, etc.)
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectData[slug];

  // Agar URL mein galat slug aaya toh 404 message dikhayein
  if (!project) {
    return (
      <div className="pt-20 min-h-screen bg-background px-6 text-center">
        <h1 className="text-2xl font-bold text-foreground">Project Not Found</h1>
        <Link href="/projects" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              {project.category}
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-8">
            {project.name}
          </h1>
          <div className="aspect-video w-full bg-secondary/50 rounded-2xl flex items-center justify-center border border-border border-dashed">
            <span className="text-muted-foreground/30 font-bold text-4xl font-heading uppercase tracking-widest">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.solution}
              </p>
              <ul className="space-y-3">
                {project.benefits.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t: string) => (
                  <span key={t} className="text-xs font-medium bg-background border border-border text-foreground px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Impact
              </h3>
              <div className="space-y-4">
                {project.impact.map((imp: any, i: number) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-foreground font-heading mb-1">{imp.value}</div>
                    <div className="text-xs text-muted-foreground">{imp.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Need similar results?</h3>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Let's discuss how we can build a scalable, high-performance solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground rounded-xl font-medium hover-minimal border border-transparent"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}