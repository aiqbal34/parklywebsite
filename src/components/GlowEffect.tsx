"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowEffect({ children, className = "" }: GlowEffectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-lg blur-xl -z-10"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

