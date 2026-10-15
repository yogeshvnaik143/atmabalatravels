import { useState, FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink, Navigation, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS, FLEET_VEHICLES } from '../data';

export default function ContactSection() {
  const todayStr = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Gokarna Town',
    drop: 'Local Sightseeing',
    vehicle: 'Swift Dzire',
    date: todayStr,
    notes: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Sanitize and validate phone
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number for WhatsApp booking confirmation.');
      return;
    }
    setPhoneError('');

    const message = `*Atmabala Travels Booking Inquiry*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pickup:* ${formData.pickup}%0A` +
      `*Destination:* ${formData.drop}%0A` +
      `*Vehicle:* ${formData.vehicle}%0A` +
      `*Date:* ${formData.date}%0A` +
      (formData.notes ? `*Special Request:* ${encodeURIComponent(formData.notes)}` : '');

    window.open(`https://wa.me/918073756776?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F7F6]">
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
            24/7 Support & Reservations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-2 tracking-tight">
            Contact & Ride Booking
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Reach out directly to Harish.G for instant cab bookings, airport transfers, and customized tour packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contacts & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B192C]">Direct Call & Emergency Cab</h4>
                <a href="tel:8073756776" className="text-xl font-extrabold text-[#FF6500] hover:underline block mt-1">
                  +91 8073756776
                </a>
                <p className="text-xs text-slate-500 mt-1">Speak directly with Harish.G for immediate dispatch.</p>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B192C]">WhatsApp Chat</h4>
                <a
                  href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20car%20rental%20and%20travel%20packages"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-[#25D366] hover:underline block mt-1"
                >
                  Start WhatsApp Chat (+91 8073756776) →
                </a>
                <p className="text-xs text-slate-500 mt-1">Quick replies with car photos and tariff sheets.</p>
              </div>
            </motion.div>

            {/* Hub Locations & Interactive Exact Google Map */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white p-6 rounded-2xl border-2 border-slate-200/80 shadow-md space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wide uppercase mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Exact Google Maps Location
                      </div>
                      <h4 className="text-base font-bold text-[#0B192C]">
                        {COMPANY_DETAILS.locations.officeName}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {COMPANY_DETAILS.locations.gokarna}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Actions */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={COMPANY_DETAILS.locations.gokarnaMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B192C] text-white text-xs font-bold hover:bg-[#FF6500] transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-300 ml-0.5" />
                  </a>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=Welcome+Digital+Point,+Kamat+complex,+near+Canara+Bank,+Ganjigadde,+Gokarna,+Karnataka+581326`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5 text-slate-500" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Embedded Live Google Map */}
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative h-48 sm:h-52">
                  <iframe
                    src={COMPANY_DETAILS.locations.gokarnaEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Exact Office Location - Atmabala Travels Gokarna"
                    className="w-full h-full"
                  />
                  <a
                    href={COMPANY_DETAILS.locations.gokarnaMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs text-[#0B192C] text-[10px] font-bold px-2 py-1 rounded shadow-md border border-slate-200 hover:text-[#FF6500] flex items-center gap-1"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Kumta Operating Base */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C]/10 text-[#0B192C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B192C]">Kumta Operating Base</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{COMPANY_DETAILS.locations.kumta}</p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B192C]">Email Inquiries</h4>
                <p className="text-sm text-slate-700 font-semibold mt-1">{COMPANY_DETAILS.email}</p>
                <p className="text-xs text-slate-500 mt-1">Corporate & tour operator partnerships.</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B192C]">Send a Booking Request</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your travel details to send an organized inquiry directly to our WhatsApp booking desk.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Inquiry sent to WhatsApp! Harish.G will confirm vehicle availability shortly.</span>
                </div>
              )}

              {phoneError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{phoneError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Hegde"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (phoneError) setPhoneError('');
                      }}
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 ${
                        phoneError ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-[#FF6500]'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gokarna Main Town or Railway Station"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Drop / Tour Plan</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Om Beach + Yana Caves + Vibhuti"
                      value={formData.drop}
                      onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Vehicle</label>
                    <select
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    >
                      {FLEET_VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} ({v.capacity})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Date</label>
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Special Requests or Timings (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Flight arrival at 11 AM, need carrier for 4 large suitcases, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#25D366] text-slate-950 font-extrabold text-base shadow-lg shadow-[#25D366]/20 hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Booking Inquiry to WhatsApp</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
