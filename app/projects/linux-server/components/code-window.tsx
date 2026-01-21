"use client";

const dockerComposeCode = `services:
  plex:
    container_name: plex
    image: lscr.io/linuxserver/plex
    restart: unless-stopped
    network_mode: host
    environment:
      - TZ=Europe/Stockholm
      - PUID=1000
      - PGID=1000
      - VERSION=latest
      - PLEX_CLAIM=claim-745338734
    volumes:
      - ./config:/config
      - /mnt/drives/Media/Anime:/anime
      - /mnt/drives/Media/Audiobooks:/audiobooks
      - /mnt/drives/Media/Movies:/movies
      - /mnt/drives/Media/Music:/music
      - /mnt/drives/Media/Remux:/remux
      - /mnt/drives/Media/Soundtracks:/soundtracks
      - /mnt/drives/Media/TV:/tv
      - /mnt/drives/Media/Videos:/videos
    tmpfs:
      - /transcode
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [ gpu ]`;

export function CodeWindow() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-purple-900/30 bg-gradient-to-br from-black/30 to-purple-900/10 backdrop-blur-md shadow-lg h-full flex flex-col">
      <div className="flex items-center gap-2 border-b border-purple-300/30 bg-purple-950/30 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-500" />
          <span className="size-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-sm text-gray-300 font-mono">
          docker-compose.yml
        </span>
      </div>
      <div className="flex-1 overflow-auto bg-purple-950/20 p-4 min-h-0">
        <pre className="text-xs leading-relaxed overflow-x-auto">
          <code className="text-[#cdd6f4] font-mono whitespace-pre inline-block min-w-full">
            {dockerComposeCode.split("\n").map((line, i) => (
              <div key={i} className="flex min-w-fit">
                <span className="w-8 text-right pr-4 text-[#6c7086] select-none shrink-0">
                  {i + 1}
                </span>
                <span className="whitespace-pre">{highlightYaml(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightYaml(line: string) {
  // Keys
  if (line.includes(":")) {
    const [key, ...rest] = line.split(":");
    const value = rest.join(":");

    if (key.trim().startsWith("#")) {
      return <span className="text-[#6c7086]">{line}</span>;
    }

    if (
      [
        "services",
        "environment",
        "volumes",
        "deploy",
        "resources",
        "reservations",
        "devices",
        "tmpfs",
      ].includes(key.trim())
    ) {
      return (
        <>
          <span className="text-[#cba6f7]">{key}</span>
          <span className="text-[#89dceb]">:</span>
          {value && <span className="text-[#a6e3a1]">{value}</span>}
        </>
      );
    }

    return (
      <>
        <span className="text-[#89b4fa]">{key}</span>
        <span className="text-[#89dceb]">:</span>
        {value && <span className="text-[#a6e3a1]">{value}</span>}
      </>
    );
  }

  // Array items
  if (line.trim().startsWith("-")) {
    return <span className="text-[#f9e2af]">{line}</span>;
  }

  return line;
}
