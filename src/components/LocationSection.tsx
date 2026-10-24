import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck, ExternalLink, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

export default function LocationSection() {
  const mapsUrl = 'https://maps.app.goo.gl/D8Nh5CjvQevnhewNA';

  const distances = [
    { name: 'Mahabaleshwar Temple', distance: '800 m', time: '3 mins' },
    { name: 'Kudle Beach', distance: '2.1 km', time: '5 mins' },
    { name: 'Om Beach', distance: '5.8 km', time: '12 mins' },
    { name: 'Kumta Railway Station (KT)', distance: '32 km', time: '40 mins' },
  ];

  return (
    <section id="location-section" className="py-16 sm:py-20 bg-slate-100 dark:bg-[#070D18] text-slate-900 dark:text-white transition-colors relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      
      {/* Background Animated Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#FF6500]/15 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6500]/10 dark:bg-[#FF6500]/20 text-[#FF6500] text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF6500]/30 shadow-2xs">
            <Compass className="w-4 h-4 text-[#FF6500]" />
            <span>Official Operating Headquarters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B192C] dark:text-white">
            Find Atmabala Travels in Gokarna
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg">
            Conveniently situated in central Gokarna town for quick 24/7 cab pickups, airport departures, and temple darshan drops.
          </p>
        </motion.div>

        {/* Location Display Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details & Proximity */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 bg-white dark:bg-[#0B1523] rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
          >
            <div>
              {/* Live Status Pill with Pulsing Dot */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Open Now • 24/7 Taxi Hub
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Gokarna, Karnataka
                </span>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-[#FF6500]/10 text-[#FF6500] shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] dark:text-white leading-snug">
                    Atmabala Travels Head Office
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Kamat Complex, Ganjigadde, Gokarna, Uttara Kannada, Karnataka - 581326
                  </p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    Landmark: Near Canara Bank &amp; Gokarna Main Road Junction
                  </p>
                </div>
              </div>

              {/* Key Proximities from Office */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Nearby Distance from Office Hub:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {distances.map((d) => (
                    <div
                      key={d.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col"
                    >
                      <span className="text-xs font-bold text-[#0B192C] dark:text-white truncate">
                        {d.name}
                      </span>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                        <span>{d.distance}</span>
                        <span className="text-[#FF6500] font-bold">{d.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timings & Highlights */}
              <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6500] shrink-0" />
                  <span><strong>Service Hours:</strong> 24 Hours / 7 Days a week (Day &amp; Night Cabs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Doorstep Pickup:</strong> Within 10 minutes anywhere across Gokarna town &amp; beach resorts</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[180px] py-3 px-4 rounded-xl bg-[#0B192C] dark:bg-[#FF6500] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#162740] dark:hover:bg-[#E55A00] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps ↗</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${COMPANY_DETAILS.rawPhone}`}
                className="py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-[#FF6500] hover:text-[#FF6500] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FF6500]" />
                <span>Call Office</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Visual Interactive Map Card with Ripple Radar Animation */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-800 bg-[#0B192C] relative min-h-[380px] flex flex-col justify-between group"
          >
            {/* Background Visual Map Satellite/Aerial graphic with coastal feel */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/gokarna-beach.jpg"
                alt="Atmabala Travels Gokarna Location Hub"
                className="w-full h-full object-cover brightness-[0.55] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-black/30" />
            </div>

            {/* Top Interactive Banner */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-[#FF6500]" />
                <span>GPS Location Pin</span>
              </span>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg transition-transform hover:scale-110"
                title="View full map on Google Maps"
                aria-label="View on Google Maps"
              >
                <ExternalLink className="w-4 h-4 text-[#FF6500]" />
              </a>
            </div>

            {/* Center Animated Pulsing Radar Beacon */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto p-6 text-center">
              <div className="relative flex items-center justify-center">
                {/* Radar Ripple Rings */}
                <motion.div
                  animate={{
                    scale: [1, 2.2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute w-24 h-24 rounded-full bg-[#FF6500]/40 pointer-events-none"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
                  className="absolute w-16 h-16 rounded-full bg-[#25D366]/40 pointer-events-none"
                />

                {/* Animated Bouncing Marker Icon */}
                <motion.a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF6500] to-amber-400 text-white flex items-center justify-center shadow-2xl border-4 border-white cursor-pointer hover:scale-110 transition-transform"
                  title="Click to view on Google Maps"
                >
                  <MapPin className="w-8 h-8 drop-shadow-md" />
                </motion.a>
              </div>

              {/* Pin Label Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-5 px-5 py-2.5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#FF6500]/40 text-white shadow-xl max-w-sm"
              >
                <div className="text-sm font-extrabold text-[#FFF7A1]">
                  Atmabala Travels Office
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Kamat Complex, Ganjigadde, Gokarna
                </div>
                <div className="text-[11px] text-emerald-400 font-bold mt-1 flex items-center justify-center gap-1">
                  <span>Click marker to open exact GPS navigation ↗</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="relative z-10 p-5 bg-gradient-to-t from-[#0B192C] to-transparent flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span>Coordinates: 14.5479° N, 74.3188° E</span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FF6500] font-bold hover:underline"
              >
                <span>https://maps.app.goo.gl/D8Nh5CjvQevnhewNA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
