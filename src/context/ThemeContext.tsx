import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

export type PaletteId =
  | 'dark-1'
  | 'dark-2'
  | 'dark-3'
  | 'dark-4'
  | 'light-1'
  | 'light-2'
  | 'light-3'
  | 'light-4';

export interface ColorPalette {
  id: PaletteId;
  mode: ThemeMode;
  code: string; // 'Dark 1', 'Dark 2', 'Light 1', etc.
  name: string;
  tagline: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryBorder: string;
  bgBase: string;
  surfaceBase: string;
  swatch: [string, string, string]; // [bg, surface, primary]
}

export const COLOR_PALETTES: ColorPalette[] = [
  // 🌙 DARK THEMES
  {
    id: 'dark-1',
    mode: 'dark',
    code: 'Dark 1',
    name: 'Gokarna Sunset & Midnight Navy',
    tagline: 'Signature deep midnight coast with radiant sunset tangerine',
    primary: '#FF6500',
    primaryHover: '#E55A00',
    primaryLight: 'rgba(255, 101, 0, 0.18)',
    primaryBorder: 'rgba(255, 101, 0, 0.35)',
    bgBase: '#070D18',
    surfaceBase: '#0B192C',
    swatch: ['#070D18', '#0B192C', '#FF6500']
  },
  {
    id: 'dark-2',
    mode: 'dark',
    code: 'Dark 2',
    name: 'Arabian Sea & Coastal Emerald',
    tagline: 'Deep marine obsidian with fresh luminous ocean emerald',
    primary: '#10B981',
    primaryHover: '#059669',
    primaryLight: 'rgba(16, 185, 129, 0.18)',
    primaryBorder: 'rgba(16, 185, 129, 0.35)',
    bgBase: '#06131A',
    surfaceBase: '#0A222E',
    swatch: ['#06131A', '#0A222E', '#10B981']
  },
  {
    id: 'dark-3',
    mode: 'dark',
    code: 'Dark 3',
    name: 'Sahyadri Royal Sapphire',
    tagline: 'Rich midnight twilight with electric royal sapphire blue',
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryLight: 'rgba(59, 130, 246, 0.18)',
    primaryBorder: 'rgba(59, 130, 246, 0.35)',
    bgBase: '#070D22',
    surfaceBase: '#0C1A38',
    swatch: ['#070D22', '#0C1A38', '#3B82F6']
  },
  {
    id: 'dark-4',
    mode: 'dark',
    code: 'Dark 4',
    name: 'Monolith Onyx & Temple Gold',
    tagline: 'Pitch charcoal obsidian with warm sacred temple amber gold',
    primary: '#F59E0B',
    primaryHover: '#D97706',
    primaryLight: 'rgba(245, 158, 11, 0.18)',
    primaryBorder: 'rgba(245, 158, 11, 0.35)',
    bgBase: '#0F0F12',
    surfaceBase: '#1A1A22',
    swatch: ['#0F0F12', '#1A1A22', '#F59E0B']
  },

  // ☀️ LIGHT THEMES
  {
    id: 'light-1',
    mode: 'light',
    code: 'Light 1',
    name: 'Coastal Warm Sand & Tangerine',
    tagline: 'Sunlit white coastal sand with signature sunset orange',
    primary: '#FF6500',
    primaryHover: '#E55A00',
    primaryLight: 'rgba(255, 101, 0, 0.12)',
    primaryBorder: 'rgba(255, 101, 0, 0.25)',
    bgBase: '#F8FAFC',
    surfaceBase: '#FFFFFF',
    swatch: ['#F8FAFC', '#FFFFFF', '#FF6500']
  },
  {
    id: 'light-2',
    mode: 'light',
    code: 'Light 2',
    name: 'Tropical Palm & Sea Breeze',
    tagline: 'Crisp mint mist with lush rainforest emerald',
    primary: '#059669',
    primaryHover: '#047857',
    primaryLight: 'rgba(5, 150, 105, 0.12)',
    primaryBorder: 'rgba(5, 150, 105, 0.25)',
    bgBase: '#F0FDF4',
    surfaceBase: '#FFFFFF',
    swatch: ['#F0FDF4', '#FFFFFF', '#059669']
  },
  {
    id: 'light-3',
    mode: 'light',
    code: 'Light 3',
    name: 'Executive Pearl & Coastal Azure',
    tagline: 'Modern pure pearl white with deep royal ocean blue',
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: 'rgba(37, 99, 235, 0.12)',
    primaryBorder: 'rgba(37, 99, 235, 0.25)',
    bgBase: '#F8FAFC',
    surfaceBase: '#FFFFFF',
    swatch: ['#F8FAFC', '#FFFFFF', '#2563EB']
  },
  {
    id: 'light-4',
    mode: 'light',
    code: 'Light 4',
    name: 'Warm Ivory & Sunstone Gold',
    tagline: 'Sunlit linen ivory with golden amber terracotta',
    primary: '#D97706',
    primaryHover: '#B45309',
    primaryLight: 'rgba(217, 119, 6, 0.12)',
    primaryBorder: 'rgba(217, 119, 6, 0.25)',
    bgBase: '#FFFBEB',
    surfaceBase: '#FFFFFF',
    swatch: ['#FFFBEB', '#FFFFFF', '#D97706']
  }
];

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  palette: ColorPalette;
  paletteId: PaletteId;
  setPalette: (id: PaletteId) => void;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isPaletteModalOpen: boolean;
  setIsPaletteModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'atmabala_theme_mode';
