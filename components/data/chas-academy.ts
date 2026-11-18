export interface SchoolProject {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: string;
}

export const schoolProjects: SchoolProject[] = [
  {
    title: "Rently",
    description:
      "A rental marketplace app that lets users list, search for, and rent items from other people.",
    tags: ["Vue.js", "Store", "Authentication", "Pinia", "JSONBin"],
    liveUrl: "https://rently-app.netlify.app/",
    githubUrl: "https://github.com/jhn322/rently",
    icon: "/chas/rently.webp",
  },
  {
    title: "Kanban Group Project",
    description:
      "A highly functional Kanban board for effective planning and collaboration between team members.",
    tags: ["React", "Redux", "JavaScript", "Google Analytics", "Custom Hooks"],
    liveUrl: "https://kanban-kollab.netlify.app/",
    githubUrl: "https://github.com/jhn322/kanban-group-react",
    icon: "/chas/kanban-group.webp",
  },
  {
    title: "Quire",
    description:
      "A digital assistant designed for creating, saving, and editing everyday notes with ease.",
    tags: ["JavaScript", "CSS", "HTML", "Google Analytics", "Textformatting"],
    liveUrl: "https://regni.github.io/quire/",
    githubUrl: "https://github.com/jhn322/quire",
    icon: "/chas/quire.webp",
  },
  {
    title: "The Dashboard",
    description:
      "An aesthetically pleasing dashboard designed to be a go-to landing page for bookmarking and organizing links.",
    tags: ["JavaScript", "CSS", "Unsplash API", "Weather API", "Local Storage"],
    liveUrl: "https://jhn-dashboard.netlify.app/",
    githubUrl: "https://github.com/jhn322/dashboard-frontend",
    icon: "/chas/dashboard.webp",
  },
  {
    title: "Kanban Board",
    description:
      "A digital assistant designed for creating, saving, and editing everyday notes with ease.",
    tags: ["React", "JavaScript", "CSS", "VITE", "Location API"],
    liveUrl: "https://jhn-kanban-react.netlify.app/",
    githubUrl: "https://github.com/jhn322/kanban-board-react",
    icon: "/chas/kanban.webp",
  },
  {
    title: "Tenzies Game",
    description: "A game of rolling dies until they all show the same number.",
    tags: ["React", "JavaScript", "VITE", "CSS", "useEffect"],
    liveUrl: "https://jhn-tenzies-game.netlify.app/",
    githubUrl: "https://github.com/jhn322/tenzies-game",
    icon: "/chas/tenzies.webp",
  },
];
