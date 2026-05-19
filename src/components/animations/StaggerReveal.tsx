import { motion, useInView, type Variants } from "framer-motion";
import { Children, isValidElement, useRef, type ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px", amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      style={{ transformPerspective: 1200 }}
    >
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <motion.div key={child.key ?? index} variants={item}>
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
