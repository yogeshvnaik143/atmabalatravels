import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'compact' | 'pill' | 'switch';
  className?: string;
  showLabel?: boolean;
  id?: string;
}

export default function ThemeToggle({
  variant = 'icon',
  className = '',
  showLabel = false,
  id = 'theme-toggle-btn'
}: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

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
      id={id}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center rounded-full border transition-all duration-200 cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]/50 shrink-0 ${
        showLabel
          ? 'px-3 py-2 gap-2 text-xs font-semibold'
          : 'w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] aspect-square p-0'
      } ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-700 text-amber-400 border-slate-700 shadow-xs hover:border-amber-400/60'
          : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-[#FF6500] border-slate-300 dark:border-slate-700 shadow-xs hover:border-[#FF6500]/50'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout" initial={false}>
          {isDark ? (
            <motion.div
              key="dark-sun"
              initial={{ rotate: -60, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 60, scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex items-center justify-center"
            >
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            </motion.div>
          ) : (
            <motion.div
              key="light-moon"
              initial={{ rotate: 60, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -60, scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex items-center justify-center"
            >
              <Moon className="w-4 h-4 text-slate-700 hover:text-[#FF6500] transition-colors" />
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
