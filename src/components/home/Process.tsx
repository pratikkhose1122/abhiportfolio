export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your business needs, technical constraints, and long-term goals.",
    },
    {
      num: "02",
      title: "Requirements",
      desc: "Defining clear project scope, tech stack, and precise deliverables.",
    },
    {
      num: "03",
      title: "Design",
      desc: "Wireframing and UI/UX design focusing on conversion and usability.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Writing clean, scalable code with regular progress updates.",
    },
    {
      num: "05",
      title: "Testing",
      desc: "Rigorous QA testing across devices to ensure a flawless experience.",
    },
    {
      num: "06",
      title: "Launch & Support",
      desc: "Deployment to production and ongoing maintenance.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            How We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl hover-minimal relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-5xl font-bold font-heading text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading relative z-10">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10 max-w-[85%]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
