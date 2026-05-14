interface TimelineCardProps {
  title: string;
  subtitle: string;
  period: string;
  bullets?: readonly string[];
}

export function TimelineCard({
  title,
  subtitle,
  period,
  bullets,
}: TimelineCardProps) {
  return (
    <article className="glass glass-hover rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-[oklch(0.78_0.12_195)]">{subtitle}</p>
        </div>
        <p className="mt-1 shrink-0 text-xs font-medium uppercase tracking-wider text-white/45 sm:mt-0 sm:text-right">
          {period}
        </p>
      </div>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex gap-2 text-sm leading-relaxed text-white/65"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.78_0.14_195)]"
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
