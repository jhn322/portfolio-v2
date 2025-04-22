"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Folder } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { ProjectTag } from "../ui/project-tag";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  projectType?: "Personal" | "Passion";
}

const projects: Project[] = [
  {
    title: "Kometa Config",
    description:
      "Kometa is a powerful tool designed to give you complete control over your personal Plex media library representation. With Kometa, you have granular control over metadata, collections, overlays, and much more. This is my config with a large amount of self designed posters, icon overlays and custom made collection in every detail.",
    tags: [
      "Python",
      "Docker",
      "YAML",
      "Plex",
      "Metadata",
      "Photoshop",
      "Overlays",
      "API",
      "Automation",
    ],
    liveUrl: "https://kometa.wiki/en/latest/",
    githubUrl: "https://github.com/jhn322/kometa-config",
    projectType: "Passion",
  },
  {
    title: "Dead Link Checker",
    description:
      "Python-based utility script designed to automatically scan configuration files for potentially dead web links, specifically targeting Trakt and Letterboxd list URLs within YAML structures. It efficiently checks the status of each discovered URL using HTTP HEAD requests and identifies any links that are no longer accessible. The script provides a summary report to a log file, and sends a notification to a configured Discord channel via webhooks.",
    tags: [
      "Python",
      "YAML",
      "Automation",
      "Discord",
      "API",
      "Cron",
      "URL Validation",
      "Requests",
      "Web Scraping",
    ],
    liveUrl: "https://github.com/jhn322/dead-link-checker",
    githubUrl: "https://github.com/jhn322/dead-link-checker",
    projectType: "Personal",
  },
  {
    title: "Kanban Board",
    description:
      "A versatile Kanban board app designed to streamline your task management. With a user-friendly interface, it allows you to effortlessly organize tasks into customizable columns. The app supports drag-and-drop functionality, enabling smooth task movement across different stages. Additionally, it features a dynamic theme switcher, task creation and editing options, and real-time updates saved locally.",
    tags: [
      "React",
      "API",
      "Theme Switcher",
      "Context",
      "Local Storage",
      "Drag and Drop",
    ],
    liveUrl: "https://jhn-kanban-react.netlify.app/",
    githubUrl: "https://github.com/jhn322/kanban-board-react",
  },
  {
    title: "Media Info",
    description:
      "A simple movie search tool implemented as a JavaScript application that interacts with the OMDb API to fetch and display information about movies, TV shows, or anime based on user input. The application provides a user-friendly interface where users can enter the name of a movie and either click a search button to retrieve the relevant information.",
    tags: [
      "JavaScript",
      "CSS",
      "HTML",
      "API",
      "OMDb",
      "Search",
      "Google Analytics",
    ],
    liveUrl: "https://jhn-media-info-app.netlify.app/",
    githubUrl: "https://github.com/jhn322/media-info-app",
  },
  {
    title: "Mortage Calculator",
    description:
      "Designed to help calculate your monthly mortgage payments, total interest, and provide a detailed amortization schedule, this TypeScript-based application takes user input for the mortgage amount, interest rate, and loan term, then performs precise calculations using a financial formula.",
    tags: [
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Tables",
      "Math Calculations",
      "Responsive Design",
    ],
    liveUrl: "https://jhn-labb-typescript.netlify.app/",
    githubUrl: "https://github.com/jhn322/labb-typescript-frontend",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with TypeScript. Play against a friend or the computer in this timeless puzzle. Features include a clean interface and score tracking.",
    tags: [
      "TypeScript",
      "React",
      "Interface",
      "CSS",
      "State Management",
      "Array",
      "Click Handling",
    ],
    liveUrl: "https://jhn-labb-typscript-react.netlify.app/",
    githubUrl: "https://github.com/jhn322/labb-typescript-react",
  },
];

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <FadeIn threshold={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Other Noteworthy Projects
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of smaller projects that I&apos;ve worked on to explore
            different technologies and learn new things throughout my coding
            journey.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              threshold={0.1}
              delay={index * 100}
              className="relative group h-full"
            >
              <motion.div whileHover={{ y: -10 }} className="h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                <Card className="relative h-full flex flex-col bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-md border-purple-900/30 overflow-hidden group">
                  <CardHeader className="flex flex-row justify-between items-start pb-4 relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="p-3 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-900 shadow-lg"
                    >
                      <Folder className="h-6 w-6" />
                    </motion.div>

                    <div className="flex gap-1">
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 w-10"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 w-10"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow pb-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center mb-2">
                        <CardTitle className="text-xl font-bold group-hover:text-purple-300 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        {project.projectType && (
                          <ProjectTag type={project.projectType} />
                        )}
                      </div>
                    </Link>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
