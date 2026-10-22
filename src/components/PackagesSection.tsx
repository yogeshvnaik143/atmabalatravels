import { useState, useMemo } from 'react';
import {
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Car,
  Sparkles,
  MessageCircle,
  Play,
  Pause,
  Zap,
  Eye,
  LayoutGrid,
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Compass,
  Star,
  RotateCcw,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { POPULAR_PACKAGES } from '../data';
import { TravelPackage } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onViewPosterPlaces: () => void;
}

export default function PackagesSection({ onSelectPackage, onViewPosterPlaces }: PackagesSectionProps) {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTravelType, setSelectedTravelType] = useState<string>('all');
  const [priceRangePreset, setPriceRangePreset] = useState<string>('all');
  const [maxPriceSlider, setMaxPriceSlider] = useState<number>(9000);
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'duration-short'>('popular');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);

  // Marquee and Layout Controls
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState<'normal' | 'slow' | 'fast'>('normal');
  const [viewMode, setViewMode] = useState<'both' | 'marquee' | 'grid'>('both');

  const travelTypes = [
    { id: 'all', label: 'All Experiences', icon: '⭐' },
    { id: 'adventure', label: 'Adventure & Treks', icon: '🏃' },
    { id: 'relaxation', label: 'Relaxation & Nature', icon: '🌿' },
    { id: 'family', label: 'Family Vacations', icon: '👨‍👩‍👧‍👦' },
    { id: 'pilgrimage', label: 'Sacred Pilgrimage', icon: '🛕' },
    { id: 'heritage', label: 'Coastal Heritage', icon: '🏛️' },
  ];

  const quickDestinationTags = [
    'Yana & Vibhuti',
    'Murdeshwar',
    'Jog Falls',
    'Honnavar Backwaters',
    'Udupi Krishna Matha',
    'Kolluru Mookambika',
    'Sirsi & Banavasi',
    'Gokarna Beaches'
  ];

  // Filter & Search Logic
  const filteredPackages = useMemo(() => {
    return POPULAR_PACKAGES.filter((pkg) => {
      // 1. Search Query (destinations, title, route, highlights, popularFor)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesRoute = pkg.route.toLowerCase().includes(query);
        const matchesPopularFor = pkg.popularFor.toLowerCase().includes(query);
        const matchesHighlights = pkg.highlights.some((h) => h.toLowerCase().includes(query));
        const matchesDestinations = pkg.destinations
          ? pkg.destinations.some((d) => d.toLowerCase().includes(query))
          : false;

        if (!matchesTitle && !matchesRoute && !matchesPopularFor && !matchesHighlights && !matchesDestinations) {
          return false;
        }
      }

      // 2. Travel Type Filter
      if (selectedTravelType !== 'all') {
        if (pkg.travelType !== selectedTravelType && pkg.category !== selectedTravelType) {
          return false;
        }
      }

      // 3. Price Preset Filter
      const price = pkg.numericPrice || 3000;
      if (priceRangePreset === 'under-3500' && price >= 3500) return false;
      if (priceRangePreset === '3500-5000' && (price < 3500 || price > 5000)) return false;
      if (priceRangePreset === '5000-7000' && (price < 5000 || price > 7000)) return false;
      if (priceRangePreset === 'above-7000' && price < 7000) return false;

      // 4. Price Slider Filter (if slider adjusted below max)
      if (price > maxPriceSlider) return false;

      // 5. Duration Filter
      if (selectedDuration !== 'all') {
        if (pkg.durationCategory !== selectedDuration) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const priceA = a.numericPrice || 3000;
      const priceB = b.numericPrice || 3000;
      const durationA = a.durationHours || 8;
      const durationB = b.durationHours || 8;

      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'duration-short') return durationA - durationB;
      return (b.reviewsCount || 100) - (a.reviewsCount || 100);
    });
  }, [
    searchQuery,
    selectedTravelType,
    priceRangePreset,
    maxPriceSlider,
    selectedDuration,
    sortBy
  ]);

  const hasActiveFilters = Boolean(
    searchQuery.trim() ||
    selectedTravelType !== 'all' ||
    priceRangePreset !== 'all' ||
    maxPriceSlider < 9000 ||
    selectedDuration !== 'all' ||
    sortBy !== 'popular'
  );

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTravelType('all');
    setPriceRangePreset('all');
    setMaxPriceSlider(9000);
    setSelectedDuration('all');
    setSortBy('popular');
  };

  // Double list for seamless gapless loop
  const marqueeItems = useMemo(() => [...POPULAR_PACKAGES, ...POPULAR_PACKAGES], []);

  const speedClass = marqueeSpeed === 'slow'
    ? 'animate-marquee-ltr-slow'
    : marqueeSpeed === 'fast'
    ? 'animate-marquee-ltr-fast'
    : 'animate-marquee-ltr';

  return (
    <section id="packages" className="py-20 bg-[#F4F7F6] dark:bg-[#070D18] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-[#FF6500] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6500]/10">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Coastal Itineraries & Transparent Cabs
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] dark:text-white mt-3 tracking-tight">
            Tour Packages & Sightseeing Booking
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            Discover Sahyadri waterfalls, ancient temple shrines, backwater boat cruises, and tranquil crescent beaches with guaranteed fixed rates, chilled AC, and verified local drivers.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="bg-slate-200/80 dark:bg-slate-800 p-1 rounded-full inline-flex items-center gap-1 border border-slate-300/50 dark:border-slate-700">
              <button
                onClick={() => setViewMode('both')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'both' ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-xs' : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                <Zap className="w-3 h-3 text-[#FF6500] dark:text-white" />
                <span>Marquee + Grid</span>
              </button>
              <button
                onClick={() => setViewMode('marquee')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'marquee' ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-xs' : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                <Eye className="w-3 h-3 text-[#FF6500] dark:text-white" />
                <span>Marquee Flow</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-xs' : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3 h-3 text-[#FF6500] dark:text-white" />
                <span>Catalog Grid</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* LEFT-TO-RIGHT MARQUEE SHOWCASE BLOCK                            */}
        {/* ============================================================== */}
        {(viewMode === 'both' || viewMode === 'marquee') && (
          <div className="mb-14">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B192C] text-white text-xs font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Left-to-Right Marquee Flow</span>
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  (Gliding left to right • Hover any card to pause)
                </span>
              </div>

              {/* Speed & Pause Controls */}
              <div className="flex items-center gap-2">
                <div className="bg-white border border-slate-200 rounded-lg p-0.5 flex items-center text-[11px] font-semibold text-slate-600">
                  <span className="px-2 text-slate-400">Speed:</span>
                  {(['slow', 'normal', 'fast'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setMarqueeSpeed(s)}
                      className={`px-2 py-0.5 rounded capitalize cursor-pointer transition-colors ${
                        marqueeSpeed === s ? 'bg-[#FF6500] text-white font-bold' : 'hover:bg-slate-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsMarqueePaused(!isMarqueePaused)}
                  className="px-3 py-1 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-xs cursor-pointer"
                  title={isMarqueePaused ? 'Resume scrolling' : 'Pause scrolling'}
                >
                  {isMarqueePaused ? (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                      <span>Play</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                      <span>Pause</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Seamless Left-To-Right Marquee Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-[#0B192C] to-slate-950 p-4 sm:p-6 shadow-xl border border-slate-800 pause-on-hover">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

              <div
                className={`${speedClass} flex gap-5 py-2`}
                style={{
                  animationPlayState: isMarqueePaused ? 'paused' : undefined,
                }}
              >
                {marqueeItems.map((pkg, idx) => (
                  <div
                    key={`${pkg.id}-marquee-${idx}`}
                    className="w-72 sm:w-80 shrink-0 bg-white dark:bg-[#0F1B2B] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800 hover:shadow-2xl transition-all flex flex-col justify-between group cursor-pointer"
                    onClick={() => onSelectPackage(pkg)}
                  >
                    <div>
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {pkg.badge && (
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FF6500] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                            {pkg.badge}
                          </span>
                        )}

                        <div className="absolute bottom-2 right-2">
                          <span className="text-[11px] font-extrabold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                            {pkg.startingPrice} onwards
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                          <span className="inline-flex items-center gap-1 font-bold text-[#0B192C] dark:text-white">
                            <Clock className="w-3 h-3 text-[#FF6500]" />
                            {pkg.duration}
                          </span>
                          <span className="text-slate-400 dark:text-slate-500 font-medium">Doorstep Cab</span>
                        </div>

                        <h4 className="text-sm font-bold text-[#0B192C] dark:text-white group-hover:text-[#FF6500] transition-colors line-clamp-1">
                          {pkg.title}
                        </h4>

                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {pkg.popularFor}
                        </p>

                        <div className="mt-3 p-2 bg-slate-50 dark:bg-slate-800/80 rounded-lg text-[10px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5 border border-slate-100 dark:border-slate-700">
                          <MapPin className="w-3 h-3 text-[#FF6500] shrink-0" />
                          <span className="truncate">{pkg.route}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 pt-0 flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPackage(pkg);
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#0B192C] dark:bg-slate-800 hover:bg-[#FF6500] text-white font-bold text-[11px] transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer border border-transparent dark:border-slate-700"
                      >
                        <span>Book Package</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <a
                        href={`https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center justify-center shadow-xs"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* COMPREHENSIVE SEARCH & FILTER SYSTEM                           */}
        {/* ============================================================== */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div className="bg-white dark:bg-[#0B1523] rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-10 space-y-6 transition-colors duration-300">
            
            {/* Main Search Row */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              {/* Destination Search Box */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations by name (e.g. Yana, Murdeshwar, Jog Falls, Udupi, Honnavar, Sirsi)..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Advanced Filter Toggle & Sort Select */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={`px-4 py-3.5 rounded-2xl border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    showAdvancedFilters || priceRangePreset !== 'all' || selectedDuration !== 'all' || maxPriceSlider < 9000
                      ? 'bg-[#FF6500]/10 border-[#FF6500] text-[#FF6500]'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                  {(priceRangePreset !== 'all' || selectedDuration !== 'all' || maxPriceSlider < 9000) && (
                    <span className="w-2 h-2 rounded-full bg-[#FF6500]" />
                  )}
                </button>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] cursor-pointer"
                  >
                    <option value="popular">Recommended / Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration-short">Duration: Shortest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Destination Shortcut Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Quick:</span>
              </span>
              {quickDestinationTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    searchQuery === tag
                      ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Travel Type Filter Pills (Type of Travel) */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 block">
                Type of Travel Experience
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {travelTypes.map((t) => {
                  const isSelected = selectedTravelType === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTravelType(t.id)}
                      className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF6500] text-white shadow-md'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Advanced Filters Panel (Collapsible) */}
            <AnimatePresence>
              {showAdvancedFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-5 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Price Range Filter Presets */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
                        Price Range (Per Vehicle)
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          { id: 'all', label: 'All Prices' },
                          { id: 'under-3500', label: 'Under ₹3,500' },
                          { id: '3500-5000', label: '₹3,500 – ₹5,000' },
                          { id: '5000-7000', label: '₹5,000 – ₹7,000' },
                          { id: 'above-7000', label: 'Above ₹7,000' },
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setPriceRangePreset(p.id)}
                            className={`p-2 rounded-xl text-left font-bold transition-all border cursor-pointer ${
                              priceRangePreset === p.id
                                ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white border-[#0B192C] dark:border-[#FF6500]'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Max Budget Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Max Budget Cap
                        </label>
                        <span className="text-xs font-extrabold text-[#FF6500]">
                          Up to ₹{maxPriceSlider.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1500"
                        max="9000"
                        step="250"
                        value={maxPriceSlider}
                        onChange={(e) => setMaxPriceSlider(parseInt(e.target.value))}
                        className="w-full accent-[#FF6500] cursor-pointer mt-2"
                      />
                      <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        <span>₹1,500</span>
                        <span>₹5,000</span>
                        <span>₹9,000+</span>
                      </div>
                    </div>

                    {/* Duration Filter */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
                        Trip Duration
                      </label>
                      <div className="space-y-1.5 text-xs">
                        {[
                          { id: 'all', label: 'Any Duration' },
                          { id: 'half-day', label: 'Half Day / Flexible (4-6 Hours)' },
                          { id: 'full-day', label: '1 Full Day (8-10 Hours)' },
                          { id: 'extended-day', label: 'Extended Day / Yatra (11+ Hours)' },
                        ].map((d) => (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => setSelectedDuration(d.id)}
                            className={`w-full p-2 rounded-xl text-left font-bold transition-all border cursor-pointer flex items-center justify-between ${
                              selectedDuration === d.id
                                ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white border-[#0B192C] dark:border-[#FF6500]'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                            }`}
                          >
                            <span>{d.label}</span>
                            {selectedDuration === d.id && <CheckCircle className="w-3.5 h-3.5 text-[#FF6500] dark:text-white" />}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filters & Results Counter Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[#0B192C] dark:text-white text-sm">
                  {filteredPackages.length} {filteredPackages.length === 1 ? 'Package Available' : 'Packages Available'}
                </span>
                {hasActiveFilters && (
                  <span className="text-slate-500 dark:text-slate-400">
                    (matching your search criteria)
                  </span>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* PACKAGES CATALOG GRID                                          */}
        {/* ============================================================== */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div>
            {filteredPackages.length === 0 ? (
              /* Empty Search Results State */
              <div className="bg-white dark:bg-[#0B1523] rounded-3xl p-10 text-center border border-slate-200 dark:border-slate-800 max-w-xl mx-auto shadow-sm my-6 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#FF6500] flex items-center justify-center mx-auto mb-4 border border-amber-200 dark:border-amber-800/60">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B192C] dark:text-white">No matching tour packages found</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                  We couldn&apos;t find any package matching &ldquo;<strong>{searchQuery || selectedTravelType}</strong>&rdquo;. Try clearing filters or speak directly with our tour desk for a custom itinerary.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <button
                    onClick={handleClearFilters}
                    className="px-5 py-2.5 rounded-xl bg-[#0B192C] dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer border dark:border-slate-700"
                  >
                    Clear All Filters
                  </button>
                  <a
                    href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20have%20a%20custom%20tour%20itinerary%20in%20mind.%20Can%20you%20help?"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#1EBE5D] transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat for Custom Route</span>
                  </a>
                </div>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredPackages.map((pkg) => (
                    <motion.div
                      layout
                      key={pkg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white dark:bg-[#0F1B2B] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                            
                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                              {pkg.badge && (
                                <span className="px-2.5 py-1 rounded-full bg-[#FF6500] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                                  {pkg.badge}
                                </span>
                              )}
                              {pkg.travelType && (
                                <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs text-[#0B192C] dark:text-white text-[10px] font-bold capitalize">
                                  {pkg.travelType}
                                </span>
                              )}
                            </div>

                            <div className="absolute bottom-3 right-3 text-right">
                              <span className="text-xs font-black text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                                {pkg.startingPrice} onwards
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="p-6">
                          {/* Duration & Rating Row */}
                          <div className="flex items-center justify-between text-[11px] mb-2.5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold bg-[#0B192C]/10 dark:bg-slate-800 text-[#0B192C] dark:text-slate-200">
                              <Clock className="w-3 h-3 text-[#FF6500]" />
                              {pkg.duration}
                            </span>
                            <div className="flex items-center gap-1 text-amber-500 font-bold">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              <span>{pkg.rating || 4.9}</span>
                              <span className="text-slate-400 dark:text-slate-500 font-normal">({pkg.reviewsCount || 85})</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#0B192C] dark:text-white mb-2 leading-snug group-hover:text-[#FF6500] transition-colors">
                            {pkg.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                            {pkg.popularFor}
                          </p>

                          {/* Route Path */}
                          <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs text-slate-700 dark:text-slate-300 font-medium mb-4 flex items-start gap-2 border border-slate-100 dark:border-slate-700">
                            <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{pkg.route}</span>
                          </div>

                          {/* Destinations Tags */}
                          {pkg.destinations && pkg.destinations.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mb-4">
                              {pkg.destinations.slice(0, 4).map((d) => (
                                <span
                                  key={d}
                                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Highlights List */}
                          <div className="space-y-1.5 mb-5">
                            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                              Package Highlights:
                            </span>
                            {pkg.highlights.slice(0, 3).map((h, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* Vehicle Pricing Strip */}
                          {pkg.pricingByVehicle && (
                            <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700 text-xs mb-2">
                              <div>
                                <span className="text-[10px] uppercase font-bold text-slate-400 block">4+1 Sedan</span>
                                <span className="font-extrabold text-[#0B192C] dark:text-white">₹{pkg.pricingByVehicle.sedan4.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] uppercase font-bold text-slate-400 block">6+1 Ertiga</span>
                                <span className="font-extrabold text-emerald-700 dark:text-emerald-400">₹{pkg.pricingByVehicle.ertiga6.toLocaleString('en-IN')}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Package Actions */}
                      <div className="p-6 pt-0 flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onSelectPackage(pkg)}
                          className="flex-1 py-3 px-3 rounded-xl bg-[#0B192C] dark:bg-slate-800 hover:bg-[#FF6500] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-transparent dark:border-slate-700"
                        >
                          <span>Book Tour Package</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>

                        <a
                          href={`https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors flex items-center justify-center shadow-xs"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        )}

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
