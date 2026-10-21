import { useState, useMemo } from 'react';
import { Calculator, MapPin, Car, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageCircle, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { FLEET_VEHICLES, COMPANY_DETAILS, ONE_WAY_DROPS, GOA_DROPS } from '../data';
import { FleetVehicle } from '../types';

interface FareCalculatorProps {
  onOpenBookingWithDetails?: (details: { pickup: string; drop: string; vehicle: string; fare: number }) => void;
}

const POPULAR_LOCATIONS = [
  { id: 'gokarna-town', name: 'Gokarna Town / Bus Stand / Office', type: 'local', distFromGokarna: 0 },
  { id: 'kudle-beach', name: 'Kudle Beach / Shacks', type: 'local', distFromGokarna: 2 },
  { id: 'om-beach', name: 'Om Beach / Cafes', type: 'local', distFromGokarna: 6 },
  { id: 'kumta-station', name: 'Kumta Railway Station (KT)', type: 'station', distFromGokarna: 32 },
  { id: 'kumta-town', name: 'Kumta Town Hub', type: 'local', distFromGokarna: 30 },
  { id: 'ankola', name: 'Ankola Town', type: 'local', distFromGokarna: 28 },
  { id: 'honavara', name: 'Honavara / Eco-Beach', type: 'coastal', distFromGokarna: 45 },
  { id: 'karwar', name: 'Karwar / Karwar Station', type: 'coastal', distFromGokarna: 62 },
  { id: 'murudeshwar', name: 'Murudeshwar Shiva Temple', type: 'sightseeing', distFromGokarna: 78 },
  { id: 'goa-dabolim', name: 'Goa Dabolim Airport (GOI)', type: 'airport', distFromGokarna: 145 },
  { id: 'goa-mopa', name: 'Goa Mopa Airport (GOX)', type: 'airport', distFromGokarna: 165 },
  { id: 'goa-calangute', name: 'Goa Calangute / Baga', type: 'goa', distFromGokarna: 160 },
  { id: 'goa-panjim', name: 'Goa Panjim', type: 'goa', distFromGokarna: 140 },
  { id: 'goa-palolem', name: 'Goa Palolem / Agonda', type: 'goa', distFromGokarna: 90 },
  { id: 'goa-madgaon', name: 'Goa Madgaon (Margao)', type: 'station', distFromGokarna: 110 },
  { id: 'hubli-airport', name: 'Hubli / Alnavar / Airport (HBX)', type: 'airport', distFromGokarna: 152 },
  { id: 'sirsi', name: 'Sirsi', type: 'ghat', distFromGokarna: 82 },
  { id: 'jog-falls', name: 'Jog Falls (Western Ghats)', type: 'sightseeing', distFromGokarna: 112 },
  { id: 'udupi', name: 'Udupi / Sri Krishna Matha', type: 'city', distFromGokarna: 175 },
  { id: 'dandeli', name: 'Dandeli (City / Jungle)', type: 'sightseeing', distFromGokarna: 135 },
  { id: 'mangalore', name: 'Mangalore / Airport (IXE)', type: 'airport', distFromGokarna: 230 },
  { id: 'hampi', name: 'Hampi Heritage Ruins', type: 'long-distance', distFromGokarna: 320 },
  { id: 'kolluru', name: 'Kolluru (Mookambika Temple)', type: 'sightseeing', distFromGokarna: 130 },
  { id: 'shivamogga', name: 'Shivamogga (Shimoga)', type: 'city', distFromGokarna: 200 },
  { id: 'sringeri', name: 'Sringeri (Sharada Peetham)', type: 'sightseeing', distFromGokarna: 215 },
  { id: 'horanadu', name: 'Horanadu (Annapoorneshwari)', type: 'sightseeing', distFromGokarna: 250 },
  { id: 'bangalore', name: 'Bangalore (Bengaluru)', type: 'long-distance', distFromGokarna: 490 },
  { id: 'mysore', name: 'Mysore (Mysuru)', type: 'long-distance', distFromGokarna: 480 },
  { id: 'kukke', name: 'Kukke Subramanya', type: 'sightseeing', distFromGokarna: 290 },
  { id: 'yana-caves', name: 'Yana Rocks & Caves', type: 'sightseeing', distFromGokarna: 50 },
];

export default function FareCalculator({ onOpenBookingWithDetails }: FareCalculatorProps) {
  const [pickupId, setPickupId] = useState('goa-mopa');
  const [dropId, setDropId] = useState('gokarna-town');
  const [selectedVehicleId, setSelectedVehicleId] = useState('swift-dzire');
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('oneway');

  const pickupLocation = POPULAR_LOCATIONS.find(l => l.id === pickupId) || POPULAR_LOCATIONS[0];
  const dropLocation = POPULAR_LOCATIONS.find(l => l.id === dropId) || POPULAR_LOCATIONS[1];
  const selectedVehicle = FLEET_VEHICLES.find(v => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  // Exact catalog rate lookup
  const catalogMatch = useMemo(() => {
    if (tripType !== 'oneway') return null;
    const isBasePickup = pickupId.includes('gokarna') || pickupId.includes('kumta');
    const isBaseDrop = dropId.includes('gokarna') || dropId.includes('kumta');
    if (!isBasePickup && !isBaseDrop) return null;

    const targetId = isBasePickup ? dropId : pickupId;
    const isSedan4 = selectedVehicle.category.includes('Sedan') || selectedVehicle.id.includes('dzire');

    // Check Goa Drops
    if (targetId.includes('mopa')) {
      return { fare: isSedan4 ? 6000 : 7000, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }
    if (targetId.includes('dabolim')) {
      return { fare: isSedan4 ? 4500 : 5500, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }
    if (targetId.includes('calangute')) {
      return { fare: isSedan4 ? 6000 : 7000, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }
    if (targetId.includes('panjim')) {
      return { fare: isSedan4 ? 5000 : 5500, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }
    if (targetId.includes('palolem')) {
      return { fare: isSedan4 ? 3500 : 4000, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }
    if (targetId.includes('madgaon')) {
      return { fare: isSedan4 ? 4000 : 4500, source: 'Official Goa Drop Catalog', inclusions: 'Toll + AC + Driver Bata + Goa State Border Permit' };
    }

    // Check One-Way Drops
    if (targetId.includes('ankola')) return { fare: isSedan4 ? 1200 : 1500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('kumta')) return { fare: isSedan4 ? 1500 : 1800, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('honavar')) return { fare: isSedan4 ? 2500 : 2800, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('karwar')) return { fare: isSedan4 ? 2800 : 3300, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('jog')) return { fare: isSedan4 ? 3800 : 4300, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('hubli')) return { fare: isSedan4 ? 4000 : 5000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('sirsi')) return { fare: isSedan4 ? 3000 : 3500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('udupi')) return { fare: isSedan4 ? 5000 : 6000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('dandeli')) return { fare: isSedan4 ? 4000 : 5000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('mangalore')) return { fare: isSedan4 ? 6500 : 7500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('hampi')) return { fare: isSedan4 ? 8500 : 9500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('kolluru')) return { fare: isSedan4 ? 4500 : 5500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('shivamogga')) return { fare: isSedan4 ? 6000 : 7000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('sringeri')) return { fare: isSedan4 ? 7000 : 8000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('horanadu')) return { fare: isSedan4 ? 8000 : 9500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('bangalore')) return { fare: isSedan4 ? 14500 : 17500, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('mysore')) return { fare: isSedan4 ? 14000 : 17000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };
    if (targetId.includes('kukke')) return { fare: isSedan4 ? 10000 : 12000, source: 'Official One-Way Drop Catalog', inclusions: 'Toll + AC + Driver Bata Included' };

    return null;
  }, [pickupId, dropId, tripType, selectedVehicle]);

  // Calculate estimated distance
  const estimatedKm = useMemo(() => {
    if (pickupId === dropId) return 10;
    const pDist = pickupLocation.distFromGokarna;
    const dDist = dropLocation.distFromGokarna;

    if (pickupId.includes('gokarna') || dropId.includes('gokarna')) {
      return Math.max(12, pDist + dDist);
    }
    return Math.max(25, Math.abs(pDist - dDist) + 20);
  }, [pickupId, dropId, pickupLocation, dropLocation]);

  // Estimated driving duration
  const estimatedTime = useMemo(() => {
    const hours = estimatedKm / 42;
    if (hours < 1) {
      return `${Math.round(hours * 60)} Mins`;
    }
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m > 0 ? `${m}m` : ''}`;
  }, [estimatedKm]);

  // Estimated fare calculation
  const calculatedFare = useMemo(() => {
    if (catalogMatch) {
      return catalogMatch.fare;
    }
    let ratePerKm = selectedVehicle.pricePerKm;
    let baseKm = estimatedKm;
    if (tripType === 'roundtrip') {
      baseKm = estimatedKm * 1.8;
    }

    let calculated = Math.round(baseKm * ratePerKm);
    const minFare = selectedVehicle.id.includes('crysta') ? 2200 : selectedVehicle.id.includes('tempo') ? 3500 : 1200;
    const finalFare = Math.max(calculated, minFare);
    return Math.ceil(finalFare / 50) * 50;
  }, [estimatedKm, selectedVehicle, tripType, catalogMatch]);

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
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 border border-slate-700 text-center mb-6 shadow-inner relative">
                {catalogMatch && (
                  <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official Catalog Tariff Match</span>
                  </div>
                )}
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                  {catalogMatch ? 'Locked Catalog Tariff' : 'Estimated Trip Fare'}
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <span className="text-[#FF6500] mr-1">₹</span>
                  {calculatedFare.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-300 mt-2 font-medium">
                  {catalogMatch ? catalogMatch.inclusions : '*Includes AC cab, fuel, chauffeur & highway tolls. 0 hidden charges.'}
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
