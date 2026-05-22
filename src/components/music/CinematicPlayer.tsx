"use client";

import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";

interface CinematicPlayerProps {
  artistName: string;
}

export default function CinematicPlayer({ artistName }: CinematicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(22);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }

        return prev + 0.3;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#080808]
        p-10
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(214,178,107,0.18),transparent_70%)]
        "
      />

      <div className="relative z-10">
        <p
          className="
            mb-3
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-[#c6a972]
          "
        >
          NOW PLAYING
        </p>

        <h3
          className="
            text-4xl
            font-black
            text-white
          "
        >
          Afro Future Vol. 1
        </h3>

        <p className="mt-2 text-white/50">{artistName}</p>

        {/* WAVEFORM */}
        <div className="mt-10 flex items-end gap-2">
          {Array.from({ length: 42 }).map((_, index) => (
            <motion.div
              key={index}
              animate={{
                height: isPlaying ? [18, Math.random() * 80, 20] : 18,
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.03,
              }}
              className="
                w-[4px]
                rounded-full
                bg-[#d6b26b]
              "
            />
          ))}
        </div>

        {/* PROGRESS */}
        <div className="mt-10">
          <div
            className="
              h-[4px]
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="
                h-full
                rounded-full
                bg-[#d6b26b]
              "
            />
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-10 flex items-center gap-6">
          <button className="text-white/60 transition hover:text-white">
            <SkipBack size={22} />
          </button>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#d6b26b]
              text-black
              shadow-[0_0_40px_rgba(214,178,107,0.45)]
            "
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </motion.button>

          <button className="text-white/60 transition hover:text-white">
            <SkipForward size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
