import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const ChasAcademy = () => {
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
        Full-Stack JavaScript Development
        <span className="text-purple-400 tracking-wide">@Chas Academy</span>
      </motion.h3>
      <motion.p
        variants={item}
        initial="hidden"
        animate="show"
        className="text-sm mt-1 font-medium text-gray-400"
      >
        Aug 2022 - Jun 2024
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
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">
              Full-Stack Development Program
            </span>
            <br />
            Completed a comprehensive two-year higher vocational education in
            full-stack JavaScript development. The program focused on both
            front-end and back-end development, providing a solid foundation in
            modern web development practices.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-400 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Technical Skills</span>
            <br />
            Gained expertise in JavaScript, TypeScript, React, Node.js, Express,
            MongoDB, MySQL, Git, and various modern frameworks and libraries.
            Developed strong problem-solving abilities and collaboration skills
            through numerous team projects.
          </div>
        </motion.li>
        <motion.li
          variants={item}
          className="text-base flex gap-2 text-gray-300"
        >
          <span className="text-purple-400 mt-1">
            <ArrowRight size={16} />
          </span>
          <div>
            <span className="font-bold text-white">Project Highlights</span>
            <br />
            Created several full-stack applications including e-commerce
            platforms, content management systems, and API integrations.
            Implemented responsive designs, authentication systems, and database
            solutions across various projects.
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default ChasAcademy;
