"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { Code, Layers, Database, Palette, Cpu, LineChart } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-600 to-purple-900",
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "from-purple-700 to-purple-950",
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Prototyping"],
    color: "from-purple-800 to-purple-950",
  },
  {
    category: "DevOps",
    icon: <Cpu className="h-6 w-6" />,
    items: ["Docker", "AWS", "CI/CD", "Vercel", "Netlify"],
    color: "from-purple-600 to-purple-900",
  },
  {
    category: "Tools",
    icon: <Layers className="h-6 w-6" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Jira"],
    color: "from-purple-700 to-purple-950",
  },
  {
    category: "Analytics",
    icon: <LineChart className="h-6 w-6" />,
    items: [
      "Google Analytics",
      "Hotjar",
      "SEO",
      "Performance Optimization",
      "A/B Testing",
    ],
    color: "from-purple-800 to-purple-950",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I&apos;ve cultivated a diverse skill set that allows me to build
            complete, polished products from concept to deployment.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated background element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-96">
            <Player
              autoplay
              loop
              src="https://lottie.host/embed/e0bfb0f7-c7c5-4dc7-a9c9-a983a9f1d86b/WKBlkIJEAa.json"
              style={{ width: "100%", height: "100%", opacity: 0.1 }}
            />
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                <div className="relative bg-black/60 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl h-full">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} mr-3`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold">{skill.category}</h3>
                  </div>

                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + itemIndex * 0.05,
                        }}
                        className="flex items-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
