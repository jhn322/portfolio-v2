import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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

const Semurai = () => {
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
        Front-End Developer Intern
        <span className="text-purple-400 tracking-wide">@Semurai</span>
      </motion.h3>
      <motion.p
        variants={item}
        initial="hidden"
        animate="show"
        className="text-sm mt-1 font-medium text-gray-400"
      >
        Oct 2023 - Apr 2024
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
          <span className="text-purple-400 mt-1">
            <ChevronRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Development Projects</span>
            <br />
            As a front-end developer intern at Semurai, I worked on creating
            responsive and intuitive user interfaces using React and TypeScript.
            I implemented new features and optimized existing code, focusing on
            performance improvements and UI/UX enhancements.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-400 mt-1">
            <ChevronRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Collaboration & Growth</span>
            <br />
            Collaborated with senior developers and designers to translate
            design mockups into functional components. Participated in code
            reviews and agile development processes, gaining valuable real-world
            experience in a professional development environment.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-400 mt-1">
            <ChevronRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              Technical Contributions
            </span>
            <br />
            Implemented modern styling solutions using Tailwind CSS and
            component libraries. Wrote clean, maintainable code following best
            practices, and contributed to the development of reusable component
            libraries that improved development efficiency across projects.
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Semurai;
