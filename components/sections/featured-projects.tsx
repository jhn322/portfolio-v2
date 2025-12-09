"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { TiltImage } from "@/components/ui/tilt-image";
import { FadeIn } from "../ui/fade-in";
import { ProjectTag } from "../ui/project-tag";

interface Project {
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  projectType?: "Personal" | "Passion" | "Internship";
}

const projects: Project[] = [
  {
    title: "NextMove",
    description:
      "A modern chess application built with Next.js, TypeScript, MongoDB and Prisma. Play against AI opponents of varying difficulty levels, track your game history and statistics, and customize settings. Features user authentication via NextAuth.js (login with email/password or Google OAuth), sound effects, animations, plus a special chess-related Wordle game, all in a responsive design for both desktop and mobile.",
    image: "/featured-projects/nextmove.webp",
    hoverImage: "/featured-projects/nextmove-hover.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Chess.js",
      "Stockfish",
    ],
    liveUrl: "https://next-move-js.vercel.app/",
    githubUrl: "https://github.com/jhn322/nextmove",
    projectType: "Personal",
  },
  {
    title: "EgenLista",
    description:
      "A web tool designed for companies to easily generate embeddable sign-up widgets or QR codes. Its primary goal is to help businesses easily collect lead and customer contact information, building their own marketing lists that can be exported for use with external SMTP services. The tech stack includes TypeScript, React, Tailwind CSS, Shadcn/ui for the frontend, and Next.js API routes with Prisma and MongoDB for the backend, along with NextAuth.js for authentication.",
    image: "/featured-projects/egenlista.webp",
    hoverImage: "/featured-projects/egenlista-hover.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Zod",
      "Recharts",
    ],
    liveUrl: "https://egenlista.vercel.app/",
    githubUrl: "https://github.com/jhn322/egenlista",
    projectType: "Internship",
  },
  {
    title: "BlueRedGold",
    description:
      "A website for the Swedish Saffron company BlueRedGold, designed to showcase not just their products but also their expertise and values. The website aims to engage visitors by sharing a variety of content, including scientific insights about saffron, delicious saffron-based recipes, and information about the company's commitment to sustainability. Built with Sanity CMS in mind, which allows for easily updating and publishing new material, keeping the website fresh and informative.",
    image: "/featured-projects/blueredgold.webp",
    hoverImage: "/featured-projects/blueredgold-hover.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "Sanity CMS",
      "React Hook Form",
      "Zod",
      "Brevo",
    ],
    liveUrl: "https://blueredgold-alpha.vercel.app/",
    githubUrl: "https://github.com/jhn322/blueredgold",
    projectType: "Internship",
  },
  {
    title: "Offertu",
    description:
      "A web application primarily designed for collecting and managing leads. It features a lead submission form where users can input their email and phone number. This information is then stored in a MongoDB database and, significantly, synchronized in real-time with a Google Sheet. The project also includes sections for company information like careers, news, and policy documents, it also serve as a general informational website for a business that heavily relies on lead generation with a comprehensive dashboard for managing their leads.",
    image: "/featured-projects/offertu.webp",
    hoverImage: "/featured-projects/offertu-hover.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Zod",
      "Brevo",
    ],
    liveUrl: "https://offertu-eight.vercel.app/",
    githubUrl: "https://github.com/jhn322/offertu",
    projectType: "Internship",
  },
  {
    title: "Holmsund Information",
    description:
      "An informational website designed to highlight the unique destinations Holmsund has to offer. Coded with React and a variety of npm libraries, the site provides an intuitive navigation experience, ensuring that users can easily explore Holmsund. It also features a robust fuzzy search functionality, capable of handling a wide range of queries to deliver accurate results. Additionally, it boasts a large collection of images and text content, all curated to inspire and inform visitors about the local culture and places.",
    image: "/featured-projects/holmsund.webp",
    hoverImage: "/featured-projects/holmsund-hover.webp",
    tags: [
      "React",
      "JavaScript",
      "Router",
      "API",
      "CSS Modules",
      "Fuzzy Search",
      "Image Gallery",
      "Google Analytics",
      "SEO",
    ],
    liveUrl: "https://jhn-holmsund-information.netlify.app/",
    githubUrl: "https://github.com/jhn322/holmsund-information",
    projectType: "Personal",
  },
  {
    title: "Next.js Auth (PostgreSQL)",
    description:
      "A full-stack authentication template built with Next.js, PostgreSQL, and NextAuth.js. This template provides a complete authentication system with email/password authentication, OAuth providers (Google and GitHub), email verification, and password reset functionality. It's designed as a production-ready starter kit that brings together modern tooling, scalable database hosting, and secure auth defaults, perfect for building a full-stack application.",
    image: "/featured-projects/auth-template.webp",
    hoverImage: "/featured-projects/auth-template-hover.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "NextAuth.js",
      "Neon",
      "JWT",
      "Tailwind CSS",
      "Google oAuth",
      "GitHub oAuth",
    ],
    liveUrl: "https://nextjs-auth-postgres-template.vercel.app/",
    githubUrl: "https://github.com/jhn322/nextjs-auth-postgres-template",
    projectType: "Personal",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <FadeIn delay={100} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my most significant projects that showcase my
            skills and expertise.
          </p>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 100}
              threshold={0.05}
              rootMargin="0px 0px -100px 0px"
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 relative group">
                {/* Project images with 3D tilt effect */}
                <TiltImage
                  image={project.image}
                  hoverImage={project.hoverImage}
                  title={project.title}
                  priority={index < 2}
                  isAlternate={index % 2 !== 0}
                />
              </div>

              <div className="w-full lg:w-2/5">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>
                  {project.projectType && (
                    <ProjectTag type={project.projectType} />
                  )}
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-purple-300 text-purple-300 hover:bg-purple-900/30 hover:text-white rounded-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
