export function TechStack() {
  const stacks = [
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      category: "Frontend",
      techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express", "Python (Django)", "Go"],
    },
    {
      category: "Database & Cloud",
      techs: ["PostgreSQL", "MongoDB", "Firebase", "AWS / Vercel"],
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Tools of the Trade
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground font-heading">
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stacks.map((stack, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="text-sm font-bold text-foreground mb-6 uppercase tracking-widest border-b border-border pb-3">
                {stack.category}
              </h3>
              <ul className="space-y-4">
                {stack.techs.map((tech) => (
                  <li key={tech} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-blue rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
