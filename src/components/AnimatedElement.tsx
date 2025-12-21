"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "pop";
  stagger?: number;
  index?: number;
}

export default function AnimatedElement({
  children,
  className = "",
  delay = 0,
  direction = "fade",
  stagger = 0.1,
  index = 0,
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    pop: {
      hidden: { opacity: 0, scale: 0.5, y: 50 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={direction === "pop" 
        ? { 
            type: "spring" as const,
            stiffness: 200,
            damping: 15,
            delay: delay + index * stagger 
          }
        : { duration: 0.5, delay: delay + index * stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

