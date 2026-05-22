"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import AtmosphereLayer from "@/components/ui/AtmosphereLayer";

export default function HeroSection() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="hero-gradient relative isolate flex min-h-[100vh] items-center overflow-hidden border-b border-white/5 pt-20 lg:pt-24"
    >
      {/* GLOW LAYER */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-[40%] bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.12),transparent_70%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a972]/10 blur-[140px]"
        />
      </div>

      <AtmosphereLayer />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45))]" />
      {/* CONTENT */}

      <div className="container-width relative z-10 grid items-center gap-12 xl:gap-20 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#c6a972]">
            Africa&apos;s Immersive Music Universe
          </p>

          <h1 className="max-w-[820px] text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl xl:text-[7.5rem]">
            The Future
            <br />
            of African
            <br />
            Music Culture
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-white/65 xl:text-[1.15rem]">
            Discover artists, immersive albums, Afro-futuristic fashion, live
            experiences, and AI-powered music discovery built for the next
            generation of African culture.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="rounded-full bg-[#c6a972] px-8 py-4 font-semibold text-black transition hover:scale-105">
              Explore Music
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 transition hover:border-[#c6a972] hover:text-[#c6a972]">
              View Artists
            </button>
          </div>
        </motion.div>
        {/* HERO VISUAL */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: -3,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden min-h-[760px] items-center justify-center overflow-visible xl:flex perspective-[2600px]"
        >
          {/* ATMOSPHERIC GLOW */}

          <div className="absolute h-[760px] w-[760px] rounded-full bg-[#c6a972]/20 blur-[160px]" />

          {/* FLOATING ARTIST PANEL */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 overflow-hidden rounded-[52px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6 shadow-[0_120px_260px_rgba(0,0,0,0.92)] backdrop-blur-3xl transition duration-700 hover:scale-[1.03] hover:rotate-[1deg]"
          >
            <Image
              src="/images/hero-artist.png"
              alt="African Music Artist"
              width={900}
              height={1200}
              priority
              loading="eager"
              className="h-auto w-[460px] rounded-[38px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.22),transparent_60%)]" />
          </motion.div>

          <div className="absolute bottom-[130px] left-[80px] h-[220px] w-[420px] rounded-full bg-[#c6a972]/20 blur-[120px]" />
          {/* FLOATING INFO CARD */}

          <motion.div
            animate={{
              y: [0, 16, 0],
              rotate: [-3, 1, -3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[145px] left-[28px] z-30 rounded-[34px] border border-white/10 bg-black/92 px-10 py-6 shadow-[0_60px_140px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#c6a972]">
              NOW STREAMING
            </p>

            <h3 className="text-[2rem] font-black leading-none tracking-[-0.06em] text-white">
              Afro Future Vol. 1
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
