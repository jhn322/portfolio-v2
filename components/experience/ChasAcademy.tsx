import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
        Fullstack JavaScript Developer
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
              Fullstack Development Program
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
    </motion.div>
  );
};

export default ChasAcademy;
