export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  project: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies: string[];
  status?: string;
};

export type TechGroup = {
  title: string;
  items: string[];
};

export type AiItem = {
  title: string;
  description: string;
  tag: string;
};
