export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  dockerHubUrl?: string;
  projectType?: "Personal" | "Passion" | "Internship" | "School";
  icon?: string;
}

export const projectPages: Project[][] = [
  [
    {
      title: "Portfolio V2",
      description:
        "A modern portfolio designed to showcase projects and skills through a polished experience. It features UI built with Shadcn and Tailwind CSS. Animations created with Framer Motion, Lottie, and React Three Fiber. Forms are handled with React Hook Form and Zod for reliable validation, and email functionality is powered by Brevo, resulting in the portfolio you are looking at now.",
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
      title: "Countdn",
      description:
        "A countdown timer dashboard for keeping track of services currently on cooldown, designed with a focus on usability. Create and manage multiple countdowns with drag-and-drop functionality, adjustable timer durations, quick notes, and the ability to import/export lists you've already created. Features a clean dark/light theme and preset suggestions for quick setup.",
      tags: [
        "Next.js",
        "TypeScript",
        "Pnpm",
        "DnD",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn/UI",
        "Local Storage",
        "JSON import/export",
      ],
      liveUrl: "https://countdn.vercel.app/",
      githubUrl: "https://github.com/jhn322/countdn",
      icon: "/other-projects/countdn.webp",
      projectType: "Personal",
    },
    {
      title: "YAML URL Checker",
      description:
        "Python-based utility script that runs as a Docker container, designed to automatically scan configuration files for potentially dead web links, specifically targeting Trakt, Letterboxd and IMDb list URLs within YAML structures. It checks the status of URLs using HTTP HEAD requests and identifies any links that are no longer accessible. The script provides a summary report to a log file to a Discord channel via webhooks.",
      tags: [
        "Python",
        "Docker",
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
      dockerHubUrl:
        "https://hub.docker.com/repository/docker/jhn322/yaml-url-checker/general",
      icon: "/other-projects/yaml-url-checker.webp",
      projectType: "Passion",
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
  ],
  [
    {
      title: "Oscar Ranking",
      description:
        "An interactive web application to rank and share your Oscar Best Picture nominations during the awards season. Easily reorder your favorite movies, persist your rankings locally, and share your personal rankings with others.",
      tags: [
        "Next.js",
        "TypeScript",
        "API",
        "DnD",
        "Tailwind CSS",
        "TMDb",
        "Local Storage",
        "SWR",
        "Shadcn/UI",
      ],
      liveUrl: "https://oscar-ranking.vercel.app/",
      githubUrl: "https://github.com/jhn322/oscar-ranking",
      icon: "/other-projects/oscar.webp",
      projectType: "Personal",
    },
    {
      title: "Rently",
      description:
        "Rently is a rental marketplace app that lets users list, search for, and rent items from other people. The app includes user authentication, item search, a dashboard for managing listings and rentals, and state management with Pinia.",
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
      projectType: "School",
    },
    {
      title: "Kanban Group Project",
      description:
        "A group project leveraging GIT collaboration while coding in React with Redux store to develop a highly functional Kanban board for effective planning. This project enables users to create and manage tasks with ease, including features for setting due dates, deadlines, and assigning team members.",
      tags: [
        "React",
        "Redux",
        "Store",
        "Google Analytics",
        "GIT",
        "Hooks",
        "Local Storage",
        "CSS Modules",
        "JavaScript",
      ],
      liveUrl: "https://kanban-kollab.netlify.app/",
      githubUrl: "https://github.com/jhn322/kanban-group-react",
      icon: "/other-projects/kanban.webp",
      projectType: "School",
    },
  ],
];
