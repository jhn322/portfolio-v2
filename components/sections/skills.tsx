"use client";

import { motion } from "framer-motion";
import { Code, Layers, Database, Palette, Cpu, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "../ui/fade-in";

const MAX_ITEMS_SINGLE_COLUMN = 5;

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: [
      "React",
      "Redux",
      "Shadcn",
      "Vue.js",
      "Next.js",
      "Three.js",
      "Chess.js",
      "Anime.js",
      "Wordpress",
      "HTML & CSS",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "from-purple-600 to-purple-900",
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    items: [
      "YAML",
      "Sanity",
      "Prisma",
      "Python",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "WhisperAI",
      "PostgreSQL",
      "Stockfish.js",
      "API Integration",
    ],
    color: "from-purple-700 to-purple-950",
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: [
      "Figma",
      "Canva",
      "UI/UX",
      "Premiere",
      "Photoshop",
      "Sony Vegas",
      "Prototyping",
      "After Effects",
      "Responsive Design",
      "Mobile First Design",
    ],
    color: "from-purple-800 to-purple-950",
  },
  {
    category: "DevOps & OS",
    icon: <Cpu className="h-6 w-6" />,
    items: [
      "AWS",
      "CI/CD",
      "Nginx",
      "macOS",
      "Docker",
      "Vercel",
      "Netlify",
      "Windows",
      "GitHub Actions",
      "Linux Distributions",
    ],
    color: "from-purple-600 to-purple-900",
  },
  {
    category: "Tools",
    icon: <Layers className="h-6 w-6" />,
    items: [
      "Git",
      "Jira",
      "Cursor",
      "GitHub",
      "VS Code",
      "Postman",
      "Obsidian",
      "Portainer",
      "Markdown",
      "Handbrake",
    ],
    color: "from-purple-700 to-purple-950",
  },
  {
    category: "Analytics",
    icon: <LineChart className="h-6 w-6" />,
    items: [
      "SEO",
      "A/B Testing",
      "Lighthouse",
      "Developer Tools",
      "Google Analytics",
      "Performance Optimization",
    ],
    color: "from-purple-800 to-purple-950",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <FadeIn threshold={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I offer a vast array of skills covering the entire development
            spectrum—from frontend and backend to visual design, Docker
            containerization, and wide OS familiarity—enabling me to build
            complete and sophisticated apps from development to deployment.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {skills.map((skill, index) => (
              <FadeIn
                key={skill.category}
                threshold={0.1}
                delay={index * 100}
                className="relative group h-full"
              >
                <motion.div whileHover={{ y: -10 }} className="h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                  <Card className="relative bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-md border-purple-900/30 h-full overflow-hidden group">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                      >
                        {skill.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-bold">
                        {skill.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pl-8 pr-6 pb-6">
                      {skill.items.length > MAX_ITEMS_SINGLE_COLUMN ? (
                        <div className="grid grid-cols-2 gap-x-6">
                          <ul className="space-y-1.5">
                            {skill.items
                              .slice(0, Math.ceil(skill.items.length / 2))
                              .map((item, itemIndex) => (
                                <SkillListItem
                                  key={item}
                                  item={item}
                                  baseDelay={index * 100}
                                  itemIndex={itemIndex}
                                />
                              ))}
                          </ul>
                          <ul className="space-y-1.5">
                            {skill.items
                              .slice(Math.ceil(skill.items.length / 2))
                              .map((item, itemIndex) => (
                                <SkillListItem
                                  key={item}
                                  item={item}
                                  baseDelay={index * 100}
                                  itemIndex={
                                    itemIndex +
                                    Math.ceil(skill.items.length / 2)
                                  }
                                />
                              ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {skill.items.map((item, itemIndex) => (
                            <SkillListItem
                              key={item}
                              item={item}
                              baseDelay={index * 100}
                              itemIndex={itemIndex}
                            />
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for list items to avoid repetition
interface SkillListItemProps {
  item: string;
  baseDelay: number;
  itemIndex: number;
}

const SkillListItem = ({ item, baseDelay, itemIndex }: SkillListItemProps) => (
  <li className="group/item transition-transform duration-200 ease-out hover:translate-x-1.5">
    <FadeIn
      threshold={0.1}
      delay={baseDelay + 50 + itemIndex * 50}
      className="flex items-center"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 flex-shrink-0" />
      <span className="text-gray-300 group-hover/item:text-purple-300 transition-colors duration-200">
        {item}
      </span>
    </FadeIn>
  </li>
);
