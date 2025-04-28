import React from "react";
import { PlanetSkill } from "./types";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const orbitRadiusPercentages = {
  xs: 18,
  sm: 23,
  md: 28,
  lg: 33,
  xl: 38,
  xxl: 43,
  max: 48,
};

const coreSkills: PlanetSkill[] = [
  {
    name: "HTML",
    logo: "/logos/html.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.xs,
    angle: -50,
  },
  {
    name: "CSS",
    logo: "/logos/css.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.xs,
    angle: 0,
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.sm,
    angle: 40,
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.md,
    angle: 80,
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.lg,
    angle: 120,
  },
  {
    name: "Vue.js",
    logo: "/logos/vue.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.xxl,
    angle: 150,
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.max,
    angle: 175,
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwind.svg",
    category: "Frontend",
    orbitRadius: orbitRadiusPercentages.max,
    angle: 200,
  },
  {
    name: "Docker",
    logo: "/logos/docker.svg",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xs,
    angle: 170,
  },
  {
    name: "Linux",
    logo: "/logos/linux.svg",
    category: "Tools",
    orbitRadius: orbitRadiusPercentages.md,
    angle: 200,
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
    category: "Tools",
    orbitRadius: orbitRadiusPercentages.lg,
    angle: 230,
  },
  {
    name: "Node.js",
    logo: "/logos/node.png",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xl,
    angle: 250,
  },
  {
    name: "PostgreSQL",
    logo: "/logos/postgresql.svg",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xxl,
    angle: 270,
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xxl,
    angle: 295,
  },
  {
    name: "Prisma",
    logo: "/logos/prisma.svg",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xxl,
    angle: 320,
  },
  {
    name: "GraphQL",
    logo: "/logos/graphql.svg",
    category: "Backend",
    orbitRadius: orbitRadiusPercentages.xxl,
    angle: 345,
  },
];

export const SolarSystem = () => {
  const containerSize = "min(95vw, 800px)";

  return (
    <FadeIn>
      <div
        className="relative mx-auto my-8 aspect-square p-4 sm:p-6 md:p-8"
        style={{
          width: containerSize,
          minHeight: "300px",
        }}
      >
        {/* Orbits + Sun SVG */}
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Sun */}
          <defs>
            <radialGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc" />
              <stop offset="55%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="7"
            fill="url(#sun-gradient)"
            stroke="#7c3aed"
            strokeWidth="1.5"
            opacity="0.95"
            filter="url(#sun-shadow)"
          />
          {/* Orbits */}
          {Object.values(orbitRadiusPercentages).map((radius, idx) => {
            const ringColors = [
              "#5b21b6",
              "#6d28d9",
              "#7c3aed",
              "#8b5cf6",
              "#a855f7",
              "#a78bfa",
            ];
            const strokeColor =
              ringColors[idx] || ringColors[ringColors.length - 1];
            return (
              <motion.circle
                key={radius}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                cx="50"
                cy="50"
                r={radius}
                stroke={strokeColor}
                strokeWidth="0.1"
                fill="none"
              />
            );
          })}
        </svg>
        {/* Sun glassmorphism overlay + label */}
        <div
          className="absolute left-1/2 top-1/2 z-10 flex items-center justify-center select-none"
          style={{
            width: "clamp(48px, 12%, 96px)",
            height: "clamp(48px, 12%, 96px)",
            transform: "translate(-50%, -50%)",
          }}
          aria-label="Stack (Core Skills)"
          tabIndex={0}
          role="img"
        >
          <div className="w-full h-full rounded-full bg-purple-400/10 backdrop-blur-md shadow-lg shadow-purple-500/20 flex items-center justify-center">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-violet-50 whitespace-nowrap text-center drop-shadow-md">
              Stack
            </span>
          </div>
        </div>

        {/* Planets */}
        {coreSkills.map((planet, idx) => {
          const rad = (planet.angle * Math.PI) / 180;
          const orbitRadiusPercent = planet.orbitRadius;

          const left = 50 + orbitRadiusPercent * Math.cos(rad);
          const top = 50 + orbitRadiusPercent * Math.sin(rad);

          const leftPosition = Math.round(left * 100) / 100;
          const topPosition = Math.round(top * 100) / 100;

          return (
            <Tooltip key={planet.name}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5 + idx * 0.1,
                  }}
                  className="absolute z-20 transition-transform duration-300 hover:scale-110 focus:scale-110 outline-none"
                  style={{
                    left: `${leftPosition}%`,
                    top: `${topPosition}%`,
                    width: "auto",
                    height: "auto",
                    transform: "translate(-50%, -50%)",
                  }}
                  tabIndex={0}
                  aria-label={planet.name}
                  role="img"
                >
                  <div className="bg-purple-900/30 rounded-full border border-purple-700/30 flex items-center justify-center w-8 h-8 md:w-14 md:h-14 sm:w-10 sm:h-10">
                    <Image
                      src={planet.logo as string}
                      alt={planet.name}
                      width={32}
                      height={32}
                      className="w-5 h-5 md:w-8 md:h-8 object-contain"
                      draggable={false}
                    />
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="rounded-full bg-purple-700 hover:bg-purple-600 border-none px-4 py-2 text-sm font-medium shadow-lg"
              >
                {planet.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </FadeIn>
  );
};

export default SolarSystem;
