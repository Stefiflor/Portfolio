type TechBadgeProps = {
  label: string;
};

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200">
      {label}
    </span>
  );
}
