import { ExternalLink, FolderGit2 } from "lucide-react";
import type { Project as ProjectType } from "../data/siteContent";

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass glass-hover flex h-full flex-col rounded-2xl p-5 sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.78_0.14_195_/0.12)] text-[oklch(0.82_0.12_195)]">
            <FolderGit2 className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="text-lg font-semibold leading-snug text-white">
              {project.title}
            </h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/40">
              {project.year}
            </p>
          </div>
        </div>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">
        {project.description}
      </p>
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[oklch(0.78_0.14_195_/0.35)] bg-[oklch(0.78_0.14_195_/0.1)] py-3 text-sm font-semibold text-white transition hover:bg-[oklch(0.78_0.14_195_/0.18)]"
      >
        View on GitHub
        <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
      </a>
    </article>
  );
}
