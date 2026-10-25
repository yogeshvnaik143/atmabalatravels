import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

interface StatsAndParallaxProps {
  onOpenBooking: () => void;
}

export default function StatsAndParallax({ onOpenBooking }: StatsAndParallaxProps) {
  return (
    <div>
      {/* Number Counters Section (matching original stats-section) */}
      <section className="bg-[#0B192C] text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 transition-transform">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6500] mb-2 tracking-tight">
                {COMPANY_DETAILS.stats.happyCustomers}
              </div>
              <p className="text-sm font-semibold text-slate-300">Happy Customers</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4 transition-transform">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6500] mb-2 tracking-tight">
                {COMPANY_DETAILS.stats.successfulTrips}
              </div>
              <p className="text-sm font-semibold text-slate-300">Successful Trips</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4 transition-transform">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6500] mb-2 tracking-tight">
                {COMPANY_DETAILS.stats.premiumCars}
              </div>
              <p className="text-sm font-semibold text-slate-300">Premium Cars</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4 transition-transform">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF6500] mb-2 tracking-tight">
                {COMPANY_DETAILS.stats.rating}
              </div>
              <p className="text-sm font-semibold text-slate-300">Google Review Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Background Banner */}
      <section
        className="relative py-28 px-4 sm:px-6 text-center text-white bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.78), rgba(11, 25, 44, 0.85)), url('/images/kudle-beach.jpg')`
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto z-10"
        >
          <span className="text-[#FF6500] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
            Your Trusted Coastal Travel Partner
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Ready to hit the road?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Book your car rental or coastal sightseeing package in seconds. Connect directly with Harish.G for instant quotes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20get%20a%20cab%20fare%20quote%20with%20Atmabala%20Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#FF6500] text-white font-bold text-base shadow-xl hover:bg-[#E55A00] transition-colors cursor-pointer"
            >
              Get Free Quote on WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="tel:8073756776"
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#0B192C] font-bold text-base shadow-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#FF6500]" />
              <span>Call: 8073756776</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

