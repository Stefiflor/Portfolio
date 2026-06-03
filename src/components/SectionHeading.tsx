type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
