"use client";

import ThreeDButton from "@/components/ui/three-d-button";
import { FadeIn } from "../ui/fade-in";

export default function Hero() {
  const scrollToFeaturedProjects = () => {
    const aboutSection = document.getElementById("featured-projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 text-center">
        <FadeIn delay={200} className="mb-6">
          <p className="text-xl md:text-2xl font-light text-purple-300">
            Hello, my name is
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
            Johan Söderlund
          </h1>
        </FadeIn>

        <FadeIn delay={600} className="mb-10">
          <p className="text-xl md:text-3xl font-light">
            <span className="text-gray-300">I&apos;m a </span>
            <span className="font-semibold text-purple-300">
              full-stack web developer
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={800} className="flex flex-col items-center gap-6">
          <ThreeDButton
            onClick={scrollToFeaturedProjects}
            className="text-md md:text-lg lg:text-xl"
          >
            Explore My Projects!
          </ThreeDButton>
        </FadeIn>
      </div>
    </section>
  );
}
