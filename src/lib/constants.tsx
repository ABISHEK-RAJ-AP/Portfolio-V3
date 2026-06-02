import codenest from '@/assets/images/aitriplanner-cover.webp';
import caraura from '@/assets/images/thewaitercompany-cover.webp';
import fitsphereai from '@/assets/images/threepointonefour-cover.webp';

import Contact from '@/components/contact';
import Experiences from '@/components/experiences';
import Home from '@/components/home';
import Works from '@/components/works';

import { Section, SectionColors, Sections } from './types';

export { experiences, EXPERIENCE_HEADLINE } from './experience-data';

// -------------------------------------------------------------
// Animation Durations
// -------------------------------------------------------------
export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

// -------------------------------------------------------------
// SECTIONS
// -------------------------------------------------------------
export const SECTIONS: Section[] = [
  { content: <Home />, title: 'Home' },
  { content: <Works />, title: 'Works' },
  { content: <Experiences />, title: 'Experiences' },
  { content: <Contact />, title: 'Contact' },
];

// -------------------------------------------------------------
// THEMES
// -------------------------------------------------------------
export const THEMES: Record<string, SectionColors> = {
  main: {
    background: 'var(--theme-1-background)',
    primary: 'var(--theme-1-primary)',
    secondary: 'var(--theme-1-secondary)',
    accent: 'var(--theme-1-accent)',
  },
  codenest: {
    background: 'var(--theme-2-background)',
    primary: 'var(--theme-2-primary)',
    secondary: 'var(--theme-2-secondary)',
    accent: 'var(--theme-2-accent)',
  },
  fitsphereai: {
    background: 'var(--theme-3-background)',
    primary: 'var(--theme-3-primary)',
    secondary: 'var(--theme-3-secondary)',
    accent: 'var(--theme-3-accent)',
  },
  caraura: {
    background: 'var(--theme-4-background)',
    primary: 'var(--theme-4-primary)',
    secondary: 'var(--theme-4-secondary)',
    accent: 'var(--theme-4-accent)',
  },
  experiences: {
    background: 'var(--theme-5-background)',
    primary: 'var(--theme-5-primary)',
    secondary: 'var(--theme-5-secondary)',
    accent: 'var(--theme-5-accent)',
  },
};

// -------------------------------------------------------------
// SECTION THEME MAP
// -------------------------------------------------------------
export const SECTION_THEME_MAP: {
  [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
  [Sections.Home]: THEMES.main,
  [Sections.Works]: {
    0: THEMES.codenest,
    1: THEMES.fitsphereai,
    2: THEMES.caraura,
  },
  [Sections.Experience]: THEMES.experiences,
  [Sections.Contact]: THEMES.main,
};

// -------------------------------------------------------------
// WORK ITEMS
// -------------------------------------------------------------
export const WORKS_ITEMS = [
  {
    cover: codenest,
    title: 'Reviro AI',
    subject: 'Inventory Intelligence System · ICERCS2024',
    description:
      'AI-powered inventory optimization using ARIMA and LSTM forecasting for perishable goods, with dynamic pricing and end-to-end mobile, analytics, and retailer–consumer workflows.',
    link: 'https://github.com/ABISHEK-RAJ-AP',
    techStack: ['Flutter', 'TensorFlow Lite', 'Firebase', 'ARIMA', 'LSTM'],
  },
  {
    cover: fitsphereai,
    title: 'OmniQuery',
    subject: 'Multilingual Site Intelligence Layer',
    description:
      'Autonomous platform that crawls, indexes, and semantically queries websites across 22 Indian languages—source-grounded citizen query resolution via a lightweight embeddable widget.',
    link: 'https://github.com/ABISHEK-RAJ-AP',
    techStack: ['Python', 'FastAPI', 'React', 'Qdrant', 'Redis', 'Sarvam LLM'],
  },
  {
    cover: caraura,
    title: 'PMC Meeting Hub',
    subject: 'Meeting Intelligence Platform',
    description:
      'AI-generated reports, action-item tracking, and real-time multi-user collaboration—plus priority matrix, velocity dashboards, and cross-meeting analytics in a secure Windows desktop app.',
    link: 'https://github.com/ABISHEK-RAJ-AP',
    techStack: ['Electron', 'React', 'FastAPI', 'Socket.IO'],
  },
];

// -------------------------------------------------------------
// WORK SUBSECTIONS
// -------------------------------------------------------------
export const WORK_SUBSECTIONS = WORKS_ITEMS.length;
