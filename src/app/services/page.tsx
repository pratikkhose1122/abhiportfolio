import Link from "next/link";
import { ArrowRight, Smartphone, MonitorSmartphone, Server, Zap, Shield, Repeat, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "mobile",
      title: "Mobile App Development",
      hook: "Native-quality experiences across iOS and Android.",
      icon: Smartphone,
      problem: "You need to reach users on their devices but don't want the overhead of managing two separate codebases (Swift and Kotlin) or dealing with sluggish hybrid wrappers.",
      solution: "I build robust, high-performance applications using React Native and Expo. You get native-level performance and a unified codebase that cuts development time and maintenance costs in half.",
      benefits: [
        { icon: Zap, label: "Fast Performance", desc: "Smooth 60fps animations and rapid load times." },
        { icon: Repeat, label: "Cross-Platform", desc: "One codebase deployed to both App Store and Google Play." },
        { icon: Shield, label: "Offline Support", desc: "Apps that work flawlessly even with poor connectivity." },
        { icon: CheckCircle2, label: "App Store Ready", desc: "I handle the complex submission and review process." }
      ]
    },
    {
      id: "saas",
      title: "SaaS Platforms & Web Apps",
      hook: "Scalable cloud software built for growth.",
      icon: Server,
      problem: "Off-the-shelf software doesn't fit your unique workflow, and building a custom SaaS from scratch often results in technical debt and unscalable architecture.",
      solution: "I architect custom web applications using Next.js, Node.js, and modern databases. I focus on multi-tenant architecture, robust authentication, and scalable infrastructure so your app can grow with your user base.",
      benefits: [
        { icon: Zap, label: "Next-Gen Stack", desc: "Built with the latest App Router and server components." },
        { icon: Shield, label: "Bank-Grade Security", desc: "Secure authentication, RBAC, and data encryption." },
        { icon: Server, label: "Cloud Scalability", desc: "Deployed on serverless infrastructure to handle traffic spikes." },
        { icon: CheckCircle2, label: "Stripe Integration", desc: "Seamless subscription and payment processing." }
      ]
    }
  ];

  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6">
            Engineering Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I deliver end-to-end product development, transforming complex business requirements into elegant, high-performing software.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((svc) => (
            <div key={svc.id} id={svc.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <svc.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-heading text-foreground">{svc.title}</h2>
                  <p className="text-accent-blue font-medium">{svc.hook}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="bg-card border border-border p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-destructive"></div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">{svc.problem}</p>
                </div>
                <div className="bg-card border border-border p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Solution</h3>
                  <p className="text-foreground leading-relaxed">{svc.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {svc.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl">
                    <div className="w-10 h-10 shrink-0 bg-secondary rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{benefit.label}</div>
                      <div className="text-sm text-muted-foreground">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-foreground text-background rounded-xl font-medium hover-minimal flex items-center gap-2"
                >
                  Discuss your {svc.title.toLowerCase()}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-32 bg-card border border-border rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Not sure which service fits?</h3>
          <p className="text-muted-foreground mb-8">Let's hop on a brief call. I'll listen to your goals and recommend the best technical approach, even if we don't end up working together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-background border border-border text-foreground rounded-xl font-medium hover:bg-secondary transition-colors duration-300"
          >
            Schedule a Free Strategy Call
          </Link>
        </div>

      </div>
    </div>
  );
}
