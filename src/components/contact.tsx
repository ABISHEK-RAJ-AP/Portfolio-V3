'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NeonFigure from './neon-figure';

const quotes = [
  "Nothing is random—every connection has a purpose.",
  "Every encounter shapes the path forward.",
  "Chance is just a word—everything happens for a reason.",
  "Life connects the right people at the right time.",
  "Every interaction is a step toward something greater.",
  "You hire an engineer when you have a problem. You hire me when you don’t even know what the problem is."
];

export default function Contact() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-start p-8 mt-12 bg-theme-accent relative rounded-2xl mx-5 shadow-lg max-w-3xl"
    >
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-theme-primary mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-white mb-4"
        >
          {`Whether you have a challenge to solve, an idea to explore, or just want to brainstorm something exciting—let’s connect and make things happen!`}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          href="mailto:apabishekraj@gmail.com"
          className="text-xl font-semibold text-theme-primary underline mb-6 hoverable "
        >
          apabishekraj@gmail.com
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="p-4 mt-8 rounded-xl right-5 left-5 z-30 lg:absolute bottom-5 bg-theme-background bg-opacity-20 shadow-md flex flex-col items-start"
        >
          <span className="text-4xl text-theme-primary">❝</span>
          <p className="text-lg italic text-white mb-2">
            {quotes[quoteIndex]}
          </p>
          <p className="text-sm text-theme-primary font-semibold self-end">
            — AP
          </p>
        </motion.div>
      </div>
      <div className="relative bottom-20 hidden lg:block">
        <NeonFigure />
      </div>
    </motion.div>
  );
}
