export type NavItem = {
  label: string;
  href: string;
};

export type Achievement = {
  value: string;
  title: string;
  text: string;
  project: string;
  detailTitle: string;
  detailSummary: string;
  detailBullets: string[];
  detailResult: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

export type FeaturedProject = {
  name: string;
  label: string;
  summary: string;
  period: string;
  team: string;
  stack: string[];
  github: string;
  website?: string;
  logo: string;
  points: string[];
  metrics: string[];
  modalSubtitle: string;
  modalOverview: string;
  modalSections: {
    title: string;
    items: string[];
  }[];
  modalResults: string[];
};

export type OtherProject = {
  name: string;
  summary: string;
  stack: string;
  period: string;
  team: string;
  github?: string;
  modalSubtitle: string;
  modalOverview: string;
  modalSections: {
    title: string;
    items: string[];
  }[];
  modalResults: string[];
};

export type Skill = {
  title: string;
  text: string;
  projects: string[];
  detailTitle: string;
  detailSummary: string;
  detailBullets: string[];
  highlight: string;
};

export type Activity = {
  years: ("2024" | "2025" | "2026")[];
  date: string;
  title: string;
  description: string;
  highlight?: string;
};

export type ContactLink = {
  label: string;
  href?: string;
};
