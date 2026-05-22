"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

export default function StreamingPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-white">Afro Future Vol. 1</p>

          <p className="text-xs text-white/50">AfricanMusic Originals</p>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/70 transition hover:text-white">
            <SkipBack size={20} />
          </button>

          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a972] text-black transition hover:scale-105"
          >
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button className="text-white/70 transition hover:text-white">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="hidden w-40 md:block">
          <div className="h-1 rounded-full bg-white/10">
            <div className="h-1 w-1/2 rounded-full bg-[#c6a972]" />
          </div>
        </div>
      </div>
    </div>
  );
}
