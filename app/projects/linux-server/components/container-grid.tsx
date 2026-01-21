"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerCategories = [
  {
    name: "Media Streaming",
    color: "bg-blue-500",
    containers: ["Plex", "Jellyfin", "ErsatzTV"],
    description: "Stream media to any device with GPU-accelerated transcoding",
  },
  {
    name: "Media Automation",
    color: "bg-purple-500",
    containers: ["Sonarr", "Radarr", "Lidarr", "Readarr", "Prowlarr"],
    description: "Automated media fetching, organizing, and quality upgrades",
  },
  {
    name: "Requests & Discovery",
    color: "bg-pink-500",
    containers: ["Pulsarr", "Overseerr", "Jellyseerr"],
    description: "User request interfaces for adding new content",
  },
  {
    name: "Download Clients",
    color: "bg-green-500",
    containers: ["qBittorrent", "MeTube"],
    description: "Torrent client and video downloader",
  },
  {
    name: "Transcoding & Processing",
    color: "bg-amber-500",
    containers: ["Tdarr", "Tdarr-Node", "Whisper-ASR"],
    description: "Automated video transcoding and speech-to-text",
  },
  {
    name: "Subtitles & Metadata",
    color: "bg-cyan-500",
    containers: ["Bazarr", "Bazarr-Remux", "Kometa", "Imagemaid"],
    description:
      "Subtitle management, collections, poster overlays, and cleanup",
  },
  {
    name: "Analytics & Sync",
    color: "bg-orange-500",
    containers: ["Tautulli", "Medialytics", "PlexTraktSync"],
    description: "Viewing stats, analytics, and external service sync",
  },
  {
    name: "Infrastructure",
    color: "bg-slate-500",
    containers: ["Portainer", "Watchtower", "Dozzle", "Homarr"],
    description: "Container management, auto-updates, logs, and dashboard",
  },
  {
    name: "Network & Security",
    color: "bg-red-500",
    containers: ["Nginx Proxy Manager", "FlareSolverr"],
    description: "Reverse proxy with SSL and CAPTCHA solving",
  },
  {
    name: "Photo Management",
    color: "bg-teal-500",
    containers: ["Immich", "Immich-ML", "Immich-Redis"],
    description: "Self-hosted photo and video backup with ML-powered features",
  },
];

export function ContainerGrid() {
  return (
    <Card className="h-full bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
      <CardHeader>
        <CardTitle className="text-lg text-white">
          Container Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {containerCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-purple-900/20 bg-purple-950/30 p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`size-2.5 rounded-full ${category.color}`} />
                <h4 className="text-sm font-medium text-white">
                  {category.name}
                </h4>
              </div>
              <p className="text-xs text-gray-300 mb-2">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {category.containers.map((container) => (
                  <Badge
                    key={container}
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0 bg-purple-900/40 text-purple-200 hover:bg-purple-900/60"
                  >
                    {container}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
