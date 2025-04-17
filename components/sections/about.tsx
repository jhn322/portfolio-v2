"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin } from "lucide-react";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button className="rounded-full bg-purple-800 hover:bg-purple-700">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
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
