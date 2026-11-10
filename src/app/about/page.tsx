import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Heart, Calendar, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Main Developer Bio & Photo */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Professional Portrait Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
                {/* Decorative ambient gradient backdrop glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-purple-600/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Image Frame Card */}
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/5] relative w-full overflow-hidden bg-muted">
                    <Image
                      src="/about-me.jpg"
                      alt="Abhijit Mungase - Software Developer & Cinematographer"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                      priority
                      className="object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio & Story Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading mb-6 leading-[1.15]">
                I build software that <br />
                <span className="text-accent-blue">makes a difference.</span>
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  I am a Full-Stack Developer specializing in building real-world SaaS and mobile applications. With <strong>1 year of professional experience</strong> working at <strong>VyomX Tech Solution Pvt Ltd, Pune</strong> as a Software Developer, I have a proven track record of building AI-powered solutions and scalable web apps.
                </p>
                <p>
                  My tech stack revolves around Next.js, React Native, Node.js, and scalable cloud databases. However, I believe tools are just a means to an end. The real value lies in understanding the problem and architecting a clean, maintainable solution that can scale gracefully as your user base grows.
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2.5 pt-6 mt-6 border-t border-border">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
                  <Briefcase size={12} className="text-blue-500" /> Full-Stack Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
                  <Award size={12} className="text-cyan-500" /> SaaS & Mobile Apps
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
                  <Camera size={12} className="text-purple-500" /> Creative Cinematography
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Developer Stats */}
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

        {/* Photography & Cinematography Section */}
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
              I am a passionate photographer and cinematographer based in Ahilyanagar, Pune. With over 4 years of experience in capturing life&apos;s most precious moments, I specialize in wedding photography, cinematic drone films, and creative portraiture.
            </p>
            <p>
              My philosophy is simple: <span className="text-foreground font-medium">&ldquo;Every picture tells a story.&rdquo;</span> 
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

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-[#4F1A81] via-[#1A4A8A] to-[#00C2FF] rounded-2xl p-10 md:p-14 text-center flex flex-col items-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading max-w-2xl leading-tight">
            Ready to start?
          </h3>
          <p className="text-blue-100/90 mb-8 text-lg max-w-xl">
            Let&apos;s discuss how my expertise can accelerate your project.
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