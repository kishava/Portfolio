import { animate, onScroll, type JSAnimation } from "animejs";
import { useEffect, useRef } from "react";

/**
 * Ambient orbs driven by page scroll via anime.js ScrollObserver sync.
 */
export function AnimeScrollOrbs() {
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);
  const orbC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [orbA.current, orbB.current, orbC.current].filter(
      Boolean,
    ) as HTMLDivElement[];
    if (targets.length === 0) return;

    const animations: JSAnimation[] = [
      animate(targets[0], {
        translateY: [-48, 120],
        translateX: [-20, 40],
        rotate: [0, 140],
        scale: [0.85, 1.2],
        ease: "linear",
        autoplay: false,
      }),
      animate(targets[1], {
        translateY: [60, -90],
        translateX: [30, -50],
        rotate: [20, -100],
        scale: [1.1, 0.75],
        ease: "linear",
        autoplay: false,
      }),
    ];

    if (targets[2]) {
      animations.push(
        animate(targets[2], {
          translateY: [-30, 80],
          rotate: [-30, 90],
          scale: [0.9, 1.05],
          ease: "linear",
          autoplay: false,
        }),
      );
    }

    const observer = onScroll({
      target: document.documentElement,
      sync: true,
      onUpdate: (self) => {
        const p = self.progress;
        for (const anim of animations) {
          anim.seek(p * anim.duration);
        }
      },
    });

    return () => {
      observer.revert();
      for (const anim of animations) anim.revert();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        ref={orbA}
        className="absolute -left-16 top-[18%] h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 195 / 0.55), transparent 68%)",
        }}
      />
      <div
        ref={orbB}
        className="absolute -right-20 top-[42%] h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.5 0.12 280 / 0.45), transparent 70%)",
        }}
      />
      <div
        ref={orbC}
        className="absolute bottom-[12%] left-[30%] h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.14 195 / 0.4), transparent 65%)",
        }}
      />
    </div>
  );
}
