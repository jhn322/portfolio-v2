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
  projectType?: "Personal" | "Passion" | "Internship";
}

const projects: Project[] = [
  {
    title: "Kometa Config",
    description:
      "Kometa is a powerful tool designed to give you complete control over your personal Plex media library representation. With Kometa, you have granular control over metadata manipulation, creating curated collections, custom overlays, and much more. This is my own config with a large amount of self designed posters, icon overlays and custom made collection on a very detailed level.",
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
    title: "YAML URL Checker",
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
    liveUrl: "https://github.com/jhn322/yaml-url-checker",
    githubUrl: "https://github.com/jhn322/yaml-url-checker",
    projectType: "Personal",
  },
  {
    title: "Dev Blog",
    description:
      "A blog for sharing software development insights and best practices, built with Next.js. Blog content is authored in Markdown within the Obsidian application. These Markdown files are managed in a separate Git repository named blog-content, which is integrated as a submodule into the main project. A synchronization process, using GitHub Actions, updates the main application with the latest content from the blog-content repository.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "Submodules",
      "Obsidian",
      "Typography",
      "Husky",
      "Remark",
    ],
    liveUrl: "https://dev-blog-puce-two.vercel.app/",
    githubUrl: "https://github.com/jhn322/dev-blog",
    projectType: "Internship",
  },
  {
    title: "Kanban Group Project",
    description:
      "A few weeks-long group project leveraging GIT collaboration while coding in React with Redux to develop a highly functional Kanban board for effective planning. This project enables users to create and manage tasks with ease, including features for setting due dates, deadlines, and assigning team members. Also, users can move cards between columns to track progress and organize tasks efficiently. This Kanban board is designed to enhance productivity and streamline project management.",
    tags: [
      "React",
      "Redux",
      "JavaScript",
      "CSS Modules",
      "Store",
      "Google Analytics",
      "SEO",
      "Custom Hooks",
      "Slice",
    ],
    liveUrl: "https://kanban-kollab.netlify.app/",
    githubUrl: "https://github.com/jhn322/kanban-group-react",
  },
  {
    title: "The Dashboard",
    description:
      "An aesthetically pleasing dashboard designed to be your go-to landing page for bookmarking and organizing links you want to save for later. This interface provides a quick overview of the weather, so you can stay informed at a glance. Also, it features a convenient note-taking section where you can write down important information or reminders. Your notes are automatically saved and persist across visits. This dashboard combines functionality with a sleek design.",
    tags: [
      "JavaScript",
      "CSS",
      "Unsplash API",
      "Weather API",
      "Randomizer",
      "Local Storage",
      "Google Analytics",
      "Responsive Design",
    ],
    liveUrl: "https://jhn-dashboard.netlify.app/",
    githubUrl: "https://github.com/jhn322/dashboard-frontend",
  },
  {
    title: "Quire",
    description:
      "A digital assistant designed for creating, saving, and editing everyday notes with ease. Whether you need to write down a quick reminder for the next day or develop a detailed chapter for a creative project, Quire is here to support you. Its intuitive interface allows for seamless note-taking and organization, ensuring your ideas and tasks are always at your fingertips.",
    tags: [
      "JavaScript",
      "CSS",
      "HTML",
      "Google Analytics",
      "Search",
      "Print",
      "Local Storage",
      "Textformatting",
      "Settings Panel",
    ],
    liveUrl: "https://regni.github.io/quire/",
    githubUrl: "https://github.com/jhn322/quire",
  },
];

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Other Noteworthy Projects
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of projects that I&apos;ve worked on to explore
            different technologies and learn new things throughout my coding
            journey.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 100}
              className="relative group h-full"
            >
              <motion.div whileHover={{ y: -10 }} className="h-full">
                <div className="absolute inset-0 bg-purple-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                <Card className="relative h-full flex flex-col bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30 overflow-hidden group">
                  <CardHeader className="flex flex-row justify-between items-start pb-4 relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="p-3 rounded-2xl bg-purple-700 shadow-lg"
                    >
                      <Folder className="h-6 w-6" />
                    </motion.div>

                    <div className="flex gap-1">
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 w-10 rounded-full"
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
                        className="text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 w-10 rounded-full"
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
                        className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/30"
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

        <FadeIn className="flex justify-center mt-12">
          <Button
            asChild
            variant="outline"
            aria-label="View more projects on GitHub"
            className="border-purple-300 text-purple-300 hover:bg-purple-900/30 hover:text-white rounded-full"
          >
            <Link
              href="https://github.com/jhn322?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="mr-2 h-4 w-4" />
              <span>More on my GitHub</span>
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
