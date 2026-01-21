"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Server,
  HardDrive,
  Cpu,
  Shield,
  RefreshCw,
  Play,
  Database,
  MonitorPlay,
  Clock,
  Layers,
  Film,
  Tv,
  Music,
  Headphones,
  Disc,
  BookOpen,
  Users,
  Wifi,
  Camera,
  X,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContainerGrid } from "./components/container-grid";
import { CodeWindow } from "./components/code-window";
import { ContainerDashboard } from "./components/container-dashboard";
import { AutomationFlow } from "./components/automation-flow";
import { ImmichGallery } from "./components/immich-gallery";
import dynamic from "next/dynamic";
import { useLottieOptimization } from "@/hooks/use-lottie-optimization";
import type { LottieComponentProps } from "lottie-react";
import backgroundAnimation from "@/components/lottie/background.json";
import StickyIcons from "@/components/sticky-icons";
import Footer from "../../../components/sections/footer";
import { FadeIn } from "@/components/ui/fade-in";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
  ),
});

export default function HomeServerPage() {
  const { getOptimizedLottieOptions } = useLottieOptimization();

  const lottieOptions: LottieComponentProps = {
    animationData: backgroundAnimation,
    ...getOptimizedLottieOptions({
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        progressiveLoad: true,
      },
      style: {
        width: "100%",
        height: "100%",
        opacity: 0.6,
      },
    }),
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Lottie Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <Lottie {...lottieOptions} />
      </div>

      <StickyIcons />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Back Button */}
        <div className="fixed top-6 left-6 z-50">
          <Button
            className="bg-purple-700 hover:bg-purple-600 text-white rounded-full"
            size="sm"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn
              delay={100}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center justify-center size-16 rounded-2xl bg-purple-900/30 text-purple-300 border border-purple-700/30 pointer-events-none">
                  <UbuntuIcon className="size-9 text-white" />
                </div>
                <X className="size-6 text-purple-500/50" />
                <div className="flex items-center justify-center size-16 rounded-2xl bg-purple-900/30 text-purple-300 border border-purple-700/30 pointer-events-none">
                  <DockerIcon className="size-9 text-white" />
                </div>
              </div>
              <Badge className="px-3 py-1 mb-4 bg-primary-900 text-white border-primary-900 pointer-events-none">
                Passion Project
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
                Linux Media Server
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-300 text-pretty">
                A fully automated, self-hosted media server built with Docker on
                Ubuntu LTS. Featuring 180TB+ of storage, GPU-accelerated
                transcoding, and 24/7 uptime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Badge className="gap-1.5 py-1.5 px-3 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 pointer-events-none">
                  <Server className="size-3.5" />
                  40+ Containers
                </Badge>
                <Badge className="gap-1.5 py-1.5 px-3 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 pointer-events-none">
                  <HardDrive className="size-3.5" />
                  180TB+ Storage
                </Badge>
                <Badge className="gap-1.5 py-1.5 px-3 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 pointer-events-none">
                  <Clock className="size-3.5" />
                  24/7 Uptime
                </Badge>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* OS & Infrastructure */}
        <section className="py-4 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={200}>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <UbuntuIcon className="size-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">
                          Operating System
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Ubuntu LTS - Server Optimized
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">
                      Started my server journey on{" "}
                      <span className="text-white font-medium">
                        Linux Mint (2020–2022)
                      </span>
                      , briefly evaluated{" "}
                      <span className="text-white font-medium">Windows 11</span>
                      , and ultimately transitioned to{" "}
                      <span className="text-white font-medium">
                        Ubuntu LTS in 2023
                      </span>{" "}
                      for its long-term stability and server-oriented ecosystem.
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm text-white font-medium">
                        System Optimizations
                      </h4>
                      <ul className="grid gap-1.5 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-purple-400" />
                          Intentionally minimal, optimized for lightweight
                          headless operation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-purple-400" />
                          32 GB SSD swap configured for improved memory handling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-purple-400" />
                          Biweekly system snapshots for contingency recovery
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <HardDrive className="size-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">
                          Storage Architecture
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          180TB+ with redundancy
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl p-4 text-center bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-2xl font-bold text-purple-300">
                          180TB+
                        </p>
                        <p className="text-xs text-gray-300">HDD Storage</p>
                      </div>
                      <div className="rounded-2xl p-4 text-center bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-2xl font-bold text-purple-300">
                          2TB
                        </p>
                        <p className="text-xs text-gray-300">NVMe SSD</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">
                      All Docker containers run from the NVMe SSD for fast I/O
                      and responsive application performance, while the HDD
                      array handles the large media library.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MergerFS + SnapRAID & Hardware */}
        <section className="py-4 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={300}>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Shield className="size-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">
                          MergerFS + SnapRAID
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Unified storage with parity protection
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">
                      <span className="text-white font-medium">MergerFS</span>{" "}
                      is A union filesystem that merges 9 data HDDs into a
                      single 150 TB+ mount point, while two dedicated parity
                      drives provide redundancy. The data array appears as one
                      unified volume, with seamless expansion by simply adding
                      drives.
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="text-white font-medium">SnapRAID</span>{" "}
                      provides snapshot-based parity protection. With 2
                      dedicated parity drives, up to 2 drives can fail
                      simultaneously without data loss. Weekly automated syncs
                      via SnapRAID Runner calculate parity and scrub for bit
                      rot. This is gives a peace of mind over the entire data
                      collection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Cpu className="size-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">Hardware</CardTitle>
                        <CardDescription className="text-gray-300">
                          Built for storage & transcoding
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">Case</p>
                        <p className="font-medium">Fractal Define 7</p>
                      </div>
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">CPU</p>
                        <p className="font-medium">Ryzen 7 2700X</p>
                      </div>
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">
                          Motherboard
                        </p>
                        <p className="font-medium">ASUS X570 Gaming F</p>
                      </div>
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">GPU</p>
                        <p className="font-medium">GTX 980 Ti</p>
                      </div>
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">Storage</p>
                        <p className="font-medium">11 HDDs + 1 SSD</p>
                      </div>
                      <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        <p className="text-xs text-gray-300 mb-0.5">HBA Card</p>
                        <p className="font-medium">LSI SAS 9210-8i</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Plex */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={400}>
              <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-14 rounded-2xl bg-purple-900/30 border border-purple-700/30">
                      <Film className="size-8" />
                    </div>
                    <Badge className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 pointer-events-none">
                      Heart of the Server
                    </Badge>
                  </div>
                  <h2 className="text-3xl text-white font-bold tracking-tight mb-4">
                    Plex Media Server
                  </h2>
                  <p className="text-gray-300 mb-6">
                    All the automation, storage, and infrastructure exists to
                    serve one main purpose: delivering a premium streaming
                    experience that rivals and surpasses mainstream streaming
                    services. Plex is the reason this server exists.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-purple-900/30 shrink-0 mt-0.5">
                        <MonitorPlay className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Superior Streaming Experience
                        </h4>
                        <p className="text-sm text-gray-300">
                          4K HDR and Dolby Vision playback with Dolby Atmos
                          audio. High bitrate, no buffering, no waiting for
                          content to be available.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-purple-900/30 shrink-0 mt-0.5">
                        <Users className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Shared with Family & Friends
                        </h4>
                        <p className="text-sm text-gray-300">
                          Multiple users across different locations can stream
                          simultaneously. Each user gets personalized
                          recommendations and watch tracking & history.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-purple-900/30 shrink-0 mt-0.5">
                        <Wifi className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Anywhere Access
                        </h4>
                        <p className="text-sm text-gray-300">
                          Stream from home or remotely. Sync content for offline
                          viewing on mobile devices when traveling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-300">
                    <span className="text-white font-medium">Jellyfin</span>{" "}
                    serves as a backup media server in case Plex ever becomes
                    unavailable or obsolete, ensuring continuity of service.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <Card className="h-full bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">
                        Media Library
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Content available for streaming
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <Film className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">Movies</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <Tv className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">TV Shows</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <Music className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">Music</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <Headphones className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">Audiobooks</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <Disc className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">Soundtracks</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-purple-900/30 text-purple-300 border border-purple-700/30 text-center">
                          <BookOpen className="size-5 mx-auto mb-1 text-gray-300" />
                          <p className="text-sm font-medium">Books</p>
                        </div>
                      </div>
                      <div className="pt-2 border-t text-purple-300">
                        <p className="text-xs text-gray-300">
                          Also includes Intros, concert recordings, and
                          documentary collections. All organized with rich
                          metadata, artwork, and subtitles.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Immich */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={500}>
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-12 rounded-xl bg-purple-900/30 border border-purple-700/30">
                      <Camera className="size-6" />
                    </div>
                    <Badge className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/30 pointer-events-none">
                      Self-Hosted
                    </Badge>
                  </div>
                  <h2 className="text-3xl text-white font-bold tracking-tight text-left mb-4">
                    Immich Photo Backup
                  </h2>
                  <p className="text-gray-300 mb-4 text-left">
                    Immich is a self-hosted alternative to Google Photos and
                    iCloud. Every photo and video taken on your phone, tablet or
                    PC is automatically backed up locally to the server, no
                    monthly fees, no storage limits, full privacy.
                  </p>
                  <ul className="grid gap-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-purple-300" />
                      Automatic background sync from mobile devices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-purple-300" />
                      Optional AI-powered facial recognition and object search
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-purple-300" />
                      Timeline view, albums, and sharing capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-purple-300" />
                      No cloud dependency, all data stays on the server
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ImmichGallery />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Docker & Container Management */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={600}>
              <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center rounded-2xl mb-4 size-14  bg-purple-900/30 border border-purple-700/30">
                  <DockerIcon className="size-6" />
                </div>
                <h2 className="text-3xl text-white font-bold tracking-tight">
                  Docker Compose Stack
                </h2>
                <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                  All services are containerized and managed through Docker
                  Compose, with Portainer providing a web-based UI for
                  monitoring and management.
                </p>
              </div>

              <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-5 w-full max-w-full overflow-hidden">
                <div className="lg:col-span-3 min-w-0">
                  <ContainerGrid />
                </div>
                <div className="lg:col-span-2 min-w-0">
                  <CodeWindow />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Automation Flow */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={650}>
              <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center rounded-2xl mb-4 size-14  bg-purple-900/30 border border-purple-700/30">
                  <RefreshCw className="size-6" />
                </div>
                <h2 className="text-3xl text-white font-bold tracking-tight">
                  Media Automation
                </h2>
                <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                  The *arr stack automates the entire media acquisition and
                  organization process. From search to organized library,
                  everything happens automatically.
                </p>
              </div>

              <AutomationFlow />

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-blue-500" />
                      Sonarr
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Monitors and fetches TV shows. Automatically grabs new
                      episodes and organizes them into season folders.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-amber-500" />
                      Radarr
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Handles movie collection. Searches for releases, monitors
                      quality upgrades, and maintains proper naming.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-green-500" />
                      Lidarr
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Music library automation. Tracks artist releases, fetches
                      albums, and maintains metadata integrity.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-purple-500 " />
                      Prowlarr
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Centralized indexer manager. Syncs search sources across
                      all *arr apps for unified configuration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={700}>
              <div className="mb-10 text-center">
                <h2 className="text-3xl text-white font-bold tracking-tight">
                  Key Features
                </h2>
                <p className="mt-2 text-gray-300">
                  Built for reliability, security, and performance
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Cpu className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        GPU Passthrough
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Nvidia GPU passthrough configured via Nvidia Container
                      Toolkit for hardware-accelerated transcoding in Plex and
                      Jellyfin, enabling smooth playback on all devices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Shield className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        Secure Remote Access
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      RustDesk for secure remote desktop access. Nginx Proxy
                      Manager handles reverse proxy for select containers with
                      SSL encryption.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Database className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        Automated Backups
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Daily backups of Plex, Sonarr, Radarr, Lidarr, Prowlarr
                      configs. Biweekly Ubuntu system snapshots. Watchtower
                      handles container updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <MonitorPlay className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        Multi-Platform Streaming
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Plex and Jellyfin for media streaming to any device.
                      Pulsarr and Overseerr provide request interfaces for users
                      to add content.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Layers className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        Media Processing
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Tdarr for automated transcoding and codec optimization.
                      Kometa for creating smart collections and poster overlays.
                      Bazarr for subtitle management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md border-purple-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-2xl bg-purple-900/30">
                        <Play className="size-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        24/7 Uptime
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Always-on availability with automatic container recovery.
                      Homarr dashboard for at-a-glance monitoring. Dozzle for
                      real-time log viewing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={800}>
              <div className="mb-10 text-center">
                <h2 className="text-3xl text-white font-bold tracking-tight">
                  Container Dashboard
                </h2>
                <p className="mt-2 text-gray-300">
                  Portainer view of the running container stack
                </p>
              </div>
              <ContainerDashboard />
            </FadeIn>
          </div>
        </section>
        <FadeIn>
          <div className="py-16 flex justify-center">
            <Button
              asChild
              variant="outline"
              aria-label="View more projects on GitHub"
              className="border-purple-300 text-purple-300 hover:bg-purple-900/30 hover:text-white rounded-full"
            >
              <Link
                href="https://github.com/jhn322/docker-compose-configs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>Docker compose configs on my GitHub</span>
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}

function UbuntuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm0 231.675c-57.308 0-103.675-46.367-103.675-103.675S70.692 24.325 128 24.325 231.675 70.692 231.675 128 185.308 231.675 128 231.675z" />
      <circle cx="128" cy="44.9" r="22.9" />
      <circle cx="55.9" cy="172.1" r="22.9" />
      <circle cx="200.1" cy="172.1" r="22.9" />
      <path d="M97.8 65.5c-5.5 3.2-10.5 7.1-14.9 11.5-4.5 4.5-8.3 9.5-11.5 14.9l19.8 11.5c2.1-3.5 4.6-6.8 7.5-9.7 2.9-2.9 6.2-5.4 9.7-7.5L97.8 65.5zm60.4 0l-10.6 20.7c3.5 2.1 6.8 4.6 9.7 7.5 2.9 2.9 5.4 6.2 7.5 9.7l19.8-11.5c-3.2-5.5-7.1-10.5-11.5-14.9-4.4-4.4-9.4-8.3-14.9-11.5zm-90.8 62.5c0-3.5.3-6.9.9-10.3L44.5 114c-1.1 4.5-1.7 9.2-1.7 14s.6 9.5 1.7 14l23.8-3.7c-.6-3.4-.9-6.8-.9-10.3zm144.4-14l-23.8 3.7c.6 3.4.9 6.8.9 10.3s-.3 6.9-.9 10.3l23.8 3.7c1.1-4.5 1.7-9.2 1.7-14s-.6-9.5-1.7-14zM97.8 190.5l10.6-20.7c-3.5-2.1-6.8-4.6-9.7-7.5-2.9-2.9-5.4-6.2-7.5-9.7l-19.8 11.5c3.2 5.5 7.1 10.5 11.5 14.9 4.4 4.5 9.4 8.3 14.9 11.5zm60.4 0c5.5-3.2 10.5-7.1 14.9-11.5 4.5-4.5 8.3-9.5 11.5-14.9l-19.8-11.5c-2.1 3.5-4.6 6.8-7.5 9.7-2.9 2.9-6.2 5.4-9.7 7.5l10.6 20.7z" />
    </svg>
  );
}

function DockerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 185" className={className} fill="currentColor">
      <path d="M250.716 70.497c-5.03-3.514-16.552-4.78-25.423-3.016-1.14-8.297-5.783-15.511-14.151-22.012l-4.907-3.264-3.263 4.907c-6.464 9.81-8.298 25.923-1.457 36.442-3.641 2.018-10.728 4.657-20.161 4.533H.032l-.03.5c-.927 15.474 1.614 42.397 16.222 61.697 13.225 17.448 33.06 26.318 58.957 26.318 56.196 0 97.776-25.86 117.304-72.823 7.672.151 24.171.045 32.667-16.168.217-.371 2.173-4.406 2.795-5.78l.77-2.334zm-197.3-16.9h23.39v23.39h-23.39zm29.7 0h23.39v23.39H83.116zm0-29.7h23.39v23.39H83.116zm29.7 29.7h23.39v23.39h-23.39zm0-29.7h23.39v23.39h-23.39zm29.7 29.7h23.39v23.39h-23.39zm0-29.7h23.39v23.39h-23.39zm29.7 29.7h23.39v23.39h-23.39zm-119.1 0h23.39v23.39h-23.39z" />
    </svg>
  );
}
