"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";

import { getArtistBySlug } from "@/services/artistService";

import CinematicReveal from "@/components/cinematic/CinematicReveal";
import CinematicParallax from "@/components/cinematic/CinematicParallax";
import AmbientGlow from "@/components/cinematic/AmbientGlow";

import StreamingPlayer from "@/components/music/StreamingPlayer";
import RecommendationEngine from "@/components/music/RecommendationEngine";
import NetflixRow from "@/components/music/NetflixRow";

interface ArtistPageProps {
  params: {
    slug: string;
  };
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist = getArtistBySlug(params.slug);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const recommendedArtists = [
    {
      name: "Kabza De Small",
      image: "/artists/kabza-desmall.jpg",
      slug: "kabza-de-small",
    },

    {
      name: "Burna Boy",
      image: "/artists/burna-boy.jpg",
      slug: "burna-boy",
    },

    {
      name: "Tems",
      image: "/artists/tems.jpg",
      slug: "tems",
    },

    {
      name: "Black Coffee",
      image: "/artists/black-coffee.jpg",
      slug: "black-coffee",
    },
  ];

  if (!artist) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <AmbientGlow />

      <CinematicReveal>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.18),transparent_60%)]" />

          <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-20 px-6 py-24 lg:grid-cols-2 lg:px-20">
            {/* LEFT CONTENT */}

            <div className="relative z-10">
              <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#c6a972]">
                Featured Artist
              </p>

              <h1 className="max-w-[700px] text-[4rem] font-black leading-[0.9] tracking-[-0.06em] md:text-[6rem]">
                {artist.name}
              </h1>

              <p className="mt-10 max-w-[700px] text-[1.35rem] leading-[2.2rem] text-white/70">
                {artist.description}
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <button
                  onClick={toggleAudio}
                  className="flex h-14 items-center justify-center rounded-full bg-[#D6B36A] px-10 text-lg font-semibold text-black transition hover:scale-105"
                >
                  {isPlaying ? "Pause Track" : "Play Artist"}
                </button>

                <button className="rounded-full border border-white/15 px-10 py-5 text-lg font-semibold transition hover:border-[#c6a972] hover:text-[#c6a972]">
                  Follow
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <CinematicParallax>
              <div className="relative flex justify-center">
                <div className="relative h-[720px] w-full max-w-[620px] overflow-hidden rounded-[42px] border border-white/10">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    priority
                    className="object-cover"
                    style={{
                      objectPosition: artist.position || "center top",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </CinematicParallax>
          </div>
        </section>
      </CinematicReveal>

      {/* STREAMING ECOSYSTEM */}

      <section className="mx-auto max-w-[1600px] px-6 py-32 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <StreamingPlayer title="Afro Future Vol. 1" artist={artist.name} />

          <audio ref={audioRef} src="/audio/deep-african-house.mp3" />

          <div
            className="
              rounded-[36px]
              border
              border-white/10
              bg-[#0d0d0d]
              p-12
            "
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#c6a972]">
              Streaming Ecosystem
            </p>

            <h2 className="max-w-[600px] text-5xl font-black leading-[1] tracking-[-0.04em]">
              Cinematic African Streaming Platform
            </h2>

            <p className="mt-8 max-w-[650px] text-lg leading-9 text-white/60">
              AI-powered recommendations, premium artist ecosystems, immersive
              music storytelling, streaming infrastructure, cinematic albums,
              and next-generation African music experiences.
            </p>
          </div>
        </div>

        <RecommendationEngine />

        <NetflixRow
          title="Trending African Artists"
          items={recommendedArtists}
        />

        <NetflixRow
          title="Immersive Sound Universe"
          items={recommendedArtists}
        />

        <NetflixRow title="Recommended For You" items={recommendedArtists} />
      </section>
    </main>
  );
}
