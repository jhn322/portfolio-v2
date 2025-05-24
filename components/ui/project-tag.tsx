import React from "react";

interface ProjectTagProps {
  type: "Personal" | "Passion" | "Internship";
  className?: string;
}

const tagStyles = {
  Personal: "bg-primary-600 text-white border-primary-600",
  Passion: "bg-primary-900 text-white border-primary-900",
  Internship: "bg-white text-primary-700 border-white",
};

const tagText = {
  Personal: "Personal Project",
  Passion: "Passion Project",
  Internship: "Internship Project",
};

export const ProjectTag: React.FC<ProjectTagProps> = ({ type, className }) => {
  const baseClasses =
    "inline-block ml-2 px-2 py-0.5 text-xs font-semibold rounded-full border align-middle backdrop-blur-sm transition-colors duration-200";

  return (
    <span className={`${baseClasses} ${tagStyles[type]} ${className || ""}`}>
      {tagText[type]}
    </span>
  );
};
