import { useState } from 'react';
import { Users, Briefcase, Snowflake, Phone, MessageCircle, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FLEET_VEHICLES } from '../data';
import { FleetVehicle } from '../types';

interface FleetSectionProps {
  onBookVehicle?: (vehicle: FleetVehicle) => void;
}

export default function FleetSection({ onBookVehicle: _onBookVehicle }: FleetSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet (6 Models)' },
    { id: 'Sedan', label: 'Sedans (4+1)' },
    { id: 'MUV', label: 'Ertiga (6+1)' },
    { id: 'Luxury MPV', label: 'Innova Crysta' },
    { id: 'Luxury Van', label: 'Force Urbania (9+1)' },
    { id: 'Mini Coach', label: 'Tempo Traveler (12+1)' },
  ];

  const filteredFleet = selectedCategory === 'all'
    ? FLEET_VEHICLES
    : FLEET_VEHICLES.filter(v => v.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleVehicleQuote = (vehicle: FleetVehicle) => {
    const text = `Hi Harish G, I would like to get a price quotation for booking ${vehicle.name} (${vehicle.capacity}) with Atmabala Travels. Please share availability and best fare.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white dark:bg-[#070D18] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#FF6500] font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6500]/10 border border-[#FF6500]/20">
            <Sparkles className="w-4 h-4 text-[#FF6500]" />
            Clean, Reliable &amp; Air Conditioned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] dark:text-white mt-3 tracking-tight">
            Our Premium Fleet
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg">
            Choose from well-maintained sedans, luxury MPVs, and group Tempo Travellers with courteous, experienced local chauffeurs. Instant quotations available on WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B192C] dark:bg-[#FF6500] text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Clean Continuous Fleet Marquee Flow */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-[#0F1B2B] dark:to-slate-900 border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-xs pause-on-hover">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-100 dark:from-slate-900 to-transparent z-10" />

            <div className="animate-marquee-ltr flex gap-4">
              {[...FLEET_VEHICLES, ...FLEET_VEHICLES].map((veh, i) => (
                <div
                  key={`${veh.id}-marquee-${i}`}
                  onClick={() => handleVehicleQuote(veh)}
                  className="w-64 sm:w-72 shrink-0 bg-white dark:bg-[#0B1523] p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#FF6500] dark:hover:border-[#FF6500] hover:shadow-lg transition-all cursor-pointer flex items-center gap-3 group"
                >
                  <img
                    src={veh.image}
                    alt={`Atmabala ${veh.name}`}
                    width={64}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-14 rounded-lg object-cover shrink-0 border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>{veh.category}</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">WhatsApp Quote</span>
                    </div>
                    <h4 className="text-xs font-bold text-[#0B192C] dark:text-slate-100 truncate group-hover:text-[#FF6500] transition-colors mt-0.5">
                      {veh.name}
                    </h4>
                    <div className="flex items-center justify-between mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span>{veh.capacity}</span>
                      <span className="text-[#FF6500] font-semibold group-hover:underline flex items-center gap-0.5">
                        Ask Price <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fleet Grid with motion layout (Zero Prices, Direct WhatsApp Quote) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFleet.map((vehicle) => (
              <motion.div
                layout
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col bg-[#F4F7F6] dark:bg-[#0F1B2B] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all group"
              >
                {/* Vehicle Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                  <img
                    src={vehicle.image}
                    alt={`Atmabala ${vehicle.name} rental cab Gokarna`}
                    width={360}
                    height={208}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/innova-crysta.jpg';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#0B192C]/85 text-white backdrop-blur-xs shadow-xs">
                    {vehicle.category}
                  </span>
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6500] text-white shadow-xs">
                    AC Enabled
                  </span>
                </div>

                {/* Vehicle Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B192C] dark:text-white group-hover:text-[#FF6500] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {vehicle.tagline}
                    </p>

                    {/* Key Specifications (Zero Prices) */}
                    <div className="grid grid-cols-2 gap-2.5 my-4 py-3 border-y border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Snowflake className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>Chilled Dual AC</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Doorstep Pickup</span>
                      </div>
                    </div>

                    {/* Features Bullet points */}
                    <div className="space-y-1.5 mb-6">
                      {vehicle.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking & WhatsApp Quote Actions */}
                  <div className="space-y-2 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleVehicleQuote(vehicle)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-slate-950 text-sm font-bold shadow-xs hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Get Price Quote on WhatsApp</span>
                    </motion.button>

                    <a
                      href="tel:8073756776"
                      className="w-full py-2 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-[#FF6500] hover:text-[#FF6500] transition-colors flex items-center justify-center gap-1.5 bg-white dark:bg-[#0B1523]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
                      <span>Call Harish.G (8073756776)</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fleet Extras Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-slate-900 to-[#0B192C] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-[#FF6500] text-xs font-bold uppercase tracking-wider">Custom Transport &amp; Group Tours</span>
            <h4 className="text-lg sm:text-xl font-bold mt-1">Need a customized bus or luxury pilgrimage coach?</h4>
            <p className="text-sm text-slate-300 mt-1">
              We arrange 25-seater &amp; 32-seater luxury coaches, wedding convoys, and outstation multi-day tours across Karnataka and Goa.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20need%20custom%20vehicle%20booking%20or%20luxury%20bus%20quote%20for%20Atmabala%20Travels"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-all"
          >
            Get Custom Bus Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
