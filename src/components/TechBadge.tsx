type TechBadgeProps = {
  label: string;
};

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-md border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm transition hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      {label}
    </span>
  );
}
