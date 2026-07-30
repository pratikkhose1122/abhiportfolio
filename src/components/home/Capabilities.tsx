import Link from "next/link";
import { Smartphone, LayoutTemplate, Server, MonitorSmartphone, Code2, Rocket } from "lucide-react";

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
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Engineering Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Core Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl hover-minimal">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/services"
            className="px-8 py-3.5 bg-foreground text-background rounded-xl font-medium hover-minimal"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
