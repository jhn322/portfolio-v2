import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import OtherProjects from "@/components/sections/other-projects";
import ContactDrawer from "@/components/sections/contact-drawer";
import Footer from "@/components/sections/footer";
import ClientOnly from "@/components/client-only";
import AnimatedBackground from "@/components/background";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import StickyIcons from "@/components/sticky-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ClientOnly fallback={<div className="min-h-screen bg-black"></div>}>
        <AnimatedBackground />
      </ClientOnly>

      <ClientOnly fallback={<div className="h-20"></div>}>
        <Navbar />
      </ClientOnly>

      <ClientOnly fallback={<div className="h-screen"></div>}>
        <Hero />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-20 md:py-32">Loading...</div>}>
        <About />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-20 md:py-32">Loading...</div>}>
        <Skills />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-20 md:py-32">Loading...</div>}>
        <FeaturedProjects />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-20 md:py-32">Loading...</div>}>
        <OtherProjects />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-20 md:py-32">Loading...</div>}>
        <Experience />
      </ClientOnly>
      <ClientOnly>
        <ContactDrawer />
      </ClientOnly>
      <ClientOnly fallback={<div className="py-10"></div>}>
        <Footer />
      </ClientOnly>
      <ClientOnly>
        <StickyIcons />
      </ClientOnly>
    </main>
  );
}
