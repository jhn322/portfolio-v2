"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const isIntersecting = entries.some((entry) => entry.isIntersecting);

          if (isIntersecting) {
            setIsVisible(true);
            // Unobserve after becoming visible to improve performance
            if (elementRef.current) {
              observerRef.current?.unobserve(elementRef.current);
            }
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
    }

    const currentElement = elementRef.current;
    const currentObserver = observerRef.current;

    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};
