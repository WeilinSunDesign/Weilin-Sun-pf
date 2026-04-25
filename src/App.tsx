import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { id: '01', label: 'UX/UI Projects' },
  { id: '02', label: 'Other Projects' },
  { id: '03', label: 'Creative Computing' },
  { id: '04', label: 'About me' },
];

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">
      {/* Left Panel: Biography & Navigation */}
      <section className="relative flex w-1/2 flex-col border-r border-black bg-brand-cream">
        {/* Header */}
        <header className="flex h-20 items-center border-b border-black px-8">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-black">HOME</span>
        </header>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mb-10 font-serif text-6xl leading-[1.1] text-brand-black xl:text-7xl">
              Hello! I’m <br />
              Weilin.
            </h1>

            <div className="mb-16 max-w-md space-y-6 text-base leading-relaxed text-brand-black/80">
              <p>I design futures that are grounded in reality.</p>
              <p>
                I have a background in Material Science and Engineering, I approach design through
                both speculative thinking and real-world constraints.
              </p>
              <p>
                My work moves between speculative prototypes and real-world products—from exploring
                possible futures to building platforms used by thousands of users.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col space-y-5">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="group flex cursor-pointer items-center space-x-4"
                >
                  <span className="text-[10px] font-medium text-brand-gray transition-colors group-hover:text-brand-black">
                    {item.id}
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-brand-black transition-all group-hover:translate-x-1 group-hover:text-brand-gray">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Right Panel: Project Showcase */}
      <section className="relative flex w-1/2 flex-col bg-brand-black">
        {/* Header */}
        <header className="flex h-20 items-center justify-between px-8 text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-light tracking-tight"
          >
            Glocoy App Design
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <ArrowUpRight className="h-6 w-6 stroke-[1.5]" />
          </motion.div>
        </header>

        {/* Hero Image Container */}
        <div className="relative flex-1 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://picsum.photos/seed/portfolio/1200/1600" // Fallback high quality placeholder
            alt="Glocoy App Mockup"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay to match the purple/glassy aesthetic of the design */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent mix-blend-overlay" />
        </div>
      </section>
    </div>
  );
};

export default App;
