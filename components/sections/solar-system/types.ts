import React from "react";

// Types for the solar system skills section

export interface Skill {
  name: string;
  category: string;
  logo?: React.ReactNode;
}

export interface PlanetSkill extends Skill {
  orbitRadius: number;
  angle: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
