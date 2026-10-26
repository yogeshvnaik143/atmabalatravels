import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Search, X, MessageCircle, Sparkles, LayoutGrid, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TOURIST_DESTINATIONS } from '../data';
import { TouristDestination } from '../types';

export default function GokarnaPosterSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<TouristDestination | null>(null);
  const [viewMode, setViewMode] = useState<'both' | 'grid' | 'marquee'>('both');

  // Lock scroll when modal is open and handle Escape key
  useEffect(() => {
    if (selectedPlace) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedPlace(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedPlace]);

  const categories = [
    { id: 'all', label: `All Places (${TOURIST_DESTINATIONS.length})` },
    { id: 'temple', label: 'Sacred Temples' },
    { id: 'beach', label: 'Scenic Beaches' },
    { id: 'nature', label: 'Waterfalls & Caves' },
    { id: 'heritage', label: 'Heritage & Forts' },
  ];

  const filteredPlaces = TOURIST_DESTINATIONS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const marqueePlaces = [...TOURIST_DESTINATIONS, ...TOURIST_DESTINATIONS];

  const handleWhatsAppQuote = (place: TouristDestination) => {
    const text = `Hi Harish G, I want to inquire about a cab fare quotation for visiting ${place.title} (${place.distanceFromGokarna}) with Atmabala Travels. Please share vehicle availability and best price.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="places" className="py-8 sm:py-14 md:py-20 bg-[#050814] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800">
          <div className="text-center md:text-left">
            <span className="text-[#D4AF37] font-['Cinzel'] tracking-widest text-[11px] sm:text-xs font-bold uppercase inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Tourist Places &amp; Sightseeing Gallery
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-['Cinzel'] text-white mt-1">
              {TOURIST_DESTINATIONS.length} Must-Visit Places Around Gokarna &amp; Uttara Kannada
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Door-to-door cab service, custom day tour packages, and temple darshan drops.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {/* View Mode Switcher */}
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-full inline-flex items-center gap-1">
              <button
                onClick={() => setViewMode('both')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'both' ? 'bg-[#D4AF37] text-[#0a1128] shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>All Views</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-[#D4AF37] text-[#0a1128] shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Grid Only</span>
              </button>
              <button
                onClick={() => setViewMode('marquee')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'marquee' ? 'bg-[#D4AF37] text-[#0a1128] shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Marquee Flow</span>
              </button>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:8073756776"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] text-[#050814] text-xs font-extrabold hover:bg-[#FFF7A1] transition-all shadow-md text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 8073756776</span>
            </motion.a>
          </div>
        </div>

        {/* LEFT-TO-RIGHT MARQUEE FLOW */}
        {(viewMode === 'both' || viewMode === 'marquee') && (
          <div className="mb-6 sm:mb-12">
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#FFF7A1]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>Continuous Scenic Carousel (Hover to pause, click to view)</span>
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1128] via-[#100c24] to-[#160a2b] p-2.5 sm:p-4 border-2 border-[#D4AF37]/50 shadow-2xl pause-on-hover">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0a1128] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#160a2b] to-transparent z-10" />

              <div className="animate-marquee-ltr flex gap-3 sm:gap-5 py-1">
                {marqueePlaces.map((place, idx) => (
                  <div
                    key={`${place.id}-marquee-${idx}`}
                    onClick={() => setSelectedPlace(place)}
                    className="w-56 sm:w-72 shrink-0 flex flex-col items-center text-center cursor-pointer group bg-black/50 p-2.5 sm:p-3 rounded-xl border border-[#D4AF37]/30 hover:border-[#FFF7A1] transition-all"
                  >
                    <div className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden border-2 border-[#D4AF37] shadow-lg group-hover:border-[#FFF7A1] transition-all bg-slate-900">
                      <img
                        src={place.image}
                        alt={`Atmabala tour place - ${place.title}`}
                        width={288}
                        height={160}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/gokarna-beach.jpg';
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-[#FFF7A1] backdrop-blur-xs border border-[#D4AF37]/30">
                        {place.distanceFromGokarna}
                      </span>
                    </div>

                    <h3 className="font-['Great_Vibes'] text-[#F1C40F] text-xl sm:text-2xl mt-1.5 sm:mt-2 font-normal group-hover:text-[#FFF7A1] transition-colors leading-tight">
                      {place.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 sm:mt-1 line-clamp-2 px-1">
                      {place.description}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-bold mt-1.5 sm:mt-2 flex items-center gap-1 group-hover:underline">
                      <MessageCircle className="w-3 h-3" />
                      Ask Cab Fare on WhatsApp →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center mb-5 sm:mb-8">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#D4AF37] text-[#0a1128] shadow-md shadow-[#D4AF37]/30'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-[#D4AF37]/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="poster-search-input"
              name="posterSearch"
              type="text"
              aria-label="Search temple, beach, falls"
              placeholder="Search temple, beach, falls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* POSTER GRID CONTAINER (Zero Prices, Direct WhatsApp Quotes) */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div className="rounded-2xl p-3.5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#0a1128] via-[#100c24] to-[#160a2b] border-2 sm:border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden">
            
            {/* Header Title */}
            <div className="text-center mb-5 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Cinzel'] tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#D4AF37] to-[#996515] drop-shadow-md">
                ATMABALA GOKARNA TRAVELS
              </h2>
              <p className="text-[#FFF7A1]/90 text-[11px] sm:text-sm font-medium tracking-widest uppercase mt-1 sm:mt-2">
                Sightseeing Directory &amp; Cab Quotations • No Hidden Fees
              </p>
            </div>

            {/* 3-Column Poster Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <AnimatePresence>
                {filteredPlaces.map((place) => (
                  <motion.div
                    layout
                    key={place.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col bg-black/40 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 hover:border-[#FFF7A1] transition-all p-3 sm:p-4 group"
                  >
                    {/* Gold Framed Image */}
                    <div
                      onClick={() => setSelectedPlace(place)}
                      className="relative w-full h-40 sm:h-52 rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-xl transition-all bg-slate-900 cursor-pointer"
                    >
                      <img
                        src={place.image}
                        alt={`Atmabala tour place - ${place.title}`}
                        width={360}
                        height={208}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/gokarna-beach.jpg';
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-black/80 text-[11px] font-bold text-[#FFF7A1] backdrop-blur-xs border border-[#D4AF37]/50">
                        {place.distanceFromGokarna}
                      </span>
                    </div>

                    {/* Great Vibes Title */}
                    <h3
                      onClick={() => setSelectedPlace(place)}
                      className="font-['Great_Vibes'] text-[#F1C40F] text-3xl mt-3 font-normal tracking-wide drop-shadow-[2px_3px_5px_rgba(0,0,0,0.9)] group-hover:text-[#FFF7A1] transition-colors leading-tight cursor-pointer text-center"
                    >
                      {place.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 text-center flex-1">
                      {place.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                      <span>Best time: <strong className="text-slate-200">{place.bestTimeToVisit}</strong></span>
                      <button
                        onClick={() => setSelectedPlace(place)}
                        className="text-[#D4AF37] hover:underline cursor-pointer font-semibold"
                      >
                        Details
                      </button>
                    </div>

                    {/* WhatsApp Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppQuote(place)}
                      className="w-full mt-3 py-2.5 px-3 rounded-xl bg-[#25D366] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#1EBE5D] transition-all cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ask Cab Fare on WhatsApp</span>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Poster Footer / Contact Bar */}
            <div className="text-center mt-6 sm:mt-12 pt-5 sm:pt-8 border-t-2 border-dashed border-[#D4AF37]/40 flex flex-col items-center">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#FFF7A1]/80 mb-1.5 sm:mb-2 font-['Cinzel']">
                Direct Booking &amp; Customized Tour Inquiries
              </span>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8073756776"
                className="inline-block px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-black/60 border-2 border-[#D4AF37] text-[#FFF7A1] font-['Cinzel'] font-bold text-lg sm:text-2xl hover:bg-[#D4AF37]/20 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              >
                +91 8073756776 (Harish.G)
              </motion.a>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-2">
                Prompt door-to-door cab service for all 15 tourist locations across Gokarna, Kumta, and Karwar.
              </p>
            </div>

          </div>
        )}

        {/* Place Detail Modal */}
        <AnimatePresence>
          {selectedPlace && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPlace(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative z-10 bg-[#0a1128] border-2 border-[#D4AF37] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              >
                <div className="relative h-60 w-full bg-slate-900">
                  <img
                    src={selectedPlace.image}
                    alt={`Atmabala tour place - ${selectedPlace.title}`}
                    width={512}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/gokarna-beach.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedPlace(null)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 text-xs font-bold text-[#FFF7A1] border border-[#D4AF37]/50">
                    {selectedPlace.distanceFromGokarna}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Cinzel'] text-2xl font-bold text-[#FFF7A1] mb-2">
                    {selectedPlace.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {selectedPlace.description}
                  </p>

                  <div className="space-y-2 text-xs bg-black/40 p-3.5 rounded-xl border border-slate-800 mb-6">
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <span><strong>Distance:</strong> {selectedPlace.distanceFromGokarna}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span><strong>Best Visit Time:</strong> {selectedPlace.bestTimeToVisit}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsAppQuote(selectedPlace)}
                      className="flex-1 py-3 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Get Cab Quote on WhatsApp</span>
                    </motion.button>

                    <a
                      href="tel:8073756776"
                      className="px-4 py-3 rounded-xl border border-[#D4AF37] text-[#FFF7A1] font-bold text-sm hover:bg-[#D4AF37]/20 transition-all flex items-center justify-center"
                      title="Call Harish.G"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
