import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Ticket,
  ChevronDown,
  Plane,
  Compass,
  FileSpreadsheet,
  Car,
  Calculator,
  MapPin,
  Star,
  Hotel,
  Shield,
  Map
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';
import { getStoredBookings } from '../utils/bookingStore';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenMyBookings?: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenBooking, onOpenMyBookings }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [bookingsCount, setBookingsCount] = useState<number>(0);
  const [observedActiveId, setObservedActiveId] = useState<string>('home');
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Sync stored bookings count
  useEffect(() => {
    const updateCount = () => {
      setBookingsCount(getStoredBookings().length);
    };
    updateCount();
    window.addEventListener('atmabala_booking_updated', updateCount);
    window.addEventListener('storage', updateCount);
    return () => {
      window.removeEventListener('atmabala_booking_updated', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  // Sticky header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  // Active section scroll spy for smooth desktop feedback
  useEffect(() => {
    if (activeTab !== 'home') {
      setObservedActiveId(activeTab);
      return;
    }

    const sections = ['transfers', 'packages', 'tariffs', 'fleet', 'calculator', 'poster', 'guide', 'testimonials', 'about', 'contact'];
    
    const handleScrollSpy = () => {
      if (window.scrollY < 300) {
        setObservedActiveId('home');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setObservedActiveId(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [activeTab]);

  // Primary desktop navigation links
  const primaryNavItems = [
    { id: 'transfers', label: 'Transfers', icon: Plane },
    { id: 'packages', label: 'Tour Packages', icon: Compass },
    { id: 'tariffs', label: 'Tariff Card', icon: FileSpreadsheet },
    { id: 'fleet', label: 'Our Fleet', icon: Car },
    { id: 'calculator', label: 'Fare Calc', icon: Calculator },
  ];

  // Secondary "More" links on desktop
  const secondaryNavItems = [
    { id: 'poster', label: '15 Places Poster', desc: 'Gokarna & coastal attractions map', icon: Map },
    { id: 'guide', label: 'Hotels & Stays Guide', desc: 'Resorts, beach shacks & temple stays', icon: Hotel },
    { id: 'testimonials', label: 'Verified Reviews', desc: '4.9 ★ rated by 15,000+ travelers', icon: Star },
    { id: 'about', label: 'About Harish G', desc: '12+ years of native Gokarna service', icon: Shield },
    { id: 'contact', label: 'Office & Map Location', desc: 'Kamat complex, Ganjigadde, Gokarna', icon: MapPin },
  ];

  // Full list for mobile menu
  const mobileNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'transfers', label: 'Airport & Railway Transfers' },
    { id: 'packages', label: 'Sightseeing Tour Packages' },
    { id: 'tariffs', label: 'Official Tariff Card (All-Inclusive)' },
    { id: 'fleet', label: 'Our Fleet (Sedan, Ertiga, Crysta)' },
    { id: 'calculator', label: 'Interactive Fare Calculator' },
    { id: 'poster', label: '15 Places Tourist Poster' },
    { id: 'guide', label: 'Stays & Pilgrimage Guide' },
    { id: 'testimonials', label: 'Customer Reviews & Feedback' },
    { id: 'about', label: 'About Atmabala Travels' },
    { id: 'contact', label: 'Office Address & Contact' },
  ];

  // Smooth navigation handler for PC & Mobile
  const handleNavigate = (itemId: string) => {
    setMoreMenuOpen(false);
    setMobileMenuOpen(false);

    if (itemId === 'home') {
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (activeTab === 'home') {
      const el = document.getElementById(itemId);
      if (el) {
        // Offset for sticky header
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setObservedActiveId(itemId);
        return;
      }
    }

    // Otherwise switch active tab
    setActiveTab(itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentActive = (id: string) => {
    return observedActiveId === id || activeTab === id;
  };

  const isMoreActive = secondaryNavItems.some((item) => isCurrentActive(item.id));

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-[#070E1A]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 ${
        isScrolled ? 'py-2 shadow-md dark:shadow-black/40' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
        
        {/* Brand Logo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden group cursor-pointer shrink-0"
          id="header-logo-btn"
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

        {/* Desktop PC Navigation (Sleek, Responsive, Non-Colliding) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-700/70 shrink-0">
          {primaryNavItems.map((item) => {
            const active = isCurrentActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                id={`nav-${item.id}`}
                className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
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
                <span className="relative z-10 flex items-center gap-1.5">
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}

          {/* Desktop "More" Dropdown Menu */}
          <div className="relative" ref={moreMenuRef}>
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              onMouseEnter={() => setMoreMenuOpen(true)}
              id="nav-more-dropdown-btn"
              className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                isMoreActive
                  ? 'text-white'
                  : 'text-slate-700 dark:text-slate-300 hover:text-[#0B192C] dark:hover:text-white'
              }`}
            >
              {isMoreActive && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-[#0B192C] dark:bg-[#FF6500] rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>

            <AnimatePresence>
              {moreMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setMoreMenuOpen(false)}
                  className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#0B1523] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 overflow-hidden"
                >
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                    Explore Gokarna
                  </div>
                  {secondaryNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer ${
                        isCurrentActive(item.id)
                          ? 'bg-[#FF6500]/10 text-[#FF6500]'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#FF6500] group-hover:bg-[#FF6500] group-hover:text-white transition-colors shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold leading-snug group-hover:text-[#FF6500] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Button Cluster */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
          <ThemeToggle />

          {onOpenMyBookings && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenMyBookings}
              id="header-my-bookings-btn"
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs xl:text-sm font-semibold hover:border-[#0B192C] dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-800/80 shadow-xs cursor-pointer"
            >
              <Ticket className="w-3.5 h-3.5 text-[#FF6500]" />
              <span className="hidden xl:inline">My Bookings</span>
              <span className="xl:hidden">Passes</span>
              {bookingsCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.5 text-[10px] font-extrabold rounded-full bg-[#0B192C] dark:bg-[#FF6500] text-white">
                  {bookingsCount}
                </span>
              )}
            </motion.button>
          )}

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${COMPANY_DETAILS.rawPhone}`}
            id="call-harish-btn"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs xl:text-sm font-semibold hover:border-[#FF6500] hover:text-[#FF6500] dark:hover:border-[#FF6500] dark:hover:text-[#FF6500] transition-colors bg-white dark:bg-slate-800/80 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
            <span>{COMPANY_DETAILS.rawPhone}</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500] text-white text-xs xl:text-sm font-bold shadow-md shadow-[#FF6500]/25 hover:bg-[#E55A00] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Book Ride</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-[#070E1A] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 mb-4 max-h-[60vh] overflow-y-auto no-scrollbar">
              {mobileNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isCurrentActive(item.id)
                      ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-xs'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Theme Appearance
                </span>
                <ThemeToggle variant="switch" />
              </div>

              {onOpenMyBookings && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMyBookings();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm shadow-md hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <Ticket className="w-4 h-4 text-[#FF6500]" />
                  <span>My Bookings {bookingsCount > 0 ? `(${bookingsCount})` : ''}</span>
                </button>
              )}

              <a
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6500]" />
                Call Harish G: {COMPANY_DETAILS.phone}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
