"use client";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import OtherProjects from "@/components/sections/other-projects";
import ContactDrawer from "@/components/contact-drawer";
import Footer from "@/components/sections/footer";
import dynamic from "next/dynamic";

// Loading component for dynamic imports
const LoadingFallback = () => <div className="min-h-screen bg-black"></div>;

const AnimatedBackground = dynamic(() => import("@/components/background"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
  loading: () => <div className="h-20"></div>,
});

const Hero = dynamic(() => import("@/components/sections/hero"), {
  ssr: false,
  loading: () => <div className="h-screen"></div>,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <OtherProjects />
      <ContactDrawer />
      <Footer />
    </main>
  );
}
