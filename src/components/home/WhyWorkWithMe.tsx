import { Code2, Clock, ShieldCheck, Handshake } from "lucide-react";

// Har icon ke liye alag color (jaise image mein hai)
const iconColors = [
  "bg-blue-500", 
  "bg-pink-600", 
  "bg-emerald-500", 
  "bg-orange-500"
];

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
    <section className="py-20 md:py-28 bg-[#f8fafc] dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-3 block">
            The Studio Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 font-heading mb-4">
            Why Work With Me
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-[15px] max-w-2xl mx-auto font-normal">
            The principles that drive our culture, our work, and our relationships
          </p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl font-bold font-heading text-zinc-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* VALUES CARDS GRID (Bilkul Image jaisa Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueProps.map((prop, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Colorful Rounded Icon Box (Exactly like image) */}
              <div className={`w-14 h-14 ${iconColors[i]} rounded-2xl flex items-center justify-center mb-5 shadow-md`}>
                <prop.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* TEXT CONTENT (Unchanged) */}
              <h3 className="text-[20px] font-bold text-zinc-900 dark:text-zinc-100 mb-2.5 font-heading tracking-tight">
                {prop.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-normal">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}