import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, X, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme, COLOR_PALETTES, ColorPalette, PaletteId } from '../context/ThemeContext';

export default function ThemePaletteModal() {
  const { paletteId, setPalette, isPaletteModalOpen, setIsPaletteModalOpen } = useTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'dark' | 'light'>('all');

  if (!isPaletteModalOpen) return null;

  const darkPalettes = COLOR_PALETTES.filter((p) => p.mode === 'dark');
  const lightPalettes = COLOR_PALETTES.filter((p) => p.mode === 'light');

  const filteredPalettes =
    activeTab === 'dark'
      ? darkPalettes
      : activeTab === 'light'
      ? lightPalettes
      : COLOR_PALETTES;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="palette-modal-title"
        className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6500]/15 border border-[#FF6500]/30 flex items-center justify-center text-[#FF6500]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h2 id="palette-modal-title" className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Atmabala Color Studio</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF6500] text-white">
                    8 Presets
                  </span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Select easily from 4 Dark Themes and 4 Light Themes. Applies instantly!
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPaletteModalOpen(false)}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close theme palette selector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tabs */}
          <div className="px-6 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-white dark:bg-[#0B192C]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#FF6500] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All 8 Palettes
              </button>
              <button
                onClick={() => setActiveTab('dark')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'dark'
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span>Dark Themes (1, 2, 3, 4)</span>
              </button>
              <button
                onClick={() => setActiveTab('light')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'light'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light Themes (1, 2, 3, 4)</span>
              </button>
            </div>

            <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
              1-Click Instant Live Preview
            </span>
          </div>

          {/* Body: Grid of Palettes */}
          <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
            
            {/* Dark Themes Group */}
            {(activeTab === 'all' || activeTab === 'dark') && (
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <Moon className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Dark Themes (Options 1, 2, 3, 4)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {darkPalettes.map((p) => {
                    const isSelected = paletteId === p.id;
                    return (
                      <PaletteCard
                        key={p.id}
                        palette={p}
                        isSelected={isSelected}
                        onSelect={() => setPalette(p.id)}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Light Themes Group */}
            {(activeTab === 'all' || activeTab === 'light') && (
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Light Themes (Options 1, 2, 3, 4)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {lightPalettes.map((p) => {
                    const isSelected = paletteId === p.id;
                    return (
                      <PaletteCard
                        key={p.id}
                        palette={p}
                        isSelected={isSelected}
                        onSelect={() => setPalette(p.id)}
                      />
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Footer with Active Preview & Apply */}
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Currently Selected:</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLOR_PALETTES.find(p => p.id === paletteId)?.primary }} />
                <span>{COLOR_PALETTES.find(p => p.id === paletteId)?.code} &bull; {COLOR_PALETTES.find(p => p.id === paletteId)?.name.split('&')[0]}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <button
                onClick={() => setIsPaletteModalOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#E55A00] text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Done / Keep Theme</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

interface PaletteCardProps {
  palette: ColorPalette;
  isSelected: boolean;
  onSelect: () => void;
  key?: string | number;
}

function PaletteCard({
  palette,
  isSelected,
  onSelect
}: PaletteCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={onSelect}
      type="button"
      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative group flex flex-col justify-between ${
        isSelected
          ? 'border-[#FF6500] ring-2 ring-[#FF6500]/30 shadow-lg bg-slate-50/80 dark:bg-slate-800/80'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-850'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg text-white shadow-xs"
              style={{ backgroundColor: palette.primary }}
            >
              {palette.code}
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {palette.name}
            </span>
          </div>

          {isSelected ? (
            <span className="w-5 h-5 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          ) : (
            <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-slate-400" />
          )}
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mb-3.5">
          {palette.tagline}
        </p>
      </div>

      {/* Swatches Visual Bar */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Swatch 1: Base */}
          <div
            className="w-6 h-6 rounded-lg border border-white/20 shadow-xs flex items-center justify-center"
            style={{ backgroundColor: palette.swatch[0] }}
            title={`Base Background: ${palette.swatch[0]}`}
          />
          {/* Swatch 2: Surface */}
          <div
            className="w-6 h-6 rounded-lg border border-white/20 shadow-xs flex items-center justify-center"
            style={{ backgroundColor: palette.swatch[1] }}
            title={`Surface Card: ${palette.swatch[1]}`}
          />
          {/* Swatch 3: Accent */}
          <div
            className="w-6 h-6 rounded-lg border border-white/20 shadow-xs flex items-center justify-center"
            style={{ backgroundColor: palette.swatch[2] }}
            title={`Primary Accent: ${palette.swatch[2]}`}
          />
        </div>

        <span className="text-[11px] font-mono text-slate-400 font-medium">
          {palette.primary}
        </span>
      </div>
    </motion.button>
  );
}
