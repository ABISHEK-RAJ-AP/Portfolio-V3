import codenest from '@/assets/images/aitriplanner-cover.webp';
import caraura from '@/assets/images/thewaitercompany-cover.webp';
import fitsphereai from '@/assets/images/threepointonefour-cover.webp';
import Contact from '@/components/contact';
import Experiences from '@/components/experiences';
import Home from '@/components/home';
import Works from '@/components/works';
import { Section, SectionColors, Sections } from './types'; // ensure these are properly defined
// Define animation durations first to avoid initialization issues
export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

// Define experiences
export const experiences = [
  {
    date: 'Jan 2025-Present',
    title: 'CDAC Delhi',
    role: 'Software Engineer (Backend & AI) Intern',
    description: 'Worked on advanced technologies in data analytics and software development under the guidance of industry experts.',
  },
  {
    date: 'Nov 2023 - May 2024',
    title: 'CodeJet',
    role: 'Software Engineer',
    description: 'Contributed to full-stack development for client projects, focusing on creating scalable and robust web applications.',
  },
  {
    date: 'Jun 2024 - July 2024',
    title: 'Nanlogical Consultance Pvt Ltd',
    role: 'Junior Web Developer Intern',
    description: 'Assisted in building data-driven solutions for clients, focusing on enhancing business performance through advanced analytics.',
  },
];

// Define sections with proper structure
export const SECTIONS: Section[] = [
  { content: <Home />, title: 'Home' },
  { content: <Works />, title: 'Works' },
  { content: <Experiences />, title: 'Experiences' },
  { content: <Contact />, title: 'Contact' },
];

// Define themes for different sections
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

// Define section theme mapping
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

// Define works items
export const WORKS_ITEMS = [
  {
    cover: codenest,
    title: 'CodeNest',
    subject: 'Realtime Collaborative Code Editor',
    description: "CodeNest is a real-time collaborative code editor built with Flask, React, and WebSockets, enabling seamless team collaboration on coding projects.",
    link: 'https://github.com/ABISHEK-RAJ-AP/CodeNest-Collaborative-Editor',
    techStack: ['Flutter', 'Firebase', 'Machine Learning', 'Google Cloud'],
  },
  {
    cover: fitsphereai,
    title: 'FitSphereAI',
    subject: 'AI-Driven Fitness Tracking',
    description: "FitSphere AI uses AI to provide real-time fitness tracking, posture correction, and personalized fitness recommendations.",
    link: 'https://github.com/ABISHEK-RAJ-AP/FitSphereAI',
    techStack: ['TensorFlow', 'Streamlit', 'Python', 'Firebase'],
  },
  {
    cover: caraura,
    title: 'CarAura',
    subject: 'Mobile App Prototype for Electric Vehicles',
    description: "CarAura is an app that enhances vehicle management, improves driving efficiency, and ensures driver safety for EVs and cars.",
    link: 'https://github.com/ABISHEK-RAJ-AP/CarAura-Mobiliothon4.0',
    techStack: ['Flutter', 'Google Maps API', 'AI', 'Node.js', 'Expo'],
  },
];

// Define number of subsections for works
export const WORK_SUBSECTIONS = WORKS_ITEMS.length;  // Ensure correct length reference
