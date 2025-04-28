import { usePerformanceMode } from "./use-performance-mode";

interface LottieOptions {
  loop?: boolean;
  autoplay?: boolean;
  rendererSettings?: {
    preserveAspectRatio?: string;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
    className?: string;
    clearCanvas?: boolean;
  };
  style?: React.CSSProperties;
}

export function useLottieOptimization() {
  const { shouldOptimize } = usePerformanceMode();

  const getOptimizedLottieOptions = (
    options: LottieOptions = {}
  ): LottieOptions => {
    if (!shouldOptimize) {
      return options;
    }

    // For mobile devices, optimize the Lottie animation
    return {
      ...options,
      rendererSettings: {
        ...options.rendererSettings,
        // Reduce the quality of the animation
        progressiveLoad: true,
        // Only render when visible
        hideOnTransparent: true,
        // Clear canvas between frames to reduce memory usage
        clearCanvas: true,
      },
      // Reduce the frame rate
      style: {
        ...options.style,
        // Reduce the quality of the animation
        imageRendering: "auto",
      },
    };
  };

  return {
    getOptimizedLottieOptions,
  };
}
