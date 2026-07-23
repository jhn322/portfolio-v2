"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  Laptop,
  Lock,
  Router,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

const accessPoints = [
  {
    icon: Laptop,
    label: "Laptop",
    description: "Manage containers via Portainer or Homarr",
  },
  {
    icon: Smartphone,
    label: "Phone & Tablet",
    description: "Stream Plex, browse Immich, check dashboards",
  },
  {
    icon: Globe,
    label: "Any Network",
    description: "Friend's house, mobile data, or abroad. Same access.",
  },
];

export function TailscaleSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-5 items-center">
      <div className="lg:col-span-3 flex flex-col justify-center">
        <Badge className="mb-4 gap-2 py-2 px-3 bg-orange-900/30 rounded-full border border-orange-700/30 pointer-events-none inline-flex items-center w-fit">
          <Image
            width={20}
            height={20}
            src="/linux-media-server/tailscale.svg"
            alt="Tailscale logo"
            className="size-5 object-contain"
          />
          Secure Remote Access
        </Badge>

        <h2 className="text-3xl text-white font-bold tracking-tight mb-4">
          Tailscale Mesh VPN
        </h2>

        <p className="text-gray-300 mb-4">
          <span className="text-white font-medium">Tailscale</span> builds a
          private overlay network called a{" "}
          <span className="text-white font-medium">tailnet</span> on top of
          WireGuard. Each device that joins becomes a{" "}
          <span className="text-white font-medium">node</span> with a stable,
          routable IP address, as if every machine were on the same LAN.
        </p>

        <p className="text-gray-300 mb-6">
          Instead of exposing services through router port forwarding, it runs
          the Tailscale agent on the host machine and reaches Docker containers
          over the tailnet. Apps stay bound to the local network; access from
          outside travels through an encrypted WireGuard tunnel with no open
          inbound ports on the router.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
              <Lock className="size-4" />
            </div>
            <div>
              <h4 className="text-sm text-white font-medium">
                No Port Forwarding
              </h4>
              <p className="text-sm text-gray-300">
                Services like Portainer, Sonarr, and Immich are not published to
                the public internet. Only authenticated tailnet nodes can reach
                them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
              <Shield className="size-4" />
            </div>
            <div>
              <h4 className="text-sm text-white font-medium">
                WireGuard Encryption
              </h4>
              <p className="text-sm text-gray-300">
                All traffic between nodes is encrypted end-to-end. Tailscale
                handles key exchange, NAT traversal, and coordination so
                connections work across firewalls and changing IPs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center size-8 rounded-2xl bg-orange-900/30 shrink-0 mt-0.5">
              <Router className="size-4" />
            </div>
            <div>
              <h4 className="text-sm text-white font-medium">
                Connect From Any Tailnet Node
              </h4>
              <p className="text-sm text-gray-300">
                Install the Tailscale client on any device, sign in to the same
                tailnet, and reach the server by its MagicDNS hostname or
                tailnet IP. Whether you are at home, on mobile data, or
                traveling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <Card className="bg-gradient-to-br from-black/30 to-orange-900/10 backdrop-blur-md border-orange-900/30 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg text-white">
              How Access Works
            </CardTitle>
            <CardDescription className="text-gray-300">
              Private path to Docker services, no public exposure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between gap-2 rounded-2xl border border-orange-900/20 bg-orange-950/30 p-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex items-center justify-center size-10 rounded-xl bg-orange-900/40 shrink-0">
                  <Server className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    Linux Server
                  </p>
                  <p className="text-xs text-gray-400">
                    Tailscale node · Docker host
                  </p>
                </div>
              </div>
              <ArrowRight className="size-4 text-orange-400 shrink-0" />
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex items-center justify-center size-10 rounded-xl bg-orange-900/40 shrink-0">
                  <Image
                    width={20}
                    height={20}
                    src="/linux-media-server/tailscale.svg"
                    alt=""
                    aria-hidden
                    className="size-5 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    Tailnet
                  </p>
                  <p className="text-xs text-gray-400">WireGuard mesh</p>
                </div>
              </div>
            </div>

            <div className="grid gap-2.5">
              {accessPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center size-8 rounded-xl bg-orange-900/30 shrink-0">
                    <point.icon className="size-4 " />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {point.label}
                    </p>
                    <p className="text-xs text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 border-t border-orange-900/20 pt-4">
              Example: open{" "}
              <span className="text-orange-300 font-mono">
                http://100.35.41.84:9443
              </span>{" "}
              from any tailnet node to reach Portainer. No router config
              required.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
