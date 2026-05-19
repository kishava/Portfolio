type LottieAccentProps = {
  className?: string;
};

export function LottieAccent({ className = "" }: LottieAccentProps) {
  return (
    <div
      className={`relative ${className}`}
      aria-hidden
    >
      <span className="absolute inset-4 rounded-full bg-[oklch(0.78_0.14_195_/0.18)] blur-xl" />
      <span className="absolute inset-6 rounded-full border border-[oklch(0.78_0.14_195_/0.35)]" />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.86_0.1_195)] shadow-[0_0_28px_oklch(0.78_0.14_195/0.65)]" />
      <span className="absolute inset-2 rounded-full border border-white/10 motion-safe:animate-[spin_14s_linear_infinite]" />
    </div>
  );
}
