import { useState, useMemo } from 'react';
import {
  FileText,
  CheckCircle2,
  Phone,
  MessageCircle,
  Search,
  Sparkles,
  ShieldCheck,
  Clock,
  Car,
  Compass,
  ArrowRight,
  Play,
  Pause,
  Info,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SIGHTSEEING_1DAY_PACKAGES,
  KM_WISE_TARIFF,
  ONE_WAY_DROPS,
  GOA_DROPS,
  HOURLY_PACKAGES,
  COMPANY_DETAILS,
  FLEET_VEHICLES
} from '../data';

interface OfficialTariffSectionProps {
  onOpenBookingModal?: (details?: { pickup: string; drop: string; vehicle: string; tripType: string }) => void;
}

export default function OfficialTariffSection({ onOpenBookingModal }: OfficialTariffSectionProps) {
  const [activeTab, setActiveTab] = useState<'sightseeing' | 'oneway' | 'goa' | 'hourly'>('sightseeing');
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicleFilter, setVehicleFilter] = useState<'both' | '4plus1' | '6plus1'>('both');
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Filter 1-Day Sightseeing
  const filteredSightseeing = useMemo(() => {
    return SIGHTSEEING_1DAY_PACKAGES.filter((p) =>
      p.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Filter One-Way Drops
  const filteredOneWay = useMemo(() => {
    return ONE_WAY_DROPS.filter((p) =>
      p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Filter Goa Drops
  const filteredGoa = useMemo(() => {
    return GOA_DROPS.filter((p) =>
      p.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.region && p.region.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Ticker marquee items combining key highlights
  const marqueeItems = useMemo(() => {
    return [
      { text: 'Yana, Vibhuti Falls', rate4: '₹3,000', rate6: '₹3,500', type: '1-Day Tour' },
      { text: 'Sightseeing Murdeshwar', rate4: '₹3,500', rate6: '₹4,000', type: '1-Day Tour' },
      { text: 'Jog Falls, Murdeshwar', rate4: '₹4,800', rate6: '₹5,800', type: '1-Day Tour' },
      { text: 'Goa Dabolim Airport Drop', rate4: '₹4,500', rate6: '₹5,500', type: 'Goa Drop' },
      { text: 'Goa Mopa Airport Drop', rate4: '₹6,000', rate6: '₹7,000', type: 'Goa Drop' },
      { text: 'Calangute, Baga Beach Drop', rate4: '₹6,000', rate6: '₹7,000', type: 'Goa Drop' },
      { text: 'Kumta Drop', rate4: '₹1,500', rate6: '₹1,800', type: 'One-Way' },
      { text: 'Ankola Drop', rate4: '₹1,200', rate6: '₹1,500', type: 'One-Way' },
      { text: 'Hubli, Alnavar Drop', rate4: '₹4,000', rate6: '₹5,000', type: 'One-Way' },
      { text: 'Udupi Drop', rate4: '₹5,000', rate6: '₹6,000', type: 'One-Way' },
      { text: 'Bangalore Drop', rate4: '₹14,500', rate6: '₹17,500', type: 'One-Way' },
      { text: '4 Hours / 40 KM Local', rate4: '₹1,500', rate6: '₹2,000', type: 'Hourly Package' },
      { text: '8 Hours / 80 KM Local', rate4: '₹2,500', rate6: '₹3,000', type: 'Hourly Package' },
      { text: 'KM Wise (300 km/day)', rate4: '₹13 / KM', rate6: '₹16 / KM', type: 'Outstation' },
    ];
  }, []);

  const handleBookViaWhatsApp = (itemTitle: string, vehicleChoice: '4+1' | '6+1', fare: number, categoryNote: string) => {
    const text = `Hi Harish G, I would like to book from your Official Catalog Tariff:
📋 Service / Destination: ${itemTitle}
🚗 Vehicle: ${vehicleChoice === '4+1' ? 'Sedan 4+1 A/C (Swift Dzire / Etios)' : 'Ertiga 6+1 A/C (or Innova Crysta)'}
💰 Catalog Rate: ₹${fare.toLocaleString('en-IN')}
📌 Inclusions: ${categoryNote}

Please confirm driver & vehicle availability for my dates. Thank you!`;
    window.open(`https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="tariffs" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#070D18] dark:via-[#0B1523] dark:to-[#070D18] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Official 2026 Tariff Card • 100% Fixed Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] dark:text-white tracking-tight">
            Complete Travel Catalog & Transparent Tariffs
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Straightforward pricing with all inclusions clearly stated. No hidden fuel surcharges, zero surprise driver bhatta demands.
          </p>
        </div>

        {/* Continuous Left-to-Right Tariff Marquee Ribbon */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B192C]/10 dark:bg-white/10 text-[#0B192C] dark:text-slate-200 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF6500] animate-pulse" />
              <span>Live Rates Ticker: Continuous Left-to-Right Flow</span>
            </span>
            <button
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Pause or Resume continuous scrolling"
            >
              {isMarqueePaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-amber-600" />}
              <span>{isMarqueePaused ? 'Resume Ticker' : 'Pause'}</span>
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B192C] to-slate-900 text-white p-3 sm:p-4 shadow-md pause-on-hover border border-slate-800">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0B192C] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0B192C] to-transparent z-10" />

            <div
              className="animate-marquee-ltr flex gap-4"
              style={{ animationPlayState: isMarqueePaused ? 'paused' : undefined }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={`tariff-ticker-${i}`}
                  className="shrink-0 bg-white/10 hover:bg-white/20 transition-all rounded-xl px-4 py-2 flex items-center gap-3 border border-white/10"
                >
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FF6500] text-white">
                    {item.type}
                  </span>
                  <span className="font-semibold text-sm text-slate-100">{item.text}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-amber-300 font-bold">4+1: {item.rate4}</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-emerald-300 font-bold">6+1: {item.rate6}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Main Catalog Tabs Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full sm:w-auto">
            <button
              onClick={() => { setActiveTab('sightseeing'); setSearchQuery(''); }}
              className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'sightseeing'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white dark:bg-[#0F1B2B] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Compass className={`w-4 h-4 ${activeTab === 'sightseeing' ? 'text-[#FF6500]' : 'text-slate-500'}`} />
              <span>1-Day Sightseeing (12)</span>
            </button>

            <button
              onClick={() => { setActiveTab('oneway'); setSearchQuery(''); }}
              className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'oneway'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white dark:bg-[#0F1B2B] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Car className={`w-4 h-4 ${activeTab === 'oneway' ? 'text-[#FF6500]' : 'text-slate-500'}`} />
              <span>One-Way Drops (20)</span>
            </button>

            <button
              onClick={() => { setActiveTab('goa'); setSearchQuery(''); }}
              className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'goa'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white dark:bg-[#0F1B2B] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'goa' ? 'text-[#FF6500]' : 'text-slate-500'}`} />
              <span>Goa Drops (14)</span>
            </button>

            <button
              onClick={() => { setActiveTab('hourly'); setSearchQuery(''); }}
              className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                activeTab === 'hourly'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white dark:bg-[#0F1B2B] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Clock className={`w-4 h-4 ${activeTab === 'hourly' ? 'text-[#FF6500]' : 'text-slate-500'}`} />
              <span>Hourly & Round Trip</span>
            </button>
          </div>

          {/* Search box & Vehicle Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search place / route..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white dark:bg-[#0F1B2B] dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-[#FF6500] focus:ring-1 focus:ring-[#FF6500]"
              />
            </div>
            
            <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F1B2B] p-1 text-xs">
              <button
                onClick={() => setVehicleFilter('both')}
                className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer ${
                  vehicleFilter === 'both' ? 'bg-slate-900 dark:bg-slate-700 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Both
              </button>
              <button
                onClick={() => setVehicleFilter('4plus1')}
                className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer ${
                  vehicleFilter === '4plus1' ? 'bg-[#FF6500] text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                4+1
              </button>
              <button
                onClick={() => setVehicleFilter('6plus1')}
                className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer ${
                  vehicleFilter === '6plus1' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                6+1
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: SIGHTSEEING 1 DAY */}
        {activeTab === 'sightseeing' && (
          <div className="space-y-8">
            {/* Guarantee Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C] dark:text-white text-sm sm:text-base">
                    All Sightseeing 1-Day Tours Include Everything
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <strong className="text-amber-800 dark:text-amber-400">Included:</strong> Chilled AC Cab + Highway Tolls + Parking Charges + Driver Bata. Zero surprise extra fees.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-[#0B1523] border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300">
                  4+1 Sedan / 6+1 Ertiga
                </span>
              </div>
            </div>

            {/* Grid of Sightseeing Tours */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSightseeing.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="bg-white dark:bg-[#0F1B2B] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#FF6500] dark:hover:border-[#FF6500] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">#{idx + 1} SIGHTSEEING</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        1 Day Tour
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-[#0B192C] dark:text-white group-hover:text-[#FF6500] dark:group-hover:text-[#FF6500] transition-colors">
                      {item.place}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* Pricing Display */}
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
                      {(vehicleFilter === 'both' || vehicleFilter === '4plus1') && (
                        <div className={vehicleFilter === '4plus1' ? 'col-span-2 text-center' : ''}>
                          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">4+1 Sedan</div>
                          <div className="text-lg font-black text-[#0B192C] dark:text-white">
                            ₹{item.rate4Plus1.toLocaleString('en-IN')}
                          </div>
                        </div>
                      )}
                      {(vehicleFilter === 'both' || vehicleFilter === '6plus1') && (
                        <div className={vehicleFilter === '6plus1' ? 'col-span-2 text-center' : ''}>
                          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">6+1 Ertiga / SUV</div>
                          <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">
                            ₹{item.rate6Plus1.toLocaleString('en-IN')}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Book Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleBookViaWhatsApp(item.place, '4+1', item.rate4Plus1, 'AC Cab, Toll, Parking, Driver Bata')}
                        className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book 4+1</span>
                      </button>
                      <button
                        onClick={() => handleBookViaWhatsApp(item.place, '6+1', item.rate6Plus1, 'AC Cab, Toll, Parking, Driver Bata')}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#0B192C] dark:bg-slate-800 hover:bg-[#FF6500] dark:hover:bg-[#FF6500] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <Car className="w-3.5 h-3.5" />
                        <span>Book 6+1</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* KM WISE OUTSTATION TARIFF CARD (from catalog) */}
            <div className="mt-12 bg-gradient-to-br from-[#0B192C] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6500] text-white text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    Catalog Outstation Rate
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    KM WISE TARIFF — 300 KM / DAY
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 max-w-xl">
                    Ideal for multi-day touring across Karnataka, Goa & Kerala. Calculated fairly based on genuine speedometer reading.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center">
                    <div className="text-xs uppercase font-semibold text-slate-300">Sedan (4+1)</div>
                    <div className="text-3xl font-black text-amber-400 mt-1">₹13 <span className="text-sm font-normal text-slate-200">/ KM</span></div>
                    <div className="text-xs text-slate-300 mt-1">Driver Bata: ₹500 / Day</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Toll & Parking Extra</div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center">
                    <div className="text-xs uppercase font-semibold text-slate-300">Ertiga / SUV (6+1)</div>
                    <div className="text-3xl font-black text-emerald-400 mt-1">₹16 <span className="text-sm font-normal text-slate-200">/ KM</span></div>
                    <div className="text-xs text-slate-300 mt-1">Driver Bata: ₹500 / Day</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Toll & Parking Extra</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Includes: Clean AC cab, fuel, chauffeur allowance for 300 KM daily baseline</span>
                </div>
                <button
                  onClick={() => {
                    const text = `Hi Harish G, I want to book a KM-wise outstation tour (300 KM/Day baseline) across Karnataka. Please share vehicle options and quote.`;
                    window.open(`https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FF6500] hover:bg-[#e05800] text-white font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Outstation Tour</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ONE-WAY DROPS (20 CITIES) */}
        {activeTab === 'oneway' && (
          <div className="space-y-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C] dark:text-white text-sm sm:text-base">
                    Safe & Trusted Taxi Service — Only Drop / One-Way
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <strong className="text-blue-900 dark:text-blue-400">This Drop Including:</strong> Highway Tolls + Chilled AC + Driver Bata. Doorstep pickup from Gokarna / Kumta.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-[#0B1523] text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 shrink-0">
                20 Official Destinations
              </span>
            </div>

            {/* Table of One-Way Drops */}
            <div className="bg-white dark:bg-[#0F1B2B] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#0B192C] dark:bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                    <tr>
                      <th className="py-4 px-6">#</th>
                      <th className="py-4 px-6">Destination / City</th>
                      {(vehicleFilter === 'both' || vehicleFilter === '4plus1') && (
                        <th className="py-4 px-6 text-center">4+1 (One-Way)</th>
                      )}
                      {(vehicleFilter === 'both' || vehicleFilter === '6plus1') && (
                        <th className="py-4 px-6 text-center">6+1 (One-Way)</th>
                      )}
                      <th className="py-4 px-6 text-center">Inclusions</th>
                      <th className="py-4 px-6 text-right">Quick Book</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {filteredOneWay.map((route, i) => (
                      <tr key={route.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-6 text-slate-400 dark:text-slate-500 font-semibold text-xs">{i + 1}</td>
                        <td className="py-3.5 px-6 font-bold text-[#0B192C] dark:text-slate-100">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0" />
                            <span>{route.destination}</span>
                          </div>
                        </td>
                        {(vehicleFilter === 'both' || vehicleFilter === '4plus1') && (
                          <td className="py-3.5 px-6 text-center font-extrabold text-[#0B192C] dark:text-white">
                            ₹{route.rate4Plus1.toLocaleString('en-IN')}
                          </td>
                        )}
                        {(vehicleFilter === 'both' || vehicleFilter === '6plus1') && (
                          <td className="py-3.5 px-6 text-center font-extrabold text-emerald-700 dark:text-emerald-400">
                            ₹{route.rate6Plus1.toLocaleString('en-IN')}
                          </td>
                        )}
                        <td className="py-3.5 px-6 text-center text-xs text-slate-500">
                          <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold">
                            Toll + AC + Driver Bata
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-right">
                          <button
                            onClick={() => handleBookViaWhatsApp(
                              `${route.destination} (One-Way Drop)`,
                              '4+1',
                              route.rate4Plus1,
                              'Toll, AC, Driver Bata Included'
                            )}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Book</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: GOA DROPS (14 DESTINATIONS) */}
        {activeTab === 'goa' && (
          <div className="space-y-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6500] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C] dark:text-white text-sm sm:text-base">
                    Official Goa Drop Service — Doorstep Transfer
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-amber-900 dark:text-amber-400">Catalog Guarantee:</strong> This drop including Highway Tolls + Chilled AC + Driver Bata + <strong className="text-emerald-800 dark:text-emerald-400 underline">Goa State Border Entry Permit</strong>.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-[#0B1523] text-slate-800 dark:text-slate-200 border border-amber-300 dark:border-amber-700 shrink-0">
                14 Goa Hubs & Airports
              </span>
            </div>

            {/* Cards for Goa Drops */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGoa.map((g, idx) => (
                <div
                  key={g.id}
                  className="bg-white dark:bg-[#0F1B2B] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-[#FF6500] dark:hover:border-[#FF6500] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-400 dark:text-slate-500">GOA DROP #{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        {g.region || 'Goa Transfer'}
                      </span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#0B192C] dark:text-white group-hover:text-[#FF6500] dark:group-hover:text-[#FF6500] transition-colors">
                      {g.destination}
                    </h3>
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Goa Permit + Toll + AC + Bata Included</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-3 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-transparent dark:border-slate-800">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">4+1 Sedan</div>
                        <div className="text-base font-black text-[#0B192C] dark:text-white">₹{g.rate4Plus1.toLocaleString('en-IN')}</div>
                      </div>
                      <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-slate-400">6+1 Ertiga / SUV</div>
                        <div className="text-base font-black text-emerald-700 dark:text-emerald-400">₹{g.rate6Plus1.toLocaleString('en-IN')}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookViaWhatsApp(
                        `${g.destination} (Goa Drop)`,
                        '4+1',
                        g.rate4Plus1,
                        'Toll, Chilled AC, Driver Bata & Goa State Border Permit Included'
                      )}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book on WhatsApp (All Included)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: HOURLY PACKAGE / ROUND TRIP */}
        {activeTab === 'hourly' && (
          <div className="space-y-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C] dark:text-white text-sm sm:text-base">
                    Hourly Package / Round Trip Taxi Service
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Driver Allowance Included • Extra Hours: <strong>₹180/hr</strong> • Extra KM: <strong>₹26/km</strong> • Parking & Toll: Extra at actuals.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-[#0B1523] text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                Local Sightseeing & Flexible Trips
              </span>
            </div>

            {/* 5 Hourly Tier Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {HOURLY_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white dark:bg-[#0F1B2B] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-[#FF6500] dark:hover:border-[#FF6500] hover:shadow-lg transition-all text-center flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0B192C] dark:bg-slate-800 text-white">
                      {pkg.duration}
                    </span>
                    <div className="text-2xl font-black text-[#0B192C] dark:text-white mt-3">
                      {pkg.kilometers} KM
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Base Kilometers Included</div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-transparent dark:border-slate-800">
                      <div className="text-[10px] font-bold uppercase text-slate-400">4+1 Sedan</div>
                      <div className="text-xl font-black text-[#0B192C] dark:text-white">₹{pkg.rate4Plus1.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="bg-emerald-50/60 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-800/60">
                      <div className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400">6+1 Ertiga</div>
                      <div className="text-xl font-black text-emerald-800 dark:text-emerald-300">₹{pkg.rate6Plus1.toLocaleString('en-IN')}</div>
                    </div>

                    <button
                      onClick={() => handleBookViaWhatsApp(
                        `${pkg.duration} / ${pkg.kilometers} KM Hourly Package`,
                        '4+1',
                        pkg.rate4Plus1,
                        'Driver Allowance Included (Extra Hr: ₹180, Extra KM: ₹26)'
                      )}
                      className="w-full mt-2 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1 transition-all cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Available Vehicles Lineup from Sheet 3 */}
            <div className="bg-white dark:bg-[#0F1B2B] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h4 className="font-extrabold text-base text-[#0B192C] dark:text-white mb-4 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#FF6500]" />
                <span>Available Vehicles in Our Catalog</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {FLEET_VEHICLES.map((v) => (
                  <div key={v.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                    <div className="font-bold text-xs text-[#0B192C] dark:text-slate-100">{v.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{v.capacity}</div>
                    <div className="text-[10px] text-[#FF6500] font-semibold mt-1">Chilled AC</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Contact Direct strip */}
        <div className="mt-12 bg-white dark:bg-[#0F1B2B] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0B192C] dark:bg-slate-800 text-[#FF6500] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0B192C] dark:text-white text-base">
                Have custom itinerary or multiple-day requirements?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Speak directly with founder <strong>{COMPANY_DETAILS.founder}</strong> for instant custom quotes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.rawPhone}`}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-[#0B192C] dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FF6500]" />
              <span>Call +91 {COMPANY_DETAILS.rawPhone}</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
