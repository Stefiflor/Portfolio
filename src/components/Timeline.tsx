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
    <div className="space-y-8">
      {items.map((item) => (
        <motion.article
          key={`${item.company}-${item.period}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/80 dark:bg-slate-950/95"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
            <div className="flex items-center gap-3 text-brand">
              <div className="rounded-2xl bg-brand/10 p-3 text-brand">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{item.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
              </div>
            </div>
            <div className="text-right">
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
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{labels.technologies}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200">
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
