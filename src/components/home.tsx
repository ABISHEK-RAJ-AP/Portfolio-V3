'use client';

import { useSection } from '@/lib/hooks';
import { Sections } from '@/lib/types';
import { useEffect } from 'react';
import { BubbleText } from './ui/bubble-text';

const glitchConfig = {
 playMode: 'never',
 createContainers: true,
 hideOverflow: false,
 timing: {
  duration: 3950,
 },
 glitchTimeSpan: {
  start: 0.5,
  end: 0.7,
 },
 shake: {
  velocity: 15,
  amplitudeX: 0.2,
  amplitudeY: 0.2,
 },
 slice: {
  count: 6,
  velocity: 15,
  minHeight: 0.02,
  maxHeight: 0.15,
  hueRotate: true,
 },
 pulse: false,
};

export default function Home() {
 const { setSectionIndex } = useSection();

 useEffect(() => {
  const loadGlitch = async () => {
   const { PowerGlitch } = await import('powerglitch');
   PowerGlitch.glitch('#cover', glitchConfig);
  };

  loadGlitch();
 }, []);

 return (
  <div className="flex flex-col items-center justify-center h-full w-full -z-20 gap-10">
   
   {/* Your Name at the Top */}
   <div className="relative flex flex-col items-center justify-center">
    <BubbleText
     className="text-[calc(100vw/6)] font-light text-theme-primary -z-10 relative leading-tight"
     text="Abishek"
    />
   </div>

   {/* Tagline Below */}
   <p className="text-xl sm:text-3xl text-white text-center mt-5 px-4">
   Where 
    <span className="text-theme-primary">
     <i>{` creativity `}</i>
    </span>
    meets code—crafting solutions that matter.
   </p>

   {/* Contact Button - Now with Smooth Hover & Responsive Fix */}
   <button
    onClick={() => {
     setSectionIndex(Sections.Contact);
    }}
    className="text-theme-background text-lg rounded-full bg-white text-theme-4 hover:bg-theme-accent font-semibold hover:text-white px-8 sm:px-24 py-3 transition-all duration-300 ease-in-out hover:px-32 hover:scale-110 hover:tracking-widest hover:shadow-2xl shadow-white active:brightness-80 mt-6"
   >
    Contact me
   </button>

  </div>
 );
}
