import type { ActivityItem as ActivityItemType } from "../data/siteContent";

interface ActivityCardProps {
  activity: ActivityItemType;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="glass glass-hover rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-semibold text-white">{activity.title}</h3>
        <p className="shrink-0 text-xs font-medium uppercase tracking-wider text-white/45">
          {activity.period}
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {activity.description}
      </p>
    </article>
  );
}
