import { motion, type Variants } from "framer-motion";
import { Children, isValidElement, type ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 36, rotateX: 12, z: -30 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
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
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      style={{ transformPerspective: 1200 }}
    >
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <motion.div
            key={child.key ?? index}
            variants={item}
            className="contents"
          >
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
