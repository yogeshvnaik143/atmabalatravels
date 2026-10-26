import { Shield, Clock, MapPin, Phone, MessageCircle, Award, CheckCircle2, HeartHandshake, Compass, Car, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data';

export default function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: 'Safety & Certified Reliability',
      description: 'Every vehicle in our fleet undergoes periodic multi-point mechanical inspection. Equipped with clean seatbelts, first-aid kits, and driven by licensed, background-verified professionals.'
    },
    {
      icon: Clock,
      title: 'Punctual 24/7 Pickups',
      description: 'Whether it is a 3:00 AM emergency drop to Goa Airport or a late-night arrival at Kumta or Gokarna Road station, our chauffeur arrives ahead of schedule.'
    },
    {
      icon: MapPin,
      title: 'Native Coastal Guidance',
      description: 'Born and raised in Gokarna, our drivers know secret sunset viewpoints, optimal temple darshan timings, offbeat trails, and the cleanest seaside dining shacks.'
    },
    {
      icon: HeartHandshake,
      title: 'Honest WhatsApp Quotations',
      description: 'No hidden surcharges or surprise billing. You get clear, custom quotes on WhatsApp for your exact route, vehicle type, and travel dates.'
    },
    {
      icon: Car,
      title: 'Chilled Air-Conditioned Comfort',
      description: 'Immaculately sanitized cabins with dual-zone climate control, generous luggage space, and smooth suspension for coastal highways and Western Ghat curves.'
    },
    {
      icon: Award,
      title: `4+ Years & ${COMPANY_DETAILS.stats.happyCustomers} Happy Guests`,
      description: 'Proudly trusted by families, spiritual pilgrims, solo trekkers, and corporate groups from across India and worldwide with an average 4.9-star rating.'
    }
  ];

  const faqs = [
    {
      q: 'How do I get a price quote for my trip?',
      a: 'Simply click the "Chat on WhatsApp" button or use our quick quotation form. Tell Harish G your pickup location, destination, vehicle preference, and date. You will receive an instant, all-inclusive quotation directly on WhatsApp.'
    },
    {
      q: 'Do you provide late night airport pickups from Goa Mopa / Dabolim?',
      a: 'Yes, 24/7! We track your incoming flight in real-time. Even if your flight is delayed, your driver will be waiting at the arrival terminal with zero waiting penalty.'
    },
    {
      q: 'Can we visit all 5 main Gokarna beaches in one day?',
      a: 'Yes! Kudle Beach and Om Beach have direct road access for our cabs. Half Moon and Paradise beaches are accessible via picturesque boat rides from Om Beach or scenic hiking trails, which our driver can easily coordinate.'
    },
    {
      q: 'Are tolls, driver bata, and interstate permits included in the quote?',
      a: 'Yes, when Harish G sends your WhatsApp quotation, all fuel, driver allowances, and tolls are clearly specified so there are zero surprises during your journey.'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-14 md:py-20 bg-white dark:bg-[#070D18] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <span className="text-[#FF6500] font-bold text-xs sm:text-sm tracking-widest uppercase inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6500]/10 border border-[#FF6500]/20 mb-2 sm:mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FF6500]" />
            About Atmabala Travels
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] dark:text-white tracking-tight">
            Gokarna's Native Travel Partner
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2 sm:mt-4 text-sm sm:text-lg leading-relaxed">
            Founded by <strong>Harish G</strong>, Atmabala Travels is Gokarna's dedicated chauffeur and tourist cab service, connecting travelers to sacred temples, pristine beaches, and airport hubs across Karnataka and Goa.
          </p>
        </motion.div>

        {/* Founder Story Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0B192C] via-[#0F223D] to-[#071322] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-2xl border border-slate-700/80 mb-8 sm:mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src="/images/logo-badge.jpg"
                  alt="Atmabala Travels Gokarna - Founder Harish G"
                  width={220}
                  height={220}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/gokarna-beach.jpg';
                  }}
                  className="w-32 h-32 sm:w-52 sm:h-52 rounded-2xl object-cover border-4 border-[#FF6500] shadow-xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FF6500] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                  4+ Years in Gokarna
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black mt-4 sm:mt-5">Harish. G</h3>
              <p className="text-xs text-[#FF6500] font-bold uppercase tracking-wider">Proprietor &amp; Chief Coordinator</p>
              <p className="text-xs text-slate-400 mt-0.5">Native of Gokarna, Uttara Kannada</p>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="text-[#FF6500] text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF6500]" />
                Founder's Commitment
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold leading-tight text-white mb-3 sm:mb-4">
                "Hospitality and honest guidance are our heartfelt tradition."
              </h2>
              <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-base text-slate-300 leading-relaxed">
                <p>
                  "When visitors travel to Gokarna, whether for a sacred pilgrimage to Lord Mahabaleshwar or a peaceful beach holiday, transportation should never be stressful. Over the past 4+ years, I have built Atmabala Travels with a single principle: treat every traveler like an honored guest in our home."
                </p>
                <p>
                  "We eliminate guesswork by providing customized WhatsApp quotations tailored directly to your schedule. Whether you need a simple station pickup from Kumta or a multi-day coastal circuit covering Yana Caves, Murudeshwar, and Jog Falls, our drivers ensure comfort, safety, and genuine local hospitality."
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700/80">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20would%20like%20to%20get%20a%20price%20quote%20for%20a%20cab%20in%20Gokarna."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Harish G on WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={`tel:${COMPANY_DETAILS.rawPhone}`}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF6500]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Values Grid */}
        <div className="mb-8 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#0B192C] dark:text-white">
              Why Travelers Prefer Atmabala Travels
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">
              Built on dependability, clean air-conditioned vehicles, and verified local chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#F4F7F6] dark:bg-[#0F1B2B] border border-slate-200 dark:border-slate-800 transition-all shadow-xs hover:shadow-lg"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B192C] dark:bg-slate-800 flex items-center justify-center text-[#FF6500] mb-3 sm:mb-5">
                  <v.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C] dark:text-white mb-1.5 sm:mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Office Location & Physical Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-100 dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 mb-8 sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#FF6500] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5 sm:mb-2">
                <MapPin className="w-4 h-4 text-[#FF6500]" />
                Registered Headquarters
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#0B192C] dark:text-white">
                Visit Our Gokarna Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 sm:mt-2 mb-4 sm:mb-6">
                Centrally located in Gokarna town, convenient for travelers arriving from bus terminals, railway stations, and beach resorts.
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6500] shrink-0 mt-0.5" />
                  <div>
                    <strong>Office Address:</strong>
                    <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      Kamat Complex, Ganjigadde, Gokarna, Uttara Kannada, Karnataka - 581326 (Near Canara Bank)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6500] shrink-0" />
                  <div>
                    <strong>Helpline:</strong>{' '}
                    <a href={`tel:${COMPANY_DETAILS.rawPhone}`} className="text-[#FF6500] font-bold hover:underline">
                      +91 {COMPANY_DETAILS.phone}
                    </a>{' '}
                    (24 Hours Available)
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <strong>Operating Hours:</strong> 24 Hours / 7 Days a Week (All-weather dispatch)
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href="https://maps.app.goo.gl/D8Nh5CjvQevnhewNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#0B192C] dark:bg-[#FF6500] text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps ↗</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.rawPhone}`}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-[#FF6500] hover:text-[#FF6500] transition-colors"
                >
                  Call Office Directly
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-800 aspect-video lg:aspect-square relative">
                <img
                  src="/images/kudle-beach.jpg"
                  alt="Atmabala Travels Gokarna Headquarters & Kudle Beach View"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#FF6500] uppercase tracking-wider">Convenient Gokarna Town Hub</span>
                  <p className="text-[11px] sm:text-xs text-slate-200 mt-0.5">Quick 5-minute dispatch to Kudle Beach, Om Beach &amp; Mahabaleshwar Temple.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Travel FAQ Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-8">
            <span className="text-[#FF6500] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 mb-1">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] dark:text-white">
              Planning Your Gokarna Trip
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-[#F4F7F6] dark:bg-[#0F1B2B] border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-base font-bold text-[#0B192C] dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
              Have a specific itinerary or group question? Harish G is happy to advise.
            </p>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20have%20a%20question%20about%20traveling%20in%20Gokarna."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-slate-950 font-bold text-sm shadow-md hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Harish G on WhatsApp</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
