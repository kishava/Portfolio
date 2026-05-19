import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { LottieAccent } from "./LottieAccent";

type ProfilePortraitProps = {
  src: string;
  alt: string;
};

export function ProfilePortrait({ src, alt }: ProfilePortraitProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 22,
  });

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [24, -32]);
  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.97],
  );

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={frameRef}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
      style={{
        y: scrollY,
        scale: scrollScale,
        transformPerspective: 1200,
      }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        className="relative aspect-[3/4] w-full"
        style={{
          rotateX,
          rotateY,
          rotateZ: scrollRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.14 195 / 0.45), oklch(0.4 0.08 280 / 0.25))",
            transform: "translateZ(-24px)",
          }}
          aria-hidden
        />

        <div className="glass relative h-full overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_32px_64px_-24px_oklch(0_0_0/0.55)]">
          <img
            src={src}
            alt={alt}
            width={400}
            height={533}
            className="h-full w-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_260_/0.55)] via-transparent to-transparent"
            style={{ transform: "translateZ(2px)" }}
            aria-hidden
          />
        </div>

        <div className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 sm:h-28 sm:w-28">
          <LottieAccent className="h-full w-full drop-shadow-[0_0_24px_oklch(0.78_0.14_195/0.35)]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
