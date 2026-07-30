import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-8">
            I build software that <br />
            <span className="text-accent-blue">makes a difference.</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              I am a Full-Stack Developer specializing in building real-world SaaS and mobile applications. With <strong>1 year of professional experience</strong> working at <strong>VyomX Tech Solution Pvt Ltd, Pune</strong> as a Software Developer, I have a proven track record of building AI-powered solutions and scalable web apps.
            </p>
            <p>
              My tech stack revolves around Next.js, React Native, Node.js, and scalable cloud databases. However, I believe tools are just a means to an end. The real value lies in understanding the problem and architecting a clean, maintainable solution that can scale gracefully as your user base grows.
            </p>
            <p>
              Whether it's an EdTech platform helping schools manage attendance or a robust enterprise portal for company attendance systems, I focus on delivering premium engineering. I don't just write code; I partner with you to ensure the product achieves its business goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 border-y border-border py-12">
          <div className="text-center">
            <div className="text-5xl font-bold font-heading text-foreground mb-2">7+</div>
            <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Live Products</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold font-heading text-foreground mb-2">6</div>
            <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold font-heading text-foreground mb-2">10+</div>
            <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold font-heading mb-8">How I Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-accent-blue font-bold mb-2">01. Discover & Plan</div>
              <p className="text-sm text-muted-foreground">We align on your business goals and technical constraints.</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-accent-blue font-bold mb-2">02. Design & Prototype</div>
              <p className="text-sm text-muted-foreground">Creating intuitive UI/UX focused on conversions.</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-accent-blue font-bold mb-2">03. Develop & Test</div>
              <p className="text-sm text-muted-foreground">Writing robust code with regular staging deployments.</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-accent-blue font-bold mb-2">04. Launch & Scale</div>
              <p className="text-sm text-muted-foreground">Smooth production rollout and ongoing technical support.</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Ready to start?</h3>
          <p className="text-muted-foreground mb-8">Let's discuss how my expertise can accelerate your project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-xl font-medium hover-minimal"
          >
            Book a Strategy Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
