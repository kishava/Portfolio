import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  depth?: "subtle" | "strong";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  depth = "subtle",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const y = depth === "strong" ? 20 : 14;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px", amount: 0.05 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
