"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Loader2,
  Server,
  HardDrive,
  // Cpu,
  Microchip,
  Shield,
  Play,
  Infinity,
  Telescope,
  Database,
  GitPullRequest,
  MonitorPlay,
  Cast,
  Layers,
  Computer,
  Film,
  Clapperboard,
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
  ExternalLink,
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
import { TailscaleSection } from "./components/tailscale-section";
import dynamic from "next/dynamic";
import { useLottieOptimization } from "@/hooks/use-lottie-optimization";
import type { LottieComponentProps } from "lottie-react";
import backgroundAnimation from "@/components/lottie/background.json";
import StickyIcons from "@/components/sticky-icons";
import Footer from "../../../components/sections/footer";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
  ),
});

export default function HomeServerPage() {
  const router = useRouter();
  const [isNavigatingHome, setIsNavigatingHome] = useState(false);
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
            className="bg-orange-700 hover:bg-orange-600 text-white rounded-full"
            size="sm"
            type="button"
            disabled={isNavigatingHome}
            onClick={() => {
              setIsNavigatingHome(true);
              router.push("/");
            }}
          >
            {isNavigatingHome ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <ArrowLeft className="size-4" />
            )}
            Back to Portfolio
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn
              delay={100}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 mt-6 flex items-center gap-4">
                <div className="flex items-center justify-center size-16 rounded-2xl bg-orange-900/30 text-orange-300 border border-orange-700/30 pointer-events-none">
                  <UbuntuIcon className="size-9 text-white" />
                </div>
                <X className="size-6 text-orange-500/50" />
                <div className="flex items-center justify-center size-16 rounded-2xl bg-orange-900/30 text-orange-300 border border-orange-700/30 pointer-events-none">
                  <DockerIcon className="size-9 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-400">
                Linux Media Server
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-300 text-pretty">
                A fully automated, self-hosted media server built with Docker on
                Ubuntu LTS. Featuring 180TB+ of storage, GPU-accelerated
                transcoding, and 24/7 uptime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Badge className="gap-1.5 py-1.5 px-3 bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/30 pointer-events-none">
                  <Server className="size-3.5" />
                  40+ Containers
                </Badge>
                <Badge className="gap-1.5 py-1.5 px-3 bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/30 pointer-events-none">
                  <HardDrive className="size-3.5" />
                  180TB+ Storage
                </Badge>
                <Badge className="gap-1.5 py-1.5 px-3 bg-orange-900/30 text-orange-300 rounded-full border border-orange-700/30 pointer-events-none">
                  <Infinity className="size-3.5" />
                  24/7 Uptime
                </Badge>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Foundation & Features */}
        <section className="py-4 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={200}>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {/* <div className="flex items-center justify-center size-10 rounded-2xl bg-orange-900/30">
                        <UbuntuIcon className="size-5 text-white" />
                      </div> */}
                      <div>
                        <CardTitle className="text-white">
                          Operating System & Storage Foundation
                        </CardTitle>
                        <CardDescription className="text-gray-300 mt-1">
                          Ubuntu LTS with MergerFS + SnapRAID
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-2">
                      <h4 className="text-sm text-white font-medium">
                        Ubuntu LTS
                      </h4>
                      <p className="text-sm text-gray-300">
                        Began my server journey on{" "}
                        <span className="text-white font-medium">
                          Linux Mint
                        </span>{" "}
                        for a few years, briefly evaluated{" "}
                        <span className="text-white font-medium">
                          Windows 11
                        </span>
                        , and ultimately migrated to{" "}
                        <span className="text-white font-medium">
                          Ubuntu LTS
                        </span>{" "}
                        in 2023 for its long-term stability and server-oriented
                        ecosystem.
                      </p>
                      <ul className="grid gap-1.5 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-orange-400" />
                          Intentionally minimal, optimized for lightweight
                          headless operation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-orange-400" />
                          32 GB SSD swap configured for improved memory handling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-orange-400" />
                          Biweekly system snapshots for contingency recovery
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2 border-t border-orange-700/20 pt-4">
                      <h4 className="text-sm text-white font-medium">
                        MergerFS + SnapRAID
                      </h4>
                      <p className="text-sm text-gray-300">
                        <span className="text-white font-medium">MergerFS</span>{" "}
                        merges 9 data HDDs into a single 150 TB+ mount point,
                        while two dedicated parity drives provide redundancy.
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="text-white font-medium">SnapRAID</span>{" "}
                        adds snapshot-based parity protection and weekly scrub
                        jobs for ongoing data integrity.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30 sm:p-6 p-6">
                  <div className="mb-5">
                    <CardTitle>Key features</CardTitle>
                    <CardDescription className="text-gray-300 mt-1">
                      Built for reliability, speed, and peace of mind
                    </CardDescription>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        icon: Microchip,
                        title: "GPU Passthrough",
                        text: "Hardware-accelerated transcoding for smooth Plex and Jellyfin playback.",
                      },
                      {
                        icon: Shield,
                        title: "Secure Remote Access",
                        text: "RustDesk and Nginx Proxy Manager keeps access safe and practical.",
                      },
                      {
                        icon: Database,
                        title: "Automated Backups",
                        text: "Monthly system wide snapshots and weekly storage backups.",
                      },
                      {
                        icon: Cast,
                        title: "Multi-Platform Streaming",
                        text: "Stream anywhere with Plex, Jellyfin, and request tools for users.",
                      },
                      {
                        icon: Computer,
                        title: "Media Processing",
                        text: "Tdarr and *arr stack keeps content organized and polished.",
                      },
                      {
                        icon: Infinity,
                        title: "24/7 Uptime",
                        text: "Always-on availability with automatic recovery and live monitoring.",
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <div key={title} className="group flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-900/20">
                          <Icon className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white">
                            {title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-gray-400">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Infrastructure & Hardware */}
        <section className="py-4 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={300}>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="relative overflow-hidden bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30 group">
                  <div className="absolute inset-0">
                    <Image
                      width={600}
                      height={400}
                      src="/linux-media-server/exos.webp"
                      alt="Seagate Exos drive"
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {/* <div className="flex items-center justify-center size-10 rounded-2xl bg-black/40 border border-white/10">
                          <HardDrive className="size-5 text-white" />
                        </div> */}
                        <div>
                          <CardTitle className="text-white">
                            Storage Architecture
                          </CardTitle>
                          <CardDescription className="text-gray-300 mt-1">
                            180TB+ with redundancy
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-300">
                        All Docker containers run from the NVMe SSD for fast I/O
                        and responsive application performance, while the HDD
                        array handles the large media library and redundancy.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl p-4 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xl font-bold text-orange-300">
                            180TB+
                          </p>
                          <p className="text-xs text-gray-300">HDD Storage</p>
                        </div>
                        <div className="rounded-2xl p-4 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xl font-bold text-orange-300">
                            2TB
                          </p>
                          <p className="text-xs text-gray-300">NVMe SSD</p>
                        </div>
                        <div className="rounded-2xl p-4 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xl font-bold text-orange-300">
                            40TB
                          </p>
                          <p className="text-xs text-gray-300">Parity</p>
                        </div>
                        <div className="rounded-2xl p-4 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xl font-bold text-orange-300">
                            Ext4 + XFS
                          </p>
                          <p className="text-xs text-gray-300">Filesystem</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30 group">
                  <div className="absolute inset-0">
                    <Image
                      width={600}
                      height={400}
                      src="/linux-media-server/fractal.webp"
                      alt="Fractal PC interior"
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {/* <div className="flex items-center justify-center size-10 rounded-2xl bg-black/40 border border-white/10">
                          <Cpu className="size-5 text-white" />
                        </div> */}
                        <div>
                          <CardTitle className="text-white">Hardware</CardTitle>
                          <CardDescription className="text-gray-300 mt-1">
                            Built for storage & transcoding
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">RAM</p>
                          <p className="font-medium">32GB</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">CPU</p>
                          <p className="font-medium">Ryzen 7 2700X</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">
                            Motherboard
                          </p>
                          <p className="font-medium">ASUS X570 Gaming F</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">GPU</p>
                          <p className="font-medium">GTX 980 Ti</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">
                            Storage
                          </p>
                          <p className="font-medium">11 HDDs + 1 SSD</p>
                        </div>
                        <div className="rounded-2xl p-3 bg-black/50 text-orange-300 border border-white/10 backdrop-blur-sm">
                          <p className="text-xs text-gray-300 mb-0.5">
                            HBA Card
                          </p>
                          <p className="font-medium">LSI SAS 9210-8i</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
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
                  <Badge className="mb-4 gap-2 py-2 px-3 bg-orange-900/30 rounded-full border border-orange-700/30 pointer-events-none inline-flex items-center w-fit">
                    <Film className="size-5" />
                    Heart of the Server
                  </Badge>
                  <CardTitle className="text-3xl text-white font-bold tracking-tight mb-4">
                    Plex Media Server
                  </CardTitle>
                  <p className="text-gray-300 mb-6">
                    All the automation, storage, and infrastructure exists to
                    serve one main purpose: delivering a premium streaming
                    experience that rivals and surpasses mainstream streaming
                    services. Plex is the reason this server exists.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
                        <MonitorPlay className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Superior Streaming Experience
                        </h4>
                        <p className="text-sm text-gray-300">
                          4K HDR and Dolby Vision playback with Dolby Atmos
                          audio. High bitrate, no buffering, no regional
                          restrictions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
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
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
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
                  <div className="relative group h-full rounded-2xl overflow-hidden border border-orange-700/30 bg-gradient-to-br from-black/30 to-orange-900/10">
                    {/* Poster Background */}
                    <div className="absolute inset-0">
                      <Image
                        width={600}
                        height={400}
                        src="/linux-media-server/poster.webp"
                        alt="Plex Media Library Showcase"
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 backdrop-blur-sm">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          Media Library
                        </h3>
                        <p className="text-xs text-orange-300 uppercase tracking-widest mb-4">
                          Content Available for Streaming
                        </p>
                      </div>

                      {/* Media Types Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <Clapperboard className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            Movies
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <Tv className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            TV Shows
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <Music className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            Music
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <Headphones className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            Audiobooks
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <Disc className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            Soundtracks
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-3 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <BookOpen className="size-5 mx-auto mb-1.5 text-orange-300" />
                          <p className="text-xs font-semibold text-white">
                            Books
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 lg:mt-0 mt-6 border-t border-orange-700/20 text-xs text-gray-400">
                        Also includes Intros, concert recordings, and
                        documentary collections. All organized with rich
                        metadata, artwork, and subtitles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Kometa Config */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={450}>
              <div className="grid gap-8 lg:grid-cols-5 items-center">
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <Badge className="mb-4 gap-2 py-2 px-3 bg-orange-900/30  rounded-full border border-orange-700/30 pointer-events-none inline-flex items-center w-fit">
                    <Telescope className="size-5" />
                    Plex Library Control
                  </Badge>
                  <CardTitle className="text-3xl text-white font-bold tracking-tight mb-4">
                    Kometa Config
                  </CardTitle>
                  <p className="text-gray-300 mb-6">
                    Kometa is a powerful tool designed to give you complete
                    control over your personal Plex media library
                    representation. With Kometa, you have granular control over
                    metadata manipulation, creating curated collections, custom
                    posters, icon overlays, and rich library presentation on a
                    detailed level.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Transform your media library with Kometa and discover its
                    full potential! Connect to third-party services like TMDb,
                    Trakt, and IMDb, among others, to create one-of-a-kind
                    collections, overlays and more. Your media library will
                    stand out and be tailored to your specific needs.
                  </p>
                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
                        <Layers className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Configurable Library Experience
                        </h4>
                        <p className="text-sm text-gray-300">
                          Build themed collections, custom posters, and overlays
                          that make Plex feel unique and polished.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
                        <Play className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Media Library Presentation
                        </h4>
                        <p className="text-sm text-gray-300">
                          Display your collection with custom artwork and
                          overlays, crafted for a seamless Plex browsing
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
                        <GitPullRequest className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-sm text-white font-medium">
                          Open Source Setup
                        </h4>
                        <p className="text-sm text-gray-300">
                          Includes the full repo and documentation for easy
                          customization and deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="https://kometa.wiki/en/latest/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-orange-700 hover:bg-orange-600 text-white rounded-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Kometa Wiki
                      </Button>
                    </Link>
                    <Link
                      href="https://github.com/jhn322/kometa-config"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-orange-300 text-orange-300 hover:bg-orange-900/30 hover:text-white rounded-full"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="relative group h-full rounded-2xl overflow-hidden border border-orange-700/30 bg-gradient-to-br from-black/30 to-orange-900/10">
                    <div className="absolute inset-0">
                      <Image
                        width={600}
                        height={400}
                        src="/linux-media-server/kometa.webp"
                        alt="Kometa Config screenshot"
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>

                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          Kometa Library View
                        </h3>
                        <p className="text-xs text-orange-300 uppercase tracking-widest mb-4">
                          Custom Posters + Overlays
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            Self-made Posters
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            Metadata Sync
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            Curated Collections
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            UI Overlays
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            External Sources
                          </p>
                        </div>
                        <div className="group/item rounded-xl p-6 bg-black/50 border border-white/10 text-center backdrop-blur-sm">
                          <p className="text-xs font-semibold text-white">
                            Library Automation
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 mt-6 border-t border-orange-700/20 text-xs text-gray-400">
                        Add a new poster or artwork image to your library
                        presentation with the card above.
                      </div>
                    </div>
                  </div>
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
                <CardTitle className="text-3xl text-white font-bold tracking-tight mb-4">
                  Media Automation
                </CardTitle>
                <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                  The *arr stack automates the entire media acquisition and
                  organization process. From search to organized library,
                  everything happens automatically.
                </p>
              </div>

              <AutomationFlow />

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-3">
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src="/linux-media-server/sonarr.webp"
                          alt="Sonarr logo"
                          className="block w-6 h-6 object-contain"
                        />
                      </div>
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
                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-3">
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src="/linux-media-server/radarr.webp"
                          alt="Radarr logo"
                          className="block w-6 h-6 object-contain"
                        />
                      </div>
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
                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-3">
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src="/linux-media-server/lidarr.webp"
                          alt="Lidarr logo"
                          className="block w-6 h-6 object-contain"
                        />
                      </div>
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
                <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white flex items-center gap-3">
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src="/linux-media-server/prowlarr.webp"
                          alt="Prowlarr logo"
                          className="block w-6 h-6 object-contain"
                        />
                      </div>
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

        {/* Docker & Container Management */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={600}>
              <div className="mb-10 text-center">
                <CardTitle className="text-3xl text-white font-bold tracking-tight mb-4">
                  Docker Compose Stack
                </CardTitle>
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

        {/* Dashboard */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={800}>
              <div className="mb-10 text-center">
                <CardTitle className="text-3xl text-white font-bold tracking-tight">
                  Portainer Dashboard
                </CardTitle>
                <p className="mt-2 text-gray-300">
                  View of the currently running container stack
                </p>
              </div>
              <ContainerDashboard />
            </FadeIn>
          </div>
        </section>

        {/* Immich */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={500}>
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <Badge className="mb-4 gap-2 py-2 px-3 bg-orange-900/30 rounded-full border border-orange-700/30 pointer-events-none inline-flex items-center w-fit">
                    <Camera className="size-5" />
                    Self-Hosted Photo Backup
                  </Badge>
                  <CardTitle className="text-3xl text-white font-bold tracking-tight text-left mb-4">
                    Immich Photo Backup
                  </CardTitle>
                  <p className="text-gray-300 mb-4 text-left">
                    Immich is a self-hosted alternative to Google Photos and
                    iCloud. Every photo and video taken on your phone, tablet or
                    PC is automatically backed up locally to the server, no
                    monthly fees, no storage limits, full privacy.
                  </p>
                  <ul className="grid gap-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-orange-300" />
                      Automatic background sync from mobile devices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-orange-300" />
                      Optional AI-powered facial recognition and object search
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-orange-300" />
                      Timeline view, albums, and sharing capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-orange-300" />
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

        {/* Tailscale Remote Access */}
        <section className="py-16 w-full flex justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6">
            <FadeIn delay={775}>
              <TailscaleSection />
            </FadeIn>
          </div>
        </section>
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
