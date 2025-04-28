"use client";

import Lottie from "lottie-react";
import backgroundAnimation from "./lottie/background.json";
import { useLottieOptimization } from "@/hooks/use-lottie-optimization";

export default function AnimatedBackground() {
  const { getOptimizedLottieOptions } = useLottieOptimization();

  const lottieOptions = getOptimizedLottieOptions({
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: {
      width: "100%",
      height: "100%",
      opacity: 0.7,
    },
  });

  // Commenting out mobile fallback to test Lottie performance
  // if (shouldOptimize) {
  //   return (
  //     <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-purple-950 to-black pointer-events-none z-0" />
  //   );
  // }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Lottie animationData={backgroundAnimation} {...lottieOptions} />
    </div>
  );
}
