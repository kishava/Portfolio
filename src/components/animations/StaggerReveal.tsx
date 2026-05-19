import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, isValidElement, type ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 1, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.03 },
  },
};

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className = "" }: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px", amount: 0.05 }}
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
