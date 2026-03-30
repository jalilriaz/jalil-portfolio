"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowingButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function GlowingButton({
  children,
  className,
  variant = "primary",
  ...props
}: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group inline-flex items-center justify-center px-8 py-3 font-medium rounded-full overflow-hidden transition-all",
        variant === "primary"
          ? "bg-white text-black"
          : "glass-panel text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {/* Outer glow effect for primary variant */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:animate-glow rounded-full transition-opacity duration-300" />
      )}
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
