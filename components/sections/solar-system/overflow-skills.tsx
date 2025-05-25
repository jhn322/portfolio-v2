import React, { useState } from "react";
import { SkillCategory } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronDown } from "lucide-react";

// List of all skills
const allCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Shadcn/ui", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "Redux", category: "Frontend" },
      { name: "Three.js", category: "Frontend" },
      { name: "Chess.js", category: "Frontend" },
      { name: "HTML & CSS", category: "Frontend" },
      { name: "Wordpress", category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "MongoDB", category: "Backend" },
      { name: "PostgreSQL", category: "Backend" },
      { name: "Prisma", category: "Backend" },
      { name: "YAML", category: "Backend" },
      { name: "Sanity", category: "Backend" },
      { name: "GraphQL", category: "Backend" },
      { name: "APIs", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "WhisperAI", category: "Backend" },
      { name: "Stockfish.js", category: "Backend" },
    ],
  },
  {
    name: "Design",
    skills: [
      { name: "UI/UX", category: "Design" },
      { name: "Photoshop", category: "Design" },
      { name: "Sony Vegas", category: "Design" },
      { name: "Responsive", category: "Design" },
      { name: "Mobile First", category: "Design" },
      { name: "Canva", category: "Design" },
      { name: "Premiere", category: "Design" },
      { name: "After Effects", category: "Design" },
      { name: "Figma", category: "Design" },
    ],
  },
  {
    name: "DevOps & OS",
    skills: [
      { name: "CI/CD", category: "DevOps & OS" },
      { name: "Docker", category: "DevOps & OS" },
      { name: "Linux Distros", category: "DevOps & OS" },
      { name: "Vercel", category: "DevOps & OS" },
      { name: "GitHub Actions", category: "DevOps & OS" },
      { name: "Windows", category: "DevOps & OS" },
      { name: "macOS", category: "DevOps & OS" },
      { name: "Netlify", category: "DevOps & OS" },
      { name: "AWS", category: "DevOps & OS" },
      { name: "Nginx", category: "DevOps & OS" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "Portainer", category: "Tools" },
      { name: "Cursor", category: "Tools" },
      { name: "VS Code", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "Markdown", category: "Tools" },
      { name: "Postman", category: "Tools" },
      { name: "Jira", category: "Tools" },
      { name: "Obsidian", category: "Tools" },
    ],
  },
  {
    name: "Analytics",
    skills: [
      { name: "SEO", category: "Analytics" },
      { name: "Developer Tools", category: "Analytics" },
      { name: "Performance", category: "Analytics" },
      { name: "Google Analytics", category: "Analytics" },
      { name: "Lighthouse", category: "Analytics" },
      { name: "A/B Testing", category: "Analytics" },
    ],
  },
];

const SkillCategorySection = ({ category }: { category: SkillCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displaySkills = category.skills;
  const mobileDisplaySkills = isExpanded
    ? category.skills
    : category.skills.slice(0, 4);

  return (
    <FadeIn className="w-full lg:w-[calc(50%-1rem)]" delay={100}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center flex-1"
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 group mb-4"
        >
          <span className="uppercase text-sm font-semibold text-white tracking-wider text-center">
            {category.name}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="lg:hidden text-purple-300"
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        {/* Desktop View */}
        <div className="hidden lg:flex lg:flex-wrap gap-2 justify-center">
          <AnimatePresence>
            {displaySkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 flex items-center gap-2 min-w-[44px] min-h-[32px] select-none"
              >
                <span className="whitespace-nowrap">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile View */}
        <div className="flex flex-wrap gap-2 justify-center lg:hidden">
          <AnimatePresence>
            {mobileDisplaySkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 flex items-center gap-2 min-w-[44px] min-h-[32px] select-none"
              >
                <span className="whitespace-nowrap">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {category.skills.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs text-purple-300 transition-colors lg:hidden"
          >
            {isExpanded ? "Show less" : `+${category.skills.length - 4} more`}
          </button>
        )}
      </motion.div>
    </FadeIn>
  );
};

export const OverflowSkills = () => (
  <div className="w-full max-w-5xl mx-auto px-2 md:px-0">
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center items-stretch">
      {allCategories.map((category) => (
        <SkillCategorySection key={category.name} category={category} />
      ))}
    </div>
  </div>
);

export default OverflowSkills;
