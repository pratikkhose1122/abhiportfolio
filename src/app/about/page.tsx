import Link from "next/link";
import { ArrowRight, Camera, Heart, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Main Developer Bio */}
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
          </div>
        </div>

        {/* Developer Stats (Unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-y border-border py-12">
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

        {/* ✅ NEW: Photography & Cinematography Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-muted-foreground/30" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Creative Side</span>
          </div>
          
          <h3 className="text-3xl font-bold text-foreground font-heading mb-6">
            The Photographer Within
          </h3>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              I am a passionate photographer and cinematographer based in Ahilyanagar, Pune. With over 4 years of experience in capturing life's most precious moments, I specialize in wedding photography, cinematic drone films, and creative portraiture.
            </p>
            <p>
              My philosophy is simple: <span className="text-foreground font-medium">"Every picture tells a story."</span> 
              I strive to create timeless images that reflect the beauty, emotion, and grandeur of every occasion.
            </p>
          </div>

          {/* Photography Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <Camera className="mx-auto mb-2 text-foreground" size={24} strokeWidth={1.5} />
              <div className="text-2xl font-bold text-foreground">250+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Shoots</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <Heart className="mx-auto mb-2 text-foreground" size={24} strokeWidth={1.5} />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Satisfaction</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <Calendar className="mx-auto mb-2 text-foreground" size={24} strokeWidth={1.5} />
              <div className="text-2xl font-bold text-foreground">4+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Years</div>
            </div>
          </div>

          {/* View Photography Portfolio Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-full text-sm font-medium hover:bg-secondary transition-colors"
            >
              View Photography Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ✅ CTA SECTION - UPDATED TO GRADIENT (Image 2) */}
        <div className="bg-gradient-to-r from-[#4F1A81] via-[#1A4A8A] to-[#00C2FF] rounded-2xl p-10 md:p-14 text-center flex flex-col items-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading max-w-2xl leading-tight">
            Ready to start?
          </h3>
          <p className="text-blue-100/90 mb-8 text-lg max-w-xl">
            Let's discuss how my expertise can accelerate your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-[#1A4A8A] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}