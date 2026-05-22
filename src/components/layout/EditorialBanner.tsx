"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EditorialBanner() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-40">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.14),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            overflow-hidden
            rounded-[48px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#111111]
            to-[#050505]
            p-14
            md:p-24
            shadow-[0_0_120px_rgba(198,169,114,0.08)]
          "
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT SIDE */}
            <div>
              <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-[#c6a972]">
                Editorial Streaming Experience
              </p>

              <h2
                className="
                  max-w-2xl
                  text-6xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-white
                  md:text-[92px]
                "
              >
                African Music Reimagined As A Cinematic Digital Universe
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-9 text-white/55">
                Streaming, fashion, immersive experiences, AI discovery, artist
                ecosystems, and premium African storytelling unified into one
                luxury digital platform.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">
              {/* NOW PLAYING CARD */}
              <div
                className="
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                "
              >
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#c6a972]">
                  Now Playing
                </p>

                <h3 className="text-3xl font-black text-white">
                  Afro Future Vol. 1
                </h3>

                <p className="mt-3 text-sm text-white/45">
                  AfricanMusic Originals
                </p>

                {/* PROGRESS */}
                <div className="mt-12">
                  <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[58%] rounded-full bg-[#c6a972]" />
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="mt-8 flex items-center gap-6">
                  <button className="text-white/50 transition hover:text-white">
                    <SkipBack size={18} />
                  </button>

                  <button
                    onClick={() => setPlaying(!playing)}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#c6a972]
                      text-black
                      transition
                      hover:scale-105
                    "
                  >
                    {playing ? (
                      <Pause size={22} />
                    ) : (
                      <Play size={22} className="ml-1" />
                    )}
                  </button>

                  <button className="text-white/50 transition hover:text-white">
                    <SkipForward size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
