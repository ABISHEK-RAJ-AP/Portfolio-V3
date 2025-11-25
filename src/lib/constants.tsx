import codenest from '@/assets/images/aitriplanner-cover.webp';
import caraura from '@/assets/images/thewaitercompany-cover.webp';
import fitsphereai from '@/assets/images/threepointonefour-cover.webp';

import Contact from '@/components/contact';
import Experiences from '@/components/experiences';
import Home from '@/components/home';
import Works from '@/components/works';

import { Section, SectionColors, Sections } from './types';

// -------------------------------------------------------------
// Animation Durations
// -------------------------------------------------------------
export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

// -------------------------------------------------------------
// EXPERIENCES (UPDATED + CORRECTED)
// -------------------------------------------------------------
export const experiences = [
  {
    date: 'Oct 2025 – Present',
    title: 'C-DAC Delhi',
    role: 'Project Associate (AI & Full Stack Development)',
    description:
      'Contributing to a sovereign multilingual AI chatbot under the Digital Census 2027 initiative, integrating Spring Boot, Rasa, PgVector, and vLLM for secure, scalable, and explainable LLM-powered interactions.',
  },
  {
    date: 'Feb 2025 – Aug 2025',
    title: 'C-DAC Delhi',
    role: 'WBL Intern (Full Stack Development)',
    description:
      'Engineered the CHMS (C-DAC Hiring Management System) using Spring Boot and React.js with JWT auth, RBAC, and bulk import for 10K+ candidate records. Built an AI-powered resume shortlisting pipeline using OCR, Transformer embeddings, and XGBoost. Developed multilingual dashboards with i18n, real-time PDF/Excel export, and created a conversational internal AI assistant using Spring Boot APIs, semantic search, and React UI.',
  },
  {
    date: 'Nov 2023 – May 2024',
    title: 'CodeJet',
    role: 'Software Engineer',
    description:
      'Contributed to full-stack development for client projects, building scalable and robust web applications using React and Node.js.',
  },
  {
    date: 'Jun 2024 – Jul 2024',
    title: 'Nanlogical Consultance Pvt Ltd',
    role: 'Junior Web Developer Intern',
    description:
      'Assisted in building data-driven web solutions, enhancing client business performance through analytics-driven feature development.',
  },
];

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
    title: 'CodeNest',
    subject: 'Realtime Collaborative Code Editor',
    description:
      'A real-time collaborative code editor built using Flask, React, and WebSockets, enabling seamless team coding with low-latency sync.',
    link: 'https://github.com/ABISHEK-RAJ-AP/CodeNest-Collaborative-Editor',
    techStack: ['Flutter', 'Firebase', 'Machine Learning', 'Google Cloud'],
  },
  {
    cover: fitsphereai,
    title: 'FitSphereAI',
    subject: 'AI-Driven Fitness Tracking',
    description:
      'AI-powered fitness assistant providing posture correction, real-time tracking, and personalized recommendations.',
    link: 'https://github.com/ABISHEK-RAJ-AP/FitSphereAI',
    techStack: ['TensorFlow', 'Streamlit', 'Python', 'Firebase'],
  },
  {
    cover: caraura,
    title: 'CarAura',
    subject: 'Mobile App Prototype for Electric Vehicles',
    description:
      'A smart vehicle management and safety companion app designed for EVs, improving driving efficiency and monitoring.',
    link: 'https://github.com/ABISHEK-RAJ-AP/CarAura-Mobiliothon4.0',
    techStack: ['Flutter', 'Google Maps API', 'AI', 'Node.js', 'Expo'],
  },
];

// -------------------------------------------------------------
// WORK SUBSECTIONS
// -------------------------------------------------------------
export const WORK_SUBSECTIONS = WORKS_ITEMS.length;
