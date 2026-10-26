import { motion } from 'motion/react';
import { Palette, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FloatingPaletteButton() {
  const { palette, setIsPaletteModalOpen } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <motion.button
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsPaletteModalOpen(true)}
        type="button"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/95 dark:bg-[#0B192C]/95 text-slate-900 dark:text-white text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-700/80 backdrop-blur-md hover:border-[#FF6500] transition-all cursor-pointer group"
        title="Open Color Palette Studio: 4 Dark Themes & 4 Light Themes"
        aria-label="Open Theme Palette Selector"
      >
        <span
          className="w-3.5 h-3.5 rounded-full shadow-xs flex items-center justify-center shrink-0 border border-white/20"
          style={{ backgroundColor: palette.primary }}
        />
        <Palette className="w-3.5 h-3.5 text-[#FF6500] group-hover:rotate-45 transition-transform" />
        <span className="hidden sm:inline font-extrabold">{palette.code}:</span>
        <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-medium truncate max-w-[110px]">
          {palette.name.split('&')[0]}
        </span>
        <span className="sm:hidden font-extrabold">{palette.code}</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-[#FF6500]/15 text-[#FF6500] font-bold uppercase">
          Themes
        </span>
      </motion.button>
    </div>
  );
}
