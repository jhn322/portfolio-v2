import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import OtherProjects from "@/components/sections/other-projects";
import ContactDrawer from "@/components/contact-drawer";
import Footer from "@/components/sections/footer";
import ClientOnly from "@/components/client-only";
import AnimatedBackground from "@/components/background";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";

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

      <About />
      <Skills />
      <FeaturedProjects />
      <OtherProjects />
      <ContactDrawer />
      <Footer />
    </main>
  );
}
