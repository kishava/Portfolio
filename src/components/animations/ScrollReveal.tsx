import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Stronger 3D tilt on scroll (hero / portrait). */
  depth?: "subtle" | "strong";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  depth = "subtle",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-48px",
    amount: 0.15,
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tilt = depth === "strong" ? 18 : 10;
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [tilt, 0, -tilt * 0.6],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [-tilt * 0.8, 0, tilt * 0.8],
  );
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-40, 0, -20]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          z,
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
