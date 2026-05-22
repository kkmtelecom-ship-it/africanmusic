"use client";

import { motion } from "framer-motion";

import { Headphones, Gem, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import FadeIn from "@/components/animations/FadeIn";

export default function FeaturedSection() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Featured Experience"
          title="Immersive African Music Discovery"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* CARD 1 */}

          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#111111] to-[#1a1a1a]
              min-h-[360px] px-10 pt-12 pb-10 transition duration-500 hover:-translate-y-2 hover:border-[#c6a972]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c6a972]/20 bg-[#c6a972]/10 shadow-[0_0_40px_rgba(198,169,114,0.15)] backdrop-blur-xl">
                <Headphones
                  className="h-7 w-7 text-[#c6a972]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mb-6 text-2xl font-bold">
                Live Artist Experiences
              </h3>

              <p className="leading-8 text-white/60">
                Experience immersive artist ecosystems, live visuals, exclusive
                content, and cinematic music storytelling.
              </p>
            </motion.div>
          </FadeIn>

          {/* CARD 2 */}

          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#111111] to-[#1a1a1a] min-h-[360px] px-10 pt-12 pb-10 transition duration-500 hover:-translate-y-2 hover:border-[#c6a972]/40 hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c6a972]/20 bg-[#c6a972]/10 shadow-[0_0_40px_rgba(198,169,114,0.15)] backdrop-blur-xl">
                <Gem className="h-7 w-7 text-[#c6a972]" strokeWidth={1.8} />
              </div>
              <h3 className="mb-6 text-2xl font-bold">Afro Luxury Commerce</h3>

              <p className="leading-8 text-white/60">
                Discover fashion, premium merchandise, collectibles, and luxury
                African creative products.
              </p>
            </motion.div>
          </FadeIn>

          {/* CARD 3 */}

          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#111111] to-[#1a1a1a] min-h-[360px] px-10 pt-12 pb-10 transition duration-500 hover:-translate-y-2 hover:border-[#c6a972]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c6a972]/20 bg-[#c6a972]/10 shadow-[0_0_40px_rgba(198,169,114,0.15)] backdrop-blur-xl">
                <Sparkles
                  className="h-8 w-8 text-[#c6a972]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mb-6 text-2xl font-bold">AI Music Discovery</h3>

              <p className="leading-8 text-white/60">
                Explore intelligent music recommendations powered by immersive
                discovery systems and African culture trends.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}


