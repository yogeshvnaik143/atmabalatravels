import { useState, FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Car, Calendar, ArrowRight, ShieldCheck, Clock, Award, Sparkles, Plane, Calculator } from 'lucide-react';
import { motion } from 'motion/react';
import { FLEET_VEHICLES, COMPANY_DETAILS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  onSelectVehicleForBooking: (vehicleId: string) => void;
  onViewPackages: () => void;
  onNavigateTab?: (tab: string) => void;
}

export default function Hero({ onOpenBooking, onSelectVehicleForBooking, onViewPackages, onNavigateTab }: HeroProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const [pickup, setPickup] = useState('Gokarna Town / Beach');
  const [vehicle, setVehicle] = useState('innova-crysta');
  const [tripType, setTripType] = useState('Gokarna Local Sightseeing');
  const [date, setDate] = useState(todayStr);

  const handleQuickInquiry = (e: FormEvent) => {
    e.preventDefault();
    const selCar = FLEET_VEHICLES.find(v => v.id === vehicle)?.name || 'Car';
    const text = `Hello Harish G, I want to book ${selCar} from ${pickup} on ${date} for ${tripType}. Please share availability and best price quote.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F7F6] via-white to-[#F4F7F6]">
      {/* Background Decorative Accents */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-0 -mr-20 w-96 h-96 rounded-full bg-[#FF6500]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#0B192C]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Location & Trust Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C]/10 text-[#0B192C] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-[#0B192C]/10 shadow-2xs"
            >
              <MapPin className="w-4 h-4 text-[#FF6500] animate-bounce" />
              <span>Gokarna • Kumta • Karwar • Coastal Karnataka</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B192C] tracking-tight leading-[1.15] mb-6">
              Your{' '}
              <span className="relative inline-block text-[#FF6500]">
                Journey
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FF6500]/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              , Our Drive.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-6">
              {COMPANY_DETAILS.subtitle} Goa Mopa & Dabolim airport transfers, station drops, temple pilgrimage circuits, and scenic beach trails.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <button
                type="button"
                onClick={() => onNavigateTab ? onNavigateTab('transfers') : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#FF6500]/10 hover:text-[#FF6500] text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
              >
                <Plane className="w-3.5 h-3.5 text-[#FF6500]" />
                <span>Goa / Hubli Airport Cabs</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab ? onNavigateTab('calculator') : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#0B192C]/10 hover:text-[#0B192C] text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Trip Fare Estimator</span>
              </button>

              <button
                type="button"
                onClick={onViewPackages}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>7 Curated Tour Packages</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8073756776"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF6500] text-white font-bold text-base shadow-lg shadow-[#FF6500]/25 hover:bg-[#E55A00] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Harish.G (8073756776)</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B192C] text-white font-bold text-base shadow-lg shadow-[#0B192C]/20 hover:bg-[#162740] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Booking</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onViewPackages}
                className="flex items-center gap-2 px-5 py-3.5 rounded-full border-2 border-slate-300 text-slate-800 font-semibold text-base hover:border-[#FF6500] hover:text-[#FF6500] transition-colors bg-white/70 cursor-pointer"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FF6500]/10">
                  <Clock className="w-5 h-5 text-[#FF6500] shrink-0" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">24/7 Service</div>
                  <div className="text-[11px] text-slate-500">Day & Night Cabs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FF6500]/10">
                  <ShieldCheck className="w-5 h-5 text-[#FF6500] shrink-0" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Verified Drivers</div>
                  <div className="text-[11px] text-slate-500">Local Gokarna Natives</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FF6500]/10">
                  <Award className="w-5 h-5 text-[#FF6500] shrink-0" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.9 ★ Rating</div>
                  <div className="text-[11px] text-slate-500">15,000+ Happy Guests</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Car Display & Quick Booking Bar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Visual Car Card with smooth floating physics */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
            >
              <img
                src="/images/innova-crysta.jpg"
                alt="Atmabala Travels Luxury Fleet"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/swift-dzire.jpg';
                }}
                className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#FF6500] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6500]" />
                  Premium Showroom Fleet
                </span>
                <h3 className="text-white text-2xl font-bold">Innova Crysta, Ertiga & Tempo Travellers</h3>
                <p className="text-slate-300 text-xs mt-1">Immaculate condition • Chilled AC • Ample luggage room</p>
              </div>
            </motion.div>

            {/* Quick Fare Inquiry Form */}
            <div className="w-full mt-6 bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#0B192C] flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#FF6500]" />
                  Instant Trip Inquiry
                </h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Fast WhatsApp Reply
                </span>
              </div>

              <form onSubmit={handleQuickInquiry} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Pickup City / Station</label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-all"
                  >
                    <option value="Gokarna Town / Beach">Gokarna Town / Beach</option>
                    <option value="Kumta Railway Station (KT)">Kumta Railway Station (KT)</option>
                    <option value="Goa Mopa Airport (GOX)">Goa Mopa Airport (GOX)</option>
                    <option value="Goa Dabolim Airport (GOI)">Goa Dabolim Airport (GOI)</option>
                    <option value="Hubli Airport / Junction">Hubli Airport / Junction (HBX)</option>
                    <option value="Karwar Railway Station">Karwar Railway Station</option>
                    <option value="Murudeshwar Temple">Murudeshwar Temple</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Select Vehicle</label>
                    <select
                      value={vehicle}
                      onChange={(e) => {
                        setVehicle(e.target.value);
                        onSelectVehicleForBooking(e.target.value);
                      }}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-all"
                    >
                      {FLEET_VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Tour Package</label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-all"
                    >
                      <option value="Gokarna Local Sightseeing">Gokarna Local Sightseeing</option>
                      <option value="Sacred Coastal Pilgrimage">Sacred Coastal Pilgrimage</option>
                      <option value="Yana Caves & Vibhuti Falls">Yana Caves & Vibhuti Falls</option>
                      <option value="Honnavar Boating & Mangroves">Honnavar Boating & Mangroves</option>
                      <option value="Murdeshwar & Jog Falls Tour">Murdeshwar & Jog Falls Tour</option>
                      <option value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Date</label>
                    <input
                      type="date"
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-2.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-all"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-[#FF6500] hover:bg-[#E55A00] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  Get Live Quote on WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
