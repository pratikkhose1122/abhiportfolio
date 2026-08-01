import { Smartphone, LayoutTemplate, Server, MonitorSmartphone, Code2, Rocket } from "lucide-react";

// Screenshot ke hisaab se colors decide kiye hain (Blue, Purple, Green, Orange)
const iconColors = [
  "bg-blue-500", 
  "bg-pink-600", 
  "bg-emerald-500", 
  "bg-orange-500", 
  "bg-blue-500", 
  "bg-pink-600"
];

const capabilities = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that perform beautifully.",
    icon: Smartphone,
  },
  {
    title: "SaaS Platforms",
    description: "Scalable, secure, and multi-tenant cloud software architectures.",
    icon: Server,
  },
  {
    title: "Web Applications",
    description: "Responsive, dynamic web apps built with modern frontend frameworks.",
    icon: MonitorSmartphone,
  },
  {
    title: "UI/UX Implementation",
    description: "Pixel-perfect translation of designs into smooth, interactive code.",
    icon: LayoutTemplate,
  },
  {
    title: "API Development",
    description: "Robust REST and GraphQL APIs to power your digital products.",
    icon: Code2,
  },
  {
    title: "MVP Launch",
    description: "Rapid prototyping and development to get your product to market fast.",
    icon: Rocket,
  },
];

export function Capabilities() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Colorful Icon Box (Exactly like screenshot) */}
              <div className={`w-14 h-14 ${iconColors[i]} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h3 className="text-[20px] font-bold text-zinc-900 dark:text-zinc-100 mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom Link Button (Optional - as per your previous code) */}
        <div className="flex justify-center mt-16">
          {/* Add your button here if needed */}
        </div>

      </div>
    </section>
  );
}