const PALETTE_STORAGE_KEY = 'atmabala_palette_id';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [paletteId, setPaletteIdState] = useState<PaletteId>(() => {
    try {
      const storedPalette = localStorage.getItem(PALETTE_STORAGE_KEY) as PaletteId | null;
      if (storedPalette && COLOR_PALETTES.some((p) => p.id === storedPalette)) {
        return storedPalette;
      }
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme === 'light') return 'light-1';
    } catch {
      // storage disabled
    }
    return 'dark-1';
  });

  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);

  const activePalette =
    COLOR_PALETTES.find((p) => p.id === paletteId) || COLOR_PALETTES[0];
  const isDark = activePalette.mode === 'dark';

  // Apply CSS variables and data attributes to documentElement whenever palette changes
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    root.setAttribute('data-palette', activePalette.id);
    root.style.setProperty('--color-primary', activePalette.primary);
    root.style.setProperty('--color-primary-hover', activePalette.primaryHover);
    root.style.setProperty('--color-primary-light', activePalette.primaryLight);
    root.style.setProperty('--color-primary-border', activePalette.primaryBorder);

    try {
      localStorage.setItem(PALETTE_STORAGE_KEY, activePalette.id);
      localStorage.setItem(THEME_STORAGE_KEY, activePalette.mode);
    } catch {
      // ignore
    }
  }, [activePalette, isDark]);

  const setPalette = (id: PaletteId) => {
    setPaletteIdState(id);
  };

  const toggleTheme = () => {
    // If currently dark, flip to equivalent light (e.g. dark-1 -> light-1)
    if (isDark) {
      const targetLightId = (`light-${activePalette.code.split(' ')[1]}` as PaletteId);
      setPaletteIdState(targetLightId || 'light-1');
    } else {
      const targetDarkId = (`dark-${activePalette.code.split(' ')[1]}` as PaletteId);
      setPaletteIdState(targetDarkId || 'dark-1');
    }
  };

  const setTheme = (mode: ThemeMode) => {
    if (mode === 'dark' && !isDark) {
      const targetDarkId = (`dark-${activePalette.code.split(' ')[1]}` as PaletteId);
      setPaletteIdState(targetDarkId || 'dark-1');
    } else if (mode === 'light' && isDark) {
      const targetLightId = (`light-${activePalette.code.split(' ')[1]}` as PaletteId);
      setPaletteIdState(targetLightId || 'light-1');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: activePalette.mode,
        isDark,
        palette: activePalette,
        paletteId,
        setPalette,
        toggleTheme,
        setTheme,
        isPaletteModalOpen,
        setIsPaletteModalOpen
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
