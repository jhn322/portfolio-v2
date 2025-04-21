"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabItem {
  title: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}

export const ExperienceTabs = ({ tabs, defaultValue }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].value);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "relative px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300 focus:outline-none",
              activeTab === tab.value
                ? "text-white"
                : "text-gray-400 hover:text-white"
            )}
          >
            {activeTab === tab.value && (
              <motion.span
                layoutId="activeExperienceTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-600/50"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-8 w-full">
        <AnimatePresence initial={false} mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.value && (
                <motion.div
                  ref={contentRef}
                  key={tab.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="z-20 bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-md border border-purple-900/30 rounded-2xl p-6 shadow-lg w-full"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
