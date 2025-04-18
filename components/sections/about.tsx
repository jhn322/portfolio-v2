"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleOpenResume = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-purple-600"></span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-4 text-lg"
            >
              As a full-stack Web Developer I am passionate about my craft and
              am committed to delivering solutions I can be proud of. I see each
              project as an opportunity to improve and learn something new,
              ensuring that the end result surpasses the previous one. I strive
              to grow professionally and personally by focusing on efficiency,
              functionality, and aesthetics.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 text-lg"
            >
              My interest in web development stems from its unique blend of
              creativity and technical problem-solving. I&apos;m particularly
              drawn to building intuitive user interfaces and robust backend
              systems that deliver seamless integration towards each other.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleOpenResume}
                className="rounded-full bg-gradient-to-r from-purple-900/50 to-purple-600/50"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>

              <div className="flex gap-3">
                <Link href="https://github.com/jhn322" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30"
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
                    className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-900/80 to-black">
                  <Image
                    src="/placeholder.svg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Orbiting circle decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-purple-500/20"
                style={{ transformOrigin: "center center" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
