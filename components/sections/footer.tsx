"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer className="py-10 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="pt-10 relative">
          <div className="flex justify-center items-center mb-6">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1.4, delay: 0.2 }}
              className="h-px w-1/2 bg-purple-900/30"
              style={{ transformOrigin: "right" }}
            />
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1.4, delay: 0.2 }}
              className="h-px w-1/2 bg-purple-900/30"
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <FadeIn threshold={0.1} delay={300} className="mb-6 md:mb-0">
              <p className="text-gray-400 mt-2">Building for a better web</p>
            </FadeIn>

            <FadeIn threshold={0.1} delay={400} className="flex gap-3">
              <Link href="https://github.com/jhn322" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="GitHub Profile"
                  className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="LinkedIn Profile"
                  className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <FadeIn
            threshold={0.1}
            delay={500}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center">
              JS © {new Date().getFullYear()}
            </p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
