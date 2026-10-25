import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete?: () => void;
  minDuration?: number; // default 1750ms (between 1.5s and 2.2s)
}

export default function WelcomeScreen({ onComplete, minDuration = 1800 }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Gokarna fleet...');

  useEffect(() => {
    // Prevent scrolling while welcome screen is active
    document.body.style.overflow = 'hidden';

    // Step-wise progress simulation matching authentic route verification
    const timer1 = setTimeout(() => {
      setProgress(45);
      setStatusText('Connecting coastal dispatch...');
    }, 350);

    const timer2 = setTimeout(() => {
      setProgress(85);
      setStatusText('Verifying tariffs & 24/7 airport routes...');
    }, 950);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText('Welcome to Atmabala Travels');
    }, minDuration - 250);

    // Sequence completion trigger
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, minDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(exitTimer);
      document.body.style.overflow = '';
    };
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="welcome-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to Atmabala Travels"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.92,
            filter: 'blur(10px)',
            transition: {
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier: snappy deceleration & smooth fade
            },
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#070D18] text-white overflow-hidden pointer-events-auto select-none"
        >
          {/* Subtle radial ambient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.85)_0%,#070D18_75%)] pointer-events-none" />

          {/* Central Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full"
          >
            {/* Ambient Logo Glow & Icon */}
            <div className="relative w-20 h-20 mb-5 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [0.9, 1.25, 0.9],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-[#FF6500] blur-xl"
              />

              <div className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 shadow-2xl flex items-center justify-center p-3.5">
                <motion.div
                  initial={{ rotate: -70, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Compass className="w-10 h-10 text-[#FF6500]" />
                </motion.div>
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase font-sans flex items-center gap-1.5"
            >
              <span>ATMABALA</span>
              <span className="text-[#FF6500]">TRAVELS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1.5 mb-6"
            >
              Gokarna &bull; Coastal Karnataka &bull; Goa
            </motion.p>

            {/* Smooth Progress Bar */}
            <div className="w-48 h-1.5 bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-[#FF6500] rounded-full shadow-[0_0_12px_rgba(255,101,0,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            {/* Dynamic Status Text */}
            <motion.div
              key={statusText}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium mt-3"
            >
              <Sparkles className="w-3 h-3 text-[#FF6500] animate-pulse" />
              <span>{statusText}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
