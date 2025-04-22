"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MovingButton } from "@/components/ui/moving-border-button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl font-light text-purple-300">
            Hello, my name is
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
            Johan Söderlund
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-xl md:text-3xl font-light">
            <span className="text-gray-300">I&apos;m a </span>
            <span className="font-semibold text-purple-300">
              full-stack web developer
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <MovingButton
            onClick={scrollToFeaturedProjects}
            borderRadius="9999px"
            containerClassName="rounded-full"
            className="text-sm md:text-md lg:text-lg bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 px-8 py-3"
            borderClassName="bg-[radial-gradient(theme(colors.purple.200)_40%,transparent_60%)]"
          >
            Explore My Projects
          </MovingButton>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
