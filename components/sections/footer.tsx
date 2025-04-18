"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 relative">
      {/* Remove the background gradient div */}
      <div className="container mx-auto px-4">
        <div className="border-t border-purple-900/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <p className="text-gray-400 mt-2">Building for a better web</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3"
            >
              <Link href="https://github.com/jhn322" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
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
                  className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center">
              JS © {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
