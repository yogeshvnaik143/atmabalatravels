import { useState } from 'react';
import { Plane, Clock, ShieldCheck, ArrowRight, MessageCircle, Phone, CheckCircle2, Sparkles, Navigation, Luggage } from 'lucide-react';
import { motion } from 'motion/react';
import { AIRPORT_TRANSFER_ROUTES } from '../data';
import { AirportTransferRoute } from '../types';

interface AirportTransfersSectionProps {
  onBookTransfer?: (route: AirportTransferRoute, vehicleType: string) => void;
}

export default function AirportTransfersSection({ onBookTransfer }: AirportTransfersSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'airports' | 'railway'>('all');

  const filteredRoutes = AIRPORT_TRANSFER_ROUTES.filter((r) => {
    if (activeFilter === 'airports') return r.source.toLowerCase().includes('airport');
    if (activeFilter === 'railway') return r.source.toLowerCase().includes('railway') || r.source.toLowerCase().includes('station');
    return true;
  });

  const handleBookRoute = (route: AirportTransferRoute, vehicleType: string, fare: number) => {
    const text = `Hi Harish G, I need an express transfer booking with Atmabala Travels:
✈️ Route: ${route.source} ➔ ${route.destination}
🚗 Selected Vehicle: ${vehicleType} (Fixed Fare: ₹${fare.toLocaleString('en-IN')})
📏 Distance: ${route.distanceKm} km (~${route.driveTime})

Please let me know driver details and availability.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="transfers" className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6500]/20 text-[#FF6500] border border-[#FF6500]/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Plane className="w-4 h-4" />
            <span>Dedicated Express Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Airport & Railway Transfers
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Guaranteed on-time pickups from Goa Mopa (GOX), Dabolim (GOI), Hubli Airport, and Kumta Railway Station with flight tracking and 24/7 night arrivals.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FF6500] text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Express Routes
            </button>
            <button
              onClick={() => setActiveFilter('airports')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'airports'
                  ? 'bg-[#FF6500] text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Airports (Goa / Hubli)
            </button>
            <button
              onClick={() => setActiveFilter('railway')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === 'railway'
                  ? 'bg-[#FF6500] text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Railway Stations (Kumta / Karwar)
            </button>
          </div>
        </motion.div>

        {/* Airport Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-[#FF6500]/50 transition-all shadow-xl hover:shadow-2xl flex flex-col group"
            >
              {/* Route Card Visual Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.source}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {route.popular && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FF6500] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    High Demand
                  </span>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{route.driveTime} • {route.distanceKm} km via NH-66</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5 leading-snug">
                    {route.source}
                  </h3>
                </div>
              </div>

              {/* Destination & Highlights */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                    <span>Drop:</span>
                    <span className="text-slate-200 font-semibold">{route.destination}</span>
                  </div>

                  <div className="space-y-1.5 mb-5">
                    {route.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Multi-Vehicle Rate Matrix */}
                  <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-700/60 mb-5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Transparent Fixed Fares (All-Inclusive)
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-800/80 p-2 rounded-xl flex items-center justify-between">
                        <span className="text-slate-300 font-medium">Sedan (Dzire)</span>
                        <span className="font-bold text-[#FF6500]">₹{route.sedanFare.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="bg-slate-800/80 p-2 rounded-xl flex items-center justify-between">
                        <span className="text-slate-300 font-medium">Ertiga 6-Seater</span>
                        <span className="font-bold text-[#FF6500]">₹{route.suvFare.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="bg-slate-800/80 p-2 rounded-xl flex items-center justify-between">
                        <span className="text-slate-300 font-medium">Innova Crysta</span>
                        <span className="font-bold text-[#D4AF37]">₹{route.crystaFare.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="bg-slate-800/80 p-2 rounded-xl flex items-center justify-between">
                        <span className="text-slate-300 font-medium">Tempo Traveller</span>
                        <span className="font-bold text-[#25D366]">₹{route.tempoFare.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Book Action */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60">
                  <button
                    type="button"
                    onClick={() => handleBookRoute(route, 'Swift Dzire Sedan', route.sedanFare)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#1EBE5D] transition-all cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </button>

                  <a
                    href="tel:8073756776"
                    title="Call Harish G"
                    className="p-2.5 rounded-xl bg-slate-700 text-slate-200 hover:text-white hover:bg-[#FF6500] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Airport Perks Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6500]/20 border border-[#FF6500]/40 flex items-center justify-center text-[#FF6500] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Delayed Flight or Train? Zero Penalty Waiting.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                We track Goa Mopa / Dabolim flights and Konkan Railway trains live. Your driver will be waiting at arrivals even if your schedule gets delayed.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:8073756776"
              className="flex-1 md:flex-initial py-3 px-6 rounded-full bg-[#FF6500] text-white font-bold text-sm hover:bg-[#E55A00] transition-colors text-center"
            >
              Call Harish G: 8073756776
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
