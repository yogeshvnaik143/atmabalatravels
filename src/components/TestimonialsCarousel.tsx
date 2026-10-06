import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2, MessageCircle, MapPin, Car, Calendar, Sparkles, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CUSTOMER_TESTIMONIALS } from '../data';
import { CustomerTestimonial } from '../types';

interface TestimonialsCarouselProps {
  onOpenBooking?: () => void;
}

export default function TestimonialsCarousel({ onOpenBooking }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tags = [
    { id: 'all', label: 'All Reviews (6)' },
    { id: 'pilgrimage', label: '🛕 Temple Pilgrimage' },
    { id: 'airport', label: '✈️ Airport Transfers' },
    { id: 'nature', label: '🌿 Yana & Waterfalls' },
    { id: 'group', label: '🚐 Group & Railway' },
  ];

  const filteredTestimonials = CUSTOMER_TESTIMONIALS.filter((t) => {
    if (selectedTag === 'all') return true;
    if (selectedTag === 'pilgrimage') return t.tripType.toLowerCase().includes('pilgrimage') || t.destinationTag.toLowerCase().includes('murudeshwar');
    if (selectedTag === 'airport') return t.tripType.toLowerCase().includes('airport');
    if (selectedTag === 'nature') return t.tripType.toLowerCase().includes('yana') || t.tripType.toLowerCase().includes('honnavar');
    if (selectedTag === 'group') return t.tripType.toLowerCase().includes('railway') || t.tripType.toLowerCase().includes('group') || t.vehicleUsed.toLowerCase().includes('tempo');
    return true;
  });

  // Ensure index remains in bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTag]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handlePrev = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleNext = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentItem: CustomerTestimonial | undefined = filteredTestimonials[currentIndex];

  const handleShareExperience = () => {
    const text = `Hi Harish G, I recently took a trip with Atmabala Travels and would like to share my feedback and testimonial:`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white via-[#F4F7F6] to-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-80 h-80 rounded-full bg-[#FF6500]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-32 w-80 h-80 rounded-full bg-[#0B192C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6500]/10 text-[#FF6500] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Real Traveler Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] tracking-tight">
            Trusted by Travelers Across India
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Read verified experiences from pilgrims, solo wanderers, couples, and group adventurers who explored Gokarna, Kumta, and coastal highways with Harish G.
          </p>

          {/* Social Proof Aggregator Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-[#0B192C]">4.9 / 5.0</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="text-xs sm:text-sm text-slate-700 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>15,000+ Happy Passengers</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="text-xs sm:text-sm text-slate-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6500]" />
              <span>100% Verified Local Drivers</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tags.map((tag) => {
              const isSelected = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Carousel Container */}
        {currentItem && (
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 overflow-hidden">
              
              {/* Giant Background Quote Graphic */}
              <Quote className="absolute right-6 bottom-6 w-32 h-32 text-slate-100 pointer-events-none -rotate-12" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0B192C] to-[#1E3E62] text-white font-extrabold text-base flex items-center justify-center shadow-md">
                        {currentItem.avatarText}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0B192C] leading-snug">
                          {currentItem.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0" />
                          <span>{currentItem.location}</span>
                          <span>•</span>
                          <span className="text-slate-400">{currentItem.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating & Verified Badge */}
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex text-amber-400">
                        {[...Array(currentItem.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                        <ShieldCheck className="w-3 h-3 text-[#25D366]" />
                        {currentItem.verifiedBadge}
                      </span>
                    </div>
                  </div>

                  {/* Trip Context Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Car className="w-3.5 h-3.5 text-[#FF6500]" />
                      <span>Vehicle: {currentItem.vehicleUsed}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{currentItem.tripType}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#FF6500]/10 text-[#FF6500] text-xs font-bold">
                      📍 {currentItem.destinationTag}
                    </span>
                  </div>

                  {/* Main Review Quote */}
                  <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
                    "{currentItem.comment}"
                  </blockquote>

                  {/* Optional Trip Visual Preview Thumbnail */}
                  {currentItem.photo && (
                    <div className="mb-6 flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <img
                        src={currentItem.photo}
                        alt={currentItem.destinationTag}
                        referrerPolicy="no-referrer"
                        className="w-16 h-12 rounded-xl object-cover"
                      />
                      <div className="text-xs">
                        <span className="text-slate-500 block">Trip Experience Highlight:</span>
                        <strong className="text-slate-800 font-semibold">{currentItem.destinationTag}</strong>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 relative z-10">
                {/* Autoplay Toggle */}
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                  title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Auto-playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Paused</span>
                    </>
                  )}
                </button>

                {/* Dot Pagination */}
                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-[#FF6500]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0B192C] hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    aria-label="Next review"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#FF6500] hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom CTA for prospective travelers */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#0B192C] text-white font-bold text-sm shadow-md hover:bg-[#162740] transition-colors cursor-pointer"
          >
            Plan Your Gokarna Trip Today
          </motion.button>

          <button
            type="button"
            onClick={handleShareExperience}
            className="px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Share Your Review with Harish G</span>
          </button>
        </div>

      </div>
    </section>
  );
}
