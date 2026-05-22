"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

interface StreamingPlayerProps {
  title: string;
  artist: string;
}

export default function StreamingPlayer({
  title,
  artist,
}: StreamingPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-[#0d0d0d]
        p-8
        shadow-[0_0_80px_rgba(0,0,0,0.45)]
      "
    >
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c6a972]">
        Now Playing
      </p>

      <h3 className="text-3xl font-black text-white">{title}</h3>

      <p className="mt-2 text-white/50">{artist}</p>

      <div className="mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[45%] bg-[#c6a972]" />
      </div>

      <div className="mt-8 flex items-center gap-6">
        <button className="text-white/60">
          <SkipBack size={18} />
        </button>

        <button
          onClick={() => setPlaying(!playing)}
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#c6a972]
            text-black
          "
        >
          {playing ? <Pause /> : <Play />}
        </button>

        <button className="text-white/60">
          <SkipForward size={18} />
        </button>
      </div>
    </div>
  );
}
