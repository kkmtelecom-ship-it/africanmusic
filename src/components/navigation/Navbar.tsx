"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { motion } from "framer-motion";

const centerLinks = ["HOME", "ARTISTS", "MUSIC", "VIDEOS", "EVENTS"];

const rightLinks = ["MERCH", "RADIO", "FANCLUB"];

const megaMenuLinks = ["CULTURE", "MARKETPLACE", "AFRICAN MUSIC AWARDS"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-black/60 bg-black/60 backdrop-blur-2xl transition-all duration-500"
      >
        <div className="container-width flex h-24 items-center justify-between">
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#c6a972]" />

            <h1 className="text-xl font-black tracking-[0.35em] text-[#c6a972] md:text-2xl">
              AFRICANMUSIC
            </h1>
          </div>

          {/* CENTER NAVIGATION */}

          <nav className="hidden xl:flex items-center gap-10">
            {centerLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-[11px] font-semibold tracking-[0.3em] text-white/70 transition duration-300 hover:text-[#c6a972]"
              >
                {item}

                <span className="absolute -bottom-3 left-0 h-[1px] w-0 bg-[#c6a972] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center gap-8">
            {rightLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] font-semibold tracking-[0.25em] text-white/60 transition hover:text-[#c6a972]"
              >
                {item}
              </a>
            ))}

            {/* MEGA MENU BUTTON */}

            <div className="group relative">
              <button className="rounded-full border border-white/10 px-5 py-2 text-[11px] font-semibold tracking-[0.25em] text-white/70 transition hover:border-[#c6a972] hover:text-[#c6a972]">
                MENU
              </button>

              {/* DROPDOWN */}

              <div className="absolute right-0 top-14 hidden min-w-[260px] rounded-3xl border border-white/10 bg-black/95 p-6 backdrop-blur-2xl group-hover:block">
                <div className="flex flex-col gap-5">
                  {megaMenuLinks.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-[11px] font-semibold tracking-[0.25em] text-white/60 transition hover:text-[#c6a972]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center lg:hidden"
          >
            <Menu className="h-7 w-7 text-[#c6a972]" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* TOP */}

          <div className="flex items-center justify-between border-b border-white/10 p-8">
            <h1 className="text-xl font-black tracking-[0.35em] text-[#c6a972]">
              AFRICANMUSIC
            </h1>

            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-8 w-8 text-white" />
            </button>
          </div>

          {/* MOBILE LINKS */}

          <div className="flex flex-1 flex-col justify-center gap-8 px-10">
            {[...centerLinks, ...rightLinks, ...megaMenuLinks].map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-bold tracking-[0.2em] text-white/80 transition hover:text-[#c6a972]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
