import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const projectName = project
    ? project.name
    : slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  const industry = project?.industry || "Software Product";
  const status = project?.status || "Live & Active";
  const statusColor = project?.statusColor || "text-accent-blue bg-accent-blue/10";
  const overview = project?.overview || `${projectName} is a comprehensive solution engineered to solve complex operational challenges.`;
  const problem = project?.problem || "Users were relying on fragmented tools and manual processes. Data was siloed, leading to inefficiencies and errors.";
  const solution = project?.solution || "We engineered a centralized, cloud-native application that automated the core workflows with a clean, responsive UI.";
  const benefits = project?.benefits || [
    "Real-time data synchronization",
    "Role-based access control",
    "Automated reporting engine",
    "Seamless third-party integrations",
  ];
  const techStack = project?.tech || ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];
  const impact = project?.impact || [
    { value: "40%", label: "Increase in user retention" },
    { value: "2x", label: "Faster onboarding time" },
  ];

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              {industry}
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${statusColor}`}>
              {status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-6">
            {projectName}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {project?.description}
          </p>

          {/* Action Row */}
          {project?.liveUrl && (
            <div className="mb-10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background font-bold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          )}

          {/* Visual Showcase Box */}
          <div className="aspect-video w-full bg-secondary/60 rounded-2xl flex flex-col items-center justify-center border border-border relative overflow-hidden p-8 text-center">
            <div className={`w-20 h-20 ${project?.boxColor || "bg-accent-blue"} rounded-2xl flex items-center justify-center shadow-xl mb-4`}>
              <span className="text-white font-bold text-3xl font-heading uppercase tracking-widest">
                {projectName.charAt(0)}
              </span>
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-1">{projectName}</h3>
            {project?.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-500 font-medium hover:underline inline-flex items-center gap-1 mt-1"
              >
                {project.liveUrl}
                <ExternalLink size={11} />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">Internal Enterprise Platform</span>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{solution}</p>
              <ul className="space-y-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
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
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-background border border-border text-foreground px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Impact & Results
              </h3>
              <div className="space-y-4">
                {impact.map((imp, i) => (
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
            Let&apos;s discuss how we can build a scalable, high-performance solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {project?.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-background text-foreground rounded-xl font-bold hover:opacity-90"
              >
                <span>Launch Live Product</span>
                <ExternalLink size={16} />
              </a>
            )}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-background/20 text-background border border-background/30 rounded-xl font-bold hover:bg-background/30 transition-colors"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
