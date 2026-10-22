import { useState } from 'react';
import {
  CheckCircle2,
  Copy,
  Check,
  Printer,
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Car,
  Users,
  ShieldCheck,
  X,
  FileCheck2,
  Sparkles,
  QrCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ConfirmedBooking } from '../types';
import { COMPANY_DETAILS } from '../data';
import { formatWhatsAppBookingMessage } from '../utils/bookingStore';

interface BookingConfirmationModalProps {
  booking: ConfirmedBooking | null;
  isOpen: boolean;
  onClose: () => void;
  onViewMyBookings?: () => void;
}

export default function BookingConfirmationModal({
  booking,
  isOpen,
  onClose,
  onViewMyBookings
}: BookingConfirmationModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !booking) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(booking.bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppDispatch = () => {
    const message = formatWhatsAppBookingMessage(booking);
    window.open(`https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-[#070E1A] rounded-3xl max-w-2xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-auto print:max-h-none print:shadow-none print:border-none print:w-full transition-colors duration-300"
        >
          {/* Top Decorative Header */}
          <div className="bg-[#0B192C] text-white p-5 sm:p-6 relative overflow-hidden shrink-0 print:bg-[#0B192C] print:text-white">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 rounded-full bg-[#FF6500]/20 blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Booking Confirmed & Locked</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    Official Travel Voucher
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors print:hidden cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Voucher Content Body */}
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
            
            {/* Booking Reference Bar */}
            <div className="bg-slate-50 dark:bg-[#0B1523] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider block">
                  Booking Reference Number
                </span>
                <span className="text-2xl font-black text-[#0B192C] dark:text-white tracking-wider font-mono">
                  {booking.bookingId}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyId}
                  className="flex-1 sm:flex-initial px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Tour & Route Overview Card */}
            <div className="bg-gradient-to-r from-slate-900 to-[#0B192C] text-white rounded-2xl p-5 shadow-sm">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FF6500] text-white inline-block mb-2">
                Reserved Package
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                {booking.packageTitle}
              </h4>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF6500] shrink-0" />
                <span>{booking.packageRoute}</span>
              </p>
              <div className="mt-3 pt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Duration: <strong>{booking.packageDuration}</strong></span>
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Party: <strong>{booking.passengers} Passengers</strong></span>
                </span>
              </div>
            </div>

            {/* Travel Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-slate-50 dark:bg-[#0B1523] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6500]" />
                  Schedule & Pickup Time
                </span>
                <div className="text-sm font-extrabold text-[#0B192C] dark:text-white">
                  {booking.travelDate}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                  Pickup Slot: <strong className="text-slate-900 dark:text-slate-100">{booking.pickupTime}</strong>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-[#0B1523] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-1.5">
                  <Car className="w-3.5 h-3.5 text-[#FF6500]" />
                  Assigned Vehicle
                </span>
                <div className="text-sm font-extrabold text-[#0B192C] dark:text-white">
                  {booking.selectedVehicleName}
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Chilled Air Conditioned Cab</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-[#0B1523] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 sm:col-span-2">
                <span className="text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6500]" />
                  Pickup Address / Hotel
                </span>
                <div className="text-sm font-extrabold text-[#0B192C] dark:text-white">
                  {booking.pickupLocation}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Lead Guest: <strong className="text-slate-800 dark:text-slate-200">{booking.customerName}</strong> ({booking.phone})
                </div>
              </div>
            </div>

            {/* Fare Breakdown Box */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60 dark:border-emerald-800/50 mb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 block">
                    Total Fixed Fare (Pay on Arrival / Drop)
                  </span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400">
                    100% Guaranteed transparent rate — zero hidden taxes or tolls
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-950 dark:text-emerald-200">
                  ₹{booking.totalFare.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white text-xs mb-1">
                  Included in this Pass:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {booking.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Driver Desk & Dispatch Note */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-950 dark:text-amber-300">
                <Phone className="w-4 h-4 text-[#FF6500]" />
                <span>Assigned Fleet Manager: Harish G (Atmabala Travels Head Office)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 pl-6">
                Chauffeur details with car registration number will be dispatched to your WhatsApp 2 hours prior to your scheduled pickup time.
              </p>
            </div>

          </div>

          {/* Action Footer Buttons (Hidden in Print) */}
          <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#0B1523] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3 shrink-0 print:hidden">
            <button
              onClick={handleWhatsAppDispatch}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp Desk</span>
            </button>

            <button
              onClick={handlePrint}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 shadow-2xs cursor-pointer transition-all"
            >
              <Printer className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Print Pass</span>
            </button>

            {onViewMyBookings && (
              <button
                onClick={() => {
                  onClose();
                  onViewMyBookings();
                }}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#0B192C] dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-2xs cursor-pointer transition-all border border-transparent dark:border-slate-700"
              >
                <FileCheck2 className="w-4 h-4 text-[#FF6500]" />
                <span>My Bookings</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
