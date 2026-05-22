"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import ArtistCard from "@/components/artists/ArtistCard";

import { artists } from "@/lib/artists";

import FadeIn from "@/components/animations/FadeIn";

export default function ArtistShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.06),transparent_65%)] py-32">
      {/* BACKGROUND ATMOSPHERE */}

      <div className="absolute inset-0 overflow-hidden rounded-[32px]">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#c6a972]/10 blur-[180px]" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="Featured Artists"
          title="The New Generation of African Music Icons"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {artists.map((artist, index) => (
            <FadeIn key={artist.id} delay={index * 0.15}>
              <ArtistCard
                slug={artist.slug}
                name={artist.name}
                genre={artist.genre}
                image={artist.image}
                headline={artist.headline}
                description={artist.description}
                position={artist.position}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
