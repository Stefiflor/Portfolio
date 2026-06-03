import { ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../types';

type ProjectCardProps = {
  project: ProjectItem;
  viewMoreLabel: string;
};

export default function ProjectCard({ project, viewMoreLabel }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand/30 hover:bg-brand/5 dark:border-slate-800/80 dark:bg-slate-950/95 dark:hover:border-brand/40">
      <div className="mb-5 flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        <span>{project.name}</span>
        {project.status ? <span className="rounded-full bg-brand/10 px-3 py-1 text-xs text-brand">{project.status}</span> : null}
      </div>
      <div className="h-52 overflow-hidden rounded-3xl bg-slate-950/5 text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
        <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em]">Screenshot placeholder</div>
      </div>
      <p className="mt-6 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand">
        <span>{viewMoreLabel}</span>
        <ArrowRight size={16} />
      </div>
    </article>
  );
}
