import Frame from '@/components/frame';
import Section from '@/components/section';
import { SectionProvider } from '@/components/section-provider';
import Cursor from '@/components/ui/cursor';
import { FuzzyOverlay } from '@/components/ui/fuzzy-overlay';
import { Metadata } from 'next';

export default function Page() {
 return (
  <main
   id="portfolio"
   className="h-full touch-none w-full relative overflow-hidden overscroll-none"
   style={{
    WebkitOverflowScrolling: 'auto',
   }}
  >
   <SectionProvider>
    <Frame />
    <Section />
    <FuzzyOverlay />
    <Cursor />
   </SectionProvider>
  </main>
 );
}

const siteUrl =
 process.env.NEXT_PUBLIC_WEBSITE_DOMAIN ?? 'https://portfolio-v3-git-main-abishekbalances-projects.vercel.app';

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: 'Abishek Raj A P | Portfolio',
 description:
  'AI & full-stack developer at C-DAC Delhi—multilingual RAG, assessment platforms, and production systems. Explore projects in Flutter, FastAPI, React, and more.',
 openGraph: {
  title: 'Abishek Raj A P | Portfolio',
  description:
   'AI & full-stack developer at C-DAC Delhi—multilingual RAG, assessment platforms, and production systems. Explore projects in Flutter, FastAPI, React, and more.',
  images: [
   {
    url: '/thumbnail.png',
    width: 1200,
    height: 630,
    alt: 'Abishek Raj A P Portfolio Thumbnail',
   },
  ],
  locale: 'en_IND',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Abishek Raj A P | Portfolio',
  description:
   'AI & full-stack developer at C-DAC Delhi—multilingual RAG, assessment platforms, and production systems. Explore projects in Flutter, FastAPI, React, and more.',
  images: ['/thumbnail.png'],
 },
};
