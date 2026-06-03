type SmoothScrollLinkProps = {
  href: string;
  label: string;
};

export default function SmoothScrollLink({ href, label }: SmoothScrollLinkProps) {
  return (
    <a href={href} className="text-sm font-medium text-slate-600 transition hover:text-brand dark:text-slate-300 dark:hover:text-white">
      {label}
    </a>
  );
}
