import React from "react";
import SolarSystem from "./solar-system/solar-system";
import OverflowSkills from "./solar-system/overflow-skills";
import { TooltipProvider } from "@/components/ui/tooltip";

const SkillsSolarSystem = () => (
  <section id="skills" className="py-16 md:py-24 relative">
    <div className="container mx-auto px-4">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block relative">
          My Skills
          <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-purple-600 rounded"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          I offer a broad range of skills across{" "}
          <span className="font-semibold">Frontend</span>,{" "}
          <span className="font-semibold">Backend</span>,{" "}
          <span className="font-semibold">Design</span>,{" "}
          <span className="font-semibold">DevOps</span>,{" "}
          <span className="font-semibold">Analytics</span>, and{" "}
          <span className="font-semibold">Project Management</span>—enabling me
          to build complete applications from development to deployment. I
          thrive in <span className="font-semibold">Agile</span> and{" "}
          <span className="font-semibold">Kanban</span> workflows, for efficient
          project planning and delivery.
        </p>
      </header>
      <TooltipProvider>
        <div className="flex flex-col 2xl:flex-row gap-12 items-center 2xl:items-center justify-center h-full">
          <div className="w-full 2xl:w-1/2 flex justify-center h-full">
            <SolarSystem />
          </div>
          <div className="w-full xl:w-1/2 flex items-center h-full 2xl:pl-24">
            <OverflowSkills />
          </div>
        </div>
      </TooltipProvider>
    </div>
  </section>
);

export default SkillsSolarSystem;
