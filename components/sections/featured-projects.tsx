"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NextMove",
    description: "A modern chess application built with Next.js, TypeScript, and Supabase. Play against AI opponents of varying difficulty levels, track your game history and statistics, and customize settings. Features user authentication via NextAuth.js, sound effects, animations, and a responsive design for both desktop and mobile.",
    image: "/placeholder.svg",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn UI",
      "NextAuth.js",
      "Supabase",
      "PostgreSQL",
      "chess.js",
      "Stockfish",
    ],
    liveUrl: "https://next-move-js.vercel.app/",
    githubUrl: "https://github.com/jhn322/next-move",
  },
  {
    title: "Holmsund Information",
    description:
      "An informational website designed to highlight the unique destinations Holmsund has to offer. Coded with React and a variety of npm libraries, the site provides an intuitive navigation experience, ensuring that users can easily explore Holmsund. It also features a robust fuzzy search functionality, capable of handling a wide range of queries to deliver accurate results. Additionally, it boasts a large collection of images and text content, all curated to inspire and inform visitors about the local culture and places.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Rently",
    description:
      "Rently is a heartwarming answer to overconsumption and unnecessary waste. Why buy when you can rent? By connecting neighbors, friends, and local communities, we've created a space where stuff gets used, not wasted. Got a power drill collecting dust? Rent it out to someone who's fixing their shelf. Need a tent for that one camping trip? Rent it from your neighbor instead of shelling out cash for a new one.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets", "Auth0"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Kanban Group Project",
    description:
      "A few weeks-long group project leveraging GIT collaboration while coding in React with Redux to develop a highly functional Kanban board for effective planning. This project enables users to create and manage tasks with ease, including features for setting due dates, deadlines, and assigning team members. Also, users can move cards between columns to track progress and organize tasks efficiently. This Kanban board is designed to enhance productivity and streamline project management.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets", "Auth0"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "The Dashboard",
    description:
      "An aesthetically pleasing dashboard designed to be your go-to landing page for bookmarking and organizing links you want to save for later. This interface provides a quick overview of the weather, so you can stay informed at a glance. Also, it features a convenient note-taking section where you can write down important information or reminders. Your notes are automatically saved and persist across visits. This dashboard combines functionality with a sleek design.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets", "Auth0"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Quire",
    description:
      "A digital assistant designed for creating, saving, and editing everyday notes with ease. Whether you need to write down a quick reminder for the next day or develop a detailed chapter for a creative project, Quire is here to support you. Its intuitive interface allows for seamless note-taking and organization, ensuring your ideas and tasks are always at your fingertips.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets", "Auth0"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="featured-projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my most significant projects that showcase my
            skills and expertise.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 relative group">
                {/* Project image with hover effect */}
                <div className="relative overflow-hidden rounded-2xl border border-purple-900/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-video"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full blur-2xl opacity-30 z-0" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full blur-2xl opacity-30 z-0" />
              </div>

              <div className="w-full lg:w-2/5">
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="text-2xl md:text-3xl font-bold mb-4"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-gray-300 mb-6"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="flex gap-4"
                >
                  <Button className="rounded-full bg-purple-800 hover:bg-purple-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-purple-700 text-purple-300 hover:bg-purple-900/30 hover:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
