"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export default function HoverLift({
  children,
  className = "",
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
