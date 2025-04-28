import * as React from "react";

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    // Check if the browser supports the prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set the initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Add event listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Clean up
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
