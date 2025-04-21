"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Semurai from "../experience/Semurai"; // Updated path
import ChasAcademy from "../experience/ChasAcademy"; // Updated path
import { ExperienceTabs } from "../ui/experience-tabs"; // Updated path

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const tabs = [
    {
      title: "Semurai",
      value: "semurai",
      content: <Semurai />,
    },
    {
      title: "Chas Academy",
      value: "chasAcademy",
      content: <ChasAcademy />,
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            My Experience
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Places I&apos;ve worked and studied, highlighting my professional
            journey and educational background in web development.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <ExperienceTabs tabs={tabs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
