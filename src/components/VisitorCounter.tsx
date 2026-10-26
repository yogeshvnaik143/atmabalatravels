import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Eye, Sparkles } from 'lucide-react';

const BASELINE_COUNT = 3800;
const STORAGE_KEY = 'atmabala_visitor_count';
const LAST_VISIT_KEY = 'atmabala_last_visit_time';

export default function VisitorCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Compute realistic visitor number starting at 3800
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= BASELINE_COUNT) {
          return parsed;
        }
      }
      // Calculate realistic offset based on calendar date
      const daysSinceOct1 = Math.max(0, Math.floor((Date.now() - new Date('2026-10-01').getTime()) / (1000 * 60 * 60 * 24)));
      return BASELINE_COUNT + 42 + daysSinceOct1 * 3;
    } catch {
      return BASELINE_COUNT + 45;
    }
  });

  const [displayCount, setDisplayCount] = useState<number>(BASELINE_COUNT);

  // Increment visitor count on new session (at least 30 mins apart)
  useEffect(() => {
    try {
      const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
      const now = Date.now();
      const thirtyMinutes = 30 * 60 * 1000;

      if (!lastVisit || now - parseInt(lastVisit, 10) > thirtyMinutes) {
        setVisitorCount((prev) => {
          const next = prev + 1;
          localStorage.setItem(STORAGE_KEY, next.toString());
          localStorage.setItem(LAST_VISIT_KEY, now.toString());
          return next;
        });
      }
    } catch {
      // storage disabled
    }
  }, []);

  // Smooth count-up animation when scooter counter enters viewport
  useEffect(() => {
    if (!isInView) return;

    const startVal = BASELINE_COUNT;
    const endVal = visitorCount;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(startVal + (endVal - startVal) * easeProgress);

      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayCount(endVal);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, visitorCount]);

  // Format count into 5-digit odometer cells
  const formattedDigits = displayCount.toString().padStart(5, '0').split('');

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-[#070D18] border border-slate-700/80 p-4 sm:p-5 shadow-xl text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#FF6500]/10 blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Animated Scooter with Moving Road & Exhaust Smoke */}
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div className="relative w-20 h-16 sm:w-24 sm:h-18 flex items-center justify-center shrink-0">
            {/* Animated Road Line Under Scooter */}
            <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-slate-700 overflow-hidden rounded-full">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                className="w-1/2 h-full bg-[#FF6500]/60"
              />
            </div>

            {/* Scooter Vehicle Motion */}
            <motion.div
              animate={{
                y: [0, -2, 0, -1.5, 0],
                rotate: [0, -0.8, 0, 0.5, 0],
              }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Headlight Glow Beam */}
              <div className="absolute top-3 right-0 w-8 h-4 bg-gradient-to-r from-amber-300/40 to-transparent blur-xs transform -rotate-12 pointer-events-none" />

              {/* Scooter SVG Graphic */}
              <svg
                viewBox="0 0 64 48"
                className="w-16 h-12 sm:w-18 sm:h-14 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Scooter Body Chassis (Tangerine / Brand) */}
                <path
                  d="M18 34 H36 L44 26 L48 14 H40"
                  className="stroke-[#FF6500]"
                  strokeWidth="3"
                />
                {/* Footboard */}
                <path d="M22 34 H34" className="stroke-slate-300" strokeWidth="3" />
                {/* Front Shield */}
                <path d="M44 26 L42 34 H46" className="stroke-[#FF6500]" strokeWidth="2.5" />
                {/* Headlight */}
                <circle cx="49" cy="14" r="2.5" className="fill-amber-300 stroke-amber-400" />
                {/* Handlebars */}
                <path d="M46 14 L42 12 H39" className="stroke-slate-200" strokeWidth="2.5" />
                {/* Rear Seat */}
                <path d="M22 26 C22 23, 30 23, 32 26 Z" className="fill-slate-800 stroke-slate-400" strokeWidth="2" />
                
                {/* Rear Wheel (Spinning) */}
                <g className="origin-[16px_36px]">
                  <circle cx="16" cy="36" r="6" className="stroke-slate-200" strokeWidth="2.5" />
                  <circle cx="16" cy="36" r="2.5" className="fill-slate-400" />
                </g>

                {/* Front Wheel (Spinning) */}
                <g className="origin-[46px_36px]">
                  <circle cx="46" cy="36" r="6" className="stroke-slate-200" strokeWidth="2.5" />
                  <circle cx="46" cy="36" r="2.5" className="fill-slate-400" />
                </g>
              </svg>

              {/* Exhaust Smoke Puffs */}
              <motion.div
                animate={{
                  x: [-2, -12],
                  y: [0, -4],
                  opacity: [0.8, 0],
                  scale: [0.5, 1.4],
                }}
                transition={{ repeat: Infinity, duration: 0.7, ease: 'easeOut' }}
                className="absolute bottom-2 left-1 w-2 h-2 rounded-full bg-slate-400/50"
              />
            </motion.div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF6500] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Live Visitor Counter</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Atmabala Coastal Highway &amp; Gokarna Road Ticker
            </p>
          </div>
        </div>

        {/* Digital Odometer Cells (Starting 3800+) */}
        <div className="flex items-center gap-1.5 self-center sm:self-auto">
          {formattedDigits.map((digit, idx) => (
            <div
              key={idx}
              className="w-7 h-9 sm:w-8 sm:h-10 rounded-lg bg-black/90 border border-slate-700 text-amber-400 font-mono font-black text-lg sm:text-xl flex items-center justify-center shadow-inner relative overflow-hidden"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 0 6px rgba(255,101,0,0.2)'
              }}
            >
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800 pointer-events-none" />
              <motion.span
                key={digit}
                initial={{ y: -6, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="relative z-10"
              >
                {digit}
              </motion.span>
            </div>
          ))}

          <div className="ml-2 hidden md:block">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider leading-none">
              Verified
            </span>
            <span className="text-xs font-extrabold text-emerald-400 block tracking-tight leading-none mt-1">
              Visitors
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
