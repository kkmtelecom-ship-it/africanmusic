"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function CinematicReveal({
  children,
  delay = 0,
}: CinematicRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
