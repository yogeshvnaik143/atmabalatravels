import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'transfers', label: 'Airport Transfers' },
    { id: 'calculator', label: 'Fare Calculator' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'poster', label: '15 Places Poster' },
    { id: 'guide', label: 'Stays & Guide' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Title */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-hidden group cursor-pointer"
          id="header-logo-btn"
        >
          <img
            src="/images/logo.png"
            alt="Atmabala Travels Logo"
            onError={(e) => {
              // Fallback to badge image if logo has transparent issue
              (e.currentTarget as HTMLImageElement).src = '/images/logo-badge.jpg';
            }}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-2"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#0B192C]">
              ATMABALA <span className="text-[#FF6500] font-bold">travels</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
              Gokarna • Kumta • Karwar
            </span>
          </div>
        </motion.button>

        {/* Desktop Navigation Links with animated sliding pill indicator */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id={`nav-${item.id}`}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-700 hover:text-[#0B192C]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#0B192C] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="tel:8073756776"
            id="call-harish-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-300 text-slate-800 text-sm font-semibold hover:border-[#FF6500] hover:text-[#FF6500] transition-colors bg-white shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#FF6500]" />
            <span>8073756776</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500] text-white text-sm font-bold shadow-md shadow-[#FF6500]/25 hover:bg-[#E55A00] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Book Ride</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeTab === item.id
                      ? 'bg-[#0B192C] text-white shadow-sm'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:8073756776"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6500]" />
                Call Harish.G (+91 8073756776)
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Book Vehicle on WhatsApp
              </button>

              <div className="text-center pt-2">
                <a
                  href="/html/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  View Original Static Pages
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
