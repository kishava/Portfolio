/**
 * Ambient background orbs (static — avoids anime.js DOM conflicts with React).
 */
export function AnimeScrollOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute -left-16 top-[18%] h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 195 / 0.55), transparent 68%)",
        }}
      />
      <div
        className="absolute -right-20 top-[42%] h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.5 0.12 280 / 0.45), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[12%] left-[30%] h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.14 195 / 0.4), transparent 65%)",
        }}
      />
    </div>
  );
}
