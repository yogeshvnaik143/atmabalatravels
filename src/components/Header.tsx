import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Compass,
  MapPin,
  Home,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking?: () => void;
  onOpenMyBookings?: () => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { palette, setIsPaletteModalOpen } = useTheme();

  // Sticky header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Exactly 3 Core Pages as requested: Home, Tourist Places, About Us
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'places', label: 'Tourist Places', icon: Compass },
    { id: 'about', label: 'About Us', icon: MapPin },
  ];

  const handleNavigate = (itemId: string) => {
    setMobileMenuOpen(false);
    setActiveTab(itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-[#070E1A]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 ${
        isScrolled ? 'py-2.5 shadow-md dark:shadow-black/40' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden group cursor-pointer shrink-0"
          id="header-logo-btn"
          aria-label="Atmabala Travels Home"
        >
          <img
            src="/images/logo.png"
            alt="Atmabala Travels Logo"
            width={160}
            height={40}
            decoding="async"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/logo-badge.jpg';
            }}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-2"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B192C] dark:text-white leading-tight">
              ATMABALA <span className="text-[#FF6500] font-bold">travels</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
              Gokarna • Kumta • Karwar
            </span>
          </div>
        </motion.button>

        {/* Desktop PC Navigation (Direct 3-Link Bar - Perfectly Visible on PC) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 dark:bg-slate-800/90 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shrink-0">
          {navItems.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                id={`nav-${item.id}`}
                className={`relative px-4 py-2 rounded-full text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                  active
                    ? 'text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#0B192C] dark:hover:text-white'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#0B192C] dark:bg-[#FF6500] rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Action Cluster (Strictly lg:flex to avoid tablet collision) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* 8-Theme Palette Studio Opener */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPaletteModalOpen(true)}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-[#FF6500] hover:text-[#FF6500] dark:hover:border-[#FF6500] dark:hover:text-[#FF6500] transition-colors shadow-xs cursor-pointer group"
            title="Choose Theme: 4 Dark & 4 Light Presets"
            aria-label="Open Theme Palette Selector"
          >
            <span
              className="w-2.5 h-2.5 rounded-full shadow-xs shrink-0"
              style={{ backgroundColor: palette.primary }}
            />
            <Palette className="w-3.5 h-3.5 text-[#FF6500] group-hover:rotate-45 transition-transform" />
            <span>{palette.code}</span>
          </motion.button>

          <ThemeToggle id="theme-toggle-btn" />

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${COMPANY_DETAILS.rawPhone}`}
            id="call-harish-btn"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-[#FF6500] hover:text-[#FF6500] dark:hover:border-[#FF6500] dark:hover:text-[#FF6500] transition-colors bg-white dark:bg-slate-800/80 shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#FF6500]" />
            <span>{COMPANY_DETAILS.rawPhone}</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20would%20like%20to%20get%20a%20price%20quote%20for%20a%20cab%20in%20Gokarna."
            target="_blank"
            rel="noopener noreferrer"
            id="header-quote-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500] text-white text-sm font-bold shadow-md shadow-[#FF6500]/25 hover:bg-[#E55A00] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Get Quote on WhatsApp</span>
          </motion.a>
        </div>

        {/* Mobile & Tablet Controls (Clean, Fixed Positioning) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsPaletteModalOpen(true)}
            type="button"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#FF6500] border border-slate-200 dark:border-slate-700 cursor-pointer"
            title="Palette Selector (8 Themes)"
            aria-label="Palette Selector (8 Themes)"
          >
            <Palette className="w-5 h-5" />
          </motion.button>
          <ThemeToggle id="theme-toggle-mobile-btn" />
          <motion.a
            whileTap={{ scale: 0.92 }}
            href={`tel:${COMPANY_DETAILS.rawPhone}`}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#FF6500] border border-slate-200 dark:border-slate-700"
            title="Call Harish G"
            aria-label="Call Harish G at 8073756776"
          >
            <Phone className="w-5 h-5" />
          </motion.a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Strictly 3 Pages + Action CTAs) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-[#070E1A] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-3 ${
                    activeTab === item.id
                      ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-xs'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <item.icon className="w-4 h-4 text-[#FF6500]" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6500]" />
                Call Harish G: {COMPANY_DETAILS.phone}
              </a>

              <a
                href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20would%20like%20to%20get%20a%20price%20quote%20for%20a%20cab%20in%20Gokarna."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm shadow-md hover:bg-[#1EBE5D] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Price Quote on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
