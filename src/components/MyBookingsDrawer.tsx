import { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Car,
  MessageCircle,
  Phone,
  Printer,
  Trash2,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ConfirmedBooking } from '../types';
import { getStoredBookings, cancelBooking, formatWhatsAppBookingMessage } from '../utils/bookingStore';
import { COMPANY_DETAILS } from '../data';

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenNewBooking?: () => void;
  onViewBookingVoucher?: (booking: ConfirmedBooking) => void;
}

export default function MyBookingsDrawer({
  isOpen,
  onClose,
  onOpenNewBooking,
  onViewBookingVoucher
}: MyBookingsDrawerProps) {
  const [bookings, setBookings] = useState<ConfirmedBooking[]>([]);

  const loadBookings = () => {
    setBookings(getStoredBookings());
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => loadBookings();
    window.addEventListener('atmabala_booking_updated', handleUpdate);
    return () => window.removeEventListener('atmabala_booking_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const handleCancel = (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking? Our team will be notified.')) {
      cancelBooking(bookingId);
      loadBookings();
    }
  };

  const handleWhatsAppHelp = (b: ConfirmedBooking) => {
    const text = `Hi Harish G, inquiring about my Booking ${b.bookingId} (${b.packageTitle}) on ${b.travelDate}.`;
    window.open(`https://wa.me/${COMPANY_DETAILS.rawPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative z-10 w-full max-w-md bg-white dark:bg-[#070E1A] h-full shadow-2xl flex flex-col overflow-hidden border-l border-slate-200 dark:border-slate-800"
        >
          {/* Drawer Header */}
          <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6500] text-white flex items-center justify-center font-bold">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white">My Bookings</h3>
                <p className="text-xs text-slate-300">
                  {bookings.length} {bookings.length === 1 ? 'Trip' : 'Trips'} Reserved with Atmabala
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bookings List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#09111E]">
            {bookings.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-400">
                  <Car className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">No Bookings Yet</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
                  You haven&apos;t reserved any coastal tour packages yet. Browse our curated packages and lock your cab with zero upfront payment!
                </p>
                {onOpenNewBooking && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenNewBooking();
                    }}
                    className="mt-5 px-5 py-2.5 rounded-xl bg-[#FF6500] hover:bg-[#e55a00] text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Browse Tour Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              bookings.map((b) => (
                <div
                  key={b.bookingId}
                  className="bg-white dark:bg-[#0F1B2B] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">
                        {b.bookingId}
                      </span>
                      <h4 className="font-bold text-sm text-[#0B192C] dark:text-white leading-snug">
                        {b.packageTitle}
                      </h4>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                        b.status === 'confirmed'
                          ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : b.status === 'cancelled'
                          ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800'
                          : 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6500]" />
                      <span>{b.travelDate} at {b.pickupTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-slate-400" />
                      <span>{b.selectedVehicleName} • {b.passengers} Pax</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{b.pickupLocation}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">Total Fare</span>
                      <span className="font-extrabold text-base text-emerald-700 dark:text-emerald-400">₹{b.totalFare.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {onViewBookingVoucher && (
                        <button
                          onClick={() => {
                            onClose();
                            onViewBookingVoucher(b);
                          }}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 cursor-pointer border border-transparent dark:border-slate-700"
                          title="View Voucher"
                        >
                          <FileCheck2 className="w-3.5 h-3.5 text-[#FF6500]" />
                          <span className="text-[11px]">Pass</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleWhatsAppHelp(b)}
                        className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1 cursor-pointer border border-emerald-200/60 dark:border-emerald-800/60"
                        title="Chat with Harish G"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Help</span>
                      </button>

                      {b.status === 'confirmed' && (
                        <button
                          onClick={() => handleCancel(b.bookingId)}
                          className="p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Cancel Booking"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-white border-t border-slate-200 text-center">
            <a
              href={`tel:${COMPANY_DETAILS.rawPhone}`}
              className="text-xs font-semibold text-slate-600 hover:text-[#FF6500] inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
              <span>Need help? Call Harish G: +91 {COMPANY_DETAILS.rawPhone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
