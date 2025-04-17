"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToFeaturedProjects = () => {
    if (typeof window !== "undefined") {
      const aboutSection = document.getElementById("featured-projects");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToAbout = () => {
    if (typeof window !== "undefined") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
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
          <h2 className="text-xl md:text-2xl font-light text-purple-300">
            Hello, I&apos;m
          </h2>
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
          <h3 className="text-xl md:text-3xl font-light">
            <span className="text-gray-300">I&apos;m a </span>
            <span className="font-semibold text-purple-300">
              full-stack web developer
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <Button
            onClick={scrollToFeaturedProjects}
            className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-900 to-purple-700 hover:from-purple-800 hover:to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Explore My Projects
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              onClick={scrollToAbout}
              className="cursor-pointer"
            >
              <ArrowDown className="h-8 w-8 text-purple-300 hover:text-purple-500/70 border-2 border-purple-500 hover:border-purple-700/70 rounded-full p-1" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
