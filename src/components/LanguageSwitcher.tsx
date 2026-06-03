import { Globe } from 'lucide-react';

type LanguageSwitcherProps = {
  currentLanguage: string;
  onChange: (language: string) => void;
};

export default function LanguageSwitcher({ currentLanguage, onChange }: LanguageSwitcherProps) {
  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      <Globe size={16} />
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => onChange(language.code)}
          className={`rounded-md px-2 py-1 transition ${currentLanguage === language.code ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
