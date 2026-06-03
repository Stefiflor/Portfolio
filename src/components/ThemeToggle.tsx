import { Moon, Sun } from 'lucide-react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/85 text-slate-900 shadow-sm backdrop-blur transition hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand/50"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
