import { useState, useEffect, FormEvent } from 'react';
import { X, Send, Phone, Car, AlertCircle, Check, Users, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FLEET_VEHICLES } from '../data';
import { FleetVehicle, TravelPackage } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: FleetVehicle | null;
  initialPackage?: TravelPackage | null;
}

export default function BookingModal({ isOpen, onClose, initialVehicle, initialPackage }: BookingModalProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [pickup, setPickup] = useState('Gokarna Town / Beach');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(todayStr);
  const [selectedVehicleId, setSelectedVehicleId] = useState(initialVehicle?.id || 'swift-dzire');
  const [passengers, setPassengers] = useState(2);

  // Sync initial props
  useEffect(() => {
    if (initialVehicle) {
      setSelectedVehicleId(initialVehicle.id);
    }
  }, [initialVehicle]);

  useEffect(() => {
    if (initialPackage) {
      setDestination(initialPackage.title);
    }
  }, [initialPackage]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const currentCar = FLEET_VEHICLES.find(v => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  const handlePhoneChange = (val: string) => {
    // Keep only numbers, +, space, or hyphen
    const cleaned = val.replace(/[^\d+ -]/g, '');
    setPhone(cleaned);
    const digitsOnly = cleaned.replace(/\D/g, '');
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
    } else {
      setPhoneError('');
    }
  };

  const handleSendBooking = (e: FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setPhoneError('Please enter a complete 10-digit mobile number for WhatsApp dispatch.');
      return;
    }

    const text = `*New Ride Booking - Atmabala Travels*%0A` +
      `*Customer Name:* ${encodeURIComponent(name || 'Customer')}%0A` +
      `*Contact Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Pickup Location:* ${encodeURIComponent(pickup)}%0A` +
      `*Tour / Destination:* ${encodeURIComponent(destination || 'Sightseeing Tour')}%0A` +
      `*Vehicle:* ${encodeURIComponent(currentCar.name)} (${encodeURIComponent(currentCar.capacity)})%0A` +
      `*Passengers:* ${passengers}%0A` +
      `*Travel Date:* ${encodeURIComponent(date)}%0A` +
      `*Status:* Awaiting availability confirmation`;

    window.open(`https://wa.me/918073756776?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            key="booking-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 my-auto"
          >
            {/* Modal Header */}
            <div className="bg-[#0B192C] text-white p-5 sm:p-6 flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-[#FF6500]/15 blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#FF6500] text-white shadow-md shadow-[#FF6500]/30">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">Book Atmabala Cab</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Instant dispatch & confirmation with Harish.G
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close booking modal"
                className="relative z-10 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Selected Vehicle Mini-Bar */}
            <div className="bg-slate-100/90 px-5 sm:px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 shrink-0">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#FF6500]" />
                {currentCar.name} ({currentCar.capacity})
              </span>
              <span className="font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                Starting ₹{currentCar.pricePerKm}/km
              </span>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSendBooking} className="p-5 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Hegde"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all ${
                      phoneError
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 focus:ring-[#FF6500]'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {phoneError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travel Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Choose Vehicle</label>
                  <select
                    value={selectedVehicleId}
                    onChange={(e) => setSelectedVehicleId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                  >
                    {FLEET_VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Passengers</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={passengers}
                    onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pickup Location <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gokarna Road Station, Kudle Beach, Kumta"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Drop / Sightseeing Plan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yana Caves, Vibhuti Falls, Murdeshwar"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-[#25D366] text-slate-950 font-extrabold rounded-xl text-sm shadow-md hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Request to WhatsApp Desk</span>
                </motion.button>
              </div>

              <div className="text-center pt-1 border-t border-slate-100">
                <a
                  href="tel:8073756776"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#FF6500] font-semibold transition-colors mt-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
                  Or Call Harish.G directly: +91 8073756776
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
