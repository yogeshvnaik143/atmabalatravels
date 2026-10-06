import { useState, useMemo } from 'react';
import { Calculator, MapPin, Car, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageCircle, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { FLEET_VEHICLES, COMPANY_DETAILS } from '../data';
import { FleetVehicle } from '../types';

interface FareCalculatorProps {
  onOpenBookingWithDetails?: (details: { pickup: string; drop: string; vehicle: string; fare: number }) => void;
}

const POPULAR_LOCATIONS = [
  { id: 'gokarna-town', name: 'Gokarna Town / Bus Stand', type: 'local', distFromGokarna: 0 },
  { id: 'kudle-beach', name: 'Kudle Beach / Shacks', type: 'local', distFromGokarna: 2 },
  { id: 'om-beach', name: 'Om Beach / Cafes', type: 'local', distFromGokarna: 6 },
  { id: 'kumta-station', name: 'Kumta Railway Station (KT)', type: 'station', distFromGokarna: 32 },
  { id: 'kumta-town', name: 'Kumta Town Hub', type: 'local', distFromGokarna: 30 },
  { id: 'goa-mopa', name: 'Goa Mopa Airport (GOX)', type: 'airport', distFromGokarna: 165 },
  { id: 'goa-dabolim', name: 'Goa Dabolim Airport (GOI)', type: 'airport', distFromGokarna: 145 },
  { id: 'hubli-airport', name: 'Hubli Airport / Junction (HBX)', type: 'airport', distFromGokarna: 152 },
  { id: 'karwar-station', name: 'Karwar Railway Station', type: 'station', distFromGokarna: 62 },
  { id: 'murudeshwar', name: 'Murudeshwar Shiva Temple', type: 'sightseeing', distFromGokarna: 78 },
  { id: 'yana-caves', name: 'Yana Rocks & Caves', type: 'sightseeing', distFromGokarna: 50 },
  { id: 'jog-falls', name: 'Jog Falls (Western Ghats)', type: 'sightseeing', distFromGokarna: 112 },
  { id: 'honnavar', name: 'Honnavar Mangrove Boardwalk', type: 'sightseeing', distFromGokarna: 45 },
  { id: 'dandeli', name: 'Dandeli River Adventure', type: 'sightseeing', distFromGokarna: 135 }
];

export default function FareCalculator({ onOpenBookingWithDetails }: FareCalculatorProps) {
  const [pickupId, setPickupId] = useState('goa-mopa');
  const [dropId, setDropId] = useState('gokarna-town');
  const [selectedVehicleId, setSelectedVehicleId] = useState('innova-crysta');
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');

  const pickupLocation = POPULAR_LOCATIONS.find(l => l.id === pickupId) || POPULAR_LOCATIONS[0];
  const dropLocation = POPULAR_LOCATIONS.find(l => l.id === dropId) || POPULAR_LOCATIONS[1];
  const selectedVehicle = FLEET_VEHICLES.find(v => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  // Calculate estimated distance
  const estimatedKm = useMemo(() => {
    if (pickupId === dropId) return 10;
    // Special route distance matrix or triangulation
    const pDist = pickupLocation.distFromGokarna;
    const dDist = dropLocation.distFromGokarna;

    if (pickupId.includes('gokarna') || dropId.includes('gokarna')) {
      return Math.max(12, pDist + dDist);
    }
    // If between two non-gokarna points
    return Math.max(25, Math.abs(pDist - dDist) + 20);
  }, [pickupId, dropId, pickupLocation, dropLocation]);

  // Estimated driving duration
  const estimatedTime = useMemo(() => {
    const hours = estimatedKm / 42; // average coastal/ghat driving speed
    if (hours < 1) {
      return `${Math.round(hours * 60)} Mins`;
    }
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m > 0 ? `${m}m` : ''}`;
  }, [estimatedKm]);

  // Estimated fare calculation
  const calculatedFare = useMemo(() => {
    let ratePerKm = selectedVehicle.pricePerKm;
    let baseKm = estimatedKm;
    if (tripType === 'roundtrip') {
      baseKm = estimatedKm * 1.8; // roundtrip with waiting
    }

    let calculated = Math.round(baseKm * ratePerKm);

    // Apply baseline minimums for short local vs outstation
    const minFare = selectedVehicle.id === 'innova-crysta' ? 2200 : selectedVehicle.id === 'tempo-traveller' ? 3500 : 1200;
    const finalFare = Math.max(calculated, minFare);
    // Round to nearest 50 for clean quote
    return Math.ceil(finalFare / 50) * 50;
  }, [estimatedKm, selectedVehicle, tripType]);

  const handleWhatsAppQuote = () => {
    const text = `Hi Harish G, I calculated a fare on Atmabala Travels website:
📍 Route: ${pickupLocation.name} to ${dropLocation.name}
🚗 Vehicle: ${selectedVehicle.name} (${selectedVehicle.category})
🔄 Trip Type: ${tripType === 'oneway' ? 'One-Way Drop' : 'Same-Day Round Trip'}
📏 Est. Distance: ~${estimatedKm} km (${estimatedTime})
💰 Estimated Quote: ₹${calculatedFare.toLocaleString('en-IN')}

Please confirm availability and lock my booking.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSwap = () => {
    const temp = pickupId;
    setPickupId(dropId);
    setDropId(temp);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#F4F7F6] via-white to-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6500]/10 text-[#FF6500] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            <span>Instant Fare Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Trip Fare Estimator & Route Calculator
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            No guessing or awkward bargaining. Calculate transparent, all-inclusive cab rates across coastal Karnataka, airports & railway stations.
          </p>
        </motion.div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#FF6500]" />
                Trip Configuration
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tripType === 'oneway' ? 'bg-[#0B192C] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('roundtrip')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tripType === 'roundtrip' ? 'bg-[#0B192C] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Round Trip
                </button>
              </div>
            </div>

            {/* Location Selector with Swap */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#25D366]" />
                  <select
                    value={pickupId}
                    onChange={(e) => setPickupId(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all"
                  >
                    {POPULAR_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 relative z-10">
                <button
                  type="button"
                  onClick={handleSwap}
                  title="Swap Pickup and Drop"
                  className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:bg-[#FF6500] hover:text-white hover:border-[#FF6500] text-slate-600 flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  ⇅
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Drop-off / Sightseeing Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6500]" />
                  <select
                    value={dropId}
                    onChange={(e) => setDropId(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:border-transparent transition-all"
                  >
                    {POPULAR_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicle Selection Cards */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Select Vehicle Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FLEET_VEHICLES.map((v) => {
                  const isSelected = selectedVehicleId === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#FF6500] bg-[#FF6500]/5 ring-2 ring-[#FF6500]/30 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={v.image}
                        alt={v.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-16 object-cover rounded-lg mb-2"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">{v.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{v.capacity.split(' ')[0]} Seats</div>
                        <div className="text-xs font-bold text-[#FF6500] mt-1">₹{v.pricePerKm}/km</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Real-Time Price Estimate Display (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6500]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Live Estimate
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Transparent Quote</h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#FF6500]/20 text-[#FF6500] border border-[#FF6500]/30 text-xs font-bold">
                  {tripType === 'oneway' ? 'One Way' : 'Round Trip'}
                </div>
              </div>

              {/* Vehicle Preview Card */}
              <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 mb-6 flex items-center gap-4">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-14 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="text-base font-bold text-white">{selectedVehicle.name}</div>
                  <div className="text-xs text-slate-300">{selectedVehicle.category} • AC Chilled</div>
                  <div className="text-xs text-[#D4AF37] mt-0.5">{selectedVehicle.capacity}</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50">
                  <span className="text-[11px] text-slate-400 block uppercase font-medium">Est. Distance</span>
                  <span className="text-lg font-extrabold text-white">~{estimatedKm} km</span>
                </div>
                <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50">
                  <span className="text-[11px] text-slate-400 block uppercase font-medium">Drive Duration</span>
                  <span className="text-lg font-extrabold text-[#25D366]">{estimatedTime}</span>
                </div>
              </div>

              {/* Main Total Amount Box */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 border border-slate-700 text-center mb-6 shadow-inner">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                  Estimated Trip Fare
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <span className="text-[#FF6500] mr-1">₹</span>
                  {calculatedFare.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  *Exact quote may vary by waiting time & peak holiday dates. 0 hidden taxes.
                </p>
              </div>

              {/* What is Included Checklist */}
              <div className="space-y-2 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Sanitized AC Cab with clean seats & bottled water</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Experienced local Gokarna native driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Tolls, fuel & driver allowance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Flight / train delay grace period (Free waiting)</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Lock this Quote on WhatsApp</span>
                </motion.button>

                <div className="text-center">
                  <a
                    href="tel:8073756776"
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Need immediate pickup? Call Harish G: <span className="text-[#FF6500] font-bold">+91 8073756776</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
