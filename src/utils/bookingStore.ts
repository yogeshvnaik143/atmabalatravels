import { ConfirmedBooking } from '../types';

const STORAGE_KEY = 'atmabala_confirmed_bookings_v1';

export function getStoredBookings(): ConfirmedBooking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load bookings from storage', e);
    return [];
  }
}

export function saveBooking(booking: ConfirmedBooking): void {
  try {
    const existing = getStoredBookings();
    const updated = [booking, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Trigger custom event so reactive badges update across the app
    window.dispatchEvent(new Event('atmabala_booking_updated'));
  } catch (e) {
    console.error('Failed to save booking to storage', e);
  }
}

export function cancelBooking(bookingId: string): void {
  try {
    const existing = getStoredBookings();
    const updated = existing.map((b) =>
      b.bookingId === bookingId ? { ...b, status: 'cancelled' as const } : b
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('atmabala_booking_updated'));
  } catch (e) {
    console.error('Failed to update booking status', e);
  }
}

export function generateBookingId(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `ATM-${year}-${randomNum}`;
}

export function formatWhatsAppBookingMessage(booking: ConfirmedBooking): string {
  return `*ATMABALA TRAVELS - CONFIRMED BOOKING PASS* 🚖
━━━━━━━━━━━━━━━━━━━
🔖 *Booking ID:* ${booking.bookingId}
👤 *Lead Guest:* ${booking.customerName}
📞 *Phone:* ${booking.phone}
${booking.email ? `✉️ *Email:* ${booking.email}\n` : ''}
📍 *Tour Package:* ${booking.packageTitle}
🗺️ *Route:* ${booking.packageRoute}
⏱️ *Duration:* ${booking.packageDuration}

📅 *Travel Date:* ${booking.travelDate}
⏰ *Pickup Time:* ${booking.pickupTime}
🏨 *Pickup Location:* ${booking.pickupLocation}
👥 *Passengers:* ${booking.passengers} Pax
🚗 *Vehicle:* ${booking.selectedVehicleName}

💰 *Total Agreed Fare:* ₹${booking.totalFare.toLocaleString('en-IN')}
📋 *Inclusions:* ${booking.inclusions.join(', ')}
💳 *Payment Mode:* ${booking.paymentMethod === 'cash_to_driver' ? 'Cash to Driver on Trip Completion' : booking.paymentMethod === 'upi_on_arrival' ? 'UPI upon Chauffeur Arrival' : 'Advance Confirmed'}
${booking.specialRequests ? `📝 *Special Requests:* ${booking.specialRequests}\n` : ''}
━━━━━━━━━━━━━━━━━━━
✨ *Guaranteed Benefits:*
✓ Showroom Clean AC Cab with Chilled Air Conditioning
✓ Born & Raised Local Gokarna Native Chauffeur
✓ Zero Hidden Toll / Driver Bata Surprises

*ATMABALA Travels & Tour Hub*
Welcome Digital Point, Kamat Complex, Gokarna
Chauffeur Desk: +91 8073756776 (Harish G)`;
}
