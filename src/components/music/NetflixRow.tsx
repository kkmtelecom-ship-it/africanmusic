"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface NetflixItem {
  name: string;
  image: string;
  slug: string;
}

interface NetflixRowProps {
  title: string;
  items: NetflixItem[];
}

export default function NetflixRow({ title, items }: NetflixRowProps) {
  return (
    <section className="mt-32">
      <div className="mb-10 flex items-center justify-between">
        <h2
          className="
            text-5xl
            font-black
            tracking-[-0.04em]
            text-white
          "
        >
          {title}
        </h2>
      </div>

      <div
        className="
          flex
          gap-8
          overflow-x-auto
          pb-6
          scrollbar-hide
        "
      >
        {items.map((item) => (
          <Link key={item.slug} href={`/artists/${item.slug}`}>
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                relative
                min-w-[320px]
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-[#0b0b0b]
              "
            >
              <div className="relative h-[440px] w-[320px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-transparent
                "
              />

              <div className="absolute bottom-0 p-8">
                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  {item.name}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
