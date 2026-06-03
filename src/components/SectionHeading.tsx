type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="inline-flex border-l-2 border-brand bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand dark:bg-brand/15">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
