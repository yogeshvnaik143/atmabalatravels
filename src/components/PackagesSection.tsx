import { useState } from 'react';
import { Clock, MapPin, CheckCircle, ArrowRight, Car, Sparkles, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { POPULAR_PACKAGES } from '../data';
import { TravelPackage } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onViewPosterPlaces: () => void;
}

export default function PackagesSection({ onSelectPackage, onViewPosterPlaces }: PackagesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Packages (7)' },
    { id: 'beach', label: '🏖️ Beaches & Town' },
    { id: 'pilgrimage', label: '🛕 Sacred Darshan' },
    { id: 'nature', label: '🌿 Waterfalls & Forests' },
    { id: 'outstation', label: '🛣️ Coastal Outstation' },
  ];

  const filteredPackages = selectedCategory === 'all'
    ? POPULAR_PACKAGES
    : POPULAR_PACKAGES.filter((p) => p.category === selectedCategory);

  return (
    <section id="packages" className="py-20 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#FF6500] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6500]/10">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Coastal Itineraries
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] mt-3 tracking-tight">
            Popular Tour Packages
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Immerse yourself in pristine beaches, thousand-year-old stone shrines, roaring Sahyadri waterfalls, and river mangroves with our doorstep-to-doorstep private cab tours.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated SVG Route Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-16 overflow-hidden"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#0B192C]">Our Golden Coastal Highway Network</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Seamless round-trip connectivity from Gokarna & Kumta to all regional attractions</p>
          </div>

          <div className="relative py-4">
            {/* SVG Wave Line */}
            <div className="hidden md:block w-full overflow-hidden">
              <svg className="w-full h-20" viewBox="0 0 800 100" preserveAspectRatio="none">
                <path
                  d="M 50,50 Q 250,0 400,50 T 750,50"
                  fill="transparent"
                  stroke="#FF6500"
                  strokeWidth="3.5"
                  strokeDasharray="10 10"
                  className="animate-pulse opacity-70"
                />
              </svg>
            </div>

            {/* Route Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10 -mt-2 md:-mt-10">
              <div className="bg-[#F4F7F6] p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#FF6500] text-white text-xs font-bold flex items-center justify-center mb-2 shadow-xs">
                  1
                </div>
                <h4 className="text-sm font-bold text-[#0B192C]">Gokarna Beaches</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Om & Kudle Beach, Mahabaleshwar</p>
              </div>

              <div className="bg-[#F4F7F6] p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#0B192C] text-white text-xs font-bold flex items-center justify-center mb-2 shadow-xs">
                  2
                </div>
                <h4 className="text-sm font-bold text-[#0B192C]">Yana & Vibhooti</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Rock Monoliths & Rainforest Pool</p>
              </div>

              <div className="bg-[#F4F7F6] p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#FF6500] text-white text-xs font-bold flex items-center justify-center mb-2 shadow-xs">
                  3
                </div>
                <h4 className="text-sm font-bold text-[#0B192C]">Honnavar Backwaters</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Mangrove Boardwalk & Boating</p>
              </div>

              <div className="bg-[#F4F7F6] p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#0B192C] text-white text-xs font-bold flex items-center justify-center mb-2 shadow-xs">
                  4
                </div>
                <h4 className="text-sm font-bold text-[#0B192C]">Murudeshwar & Jog</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">123ft Shiva Statue & High Plunge Falls</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Packages Grid with motion layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Package Graphic Header */}
                  {pkg.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {pkg.badge && (
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FF6500] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                          {pkg.badge}
                        </span>
                      )}

                      <div className="absolute bottom-3 right-3">
                        <span className="text-xs font-extrabold text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                          {pkg.startingPrice} onwards
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0B192C]/10 text-[#0B192C]">
                        <Clock className="w-3 h-3 text-[#FF6500]" />
                        {pkg.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B192C] mb-2 leading-snug group-hover:text-[#FF6500] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {pkg.popularFor}
                    </p>

                    {/* Route Path */}
                    <div className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-700 font-medium mb-4 flex items-start gap-2 border border-slate-100">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{pkg.route}</span>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-1.5 mb-5">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Package Highlights:
                      </span>
                      {pkg.highlights.slice(0, 3).map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-[#F4F7F6] p-2 rounded-lg">
                      <Car className="w-3.5 h-3.5 text-slate-700" />
                      <span>Cab: <strong className="text-slate-800">{pkg.recommendedVehicle}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Package Actions */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPackage(pkg)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B192C] text-white font-bold text-xs shadow-md hover:bg-[#162740] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <a
                    href={`https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center justify-center shadow-xs"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore Poster Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-[#0a1128] to-[#160a2b] rounded-3xl p-8 text-center text-white border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2 font-['Cinzel']">
              The Famous Gokarna Digital Poster
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-[#FFF7A1] font-['Cinzel']">
              15 Nearest Places to Visit Around Gokarna
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              View our complete digital poster grid with temples, beaches, Yana Caves, Vibhuti Falls, and Murdeshwar with distance & best visit timings.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewPosterPlaces}
              className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0a1128] font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#FFF7A1] transition-all cursor-pointer"
            >
              Open 15-Place Tourist Poster
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

