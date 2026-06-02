export type Experience = {
  date: string;
  title: string;
  subtitle?: string;
  role: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    date: 'Nov 2025 – Present',
    title: 'C-DAC Delhi',
    subtitle: 'Centre for Development of Advanced Computing · MeitY, GoI',
    role: 'AI & Full Stack Developer',
    highlights: [
      'Delivered a production multilingual RAG chatbot for government policy and census information, providing conversational access to public services across multiple languages.',
      'Developed an AI-powered assessment platform covering end-to-end examination workflows—intelligent question generation, live proctored delivery, and real-time leaderboards for large-scale institutional use.',
      'Designed a certificate issuance system with configurable templates, automated data population, and QR-based verification.',
      'Engineered a content processing pipeline combining web crawling, automated classification, and editorial review workflows.',
      'Created a desktop photo management application with image quality analysis, duplicate detection, and face-based organization.',
      'Modernized legacy e-governance applications for visitor management, workshop registration, and certification workflows.',
      'Supporting Qniverse quantum computing simulator outreach—institutional onboarding, CoE partnerships, and capacity-building workshops across Delhi-NCR universities.',
    ],
  },
  {
    date: 'Feb 2025 – Aug 2025',
    title: 'C-DAC Delhi',
    subtitle: 'Delhi, India',
    role: 'Full Stack Developer Intern',
    highlights: [
      'Built a full-stack recruitment management system (Spring Boot + React.js + PostgreSQL) automating hiring from application intake to candidate status tracking.',
      'Implemented an intelligent document processing pipeline (OCR + ML classification) for high-volume candidate screening and accelerated shortlisting.',
    ],
  },
];
