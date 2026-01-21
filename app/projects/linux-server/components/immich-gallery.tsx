"use client";

import {
  Image as ImageIcon,
  MapPin,
  Cloud,
  Check,
  Loader2,
  Mountain,
  User,
  Dog,
  Sunset,
  Search,
  Library,
  Album,
} from "lucide-react";

export function ImmichGallery() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute inset-0 -z-10 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Main Device */}
      <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-purple-950/50 bg-black shadow-2xl h-[650px] flex flex-col">
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-8 bg-black/50 backdrop-blur-md z-20 flex items-center justify-between px-6">
          <div className="text-[10px] font-medium text-white">16:41</div>
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-white/20" />
            <div className="size-2.5 rounded-full bg-white/20" />
            <div className="w-4 h-2.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* App Header */}
        <div className="pt-10 pb-4 px-6 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">immich</h3>
              <p className="text-xs text-purple-300">
                Target Server: Linux-Server
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
              <Cloud className="size-3 text-purple-300" />
              <span className="text-xs font-medium text-purple-200">
                Backing up...
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="h-8 rounded-xl bg-white/5 flex items-center px-3 gap-2">
            <div className="size-4 rounded-full border border-white/20" />
            <div className="h-2 w-24 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Photo Grid */}
        <div className="px-4 pb-8 space-y-4">
          {/* Today Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">Today</span>
              <Check className="size-3 text-green-400" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-white/5">
                <Mountain className="size-6 text-white/40" />
              </div>
              <div className="aspect-square rounded-xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/5">
                <Sunset className="size-6 text-white/40" />
              </div>
              <div className="aspect-square rounded-xl bg-gradient-to-bl from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-white/5">
                <Dog className="size-6 text-white/40" />
              </div>
            </div>
          </div>

          {/* Yesterday Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">Yesterday</span>
              <div className="flex items-center gap-1.5">
                <Loader2 className="size-3 text-purple-300 animate-spin" />
                <span className="text-[10px] text-purple-300">
                  Syncing 4 items
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                <User className="size-4 text-white/20" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 animate-pulse" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 animate-pulse delay-75" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                <ImageIcon className="size-4 text-white/20" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                <ImageIcon className="size-4 text-white/20" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 animate-pulse" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 animate-pulse" />
              </div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center">
                <User className="size-4 text-white/20" />
              </div>
            </div>
          </div>

          {/* Memories */}
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="size-3 text-purple-400" />
              <span className="text-xs font-medium text-purple-100">
                Midsommar 2024
              </span>
            </div>
            <div className="flex gap-2 overflow-hidden">
              <div className="h-20 w-32 rounded-lg bg-gradient-to-r from-red-500/10 to-purple-500/10 flex-shrink-0" />
              <div className="h-20 w-32 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="absolute bottom-0 w-full h-16 bg-black/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-around px-2">
          <div className="flex flex-col items-center gap-1 text-purple-400">
            <ImageIcon className="size-5" />
            <span className="text-[10px] font-medium">Photos</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500">
            <Search className="size-5" />
            <span className="text-[10px] font-medium">Search</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500">
            <Album className="size-5" />
            <span className="text-[10px] font-medium">Albums</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500">
            <Library className="size-5" />
            <span className="text-[10px] font-medium">Library</span>
          </div>
        </div>
      </div>
    </div>
  );
}
