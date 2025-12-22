"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
  liveUrl?: string;
  githubUrl?: string;
  projectType?: "Personal" | "Passion" | "Internship";
  icon?: string;
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
    icon: "/other-projects/kometa.webp",
    projectType: "Passion",
  },
  {
    title: "Portfolio V2",
    description:
      "A modern portfolio web app designed to showcase projects and skills through a fast, polished experience. It features a clean UI built with Shadcn and Tailwind CSS. Smooth animations created with Framer Motion, Lottie, and IntersectionObserver-based fade-in, alongside React Three Fiber. Forms are handled with React Hook Form and Zod for reliable validation, and email functionality is powered by Brevo, resulting in the portfolio you are looking at now.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "Lottie",
      "React Three Fiber",
      "Resend",
    ],
    liveUrl: "https://js-portfolio-v2.vercel.app/",
    githubUrl: "https://github.com/jhn322/portfolio-v2",
    icon: "/other-projects/portfolio.webp",
    projectType: "Personal",
  },
  {
    title: "NextAuth Template",
    description:
      "A full-stack authentication template built with Next.js, MongoDB, and NextAuth.js. This template provides a complete authentication system with email/password authentication, OAuth providers (Google and GitHub), email verification, and password reset functionality. It's designed as a production-ready starter kit that quickly brings your project up and running with scalable Atlas database, and secure authentication, perfect for building a full-stack application.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth.js",
      "Prisma",
      "JWT",
      "Tailwind CSS",
      "Google oAuth",
      "GitHub oAuth",
    ],
    liveUrl: "https://nextjs-auth-mongo-template.vercel.app/",
    githubUrl: "https://github.com/jhn322/nextauth-template",
    icon: "/other-projects/mongodb.webp",
    projectType: "Personal",
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
    githubUrl: "https://github.com/jhn322/yaml-url-checker",
    icon: "/other-projects/yaml-url-checker.webp",
    projectType: "Personal",
  },
  {
    title: "Leadvio",
    description:
      "Helped enhancing Leadvio, a LinkedIn automation tool, by developing company search functionality alongside the existing people search. Created dynamic table rendering based on search queries. Debugged XHR requests with Postman and implemented title filtering across companies. Developed Chrome extension components for LinkedIn profile interactions.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Clerk",
      "JWT",
      "Tailwind CSS",
      "LinkedIn API",
      "Postman",
    ],
    liveUrl: "https://www.leadvio.se/",
    icon: "/other-projects/leadvio.webp",
    projectType: "Internship",
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
    icon: "/other-projects/semurai.webp",
    projectType: "Internship",
  },
  {
    title: "LibreChat Semurai",
    description:
      "Deployed and configured an internal AI chatbot using OpenAI and Anthropic models. Set up with Digital Ocean droplet with Ubuntu, Docker, and MongoDB. Configured DNS with Cloudflare and implemented SSL for secure connections. Managed user access and database administration to maintain security.",
    tags: [
      "React",
      "TypeScript",
      "Digital Ocean",
      "Cloudflare",
      "SSL",
      "MongoDB",
      "Ubuntu",
      "Docker",
    ],
    liveUrl: "https://www.librechat.ai/",
    githubUrl: "https://github.com/jhn322/librechat-semurai",
    icon: "/other-projects/librechat.webp",
    projectType: "Internship",
  },
  {
    title: "Rently",
    description:
      "Rently is the answer to overconsumption and unnecessary waste. Why buy when you can rent? By connecting neighbors, friends, and local communities, we've created a space where stuff gets used, not wasted. Need a tent for that one camping trip? Rent it from your neighbor instead of shelling out cash for a new one.",
    tags: [
      "Vue.js",
      "Store",
      "SFC",
      "Search",
      "Dashboard",
      "User Authentication",
      "Pinia",
      "JSONBin",
      "Toastify",
    ],
    liveUrl: "https://rently-app.netlify.app/",
    githubUrl: "https://github.com/jhn322/rently",
    icon: "/other-projects/rently.webp",
  },
  {
    title: "The Dashboard",
    description:
      "An aesthetically pleasing dashboard designed to be a go-to landing page for bookmarking and organizing links. The UI provides a quick overview of the weather. It also features a note-taking section for writing down important information. Notes are automatically saved and persist.",
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
    icon: "/other-projects/dashboard.webp",
  },
];

const ExpandableButtonGroup = ({
  githubUrl,
  liveUrl,
  projectTitle,
}: {
  githubUrl?: string;
  liveUrl?: string;
  projectTitle: string;
}) => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLiveHovered, setIsLiveHovered] = useState(false);

  return (
    <div className="flex gap-1 ml-auto">
      {githubUrl && (
        <motion.div
          className="relative"
          animate={{ width: isGithubHovered ? "auto" : "2.5rem" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          onMouseEnter={() => setIsGithubHovered(true)}
          onMouseLeave={() => setIsGithubHovered(false)}
        >
          <Button
            asChild
            variant="ghost"
            className="text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 rounded-full overflow-hidden whitespace-nowrap w-full"
            aria-label={`View GitHub repository for ${projectTitle}`}
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-end"
            >
              <Github className="h-5 w-5 flex-shrink-0" />
              <motion.span
                animate={{
                  width: isGithubHovered ? "auto" : 0,
                  opacity: isGithubHovered ? 1 : 0,
                }}
                transition={{
                  width: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  },
                  opacity: { duration: 0.2, delay: isGithubHovered ? 0.1 : 0 },
                }}
                className="overflow-hidden"
              >
                Source Code
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      )}
      {liveUrl && (
        <motion.div
          className="relative"
          animate={{ width: isLiveHovered ? "auto" : "2.5rem" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          onMouseEnter={() => setIsLiveHovered(true)}
          onMouseLeave={() => setIsLiveHovered(false)}
        >
          <Button
            asChild
            variant="ghost"
            className="text-purple-300 hover:bg-purple-900/30 hover:text-white h-10 rounded-full overflow-hidden whitespace-nowrap w-full"
            aria-label={`View live demo for ${projectTitle}`}
          >
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-end"
            >
              <ExternalLink className="h-5 w-5 flex-shrink-0" />
              <motion.span
                animate={{
                  width: isLiveHovered ? "auto" : 0,
                  opacity: isLiveHovered ? 1 : 0,
                }}
                transition={{
                  width: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  },
                  opacity: { duration: 0.2, delay: isLiveHovered ? 0.1 : 0 },
                }}
                className="overflow-hidden"
              >
                Visit Page
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

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
                      {project.icon ? (
                        <Image
                          src={project.icon}
                          alt={`${project.title} icon`}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <Folder className="h-6 w-6" />
                      )}
                    </motion.div>

                    <ExpandableButtonGroup
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      projectTitle={project.title}
                    />
                  </CardHeader>

                  <CardContent className="flex-grow pb-4">
                    {project.liveUrl ? (
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
                    ) : (
                      <div className="flex items-center mb-2">
                        <CardTitle className="text-xl font-bold">
                          {project.title}
                        </CardTitle>
                        {project.projectType && (
                          <ProjectTag type={project.projectType} />
                        )}
                      </div>
                    )}
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
              <span>More projects on my GitHub</span>
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
