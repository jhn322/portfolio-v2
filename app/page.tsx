"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import OtherProjects from "@/components/sections/other-projects";
import ContactDrawer from "@/components/contact-drawer";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/navbar";

const AnimatedBackground = dynamic(() => import("@/components/background"), {
  ssr: false,
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
