import type { LucideIcon } from "lucide-react";

interface SkillCategoryCardProps {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
}

export function SkillCategoryCard({
  title,
  items,
  icon: Icon,
}: SkillCategoryCardProps) {
  return (
    <article className="glass glass-hover rounded-2xl p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.78_0.14_195_/0.15)] text-[oklch(0.82_0.12_195)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span className="inline-block rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/80">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
