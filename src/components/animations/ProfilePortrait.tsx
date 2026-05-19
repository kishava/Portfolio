import { PortraitAccent } from "./PortraitAccent";

type ProfilePortraitProps = {
  src: string;
  alt: string;
};

export function ProfilePortrait({ src, alt }: ProfilePortraitProps) {
  return (
    <div className="group relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
      <div className="relative aspect-[3/4] w-full transition-transform duration-300 motion-safe:group-hover:scale-[1.02]">
        <div
          className="absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.14 195 / 0.45), oklch(0.4 0.08 280 / 0.25))",
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
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_260_/0.55)] via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <div className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 sm:h-28 sm:w-28">
          <PortraitAccent className="h-full w-full drop-shadow-[0_0_24px_oklch(0.78_0.14_195/0.35)]" />
        </div>
      </div>
    </div>
  );
}
