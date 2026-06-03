import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Bot, Code2, Download, Github, Linkedin, Mail, MessageCircle, Sparkles, Layers, Globe, Terminal, Zap } from 'lucide-react';
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
    <div className="min-h-screen text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-40 rounded-lg border border-white/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/85 sm:px-5">
          <div className="flex flex-nowrap items-center justify-between gap-3">
            <div className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-brand-blush shadow-glow dark:bg-white dark:text-slate-950">FG</span>
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
              <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex">
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
  const softSkills = t('hero.card.softSkills', { returnObjects: true }) as unknown as string[];

  return (
    <>
      <section id="hero" className="relative mt-5 overflow-hidden rounded-lg border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/85 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-rose to-transparent" />
        <div className="absolute -right-12 top-16 hidden h-44 w-44 rotate-12 border border-brand-blush/40 dark:block" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex border-l-2 border-brand-rose bg-brand-blush/50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-brand-rose dark:bg-brand-rose/15">
              {t('hero.label')}
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              {t('hero.name')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/CV_Florencia_Gambero.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:border-brand-rose dark:bg-brand-rose dark:hover:bg-brand-pulse">
                <Download size={18} />
                {t('hero.buttons.cv')}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-rose/20 bg-brand-blush/45 text-brand-rose transition hover:-translate-y-0.5 hover:bg-brand-blush/70 dark:bg-brand-rose/10">
                <Linkedin size={18} />
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 text-brand transition hover:-translate-y-0.5 hover:bg-brand/15">
                <MessageCircle size={20} />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-300 bg-white/80 text-slate-900 transition hover:-translate-y-0.5 hover:border-brand/40 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                <Github size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 md:hidden">
              {navItems.slice(1, 5).map((item) => (
                <SmoothScrollLink key={item.id} href={`#${item.id}`} label={item.label} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative rounded-lg border border-brand-blush/70 bg-slate-950 p-4 shadow-glow dark:border-white/10">
            <div className="absolute right-6 top-6 z-10 rounded-md border border-brand-blush/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blush backdrop-blur">
              {t('hero.card.tag')}
            </div>
            <div className="relative mb-5 h-[340px] overflow-hidden rounded-lg border border-white/10 bg-slate-900">
              <img src="/profile.jpg" alt="Florencia Gambero" className="h-full w-full object-cover grayscale-[15%]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-blush">{t('hero.card.title')}</p>
              <p className="text-base leading-7 text-slate-300">{t('hero.card.description')}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div key={skill} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <p className="font-semibold text-white">{skill}</p>
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
          <div className="tech-panel space-y-6 rounded-lg p-7">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-brand-rose/20 bg-brand-blush/45 p-5 text-slate-950 shadow-soft dark:bg-brand-rose/10 dark:text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-rose">{t('about.focusTitle')}</p>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{t('about.focusDescription')}</p>
            </div>
            {['about.skill1', 'about.skill2', 'about.skill3'].map((key, index) => (
              <div key={key} className="tech-panel rounded-lg px-4 py-5">
                <p className="flex items-center gap-3 text-sm font-semibold text-slate-950 dark:text-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-950 text-xs text-brand-blush dark:bg-white/10">0{index + 1}</span>
                  {t(`${key}.title`)}
                </p>
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
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section id="technologies" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('technologies.eyebrow')} title={t('technologies.title')} description={t('technologies.subtitle')} />
        <div className="grid gap-4 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <div key={group.title} className="tech-panel rounded-lg p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-rose/20 bg-brand-blush/45 text-brand-rose dark:bg-brand-rose/10">
                  <Code2 size={19} />
                </span>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">{group.title}</h3>
              </div>
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
          {aiHighlights.map((item, index) => {
            const Icon = index === 0 ? Bot : index === 1 ? Sparkles : Zap;
            return (
            <motion.div whileHover={{ y: -4 }} key={item.title} className="tech-panel rounded-lg p-6 transition hover:border-brand-rose/40 hover:shadow-glow">
              <div className="inline-flex items-center gap-2 text-brand-rose">
                <Icon size={20} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section-border" />
      <section>
        <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.subtitle')} />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.7fr]">
          <div className="tech-panel rounded-lg p-7">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300">{t('contact.description')}</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-lg border border-brand-rose/20 bg-brand-blush/45 px-5 py-4 text-sm font-semibold text-brand-rose transition hover:border-brand-rose/40 hover:bg-brand-blush/70 dark:bg-brand-rose/10">
                <Mail size={18} />{contact.email}
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-brand/25 bg-brand/10 px-5 py-4 text-sm font-semibold text-brand transition hover:border-brand/45 hover:bg-brand/15">
                <MessageCircle size={18} />WhatsApp
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/60 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:border-brand-rose/40 hover:text-brand-rose dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                <Linkedin size={18} />LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/60 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:border-brand-rose/40 hover:text-brand-rose dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                <Github size={18} />GitHub
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-slate-950 bg-slate-950 p-6 text-white shadow-glow dark:border-brand/20">
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center gap-2 text-brand-blush">
                  <Terminal size={18} />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Ready to ship</span>
                </div>
                <h3 className="text-base font-semibold">{t('contact.cardTitle')}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{t('contact.cardDescription')}</p>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <p className="border-l border-brand-rose pl-3">{t('contact.point1')}</p>
                <p className="border-l border-brand-electric pl-3">{t('contact.point2')}</p>
                <p className="border-l border-brand-pulse pl-3">{t('contact.point3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200/70 pt-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
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
