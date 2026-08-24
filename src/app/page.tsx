import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Process } from "@/components/home/Process";
import { WhyWorkWithMe } from "@/components/home/WhyWorkWithMe";
import { TechStack } from "@/components/home/TechStack";
import { Testimonial } from "@/components/home/Testimonial";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <FeaturedProjects />
      <Process />
      <WhyWorkWithMe />
      <TechStack />
      <Testimonial />
      <FAQ />
      <ContactSection />
    </>
  );
}