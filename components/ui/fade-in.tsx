"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "../../hooks/use-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

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
  translateY = 30,
}: FadeInProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        shouldAnimate ? "translate-y-0 opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shouldAnimate
          ? "translateY(0)"
          : `translateY(${translateY}px)`,
        opacity: shouldAnimate ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};
