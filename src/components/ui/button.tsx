"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-yellow-400 hover:bg-yellow-500 text-black shadow-md hover:shadow-lg",
      outline: "border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50",
      ghost: "hover:bg-yellow-50 text-black",
      gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black shadow-lg hover:shadow-xl hover:scale-105",
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 px-4 text-sm",
      lg: "h-12 px-8 text-lg",
    };

    const { onAnimationStart, ...restProps } = props as any;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...restProps}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };

