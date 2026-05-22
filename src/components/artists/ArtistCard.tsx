"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

interface ArtistCardProps {
  slug: string;
  name: string;
  genre: string;
  image: string;
  headline: string;
  description: string;
  position?: string;
}

export default function ArtistCard({
  slug,
  name,
  genre,
  image,
  headline,
  description,
  position,
}: ArtistCardProps) {
  return (
    <Link href={`/artists/${slug}`} className="block h-full">
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.4,
        }}
        className="group relative h-full overflow-hidden rounded-[40px] border border-white/10 bg-[#0b0b0b] will-change-transform"
      >
        {/* IMAGE */}

        <div className="relative h-[520px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
            loading={
              name === "Kabza De Small" || name === "Burna Boy"
                ? "eager"
                : "lazy"
            }
            priority={name === "Kabza De Small" || name === "Burna Boy"}
            className="object-cover object-top transition duration-[1600ms] group-hover:scale-110"
            style={{
              objectPosition: position || "center top",
            }}
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

          {/* ATMOSPHERIC GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.18),transparent_60%)] opacity-0 transition duration-700 group-hover:opacity-100" />
        </div>

        {/* CONTENT */}

        <div className="absolute bottom-0 z-10 w-full bg-gradient-to-t from-black via-black/65 to-transparent p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c6a972]">
            {genre}
          </p>

          <h3 className="mb-3 text-[2.2rem] font-black tracking-[-0.04em]">
            {name}
          </h3>

          <p className="mb-4 text-lg font-semibold text-white/90">{headline}</p>

          <p className="max-w-md leading-8 text-white/65">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
