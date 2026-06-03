import { BriefcaseBusiness } from 'lucide-react';
import type { ProjectItem } from '../types';

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group tech-panel relative overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40 hover:shadow-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-rose via-brand-blush to-brand" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-rose/20 bg-brand-blush/45 text-brand-rose dark:bg-brand-rose/10">
            <BriefcaseBusiness size={20} />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{project.name}</h3>
            {project.status ? <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-rose">{project.status}</p> : null}
          </div>
        </div>
      </div>
      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-md border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
