"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Box,
  Globe,
  Plus,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Trash2,
  Square,
  XCircle,
} from "lucide-react";

interface Container {
  name: string;
  image: string;
  ports?: string;
  ip: string;
  status?: "running" | "stopped" | "healthy" | "unhealthy";
  createdStatus?: "created";
}

const containers: Container[] = [
  // Infrastructure
  {
    name: "portainer",
    image: "portainer/portainer-ce:latest",
    ports: "8000:8000/tcp, 9000:9000/tcp, 9443:9443/tcp",
    ip: "172.16.0.3",
    status: "healthy",
  },
  {
    name: "nginx-proxy-manager",
    image: "jc21/nginx-proxy-manager:latest",
    ports: "443:443, 80:80, 81:81",
    ip: "172.18.0.2",
    status: "healthy",
  },
  {
    name: "homarr",
    image: "ghcr.io/ajnart/homarr:latest",
    ports: "7575:7575/tcp",
    ip: "192.168.192.2",
    status: "running",
  },
  {
    name: "watchtower",
    image: "containrrr/watchtower",
    ports: "-",
    ip: "192.168.64.2",
    status: "healthy",
  },
  {
    name: "dozzle",
    image: "amir20/dozzle:latest",
    ports: "8888:8080/tcp",
    ip: "192.168.80.2",
    status: "running",
  },
  {
    name: "flaresolverr",
    image: "flaresolverr/flaresolverr:latest",
    ports: "8191:8191/tcp",
    ip: "172.10.10.137",
    status: "running",
  },

  // Media Streaming
  {
    name: "plex",
    image: "lscr.io/linuxserver/plex:latest",
    ports: "32400:32400/tcp",
    ip: "-",
    status: "running",
  },
  {
    name: "jellyfin",
    image: "lscr.io/linuxserver/jellyfin:latest",
    ports: "1900:1900/udp, 7359:7359/udp, 8096:8096/tcp, 8920:8920/tcp",
    ip: "172.31.0.2",
    status: "running",
  },
  {
    name: "ersatztv",
    image: "jasongdove/ersatztv:latest-nvidia",
    ports: "8409:8409/tcp",
    ip: "172.16.2.2",
    status: "running",
  },

  // Media Automation
  {
    name: "prowlarr",
    image: "lscr.io/linuxserver/prowlarr:latest",
    ports: "9696:9696/tcp",
    ip: "172.10.10.131",
    status: "running",
  },
  {
    name: "sonarr",
    image: "lscr.io/linuxserver/sonarr:latest",
    ports: "8989:8989/tcp",
    ip: "172.10.10.130",
    status: "running",
  },
  {
    name: "radarr",
    image: "lscr.io/linuxserver/radarr:latest",
    ports: "7878:7878/tcp",
    ip: "172.10.10.142",
    status: "running",
  },
  {
    name: "radarr-remux",
    image: "lscr.io/linuxserver/radarr:latest",
    ports: "7879:7878/tcp",
    ip: "172.10.10.140",
    status: "running",
  },
  {
    name: "lidarr",
    image: "lscr.io/linuxserver/lidarr:latest",
    ports: "8686:8686/tcp",
    ip: "172.10.10.128",
    status: "running",
  },
  {
    name: "readarr",
    image: "lscr.io/linuxserver/readarr:develop",
    ports: "8787:8787/tcp",
    ip: "172.10.10.138",
    status: "running",
  },
  {
    name: "cleanuparr",
    image: "ghcr.io/cleanuparr/cleanuparr:latest",
    ports: "11011:11011/tcp",
    ip: "172.10.10.141",
    status: "running",
  },

  // Requests & Discovery
  {
    name: "overseerr",
    image: "sct/overseerr:latest",
    ports: "5055:5055/tcp",
    ip: "172.10.10.136",
    status: "running",
  },
  {
    name: "jellyseerr",
    image: "fallenbagel/jellyseerr:latest",
    ports: "5065:5055/tcp",
    ip: "192.168.16.2",
    status: "running",
  },
  {
    name: "pulsarr",
    image: "pulsarr/pulsarr:latest",
    ports: "3003:3003/tcp",
    ip: "172.10.10.135",
    status: "healthy",
  },

  // Download Clients
  {
    name: "qbittorrent",
    image: "lscr.io/linuxserver/qbittorrent:latest",
    ports: "6881:6881/tcp, 8100:8100/tcp",
    ip: "172.10.10.133",
    status: "running",
  },
  {
    name: "metube",
    image: "alexta69/metube:latest",
    ports: "8081:8081/tcp",
    ip: "192.168.208.2",
    status: "running",
  },

  // Transcoding
  {
    name: "tdarr",
    image: "ghcr.io/haveagitgat/tdarr:latest",
    ports: "8265:8265/tcp",
    ip: "	172.16.0.2",
    status: "running",
  },
  {
    name: "tdarr-node",
    image: "ghcr.io/haveagitgat/tdarr_node:latest",
    ports: "-",
    ip: "-",
    status: "running",
  },
  {
    name: "whisper-asr",
    image: "onerahmet/openai-whisper-asr-webservice:latest-gpu",
    ports: "-",
    ip: "-",
    createdStatus: "created",
  },

  // Subtitles & Metadata
  {
    name: "bazarr",
    image: "lscr.io/linuxserver/bazarr:latest",
    ports: "6767:6767/tcp",
    ip: "172.10.10.129",
    status: "running",
  },
  {
    name: "bazarr-remux",
    image: "lscr.io/linuxserver/bazarr:latest",
    ports: "6768:6767/tcp",
    ip: "172.10.10.139",
    status: "running",
  },
  {
    name: "kometa-collections",
    image: "kometateam/kometa:latest",
    ports: "-",
    ip: "192.168.112.2",
    status: "running",
  },
  {
    name: "kometa-operations",
    image: "kometateam/kometa:latest",
    ports: "-",
    ip: "192.168.112.4",
    status: "running",
  },
  {
    name: "kometa-overlays",
    image: "kometateam/kometa:latest",
    ports: "-",
    ip: "192.168.112.3",
    status: "running",
  },
  {
    name: "plex-auto-languages",
    image: "journeyover/plex-auto-languages:latest",
    ports: "-",
    ip: "172.27.0.2",
    status: "healthy",
  },
  {
    name: "imagemaid",
    image: "kometateam/imagemaid:develop",
    ports: "-",
    ip: "192.168.128.2",
    status: "running",
  },

  // Analytics and Sync
  {
    name: "tautulli",
    image: "lscr.io/linuxserver/tautulli:latest",
    ports: "8181:8181/tcp",
    ip: "172.10.10.132",
    status: "running",
  },
  {
    name: "medialytics",
    image: "ghcr.io/drewpeifer/medialytics:latest",
    ports: "8088:80",
    ip: "172.10.10.134",
    status: "healthy",
  },
  {
    name: "plextraktsync",
    image: "ghcr.io/taxel/plextraktsync:latest",
    ports: "-",
    ip: "172.27.0.3",
    status: "running",
  },
  {
    name: "scheduler",
    image: "mcuadros/ofelia:latest",
    ports: "-",
    ip: "172.28.0.2",
    status: "running",
  },
  {
    name: "yaml-url-checker",
    image: "jhn322/yaml-url-checker:latest",
    ports: "-",
    ip: "172.16.11.2",
    status: "running",
  },
  {
    name: "calendarr",
    image: "ghcr.io/jordanlambrecht/calendarr:latest",
    ports: "",
    ip: "172.16.7.2",
    status: "healthy",
  },

  // Photos
  {
    name: "immich_machine_learning",
    image: "ghcr.io/immich-app/immich-machine-learning:release",
    ports: "-",
    ip: "172.16.4.2",
    status: "healthy",
  },
  {
    name: "immich_postgres",
    image: "postgres:15",
    ports: "-",
    ip: "172.16.4.4",
    status: "healthy",
  },
  {
    name: "immich_redis",
    image: "redis:6.2-alpine",
    ports: "-",
    ip: "172.16.4.5",
    status: "healthy",
  },
  {
    name: "immich_server",
    image: "ghcr.io/immich-app/immich-server:release",
    ports: "2283:2283/tcp",
    ip: "172.16.4.3",
    status: "healthy",
  },
];

