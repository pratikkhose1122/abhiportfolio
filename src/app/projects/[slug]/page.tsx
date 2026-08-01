import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Mock data based on slug. In a real app, this would be fetched.
  const projectName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              Software Product
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">
              Live & Active
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-8">
            {projectName}
          </h1>
          <div className="aspect-video w-full bg-secondary rounded-2xl flex items-center justify-center border border-border">
            <span className="text-muted-foreground/30 font-bold text-4xl font-heading uppercase tracking-widest">
              {projectName.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {projectName} is a comprehensive solution engineered to solve complex operational challenges. The project required a highly scalable architecture and an intuitive user interface to ensure high adoption rates among end-users.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Before this platform, users were relying on fragmented tools and manual processes. Data was siloed, leading to inefficiencies, errors, and a poor overall experience that hampered growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We engineered a centralized, cloud-native application that automated the core workflows. By focusing on a clean, responsive UI and a robust backend, we created a single source of truth that users love engaging with.
              </p>
              <ul className="space-y-3">
                {["Real-time data synchronization", "Role-based access control", "Automated reporting engine", "Seamless third-party integrations"].map((item, i) => (
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
                {["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((t) => (
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
                <div>
                  <div className="text-2xl font-bold text-foreground font-heading mb-1">40%</div>
                  <div className="text-xs text-muted-foreground">Increase in user retention</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-heading mb-1">2x</div>
                  <div className="text-xs text-muted-foreground">Faster onboarding time</div>
                </div>
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
