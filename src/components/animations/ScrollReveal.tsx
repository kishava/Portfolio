import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Slightly larger entrance motion for hero blocks. */
  depth?: "subtle" | "strong";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  depth = "subtle",
}: ScrollRevealProps) {
  const y = depth === "strong" ? 32 : 24;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
