import { Code2, Clock, ShieldCheck, Handshake } from "lucide-react";

export function WhyWorkWithMe() {
  const stats = [
    { value: "7+", label: "Live Products" },
    { value: "6", label: "Industries Served" },
    { value: "10+", label: "Happy Clients" },
  ];

  const valueProps = [
    {
      title: "Modern Tech Stack",
      desc: "I build with Next.js, React Native, and robust backends ensuring your product is scalable and fast.",
      icon: Code2,
    },
    {
      title: "Fast Execution",
      desc: "Lean development processes mean faster time-to-market without sacrificing code quality.",
      icon: Clock,
    },
    {
      title: "Transparent Process",
      desc: "No black boxes. You get regular updates, access to staging, and clear communication.",
      icon: ShieldCheck,
    },
    {
      title: "Long-Term Partnership",
      desc: "I don't just write code and vanish. I partner with you to support and scale the product.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            The Studio Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Why Work With Me
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-background border border-border rounded-xl">
              <div className="text-5xl font-bold font-heading text-foreground mb-2">{stat.value}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueProps.map((prop, i) => (
            <div key={i} className="flex items-start gap-6 p-8 bg-background border border-border rounded-xl hover-minimal">
              <div className="w-12 h-12 shrink-0 bg-secondary rounded-lg flex items-center justify-center">
                <prop.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-heading">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
