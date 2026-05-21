"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Server,
  Terminal,
  Database,
  HardDrive,
  Cpu,
} from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { ProjectTag } from "../ui/project-tag";

const linuxServer = {
  title: "Linux Server",
  description:
    "A comprehensive home server setup for media management, automation, backup, and self-hosting. Running 24/7 on Ubuntu LTS with Docker containers, this server handles media streaming via Plex, automated downloads and folder management with *arr stack, request management from users, and secure external access via Nginx Proxy Manager. Features include 180TB+ storage with redundancy, automatic container updates with Watchtower, and easy management through Portainer. All together to create a fully automated, self-hosted media server.",
  image: "/featured-projects/linux-server.webp",
  hoverImage: "/featured-projects/linux-server-hover.webp",
  tags: [
    "Ubuntu LTS",
    "Docker",
    "Plex Media Server",
    "Jellyfin",
    "Sonarr",
    "Radarr",
    "Prowlarr",
    "Portainer",
    "Immich",
  ],
  liveUrl: "/projects/linux-server",
  projectType: "Passion" as const,
};

// Animated terminal line component
function TerminalLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      className="font-mono text-xs md:text-sm text-gray-300"
    >
      {children}
    </motion.div>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-2 h-4 bg-orange-400 ml-1"
    />
  );
}

function FloatingIcon({
  icon: Icon,
  className,
  delay,
}: {
  icon: typeof Server;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Icon className="size-5 md:size-6 text-orange-500/40" />
      </motion.div>
    </motion.div>
  );
}

export default function Sysadmin() {
  return (
    <section id="sysadmin" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <FloatingIcon
        icon={Terminal}
        className="absolute top-20 left-[10%] hidden md:block"
        delay={0}
      />
      <FloatingIcon
        icon={Database}
        className="absolute top-40 right-[15%] hidden md:block"
        delay={0.2}
      />
      <FloatingIcon
        icon={HardDrive}
        className="absolute bottom-32 left-[20%] hidden md:block"
        delay={0.4}
      />
      <FloatingIcon
        icon={Cpu}
        className="absolute bottom-20 right-[10%] hidden md:block"
        delay={0.6}
      />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn delay={100} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            System Administrator
            <span className="absolute -bottom-2 left-1/3 w-1/3 h-1 bg-orange-500"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Self-hosted isolated environments, homelab automation, and hands-on
            Linux system administration.
          </p>
        </FadeIn>

        {/* Terminal window style card */}
        <FadeIn delay={150} threshold={0.05} rootMargin="0px 0px -100px 0px">
          <div className="relative w-full">
            {/* container */}
            <div className="overflow-hidden rounded-2xl border border-orange-900/30 bg-gradient-to-br from-black/30 to-orange-900/10 shadow-lg backdrop-blur-md">
              {/* header bar */}
              <div className="flex items-center gap-2 border-b border-orange-300/30 bg-orange-950/30 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-red-500" />
                  <span className="size-3 rounded-full bg-yellow-500" />
                  <span className="size-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-sm text-gray-300">
                    admin@homelab:~
                  </span>
                </div>
                <div className="w-16" />
              </div>

              <div className="bg-orange-950/20 p-6 md:p-8">
                <div className="mb-6 space-y-1">
                  <TerminalLine delay={1}>
                    <span className="text-green-400">$</span> systemctl status
                    docker.service
                  </TerminalLine>
                  <TerminalLine delay={2}>
                    <span className="text-gray-500">{">"}</span> loaded
                    (/usr/lib/systemd/system/docker.service;{" "}
                    <span className="text-green-400">enabled</span>; preset:
                    <span className="text-green-400"> enabled</span>)
                  </TerminalLine>
                  <TerminalLine delay={3}>
                    <span className="text-green-400">✓</span> connected to
                    docker.service
                    <BlinkingCursor />
                  </TerminalLine>
                </div>

                {/* Main content grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
                  <div className="w-full lg:w-3/5 relative group">
                    <div className="relative overflow-hidden rounded-2xl border border-orange-900/30 bg-black/20">
                      {/* Scanline effect overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
                        }}
                      />

                      <div className="relative aspect-video w-full">
                        <Image
                          src={linuxServer.image}
                          alt={linuxServer.title}
                          fill
                          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                          priority
                        />
                        <Image
                          src={linuxServer.hoverImage}
                          alt={`${linuxServer.title} hover preview`}
                          fill
                          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        />
                      </div>
                    </div>

                    <div className="pointer-events-none absolute -left-0.5 -top-0.5 size-5 rounded-tl-2xl border-l-2 border-t-2 border-orange-500/50" />
                    <div className="pointer-events-none absolute -right-0.5 -top-0.5 size-5 rounded-tr-2xl border-r-2 border-t-2 border-orange-500/50" />
                    <div className="pointer-events-none absolute -bottom-0.5 -left-0.5 size-5 rounded-bl-2xl border-b-2 border-l-2 border-orange-500/50" />
                    <div className="pointer-events-none absolute -bottom-0.5 -right-0.5 size-5 rounded-br-2xl border-b-2 border-r-2 border-orange-500/50" />
                  </div>

                  {/* Info section */}
                  <div className="w-full lg:w-2/5">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div
                        className="flex items-center justify-center size-12 shrink-0 rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-900/20 text-orange-300 border border-orange-600/30 shadow-lg shadow-orange-950/20"
                        aria-hidden
                      >
                        <Server className="size-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-orange-50">
                        {linuxServer.title}
                      </h3>
                      <ProjectTag type={linuxServer.projectType} />
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {linuxServer.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {linuxServer.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-sm rounded-full font-mono bg-orange-950/50 text-orange-300 border border-orange-800/40 transition-colors cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <Link href={linuxServer.liveUrl}>
                      <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-full font-medium shadow-lg shadow-orange-950/30 hover:shadow-orange-900/40 transition-all w-full lg:w-auto">
                        View Project
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 border-t border-orange-300/30 pt-4">
                  <TerminalLine delay={4}>
                    <span className="text-gray-500">{">"}</span> uptime: 365
                    days, 24/7 | containers: 40+ | storage: 180TB+
                  </TerminalLine>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
