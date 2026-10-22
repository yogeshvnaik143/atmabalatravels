import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'compact' | 'pill' | 'switch';
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({
  variant = 'icon',
  className = '',
  showLabel = false
}: ThemeToggleProps) {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'switch') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Current mode: ${isDark ? 'Dark' : 'Light'}. Click to switch.`}
        className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:ring-offset-2 ${
          isDark ? 'bg-[#FF6500]' : 'bg-slate-300'
        } ${className}`}
      >
        <span className="sr-only">Toggle theme</span>
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`pointer-events-none flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transform transition duration-200 ease-in-out ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-[#0B192C]" />
          ) : (
            <Sun className="h-4 w-4 text-[#FF6500]" />
          )}
        </motion.span>
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]/50 ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-700/90 text-amber-400 border-slate-700 shadow-sm shadow-black/20'
          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200/90 shadow-2xs hover:text-[#0B192C]'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark-sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            </motion.div>
          ) : (
            <motion.div
              key="light-moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="w-4 h-4 text-slate-700 fill-slate-700/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-bold tracking-tight">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </motion.button>
  );
}
