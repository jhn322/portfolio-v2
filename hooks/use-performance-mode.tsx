import { useIsMobile } from "./use-mobile";
import { useReducedMotion } from "./use-reduced-motion";

export function usePerformanceMode() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Return true if we should apply performance optimizations
  // This is true if the device is mobile OR the user prefers reduced motion
  const shouldOptimize = isMobile || prefersReducedMotion;

  return {
    isMobile,
    prefersReducedMotion,
    shouldOptimize,
  };
}
