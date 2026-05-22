"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import FadeIn from "@/components/animations/FadeIn";

export default function MusicExperienceSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ATMOSPHERE */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a972]/10 blur-[180px]" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="Immersive Sound"
          title="Experience African Music Beyond Streaming"
        />

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <p className="max-w-2xl text-xl leading-10 text-white/70">
                AfricanMusic.com is designed as a cinematic cultural ecosystem
                where artists, fashion, sound, immersive visuals, AI discovery,
                and live experiences merge into one premium destination.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="mb-4 text-3xl font-black text-[#c6a972]">
                    50M+
                  </h3>

                  <p className="text-white/60">
                    Monthly immersive music interactions
                  </p>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="mb-4 text-3xl font-black text-[#c6a972]">
                    120+
                  </h3>

                  <p className="text-white/60">African artist ecosystems</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}

          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#c6a972]/10 to-black p-8 xl:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.15),transparent_60%)]" />

              <div className="relative z-10">
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#c6a972]">
                  LIVE EXPERIENCE
                </p>

                <h3 className="mb-8 text-4xl xl:text-5xl font-black leading-tight">
                  Immersive
                  <br />
                  Audio Reality
                </h3>

                <p className="max-w-xl leading-9 text-white/70">
                  Discover immersive artist journeys, cinematic visual albums,
                  Afro-luxury commerce, and AI-driven music exploration.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
