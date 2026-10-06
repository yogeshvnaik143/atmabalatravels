import { Phone, MessageCircle, Mail, MapPin, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
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
                className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                ATMABALA <span className="text-[#FF6500]">travels</span>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your premier partner for clean, reliable car rentals, airport pickups, and unforgettable coastal journeys across Gokarna, Kumta, Murdeshwar, and Karwar.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-[#FF6500] text-white transition-colors"
                title={`Call ${COMPANY_DETAILS.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${COMPANY_DETAILS.phone}?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20travel%20with%20Atmabala%20Travels`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-[#25D366] text-white transition-colors"
                title="WhatsApp Harish G"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
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
                    setActiveTab('transfers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Airport Transfers (Goa / Hubli)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('calculator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Trip Fare & Route Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('fleet');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Our Fleet (Dzire, Crysta, Tempo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Tour Packages & Routes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('poster');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  15 Gokarna Tourist Places
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Stays & Temple Darshan Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('testimonials');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Guest Reviews & Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Coastal Tour Routes */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#FF6500]" />
              Popular Tour Routes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Gokarna Beach & Temple Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Murdeshwar & Honnavar Mangroves
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Yana Caves & Vibhooti Waterfalls
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors cursor-pointer text-left"
                >
                  Jog Falls Nature Trail
                </button>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href="/html/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#FF6500] hover:underline inline-flex items-center gap-1"
                >
                  <span>Browse Standalone HTML Pages</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5" />
                <span>Gokarna & Kumta Hubs, Uttara Kannada, Karnataka</span>
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
                Open 24 hours daily for instant bookings, station drops & airport transfers.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ATMABALA Travels. All rights reserved.</p>
          <p className="text-slate-400">
            Proprietor: <strong className="text-slate-300">Harish. G</strong> • Ph: {COMPANY_DETAILS.phone}
          </p>
        </div>

      </div>
    </footer>
  );
}