export function ContainerDashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-purple-900/30 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-md shadow-2xl">
      {/* Window Header (Mac Lights) */}
      <div className="flex items-center gap-1.5 border-b border-purple-500/20 bg-purple-950/30 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-purple-500/20 bg-purple-950/20 p-4">
        <div className="flex items-center gap-2">
          <Box className="size-5 text-purple-300" />
          <h2 className="text-lg font-semibold text-purple-100">Containers</h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center rounded-[8px] border border-purple-500/20 bg-purple-900/10 overflow-hidden divide-x divide-purple-500/20">
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Start"
            >
              <Play className="size-3.5" />
              <span className="hidden sm:inline">Start</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Stop"
            >
              <Square className="size-3.5" />
              <span className="hidden sm:inline">Stop</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Kill"
            >
              <XCircle className="size-3.5" />
              <span className="hidden sm:inline">Kill</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Restart"
            >
              <RefreshCw className="size-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Pause"
            >
              <Pause className="size-3.5" />
              <span className="hidden sm:inline">Pause</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              title="Resume"
            >
              <Play className="size-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-100 bg-red-500/40 hover:bg-red-600/80 transition-colors"
              title="Remove"
            >
              <Trash2 className="size-3.5" />
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>

          <button className="flex items-center gap-1.5 rounded-[8px] bg-white px-3 py-1.5 text-xs font-bold text-black hover:bg-gray-200 transition-colors shadow-sm ml-0 sm:ml-2">
            <Plus className="size-3.5" />
            Add <span className="hidden sm:inline">container</span>
          </button>
        </div>
      </div>

      {/* Container Table */}
      <div className="max-h-[800px] overflow-auto">
        <Table>
          <TableHeader className="bg-purple-950/20 sticky top-0 z-10 transition-colors">
            <TableRow className="hover:bg-transparent border-purple-500/20">
              <TableHead className="w-[40px] pl-4">
                <div className="size-3.5 rounded border border-purple-500/30 bg-transparent" />
              </TableHead>
              <TableHead className="w-[100px] text-purple-300/70">
                Status
              </TableHead>
              <TableHead className="text-purple-300/70">Name</TableHead>
              <TableHead className="text-purple-300/70 hidden sm:table-cell">
                Image
              </TableHead>
              <TableHead className="text-purple-300/70 hidden md:table-cell">
                Ports
              </TableHead>
              <TableHead className="text-purple-300/70 hidden lg:table-cell">
                IP Address
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...containers]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((container) => (
                <TableRow
                  key={container.name}
                  className="border-purple-500/10 hover:bg-purple-500/10 data-[state=selected]:bg-purple-500/10 transition-colors"
                >
                  <TableCell className="pl-4">
                    <div className="size-3.5 rounded border border-purple-500/30 bg-transparent" />
                  </TableCell>
                  <TableCell>
                    {container.status && (
                      <Badge
                        variant="outline"
                        className="border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 gap-1.5"
                      >
                        <div className="size-1.5 rounded-full bg-green-500" />
                        {container.status}
                      </Badge>
                    )}
                    {container.createdStatus && (
                      <Badge
                        variant="outline"
                        className="border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 gap-1.5"
                      >
                        <div className="size-1.5 rounded-full bg-blue-500" />
                        {container.createdStatus}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-purple-100">
                        {container.name}
                      </span>
                      <span className="text-[10px] text-purple-400/60 hidden sm:hidden">
                        {container.image.split(":")[0]}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell font-mono text-xs text-purple-300/60">
                    <div className="flex items-center gap-1.5">
                      <Box className="size-3.5" />
                      {container.image}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-mono text-xs text-blue-300">
                    {container.ports !== "-" ? (
                      <a
                        href="#"
                        className="hover:underline hover:text-blue-200 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        {container.ports}
                      </a>
                    ) : (
                      <span className="text-purple-500/40">-</span>
                    )}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell font-mono text-xs text-purple-300/60">
                    <div className="flex items-center gap-1.5">
                      <Globe className="size-3.5" />
                      {container.ip}
                    </div>
                  </TableCell>
                  <TableCell>
                    <button className="text-purple-400/50 hover:text-purple-200 transition-colors">
                      <Settings className="size-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-purple-500/20 bg-purple-950/30 px-4 py-2">
        <div className="flex gap-4 text-xs text-purple-300/50">
          <span>{containers.length} items</span>
          <span>0 selected</span>
        </div>
        <div className="flex gap-2 text-xs text-purple-300/50">
          <span>Page 1 of 1</span>
        </div>
      </div>
    </div>
  );
}
