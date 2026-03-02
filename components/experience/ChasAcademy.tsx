import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SchoolProject {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: string;
}

const schoolProjects: SchoolProject[] = [
  {
    title: "The Dashboard",
    description:
      "An aesthetically pleasing dashboard designed to be a go-to landing page for bookmarking and organizing links.",
    tags: ["JavaScript", "CSS", "Unsplash API", "Weather API", "Local Storage"],
    liveUrl: "https://jhn-dashboard.netlify.app/",
    githubUrl: "https://github.com/jhn322/dashboard-frontend",
    icon: "/chas/dashboard.png",
  },
  {
    title: "Kanban Group Project",
    description:
      "A highly functional Kanban board for effective planning and collaboration between team members.",
    tags: ["React", "Redux", "JavaScript", "Google Analytics", "Custom Hooks"],
    liveUrl: "https://kanban-kollab.netlify.app/",
    githubUrl: "https://github.com/jhn322/kanban-group-react",
    icon: "/chas/kanban.png",
  },
  {
    title: "Quire",
    description:
      "A digital assistant designed for creating, saving, and editing everyday notes with ease.",
    tags: ["JavaScript", "CSS", "HTML", "Google Analytics", "Textformatting"],
    liveUrl: "https://regni.github.io/quire/",
    githubUrl: "https://github.com/jhn322/quire",
    icon: "/chas/quire.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const SchoolProjectCard = ({
  project,
}: {
  project: SchoolProject;
  index: number;
}) => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLiveHovered, setIsLiveHovered] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-purple-700 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

      <div className="relative bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border border-purple-900/30 rounded-xl p-5 h-full flex flex-col hover:border-purple-700/50 transition-colors duration-300">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="p-2 rounded-xl bg-purple-700 shadow-lg">
            {project.icon ? (
              <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            ) : (
              <ExternalLink size={20} className="text-white" />
            )}
          </div>

          <div className="flex gap-1 ml-auto">
            {project.githubUrl && (
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
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:bg-purple-900/30 text-sm hover:text-white h-10 rounded-full overflow-hidden whitespace-nowrap w-full flex items-center gap-2 justify-end px-3  hover:border-purple-700/50 transition-all duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4 flex-shrink-0" />
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
                      opacity: {
                        duration: 0.2,
                        delay: isGithubHovered ? 0.1 : 0,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    Code
                  </motion.span>
                </Link>
              </motion.div>
            )}
            {project.liveUrl && (
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
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:bg-purple-900/30 text-sm hover:text-white h-10 rounded-full overflow-hidden whitespace-nowrap w-full flex items-center gap-2 justify-end px-3  hover:border-purple-700/50 transition-all duration-200"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink className="h-4 w-4 flex-shrink-0" />
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
                      opacity: {
                        duration: 0.2,
                        delay: isLiveHovered ? 0.1 : 0,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    Demo
                  </motion.span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h4>

        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CoursesDetails = ({
  isOpen,
  toggleAccordion,
}: {
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 text-sm pt-4 pb-2 pl-7 border-l border-purple-700 ml-2"
        >
          <ul className="space-y-6">
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                IT Tech & Operations
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  10 YHP
                </span>
              </div>
              <p className="mt-2">
                Learned the fundamentals of IT and system development, common
                technologies and professional roles within larger tech stacks,
                as well as their application and function within IT systems and
                development projects. The course also covered industry
                landscape, terminology, and work methodologies used in IT sector
                workplaces.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Webbutveckling och Webbteknik
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  55 YHP
                </span>
              </div>
              <p className="mt-2">
                Gained knowledge of web technology and web development
                fundamentals. Learned to code HTML, CSS, and basic JavaScript to
                build responsive and functional websites from scratch with
                proper structure and styling.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Avancerad frontendutveckling och Typescript
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  40 YHP
                </span>
              </div>
              <p className="mt-2">
                Deepened understanding of and ability to develop frontend
                interfaces for websites and applications with JavaScript without
                frameworks. The course also strengthened understanding of
                TypeScript as a language and ability to use TypeScript as a tool
                in the development of applications in JavaScript without
                frameworks.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Projektmetodik och agila metoder
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  15 YHP
                </span>
              </div>
              <p className="mt-2">
                Gained insights into project methodology with emphasis on agile
                methods and associated tools most commonly used in the IT
                industry. Practiced activities and responsibilities within an
                agile project environment and developed the ability to
                participate in projects driven by agile methods.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                UX, användbarhet och tillgänglighet
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  15 YHP
                </span>
              </div>
              <p className="mt-2">
                Received orientation and understanding of usability and
                accessibility as an important part of frontend development. The
                course provided insight into the knowledge primarily possessed
                by UX designers and others with more depth, which are
                professional roles that developers need to collaborate with.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                React
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  45 YHP
                </span>
              </div>
              <p className="mt-2">
                Developed understanding and skills in building applications with
                the JavaScript framework React. Learned component-based
                architecture, state management, hooks, and modern React
                development practices for creating interactive user interfaces.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Backendutveckling och API:er
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  60 YHP
                </span>
              </div>
              <p className="mt-2">
                Deepened understanding of and ability to develop backend systems
                for websites and applications. Strengthened knowledge of
                JavaScript in backend development, database implementation, and
                data exposure through APIs. Enhanced skills in using TypeScript
                for backend development.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                AI inom fullstackutveckling
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  15 YHP
                </span>
              </div>
              <p className="mt-2">
                Explored artificial intelligence (AI) from fundamental theory to
                practical application in programming and full stack development.
                Covered various AI dimensions including machine learning, neural
                networks, and AI models, gaining comprehensive understanding of
                integrating AI into technical solutions and implementation
                considerations for full stack developers.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Cloud, CI/CD och arbetsmetodik
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  20 YHP
                </span>
              </div>
              <p className="mt-2">
                Gained overview of common technologies used for implementation,
                deployment, and hosting. Developed ability to navigate
                documentation for tools and platforms to incorporate them into
                development project stacks. Learned cloud services, continuous
                integration/continuous deployment workflows, and DevOps
                practices.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Vue.js
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  25 YHP
                </span>
              </div>
              <p className="mt-2">
                Developed understanding and skills in building applications with
                the JavaScript framework Vue.js. Learned component structure,
                reactivity system, directives, and Vue ecosystem tools for
                creating dynamic user interfaces and single-page applications.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                LIA (lärande i arbete)
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  110 YHP
                </span>
              </div>
              <p className="mt-2">
                Gained practical workplace experience through internship at
                Semurai. Applied knowledge from education courses in industry
                projects, developing skills to function effectively as a
                JavaScript full stack developer. Worked with HTML, CSS,
                JavaScript (frontend/backend), frameworks (Next.js), APIs,
                databases, hosting, and CI/CD while practicing project
                methodology and version control in team settings.
              </p>
            </li>
            <li>
              <div className="font-bold text-white flex flex-wrap items-center gap-2">
                Examensarbete
                <span className="px-3 py-1 text-xs text-purple-300 rounded-full border border-purple-700/30 bg-purple-900/10">
                  20 YHP
                </span>
              </div>
              <p className="mt-2">
                Completed final thesis demonstrating ability to take
                responsibility for and deliver all aspects of a project
                assignment in JavaScript full stack development. Deepened
                knowledge through research and exploration of new technologies
                to achieve project goals. Executed thesis project as an
                assignment for an external company, applying comprehensive
                skills gained throughout the program.
              </p>
            </li>
          </ul>
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleAccordion}
              className="flex items-center gap-1 text-purple-300"
            >
              <span>Show less</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ChasAcademy = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col p-2 xs:p-4 w-full"
    >
      <motion.h3
        variants={item}
        initial="hidden"
        animate="show"
        className="flex flex-col xs:flex-row text-white gap-1 font-medium text-xl"
      >
        Full-stack JavaScript Developer
        <Link
          href="https://chasacademy.se/program/fullstackutvecklare-javascript"
          target="_blank"
          className="text-purple-300 tracking-wide group flex items-center gap-1"
        >
          @Chas Academy
          <ExternalLink size={12} />
        </Link>
      </motion.h3>
      <motion.p
        variants={item}
        initial="hidden"
        animate="show"
        className="text-sm mt-1 font-medium text-gray-400"
      >
        Sep 2023 - Jun 2025
      </motion.p>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 flex flex-col gap-4"
      >
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              Full-stack Development Program
            </span>
            <br />
            Completed a comprehensive two-year higher vocational education in
            full stack JavaScript development. The program focused on both
            front-end and back-end development, providing a solid foundation in
            modern web development practices through practical project-based
            learning.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Technical Skills</span>
            <br />
            Gained expertise in JavaScript, TypeScript, React, Vue.js, Node.js,
            Express, MongoDB, MySQL, Git, and various modern frameworks and
            libraries. Developed strong problem-solving abilities and
            collaboration skills through numerous team projects and real-world
            applications.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Project Highlights</span>
            <br />
            Created several full stack applications including e-commerce
            platforms, content management systems, and API integrations.
            Implemented responsive designs, authentication systems, and database
            solutions across various projects with focus on performance and user
            experience.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-300 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Agile Methodology</span>
            <br />
            Applied agile development methodologies throughout the program,
            working in Scrum teams with sprint planning, daily stand-ups, and
            retrospectives. Used project management tools like Jira and GitHub
            Projects to track tasks and deliverables, fostering a professional
            development environment.
          </div>
        </motion.li>
      </motion.ul>

      {!isAccordionOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-6"
        >
          <button
            onClick={toggleAccordion}
            className="flex items-center gap-1 text-purple-300 hover:text-purple-300 transition-colors duration-200"
          >
            <span>View courses</span>
            <ChevronDown size={16} />
          </button>
        </motion.div>
      )}

      <CoursesDetails
        isOpen={isAccordionOpen}
        toggleAccordion={toggleAccordion}
      />

      <div className="mt-12 pt-8 border-t border-purple-900/30">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-white mb-6"
        >
          School Projects
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schoolProjects.map((project, index) => (
            <SchoolProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ChasAcademy;
