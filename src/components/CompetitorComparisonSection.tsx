import { ShieldCheck, XCircle, CheckCircle2, Award, Zap, Phone, MessageCircle, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ATMABALA } from '../data';

export default function CompetitorComparisonSection() {
  const comparisonRows = [
    {
      feature: 'Pricing & Fare Quotes',
      others: 'Verbal estimates that surge upon arrival; unexpected tolls, night charges, or luggage fees.',
      atmabala: '100% all-inclusive fixed rates upfront with our digital Fare Calculator. Zero hidden surprises.'
    },
    {
      feature: 'Fleet Quality & AC Standards',
      others: 'Unvetted third-party taxis; weak air conditioning and noisy suspensions on coastal ghats.',
      atmabala: 'Personally inspected, showroom-maintained Swift Dzires, Ertiga Hybrids, Innova Crystas & Tempo Travellers.'
    },
    {
      feature: 'Driver Knowledge & Local Roots',
      others: 'Out-of-town drivers following confusing GPS who miss beach road gates or temple timings.',
      atmabala: 'Native Gokarna residents with 10+ years experience who navigate private shacks, sunset points & pujas.'
    },
    {
      feature: 'Airport & Train Delays',
      others: 'Drivers leave or cancel if flights or Konkan trains are delayed, leaving you stranded.',
      atmabala: 'Real-time flight and train tracking with complimentary waiting period and arrivals meet & greet.'
    },
    {
      feature: 'Booking & Communication',
      others: 'Impersonal aggregator middlemen or clunky booking forms with delayed responses.',
      atmabala: 'Direct one-tap WhatsApp and phone access to founder Harish. G for instant personalized service.'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6500]/10 text-[#FF6500] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>The Atmabala Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Why Discerning Travelers Choose Us Over Competitors
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            See how our transparent pricing, pristine fleet, and local Gokarna expertise provide a far superior travel experience.
          </p>
        </motion.div>

        {/* Comparison Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                    Service Benchmark
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-3/8 bg-slate-100/50">
                    Typical Taxi Operators
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold text-[#0B192C] uppercase tracking-wider w-3/8 bg-[#FF6500]/10 border-l border-[#FF6500]/20">
                    <span className="flex items-center gap-1.5 text-[#FF6500]">
                      <Zap className="w-4 h-4" />
                      ATMABALA Travels
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#0B192C] align-top">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-slate-500 bg-slate-50/30 align-top">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 font-semibold text-slate-800 bg-[#FF6500]/5 border-l border-[#FF6500]/20 align-top">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{row.atmabala}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Confidence Assurance Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0B192C] text-base">Zero Hidden Fees</h4>
              <p className="text-xs text-slate-600 mt-1">
                Fuel, interstate permits, driver accommodation, and tolls are baked directly into your confirmation quote.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0B192C] text-base">Direct Host Access</h4>
              <p className="text-xs text-slate-600 mt-1">
                You speak directly to Harish G, our founder, who personally oversees vehicle dispatch and guarantees your satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#0B192C] text-base">4.9 ★ Rated Service</h4>
              <p className="text-xs text-slate-600 mt-1">
                Over 15,000+ satisfied solo tourists, pilgrims, couples, and group adventurers guided safely across Uttara Kannada.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
