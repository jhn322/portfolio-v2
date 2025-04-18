"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Kometa Config",
    description:
      "Kometa is a powerful tool designed to give you complete control over your media libraries. With Kometa, you have granular control over metadata, collections, overlays, and much more. This is my config with a large amount of self designed posters, icon overlays and custom made collection in every detail.",
    tags: ["React", "OpenWeather API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Kanban Board",
    description:
      "This Kanban board is a versatile app designed to streamline your task management. With a user-friendly interface, it allows you to effortlessly organize tasks into customizable columns. The app supports drag-and-drop functionality, enabling smooth task movement across different stages. Additionally, it features a dynamic theme switcher, task creation and editing options, and real-time updates saved locally.",
    tags: ["Vue.js", "Vuex", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Media Info",
    description:
      "This JavaScript application is a simple movie search tool that interacts with the OMDb API to fetch and display information about movies, TV shows, or anime based on user input. The application provides a user-friendly interface where users can enter the name of a movie and either click a search button to retrieve the relevant information.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mortage Calculator",
    description:
      "This TypeScript-based application is designed to help you calculate your monthly mortgage payments, total interest, and provide a detailed amortization schedule. The app takes user input for the mortgage amount, interest rate, and loan term, then performs precise calculations using a financial formula to determine your monthly payments.",
    tags: ["Next.js", "CoinGecko API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Tic Tac Toe",
    description:
      "This TypeScript-based application is designed to help you calculate your monthly mortgage payments, total interest, and provide a detailed amortization schedule. The app takes user input for the mortgage amount, interest rate, and loan term, then performs precise calculations using a financial formula to determine your monthly payments.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Memory",
    description:
      "This interactive app is built on vanilla JavaScript to challenge your memory skills with a fun and engaging twist—matching pairs of Pokémon images. The game is simple to play but hard to master. As you flip cards to reveal Pokémon, try to remember their positions and match them with as few turns as possible.",
    tags: ["React", "IndexedDB", "Marked.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function OtherProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="other-projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Other Noteworthy Projects
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of smaller projects that I&apos;ve worked on to explore
            different technologies and learn new things throughout my coding
            journey.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

              <div className="relative h-full bg-black/60 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-900">
                    <Folder className="h-6 w-6" />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-purple-300 hover:bg-purple-900/30 hover:text-white h-8 w-8"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-purple-300 hover:bg-purple-900/30 hover:text-white h-8 w-8"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm  text-purple-300 rounded-full border border-purple-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
