import { Shield, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070D18] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#FF6500] font-bold text-sm tracking-wider uppercase">
            About Atmabala Travels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] dark:text-white mt-2 tracking-tight">
            Your Trusted Coastal Travel Partner
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
            Serving pilgrims, tourists, couples, and group adventurers throughout Gokarna, Kumta, Karwar, and coastal Karnataka for over a decade.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-[#F4F7F6] dark:bg-[#0F1B2B] border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0B192C] dark:bg-slate-800 flex items-center justify-center text-[#FF6500] mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B192C] dark:text-white mb-3">Immaculate Cleanliness & Safety</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every vehicle undergoes regular mechanical maintenance and interior sanitization before departure. We prioritize your family's safety with seat belts and speed controls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-[#F4F7F6] dark:bg-[#0F1B2B] border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF6500] flex items-center justify-center text-white mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B192C] dark:text-white mb-3">Local Coastal Expertise</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our chauffeurs are native coastal residents who know the best sunset spots, temple darshan timings, hidden beach trails, and scenic ghat drives across Uttara Kannada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-[#F4F7F6] dark:bg-[#0F1B2B] border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0B192C] dark:bg-slate-800 flex items-center justify-center text-[#FF6500] mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B192C] dark:text-white mb-3">Punctual 24/7 Pickups</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you arrive on a late-night train at Gokarna Road or need an early morning 4 AM airport drop to Goa Dabolim/MOPA, our driver is guaranteed on time.
            </p>
          </motion.div>
        </div>

        {/* Founder / Team Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl"
        >
          <img
            src="/images/logo-badge.jpg"
            alt="Atmabala Travels Gokarna"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/gokarna-beach.jpg';
            }}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-4 border-[#FF6500] shadow-lg shrink-0"
          />
          <div className="flex-1 text-center md:text-left">
            <span className="text-[#FF6500] text-xs font-bold uppercase tracking-wider">
              Message from the Founder
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1">Harish. G</h3>
            <p className="text-xs text-slate-400 mb-4">Proprietor, Atmabala Travels</p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              "We welcome you to Gokarna and coastal Karnataka. At Atmabala Travels, hospitality and honesty are our foundation. We provide fair transparent rates with zero unexpected surcharges so you can focus entirely on enjoying your spiritual journey and coastal vacation."
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8073756776"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 8073756776</span>
              </motion.a>
              <span className="text-xs text-slate-400">Available 24 hours daily</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
