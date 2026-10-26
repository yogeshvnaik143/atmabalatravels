import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Compass,
  ExternalLink,
  ShieldCheck,
  FileText,
  Lock,
  RefreshCw,
  UserCheck,
  X,
  Instagram,
  Facebook,
  Code2,
  Heart,
  Clock,
  Palette
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import VisitorCounter from './VisitorCounter';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

type LegalTab = 'privacy' | 'terms' | 'cancellation' | 'safety' | 'proprietor';

export default function Footer({ setActiveTab }: FooterProps) {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('privacy');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const { palette, setIsPaletteModalOpen } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openLegalModal = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <footer className="bg-[#0B192C] text-white pt-8 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Brand Info & E-E-A-T signals */}
          <div className="space-y-4">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <img
                src="/images/logo.png"
                alt="Atmabala Travels Logo"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                ATMABALA <span className="text-[#FF6500]">travels</span>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your trusted partner for clean, reliable car rentals, airport pickups, and unforgettable coastal journeys across Gokarna, Kumta, Murdeshwar, and Karwar.
            </p>

            {/* Small Animated Social & Contact Logos */}
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                Connect With Us:
              </span>
              <div className="flex items-center gap-2.5">
                {/* Instagram Animated Logo */}
                <motion.a
                  whileHover={{ scale: 1.22, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-md hover:shadow-pink-500/30 transition-all cursor-pointer"
                  title="Instagram (Link to be updated)"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>

                {/* Facebook Animated Logo */}
                <motion.a
                  whileHover={{ scale: 1.22, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer"
                  title="Facebook (Link to be updated)"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-white" />
                </motion.a>

                {/* WhatsApp Animated Logo */}
                <motion.a
                  whileHover={{ scale: 1.22, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20a%20cab%20with%20Atmabala%20Travels."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center shadow-md hover:shadow-emerald-500/30 transition-all cursor-pointer"
                  title="WhatsApp (+91 8073756776)"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </motion.a>

                {/* Direct Call Animated Logo */}
                <motion.a
                  whileHover={{ scale: 1.22, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="w-9 h-9 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-md hover:shadow-orange-500/30 transition-all cursor-pointer"
                  title={`Call: +91 ${COMPANY_DETAILS.phone}`}
                  aria-label="Call Harish G"
                >
                  <Phone className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Verification and Trust Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Govt. Registered Taxi &amp; Tour Operator</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Tourist Places &amp; Attractions (17 Spots)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  About Us (Harish G &amp; Office)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    setTimeout(() => {
                      const el = document.getElementById('transfers');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Airport &amp; Station Transfers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    setTimeout(() => {
                      const el = document.getElementById('fleet');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Our Fleet (Glanza, Ertiga, Minibus, Dzire)
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Tourist Destinations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#FF6500]" />
              Popular Sightseeing
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Om Beach &amp; Kudle Beach
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Mahabaleshwar Temple &amp; Kotitirtha
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Yana Caves &amp; Vibhooti Waterfalls
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Murudeshwar Shiva Temple &amp; Mirjan Fort
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('places');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Honnavar Backwater Boating
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact & E-E-A-T Address */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Main Office:</span>
                  <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                    {COMPANY_DETAILS.locations.gokarna}
                  </p>
                  <a
                    href={COMPANY_DETAILS.locations.gokarnaMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#FF6500] text-xs font-semibold hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6500] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="text-white font-bold hover:text-[#FF6500] transition-colors"
                >
                  +91 {COMPANY_DETAILS.phone} (Harish. G)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6500] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-slate-300 hover:text-[#FF6500] transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                Open 24 hours daily for instant bookings, station drops &amp; airport transfers.
              </p>
            </div>
          </div>

        </div>

        {/* E-E-A-T Legal, Compliance & Privacy Bar */}
        <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-medium">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-[#FF6500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-[#FF6500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Terms of Service</span>
            </button>
            <button
              onClick={() => openLegalModal('cancellation')}
              className="hover:text-[#FF6500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              <span>Cancellation &amp; Refund Policy</span>
            </button>
            <button
              onClick={() => openLegalModal('safety')}
              className="hover:text-[#FF6500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Passenger Safety &amp; RTO License</span>
            </button>
            <button
              onClick={() => openLegalModal('proprietor')}
              className="hover:text-[#FF6500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Proprietor Accreditation</span>
            </button>
          </div>
          <span className="text-[11px] text-slate-500">
            GST / Tourist Permit Compliant • Uttara Kannada RTO
          </span>
        </div>

        {/* Website Developer & Creator Section: YOGESH NAIK */}
        <div className="my-4 sm:my-6 p-3 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1523] to-slate-900 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#FF6500] to-amber-500 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-[#FF6500]/20 shrink-0 border border-amber-400/40">
              YN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs text-slate-400">Website Designed &amp; Developed by</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF6500]/15 text-[#FF6500] font-extrabold border border-[#FF6500]/30">
                  Creator
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white tracking-wide mt-0.5 flex items-center gap-2">
                <span>YOGESH NAIK</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 text-xs font-bold border border-slate-700 transition-all shadow-xs cursor-pointer group"
              title="Portfolio & social links will be updated soon"
            >
              <Code2 className="w-4 h-4 text-[#FF6500] group-hover:rotate-12 transition-transform" />
              <span>Yogesh Naik (Portfolio Links Coming Soon)</span>
            </motion.a>
          </div>
        </div>

        {/* Working Visitor Counter with Animated Coastal Scooter (Starting at 3800) */}
        <div className="pb-4 sm:pb-8">
          <VisitorCounter />
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© {currentTime.getFullYear()} ATMABALA Travels. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="inline-flex items-center gap-1.5 text-slate-400 font-medium">
              <span>Developed with care by</span>
              <strong className="text-slate-200 font-bold hover:text-[#FF6500] transition-colors">YOGESH NAIK</strong>
            </p>
          </div>

          {/* Current Date & Time Live Display */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-[11px] sm:text-xs text-slate-300 transition-colors shadow-xs"
            title="Live System Date & Time"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3.5 h-3.5 text-[#FF6500]" />
            <span className="text-slate-300 font-medium">
              {currentTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-mono font-bold tracking-tight">
              {currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-400">
              Proprietor: <strong className="text-slate-300">Harish. G</strong> • Ph: +91 {COMPANY_DETAILS.phone}
            </span>

            {/* 8-Theme Palette Button */}
            <button
              onClick={() => setIsPaletteModalOpen(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700 hover:text-white hover:border-[#FF6500] text-xs font-semibold transition-all cursor-pointer"
              title="Select Color Palette (4 Dark & 4 Light Presets)"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shadow-xs shrink-0"
                style={{ backgroundColor: palette.primary }}
              />
              <Palette className="w-3.5 h-3.5 text-[#FF6500]" />
              <span>{palette.code}</span>
            </button>

            <ThemeToggle id="theme-toggle-footer-btn" showLabel className="bg-slate-800 text-slate-200 border-slate-700 hover:text-white" />
          </div>
        </div>

      </div>

      {/* Accessible E-E-A-T Legal & Policies Modal */}
      {legalModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
              <div>
                <h2 id="legal-modal-title" className="text-lg font-bold text-[#0B192C] dark:text-white">
                  ATMABALA Travels — Legal, Compliance &amp; Customer Trust
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Operated by Harish G • Gokarna, Karnataka • RTO Verified Fleet
                </p>
              </div>
              <button
                onClick={() => setLegalModalOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900 px-4 pt-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => setActiveLegalTab('privacy')}
                className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeLegalTab === 'privacy'
                    ? 'border-[#FF6500] text-[#FF6500]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveLegalTab('terms')}
                className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeLegalTab === 'terms'
                    ? 'border-[#FF6500] text-[#FF6500]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveLegalTab('cancellation')}
                className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeLegalTab === 'cancellation'
                    ? 'border-[#FF6500] text-[#FF6500]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cancellation &amp; Refunds
              </button>
              <button
                onClick={() => setActiveLegalTab('safety')}
                className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeLegalTab === 'safety'
                    ? 'border-[#FF6500] text-[#FF6500]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Passenger Safety &amp; RTO
              </button>
              <button
                onClick={() => setActiveLegalTab('proprietor')}
                className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeLegalTab === 'proprietor'
                    ? 'border-[#FF6500] text-[#FF6500]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Proprietor Byline
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              
              {activeLegalTab === 'privacy' && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Privacy Policy</h3>
                  <p>
                    <strong>Last Updated: October 2026</strong>. ATMABALA Travels is committed to protecting your privacy. We strictly collect only the essential personal information required to execute your taxi ride, airport transfer, or sightseeing tour.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Information We Collect:</strong> Passenger name, mobile number (for driver pickup dispatch via WhatsApp/SMS), pickup location, and flight/train details.</li>
                    <li><strong>No Third-Party Sharing:</strong> We never sell, rent, or trade your contact info to advertising networks. Your information is only shared with your assigned verified chauffeur.</li>
                    <li><strong>Communication:</strong> WhatsApp and phone communications are strictly restricted to trip coordination, route updates, and booking confirmations.</li>
                    <li><strong>Data Security:</strong> Inquiries submitted via this site are transmitted directly to our official WhatsApp business channel (+91 8073756776). No personal payment card numbers are stored on this server.</li>
                  </ul>
                </div>
              )}

              {activeLegalTab === 'terms' && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Terms of Service</h3>
                  <p>
                    By booking a taxi or tour package with ATMABALA Travels (Proprietor: Harish G), you agree to the following operational terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Fares &amp; Inclusions:</strong> Outstation &amp; airport packages include vehicle hire, fuel, and chauffeur charges. Tolls, state entry permits (e.g. Goa entry permit if applicable), and parking fees are charged transparently at actuals unless explicitly quoted as all-inclusive.</li>
                    <li><strong>AC Usage Policy:</strong> Air conditioning is fully functional in all vehicles. During steep hill ghat ascents (e.g., Yana Caves forest ghat or Jog Falls ghats), drivers may temporarily switch to blowers for engine cooling safety as per standard transport protocol.</li>
                    <li><strong>Night &amp; Waiting Charges:</strong> Airport pickups include complimentary 45 minutes waiting from scheduled flight touchdown time. Night driver allowance applies between 10:00 PM and 6:00 AM.</li>
                    <li><strong>Luggage Safety:</strong> While our drivers take utmost care, passengers are advised to safeguard valuable jewelry, cash, and passports.</li>
                  </ul>
                </div>
              )}

              {activeLegalTab === 'cancellation' && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Cancellation &amp; Refund Policy</h3>
                  <p>
                    We recognize that travel plans and flight schedules change unexpectedly. We provide a transparent, traveler-friendly policy:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Free Cancellation:</strong> 100% full refund on advance deposits if cancelled at least 4 hours before scheduled pickup time.</li>
                    <li><strong>Flight Delay / Train Rescheduling:</strong> No cancellation penalty is charged for verified flight delays at Goa (GOX/GOI) or Hubli (HBX) airports or train delays at Kumta / Gokarna Road stations.</li>
                    <li><strong>Monsoon / Weather Advisory:</strong> In the rare event of road closures or severe weather warnings along ghat sections, full rescheduling or full refund is provided promptly.</li>
                    <li><strong>Refund Processing:</strong> Refunds are processed back instantly via UPI (Google Pay, PhonePe, Paytm) to the original account within 2 hours.</li>
                  </ul>
                </div>
              )}

              {activeLegalTab === 'safety' && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Passenger Safety, Insurance &amp; RTO Compliance</h3>
                  <p>
                    Passenger safety is our highest priority across every kilometer of the Uttara Kannada coastline:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Yellow-Board Commercial Licensing:</strong> All vehicles operate under valid Karnataka Commercial Tourist Taxi Permits with yellow registration plates.</li>
                    <li><strong>Chauffeur Verification:</strong> 100% of our drivers are local Uttara Kannada natives with clean background records, valid commercial badges, and minimum 5+ years ghat/highway driving expertise.</li>
                    <li><strong>Comprehensive Insurance:</strong> Full passenger third-party and liability insurance is active on all vehicles (Innova Crysta, Ertiga, Dzire, Tempo).</li>
                    <li><strong>24/7 SOS Direct Line:</strong> Direct emergency assistance line to proprietor Harish G at +91 8073756776 throughout your journey.</li>
                  </ul>
                </div>
              )}

              {activeLegalTab === 'proprietor' && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Proprietor Accreditation &amp; E-E-A-T Bio</h3>
                  <div className="flex items-center gap-4 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#FF6500] text-white flex items-center justify-center font-bold text-lg shrink-0">
                      HG
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">Harish G — Proprietor &amp; Founder</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Atmabala Travels • Gokarna Local Resident</p>
                    </div>
                  </div>
                  <p>
                    Born and raised in Gokarna, Harish G established ATMABALA Travels to provide clean, fair-priced, and dependable taxi services across Coastal Karnataka and Goa. With over 4 years in coastal transport logistics, Harish has personally overseen thousands of successful guest journeys ({COMPANY_DETAILS.stats.happyCustomers} happy travelers).
                  </p>
                  <p>
                    <strong>Registered Address:</strong> Kamat Complex, Near Canara Bank, Gokarna Main Road, Gokarna, Uttara Kannada, Karnataka - 581326, India.<br />
                    <strong>Direct Contact:</strong> +91 8073756776 • atmabalatravelsgokarna@gmail.com
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-slate-850">
              <button
                onClick={() => setLegalModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#FF6500] hover:bg-[#E55A00] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
