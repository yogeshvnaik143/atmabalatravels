import { useState } from 'react';
import { Home, Sparkles, MapPin, CheckCircle, Info, MessageCircle, Phone, ArrowRight, ShieldCheck, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { HOTEL_STAY_RECOMMENDATIONS, FAQS_AND_TRAVEL_TIPS } from '../data';

export default function StayAndPilgrimageGuide() {
  const [activeTab, setActiveTab] = useState<'stays' | 'darshan' | 'faqs'>('stays');

  const handleInquireStay = (stayName: string, location: string) => {
    const text = `Hi Harish G, I am looking for accommodation & cab package assistance in Gokarna for:
🏨 Stay: ${stayName} (${location})
Please advise best options, contact details, and cab pickup availability.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C]/10 text-[#0B192C] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#FF6500]" />
            <span>Local Concierge & Pilgrimage Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Stay Concierge & Sacred Temple Darshan Guide
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Beyond cab rides, benefit from 12+ years of local relationships. Handpicked beachfront shacks, temple lodges, and authentic pilgrimage darshan guidelines.
          </p>

          {/* Sub-tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('stays')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'stays'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🏖️ Beach Shacks & Resort Stays
            </button>
            <button
              onClick={() => setActiveTab('darshan')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'darshan'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🛕 Sacred Darshan Guidelines
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'faqs'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              ❓ Tourist FAQs & Tips
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Hotel & Stay Recommendations */}
        {activeTab === 'stays' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_STAY_RECOMMENDATIONS.map((stay, idx) => (
              <motion.div
                key={stay.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#FF6500] hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0B192C]/90 text-white text-[11px] font-bold backdrop-blur-xs">
                    {stay.type}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#FF6500] transition-colors leading-snug">
                      {stay.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0" />
                      <span>{stay.location}</span>
                    </div>

                    <div className="text-xs font-bold text-[#FF6500] mb-3">
                      Est. {stay.priceRange}
                    </div>

                    <div className="space-y-1.5 mb-5">
                      {stay.features.map((feat, i) => (
                        <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInquireStay(stay.name, stay.location)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#25D366] hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Stay + Cab Combo</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Sacred Darshan Guidelines */}
        {activeTab === 'darshan' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Mahabaleshwar Temple */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-lg mb-4">
                ॐ
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mahabaleshwar Atmalinga</h3>
              <p className="text-xs text-slate-600 mb-4">
                The prime spiritual epicenter of Gokarna consecrated by Lord Shiva, revered as Dakshina Kashi (Southern Kashi).
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900 block mb-0.5">⏰ Darshan Timings</span>
                  <span>Morning: 6:00 AM to 12:30 PM<br/>Evening: 5:00 PM to 8:00 PM</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900 block mb-0.5">👔 Strict Dress Code</span>
                  <span>Men must wear traditional Dhoti (no shirts or vests inside inner sanctum). Women in Sarees or Salwar.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900 block mb-0.5">🙏 Sacred Sequence</span>
                  <span>1. Holy cleansing dip at Kotiteertha / Main Beach<br/>2. Mahaganapati Temple darshan<br/>3. Mahabaleshwar Atmalinga Sparsha Pooja</span>
                </div>
              </div>
            </div>

            {/* Mahaganapati Temple */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-700 flex items-center justify-center font-bold text-lg mb-4">
                🕉️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mahaganapati Temple</h3>
              <p className="text-xs text-slate-600 mb-4">
                Ancient standing 5-foot black granite Ganesha deity located just 50 meters beside Mahabaleshwar temple.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-orange-900 block mb-0.5">⏰ Darshan Timings</span>
                  <span>Open continuously from 5:00 AM to 1:00 PM and 4:30 PM to 8:30 PM.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-orange-900 block mb-0.5">📜 Mythological Significance</span>
                  <span>Honoring the smart boy Ganesha who tricked demon king Ravana into putting down the Atmalinga upon this ground.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-orange-900 block mb-0.5">🚗 Cab Drop Ease</span>
                  <span>Our driver drops you at the car street threshold with zero walking stress for senior citizens.</span>
                </div>
              </div>
            </div>

            {/* Murudeshwar & Idagunji */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-700 flex items-center justify-center font-bold text-lg mb-4">
                🔱
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Murudeshwar & Idagunji</h3>
              <p className="text-xs text-slate-600 mb-4">
                Coastal temple wonders easily combined on a 1-day excursion with Atmabala private cabs.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-teal-900 block mb-0.5">🗼 Raja Gopuram Lift</span>
                  <span>Take the high-speed elevator to the 18th floor of the Murudeshwar gopuram for panoramic Arabian Sea vistas.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-teal-900 block mb-0.5">🌺 Idagunji Prasada</span>
                  <span>Famous for divine Panchakhadya prasad and tranquil spiritual vibes nestled in tropical betel nut plantations.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="font-bold text-teal-900 block mb-0.5">🚐 Tour Package</span>
                  <span>Book our popular 1-day Coastal Pilgrimage Circuit starting from ₹3,400 with doorstep pickup.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Tourist FAQs & Tips */}
        {activeTab === 'faqs' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {FAQS_AND_TRAVEL_TIPS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-base sm:text-lg font-bold text-[#0B192C] flex items-start gap-3">
                  <span className="text-[#FF6500] font-black shrink-0">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
