"use client";

import { useState, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FadeIn } from "./ui/fade-in";

type IconData = {
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  subtext: string;
  onClick?: () => void;
};

const openMailClient = () => {
  window.location.href = "mailto:johan.soderlund96@gmail.com";
};

const Icon = ({
  href,
  ariaLabel,
  icon: IconComponent,
  label,
  subtext,
  onClick,
}: IconData) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      iconRef.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (iconRef.current) {
      iconRef.current.style.transform = "translate(0, 0)";
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 text-white",
        "cursor-pointer transition-colors duration-200 ease-in-out"
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      ref={iconRef}
      tabIndex={0}
    >
      <IconComponent className="h-5 w-5 text-white" />
      {isHovered && (
        <div className="absolute left-[calc(100%+10px)] top-1/2 z-40 -translate-y-1/2 animate-fadeIn rounded-2xl bg-purple-700 hover:bg-purple-600 p-3 text-white pointer-events-none min-w-max">
          <span className="mb-1 block font-bold">{label}</span>
          <span className="text-sm">{subtext}</span>
        </div>
      )}
    </Link>
  );
};

const StickyIcons = () => {
  const iconData: IconData[] = [
    {
      href: "https://github.com/jhn322",
      ariaLabel: "GitHub Profile",
      icon: Github,
      label: "GitHub",
      subtext: "Explore my code",
    },
    {
      href: "https://www.linkedin.com/in/johan-s%C3%B6derlund-31b9862b7/",
      ariaLabel: "LinkedIn Profile",
      icon: Linkedin,
      label: "LinkedIn",
      subtext: "Connect with me",
    },
    {
      href: "#",
      ariaLabel: "Send Email",
      icon: Mail,
      label: "Email",
      subtext: "Get in touch",
      onClick: openMailClient,
    },
  ];

  return (
    <div className="fixed bottom-0 left-14 z-40 hidden flex-col items-center 2xl:flex">
      <div className="flex flex-col items-center space-y-4">
        {iconData.map((icon, index) => (
          <FadeIn key={icon.href} threshold={0.1} delay={300 + index * 100}>
            <Icon {...icon} />
          </FadeIn>
        ))}
      </div>
      <FadeIn threshold={0.1} delay={300 + iconData.length * 100}>
        <div className="mt-4 h-32 w-px bg-purple-700" />
      </FadeIn>
    </div>
  );
};

export default StickyIcons;
