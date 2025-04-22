import React from "react";

interface ProjectTagProps {
  type: "Personal" | "Passion";
  className?: string;
}

const tagStyles = {
  Personal:
    "bg-primary-600/80 text-primary-100 border-primary-700/50 hover:bg-primary-600/90",
  Passion:
    "bg-primary-800/80 text-primary-200 border-primary-900/50 hover:bg-primary-800/90",
};

const tagText = {
  Personal: "Personal Project",
  Passion: "Passion Project",
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
