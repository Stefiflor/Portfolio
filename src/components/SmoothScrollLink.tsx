type SmoothScrollLinkProps = {
  href: string;
  label: string;
};

export default function SmoothScrollLink({ href, label }: SmoothScrollLinkProps) {
  return (
    <a href={href} className="whitespace-nowrap rounded-md px-1.5 py-1 text-xs font-medium text-slate-600 transition hover:bg-brand-rose/10 hover:text-brand-rose dark:text-slate-300 dark:hover:text-white xl:px-2 xl:text-sm">
      {label}
    </a>
  );
}
