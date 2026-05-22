import React, { useEffect, useRef, useState } from "react";
import { SkillCategory } from "./types";
import { FadeIn } from "@/components/ui/fade-in";

const fadeStyle = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes marquee-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .marquee-container {
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }

  .marquee-container {
    --marquee-speed: 3;
  }

  .marquee-animate {
    animation: marquee linear infinite;
    animation-duration: calc(var(--marquee-duration) * var(--marquee-speed));
  }

  .marquee-animate-reverse {
    animation: marquee-reverse linear infinite;
    animation-duration: calc(var(--marquee-duration) * var(--marquee-speed));
  }

  .marquee-container:hover .marquee-animate,
  .marquee-container:hover .marquee-animate-reverse {
    animation-play-state: paused;
  }
`;

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
      { name: "HTML & CSS", category: "Frontend" },
      { name: "Wordpress", category: "Frontend" },
    ],
  },
  {
    name: "Design",
    skills: [
      { name: "UI/UX", category: "Design" },
      { name: "Photoshop", category: "Design" },
      { name: "Sony Vegas", category: "Design" },
      { name: "Responsive Design", category: "Design" },
      { name: "Mobile First", category: "Design" },
      { name: "Canva", category: "Design" },
      { name: "Premiere", category: "Design" },
      { name: "After Effects", category: "Design" },
      { name: "Figma", category: "Design" },
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
    name: "Sysadmin",
    skills: [
      { name: "CI/CD", category: "Sysadmin" },
      { name: "Docker", category: "Sysadmin" },
      { name: "Linux", category: "Sysadmin" },
      { name: "GitHub Actions", category: "Sysadmin" },
      { name: "Windows", category: "Sysadmin" },
      { name: "macOS", category: "Sysadmin" },
      { name: "Vercel", category: "Sysadmin" },
      { name: "Netlify", category: "Sysadmin" },
      { name: "AWS", category: "Sysadmin" },
      { name: "Nginx", category: "Sysadmin" },
      { name: "MergerFS", category: "Sysadmin" },
      { name: "SnapRAID", category: "Sysadmin" },
      { name: "Bash", category: "Sysadmin" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "Claude Code", category: "Tools" },
      { name: "Codex", category: "Tools" },
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
    name: "Performance",
    skills: [
      { name: "Technical SEO", category: "Performance" },
      { name: "Browser DevTools", category: "Performance" },
      { name: "Web Performance", category: "Performance" },
      { name: "Google Analytics", category: "Performance" },
      { name: "Lighthouse", category: "Performance" },
      { name: "Core Web Vitals", category: "Performance" },
      { name: "Browser Profiling", category: "Performance" },
      { name: "Accessibility", category: "Performance" },
      { name: "Conversion Optimization", category: "Performance" },
      { name: "Debugging", category: "Performance" },
      { name: "A/B Testing", category: "Performance" },
    ],
  },
];

const marqueeRows = [
  {
    label: "Frontend & Design",
    categoryNames: ["Frontend", "Design"],
    duration: 32,
    direction: "left" as const,
  },
  {
    label: "Backend & Sysadmin",
    categoryNames: ["Backend", "Sysadmin"],
    duration: 32,
    direction: "right" as const,
  },
  {
    label: "Tools & Performance",
    categoryNames: ["Tools", "Performance"],
    duration: 32,
    direction: "left" as const,
  },
];

const getSkillsForCategories = (categoryNames: string[]) =>
  allCategories
    .filter((category) => categoryNames.includes(category.name))
    .flatMap((category) => category.skills.map((skill) => skill.name));

const MarqueeRow = ({
  label,
  skills,
  duration,
  direction = "left",
}: {
  label: string;
  skills: string[];
  duration: number;
  direction?: "left" | "right";
}) => {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [computedDuration, setComputedDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!blockRef.current) return;

    // Desired visual speed in pixels per second. Tweak as needed.
    const DESIRED_PX_PER_SEC = 220;

    const compute = () => {
      const width = blockRef.current?.getBoundingClientRect().width || 0;
      // duration should cover the full width (one block), ensure a minimum duration
      const durationSec = Math.max(6, width / DESIRED_PX_PER_SEC);
      setComputedDuration(durationSec);
    };

    compute();

    // Recompute on resize for responsiveness
    const ro = new ResizeObserver(() => compute());
    ro.observe(blockRef.current);
    window.addEventListener("orientationchange", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", compute);
    };
  }, [skills]);

  return (
    <FadeIn delay={100}>
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative px-4 py-4">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-[0.32em] text-purple-200/70">
              {label}
            </span>
          </div>
          <div className="overflow-hidden marquee-container">
            <div
              className={`flex w-max gap-3 ${
                direction === "left"
                  ? "marquee-animate"
                  : "marquee-animate-reverse"
              }`}
              style={
                {
                  "--marquee-duration": `${(
                    computedDuration ?? duration
                  ).toFixed(2)}s`,
                } as unknown as React.CSSProperties
              }
              aria-label={`${label} skills marquee`}
            >
              <div
                ref={blockRef}
                className="flex gap-3 whitespace-nowrap flex-none min-w-max"
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 whitespace-nowrap flex-none min-w-max">
                {skills.map((skill) => (
                  <span
                    key={`${skill}-repeat`}
                    className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export const OverflowSkills = () => {
  const rows = marqueeRows.map((row) => ({
    ...row,
    skills: getSkillsForCategories(row.categoryNames),
  }));

  return (
    <>
      <style>{fadeStyle}</style>
      <div className="w-full max-w-6xl mx-auto px-2 md:px-0">
        <div className="space-y-6">
          {rows.map((row) => (
            <MarqueeRow
              key={row.label}
              label={row.label}
              skills={row.skills}
              duration={row.duration}
              direction={row.direction}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OverflowSkills;
