"use client";

import React from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/client-only";
import AnimatedBackground from "@/components/background";
import Navbar from "@/components/navbar"; // Keep static?
import { Skeleton } from "@/components/ui/skeleton";
import StickyIcons from "@/components/sticky-icons";

// Dynamic imports for sections
const DynamicHero = dynamic(() => import("@/components/sections/hero"), {
  loading: () => <Skeleton className="h-screen w-full" />,
  ssr: false,
});
const DynamicAbout = dynamic(() => import("@/components/sections/about"), {
  loading: () => <Skeleton className="h-[600px] w-full py-20 md:py-32" />,
});
const DynamicSkills = dynamic(() => import("@/components/sections/skills"), {
  loading: () => <Skeleton className="h-[800px] w-full py-20 md:py-32" />,
});
const DynamicFeaturedProjects = dynamic(
  () => import("@/components/sections/featured-projects"),
  {
    loading: () => <Skeleton className="h-[1000px] w-full py-20 md:py-32" />,
  }
);
const DynamicOtherProjects = dynamic(
  () => import("@/components/sections/other-projects"),
  {
    loading: () => <Skeleton className="h-[700px] w-full py-20 md:py-32" />,
  }
);
const DynamicExperience = dynamic(
  () =>
    import("@/components/sections/experience").then((mod) => mod.Experience),
  {
    loading: () => <Skeleton className="h-[500px] w-full py-20 md:py-32" />,
  }
);
const DynamicContactDrawer = dynamic(
  () => import("@/components/sections/contact-drawer"),
  { ssr: false }
);
const DynamicFooter = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <Skeleton className="h-[150px] w-full py-10" />,
});

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ClientOnly fallback={<div className="min-h-screen bg-black"></div>}>
        <AnimatedBackground />
      </ClientOnly>
      <Navbar />
      <DynamicHero />
      <DynamicAbout />
      <DynamicSkills />
      <DynamicFeaturedProjects />
      <DynamicOtherProjects />
      <DynamicExperience />
      <DynamicContactDrawer />
      <DynamicFooter />
      <ClientOnly>
        <StickyIcons />
      </ClientOnly>
    </main>
  );
}
