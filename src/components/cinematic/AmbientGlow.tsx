"use client";

import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        inset-0
        pointer-events-none
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c6a972]/10
          blur-[160px]
        "
      />
    </motion.div>
  );
}
