import { useState, useEffect, useMemo, FormEvent } from 'react';
import {
  X,
  Calendar,
  Clock,
  Car,
  Users,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TravelPackage, ConfirmedBooking, FleetVehicle } from '../types';
import { FLEET_VEHICLES, COMPANY_DETAILS, POPULAR_PACKAGES } from '../data';
import { generateBookingId, saveBooking } from '../utils/bookingStore';

interface PackageBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: TravelPackage | null;
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
}

const PICKUP_TIME_SLOTS = [
  '06:00 AM (Early Sunrise)',
  '07:00 AM (Recommended)',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:30 AM',
  '02:00 PM (Afternoon Tour)',
  '04:00 PM (Sunset Special)'
];

export default function PackageBookingModal({
  isOpen,
  onClose,
  selectedPackage,
  onBookingConfirmed
}: PackageBookingModalProps) {
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  
  // Package Selection
  const [activePackageId, setActivePackageId] = useState<string>(selectedPackage?.id || POPULAR_PACKAGES[0].id);

  // Form States
  const [travelDate, setTravelDate] = useState<string>(todayStr);
  const [pickupTime, setPickupTime] = useState<string>('07:00 AM (Recommended)');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('swift-dzire');
  const [passengers, setPassengers] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pickupLocation, setPickupLocation] = useState<string>('Gokarna Town / Kudle Beach');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'cash_to_driver' | 'upi_on_arrival' | 'advance_booked'>('cash_to_driver');
  const [addGuide, setAddGuide] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync when initial selectedPackage changes
  useEffect(() => {
    if (selectedPackage) {
      setActivePackageId(selectedPackage.id);
    }
  }, [selectedPackage]);

  // Lock body scroll on open
  useEffect(() => {
    if (!isOpen) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = orig;
    };
  }, [isOpen]);

  const currentPkg = useMemo(() => {
    return POPULAR_PACKAGES.find((p) => p.id === activePackageId) || POPULAR_PACKAGES[0];
  }, [activePackageId]);

  const currentVehicle = useMemo(() => {
    return FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  }, [selectedVehicleId]);

  // Dynamic Fare Calculation
  const calculatedFare = useMemo(() => {
    let base = currentPkg.numericPrice || 3000;
    
    // Check specific vehicle mapping
    if (currentPkg.pricingByVehicle) {
      if (selectedVehicleId.includes('dzire') || selectedVehicleId.includes('sedan')) {
        base = currentPkg.pricingByVehicle.sedan4;
      } else if (selectedVehicleId.includes('ertiga')) {
        base = currentPkg.pricingByVehicle.ertiga6;
      } else if (selectedVehicleId.includes('crysta')) {
        base = currentPkg.pricingByVehicle.innova7;
      } else if (selectedVehicleId.includes('urbania')) {
        base = currentPkg.pricingByVehicle.urbania9;
      } else if (selectedVehicleId.includes('tempo')) {
        base = currentPkg.pricingByVehicle.tempo12;
      }
    } else {
      // Fallback vehicle multiplier
      if (selectedVehicleId.includes('ertiga')) base += 500;
      else if (selectedVehicleId.includes('crysta')) base += 1200;
      else if (selectedVehicleId.includes('urbania')) base += 2500;
      else if (selectedVehicleId.includes('tempo')) base += 3500;
    }

    if (addGuide) {
      base += 500;
    }

    return base;
  }, [currentPkg, selectedVehicleId, addGuide]);

  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/[^\d+ -]/g, '');
    setPhone(cleaned);
    const digitsOnly = cleaned.replace(/\D/g, '');
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmitBooking = (e: FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setPhoneError('Valid 10-digit mobile number required for dispatch confirmation.');
      return;
    }

    setIsSubmitting(true);

    const bookingId = generateBookingId();
    const inclusions = [
      'Showroom-Clean Chilled AC Cab',
      'All Highway Tolls Included',
      'Driver Allowance (Bata) Included',
      'Parking Charges Covered',
      'Doorstep Pickup & Drop'
    ];
    if (addGuide) {
      inclusions.push('Local Temple Darshan & Tour Coordinator');
    }

    const newBooking: ConfirmedBooking = {
      bookingId,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      customerName: customerName || 'Valued Guest',
      phone,
      email: email || undefined,
      travelDate,
      pickupTime,
      pickupLocation,
      passengers,
      packageId: currentPkg.id,
      packageTitle: currentPkg.title,
      packageRoute: currentPkg.route,
      packageDuration: currentPkg.duration,
      selectedVehicleId: currentVehicle.id,
      selectedVehicleName: currentVehicle.name,
      totalFare: calculatedFare,
      inclusions,
      specialRequests: specialRequests || undefined,
      paymentMethod
    };

    // Save to local store
    saveBooking(newBooking);

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      onBookingConfirmed(newBooking);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-[#070E1A] rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-auto transition-colors duration-300"
        >
          {/* Header */}
          <div className="bg-[#0B192C] text-white p-5 sm:p-6 flex items-center justify-between relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-[#FF6500]/20 blur-xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-[#FF6500] text-white flex items-center justify-center shadow-lg shadow-[#FF6500]/30 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant Package Booking</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                  Book Tour Package
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="relative z-10 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form and Configuration Body */}
          <form onSubmit={handleSubmitBooking} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* Step 1: Package Selection & Route Preview */}
            <div className="bg-slate-50 dark:bg-[#0B1523] p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  1. Select Tour Package
                </label>
                <span className="text-xs font-semibold text-[#FF6500]">
                  {currentPkg.duration}
                </span>
              </div>

              <select
                value={activePackageId}
                onChange={(e) => setActivePackageId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-[#0B192C] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
              >
                {POPULAR_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.title} — from {pkg.startingPrice}
                  </option>
                ))}
              </select>

              <div className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5 bg-white dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                <MapPin className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 dark:text-white">Route: </span>
                  <span>{currentPkg.route}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Date, Time & Group Size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Travel Date <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pickup Slot <span className="text-rose-500">*</span>
                </label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                >
                  {PICKUP_TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Passengers (Pax)
                </label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={passengers}
                  onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                />
              </div>
            </div>

            {/* Step 3: Vehicle Selection with Live Rates */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                  2. Choose Vehicle (Chilled AC Guaranteed)
                </label>
                <span className="text-xs text-slate-400">All prices include fuel, tolls & driver bata</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {FLEET_VEHICLES.map((veh) => {
                  const isSelected = selectedVehicleId === veh.id;
                  
                  // Compute price for this specific vehicle on this package
                  let vehPrice = currentPkg.numericPrice || 3000;
                  if (currentPkg.pricingByVehicle) {
                    if (veh.id.includes('dzire')) vehPrice = currentPkg.pricingByVehicle.sedan4;
                    else if (veh.id.includes('ertiga')) vehPrice = currentPkg.pricingByVehicle.ertiga6;
                    else if (veh.id.includes('crysta')) vehPrice = currentPkg.pricingByVehicle.innova7;
                    else if (veh.id.includes('urbania')) vehPrice = currentPkg.pricingByVehicle.urbania9;
                    else if (veh.id.includes('tempo')) vehPrice = currentPkg.pricingByVehicle.tempo12;
                  }

                  return (
                    <button
                      key={veh.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(veh.id)}
                      className={`p-3 rounded-2xl text-left border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#FF6500] bg-amber-50/50 dark:bg-amber-950/20 shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div>
                        <div className="font-extrabold text-xs text-[#0B192C] dark:text-white">
                          {veh.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {veh.capacity}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className={`text-sm font-black ${isSelected ? 'text-[#FF6500]' : 'text-slate-900 dark:text-white'}`}>
                          ₹{vehPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                          All Inclusive
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Enhancements */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0B1523] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  id="guide-checkbox"
                  checked={addGuide}
                  onChange={(e) => setAddGuide(e.target.checked)}
                  className="w-4 h-4 rounded text-[#FF6500] focus:ring-[#FF6500] cursor-pointer"
                />
                <label htmlFor="guide-checkbox" className="text-xs text-slate-800 dark:text-slate-200 cursor-pointer">
                  <span className="font-bold">Add Local Temple Darshan & History Coordinator (+₹500)</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Experienced priest/guide to assist with queue darshan & inner garbhagriha entry.
                  </p>
                </label>
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="space-y-3.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider block">
                3. Lead Guest Information & Pickup Address
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kulkarni"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 ${
                      phoneError ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#FF6500]'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. anand@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pickup Hotel / Shacks / Station <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kudle Beach Shack, Namaste Cafe, Gokarna Road Station"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Special Requests / Senior Citizen Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Travelling with elderly parents, need ground floor / easy temple entry"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                />
              </div>
            </div>

            {/* Step 5: Live Pricing Summary & Payment Option */}
            <div className="bg-gradient-to-br from-[#0B192C] to-slate-900 text-white rounded-2xl p-5 shadow-lg space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/80">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Total All-Inclusive Payable
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    ₹{calculatedFare.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    AC Cab + Tolls Included
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                    Driver Bata Included
                  </span>
                </div>
              </div>

              {/* Payment Choice */}
              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <span className="font-semibold text-slate-300">Payment Option:</span>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'cash_to_driver'}
                    onChange={() => setPaymentMethod('cash_to_driver')}
                    className="text-[#FF6500] focus:ring-[#FF6500]"
                  />
                  <span>Cash to Chauffeur on Drop</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'upi_on_arrival'}
                    onChange={() => setPaymentMethod('upi_on_arrival')}
                    className="text-[#FF6500] focus:ring-[#FF6500]"
                  />
                  <span>UPI / GPay on Pickup</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-2xl bg-[#FF6500] hover:bg-[#E55A00] text-white font-black text-base shadow-lg shadow-[#FF6500]/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>
                  {isSubmitting ? 'Confirming Your Pass...' : `Complete Booking & Generate Pass (₹${calculatedFare.toLocaleString('en-IN')})`}
                </span>
              </motion.button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                *Zero cancellation penalties. Verified directly by Harish G at Atmabala Travels Desk.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
