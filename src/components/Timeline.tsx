import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import type { ExperienceItem } from '../types';

type TimelineProps = {
  items: ExperienceItem[];
  labels: {
    responsibilities: string;
    technologies: string;
  };
};

export default function Timeline({ items, labels }: TimelineProps) {
  return (
    <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-brand before:via-slate-300 before:to-transparent dark:before:via-slate-700 sm:before:block">
      {items.map((item, index) => (
        <motion.article
          key={`${item.company}-${item.period}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="tech-panel relative rounded-lg p-6 sm:ml-14"
        >
          <div className="absolute -left-[4.35rem] top-6 hidden h-10 w-10 items-center justify-center rounded-lg border border-brand/30 bg-surface text-sm font-bold text-brand shadow-glow dark:bg-surface-soft sm:flex">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
            <div className="flex items-center gap-3 text-brand">
              <div className="rounded-lg border border-brand/20 bg-brand/10 p-3 text-brand">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{item.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.role}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.project}</p>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{labels.responsibilities}</p>
              <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{labels.technologies}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span key={technology} className="rounded-md border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
