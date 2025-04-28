import { usePerformanceMode } from "./use-performance-mode";

interface MotionTransition {
  type?: string;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  times?: number[];
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
  repeatDelay?: number;
  yoyo?: boolean;
  bounce?: number;
  damping?: number;
  mass?: number;
  stiffness?: number;
  overshootClamping?: boolean;
  restSpeed?: number;
  restDistance?: number;
  from?: number;
  to?: number;
}

export function useMotionOptimization() {
  const { shouldOptimize } = usePerformanceMode();

  const getOptimizedTransition = (
    transition: MotionTransition = {}
  ): MotionTransition => {
    if (!shouldOptimize) {
      return transition;
    }

    // For mobile devices, optimize the motion animations
    return {
      ...transition,
      // Reduce the complexity of animations
      type: transition.type === "spring" ? "tween" : transition.type,
      // Reduce the duration of animations
      duration: transition.duration ? transition.duration * 0.8 : 0.3,
      // Reduce the damping and stiffness of spring animations
      damping: transition.damping ? transition.damping * 1.2 : 30,
      stiffness: transition.stiffness ? transition.stiffness * 0.8 : 300,
    };
  };

  return {
    getOptimizedTransition,
  };
}
