"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "../../lib/useIntersectionObserver";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  translateY?: number;
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  threshold,
  rootMargin,
}: FadeInProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : `translate-y-10 opacity-0`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
