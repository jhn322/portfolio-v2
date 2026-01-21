"use client";

import { ArrowRight, Search, Download, FolderOpen, Tv } from "lucide-react";

const flowSteps = [
  {
    icon: Search,
    title: "Prowlarr",
    description: "Searches indexers",
    color: "bg-purple-500/20 text-purple-500 border border-purple-700/30",
  },
  {
    icon: Download,
    title: "qBittorrent",
    description: "Downloads media",
    color: "bg-green-500/20 text-green-500 border border-green-700/30",
  },
  {
    icon: FolderOpen,
    title: "*arr Apps",
    description: "Organizes files",
    color: "bg-blue-500/20 text-blue-500 border border-blue-700/30",
  },
  {
    icon: Tv,
    title: "Plex/Jellyfin",
    description: "Streams to devices",
    color: "bg-amber-500/20 text-amber-500 border border-amber-700/30",
  },
];

export function AutomationFlow() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      {flowSteps.map((step, index) => (
        <div key={step.title} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center size-14 rounded-xl ${step.color} mb-2`}
            >
              <step.icon className="size-6" />
            </div>
            <h4 className="text-sm font-medium">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </div>
          {index < flowSteps.length - 1 && (
            <ArrowRight className="hidden sm:block size-5 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}
