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
    <section className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section - Same text, updated colors */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-4 block">
            Tools of the Trade
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-purple-700 dark:text-purple-400 font-heading">
            Technology Stack
          </h2>
        </div>

        {/* Grid Layout - Bilkul pehle jaisa 2x4 structure, bas design upgraded */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stacks.map((stack, i) => (
            <div key={i} className="flex flex-col">
              
              {/* Category Heading - Same text, better styling */}
              <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-6 uppercase tracking-widest border-b-2 border-purple-200 dark:border-purple-900 pb-3">
                {stack.category}
              </h3>
              
              {/* Tech List - Same text, but individual items are now minimalist badges */}
              <ul className="space-y-3">
                {stack.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-3">
                    {/* Clean circle dot */}
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    {/* Tech name in cleaner font */}
                    <span className="text-zinc-600 dark:text-zinc-400 text-[15px] font-light hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                      {tech}
                    </span>
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