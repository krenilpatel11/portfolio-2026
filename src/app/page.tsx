import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import DeveloperDeck from "@/components/sections/DeveloperDeck";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { FloatingMoodToggle } from "@/components/interactive/FloatingMoodToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Projects />
      <Services />
      <DeveloperDeck />
      <ExperienceTimeline />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingMoodToggle />
    </div>
  );
}
