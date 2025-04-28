"use client";

import Semurai from "../experience/Semurai";
import ChasAcademy from "../experience/ChasAcademy";
import { ExperienceTabs } from "../ui/experience-tabs";
import { FadeIn } from "../ui/fade-in";

export function Experience() {
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
        <FadeIn delay={100} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            My Experience
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Places I&apos;ve worked and studied, highlighting my professional
            journey and educational background in web development.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={150}>
            <ExperienceTabs tabs={tabs} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
