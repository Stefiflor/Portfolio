import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, Github, Linkedin, Sparkles, Layers, Globe } from 'lucide-react';
import { Route, Routes } from 'react-router-dom';
import LanguageSwitcher from './components/LanguageSwitcher';
import SectionHeading from './components/SectionHeading';
import SmoothScrollLink from './components/SmoothScrollLink';
import ThemeToggle from './components/ThemeToggle';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import TechBadge from './components/TechBadge';
import type { ExperienceItem, ProjectItem, TechGroup, AiItem } from './types';

const navIds = ['hero', 'about', 'experience', 'projects', 'technologies', 'automation', 'contact'] as const;

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    const preferred = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(preferred);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const navItems = useMemo(
    () => navIds.map((id, index) => ({ id, label: t(`nav.items.${index}`) })),
    [t]
  );

  const aboutParagraphs = useMemo(
    () => t('about.paragraphs', { returnObjects: true }) as string[],
    [t]
  );

  const experienceItems = useMemo(
    () => t('experience.items', { returnObjects: true }) as ExperienceItem[],
    [t]
  );

  const projectItems = useMemo(
    () => t('projects.items', { returnObjects: true }) as ProjectItem[],
    [t]
  );

  const technologyGroups = useMemo(
    () => t('technologies.groups', { returnObjects: true }) as TechGroup[],
    [t]
  );

  const aiHighlights = useMemo(
    () => t('automation.items', { returnObjects: true }) as AiItem[],
    [t]
  );

  const contact = useMemo(
    () => t('contact', { returnObjects: true }) as Record<string, string>,
    [t]
  );

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-surface text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 rounded-3xl border border-slate-200/70 bg-white/90 px-4 py-4 shadow-soft backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">FG</span>
              <span>Full Stack Developer</span>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <nav className="hidden items-center gap-4 md:flex">
                {navItems.map((item) => (
                  <SmoothScrollLink key={item.id} href={`#${item.id}`} label={item.label} />
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <LanguageSwitcher currentLanguage={i18n.language} onChange={handleLanguage} />
                {mounted ? <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> : null}
              </div>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  t={t}
                  navItems={navItems}
                  aboutParagraphs={aboutParagraphs}
                  experienceItems={experienceItems}
                  projectItems={projectItems}
                  technologyGroups={technologyGroups}
                  aiHighlights={aiHighlights}
                  contact={contact}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function Home({
  t,
  navItems,
  aboutParagraphs,
  experienceItems,
  projectItems,
  technologyGroups,
  aiHighlights,
  contact,
}: {
  t: (key: string, options?: Record<string, unknown>) => string;
  navItems: Array<{ id: string; label: string }>;
  aboutParagraphs: string[];
  experienceItems: ExperienceItem[];
  projectItems: ProjectItem[];
  technologyGroups: TechGroup[];
  aiHighlights: AiItem[];
  contact: Record<string, string>;
}) {
  return (
    <>
      <section id="hero" className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-soft backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95 sm:p-10">
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-brand/10 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              {t('hero.label')}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {t('hero.name')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/CV_Florencia_Gambero.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                <Download size={18} />
                {t('hero.buttons.cv')}
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-brand/20 bg-brand/5 px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand/10">
                <Linkedin size={18} />
                {t('hero.buttons.linkedin')}
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                <Github size={18} />
                {t('hero.buttons.github')}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-soft dark:border-slate-700/80 dark:bg-slate-900/85 sm:p-8">
            <div className="absolute right-4 top-4 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              {t('hero.card.tag')}
            </div>
            <div className="mb-6 h-[320px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
              <img src="/profile.jpg" alt="Florencia Gambero" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{t('hero.card.title')}</p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{t('hero.card.description')}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['hero.card.metric1', 'hero.card.metric2', 'hero.card.metric3'].map((key) => (
                  <div key={key} className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm dark:border-slate-800 dark:bg-slate-950">
                    <p className="font-semibold text-slate-950 dark:text-white">{t(`${key}.value`)}</p>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">{t(`${key}.label`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mt-16">
        <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} description={t('about.subtitle')} />
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-slate-50/80 p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/85">
            <div className="rounded-3xl bg-brand/5 p-5 text-slate-950 dark:bg-brand/10 dark:text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-brand">{t('about.focusTitle')}</p>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{t('about.focusDescription')}</p>
            </div>
            {['about.skill1', 'about.skill2', 'about.skill3'].map((key) => (
              <div key={key} className="rounded-3xl border border-slate-200/80 bg-white px-4 py-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{t(`${key}.title`)}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t(`${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} description={t('experience.subtitle')} />
        <Timeline
          items={experienceItems}
          labels={{
            responsibilities: t('experience.labels.responsibilities'),
            technologies: t('experience.labels.technologies'),
          }}
        />
      </section>

      <section id="projects" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} description={t('projects.subtitle')} />
        <div className="grid gap-6 xl:grid-cols-2">
          {projectItems.map((project) => (
            <ProjectCard key={project.name} project={project} viewMoreLabel={t('projects.viewMore')} />
          ))}
        </div>
      </section>

      <section id="technologies" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('technologies.eyebrow')} title={t('technologies.title')} description={t('technologies.subtitle')} />
        <div className="grid gap-4 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-950/95">
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="automation" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('automation.eyebrow')} title={t('automation.title')} description={t('automation.subtitle')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {aiHighlights.map((item) => (
            <motion.div whileHover={{ y: -4 }} key={item.title} className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft transition hover:border-brand/40 dark:border-slate-800/80 dark:bg-slate-950/95">
              <div className="inline-flex items-center gap-2 text-brand">
                <Sparkles size={20} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.subtitle')} />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/80 dark:bg-slate-950/95">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300">{t('contact.description')}</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${contact.email}`} className="block rounded-3xl border border-brand/20 bg-brand/5 px-5 py-4 text-sm font-semibold text-brand transition hover:bg-brand/10">{contact.email}</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="block rounded-3xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="block rounded-3xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800">GitHub</a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/85">
            <div className="space-y-4">
              <div className="rounded-3xl bg-brand/5 p-5 text-brand dark:bg-brand/10 dark:text-white">
                <h3 className="text-base font-semibold">{t('contact.cardTitle')}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{t('contact.cardDescription')}</p>
              </div>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>{t('contact.point1')}</p>
                <p>{t('contact.point2')}</p>
                <p>{t('contact.point3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200/70 pt-8 text-sm text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copy')}</p>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Globe size={16} />{t('footer.location')}
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers size={16} />{t('footer.focus')}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
