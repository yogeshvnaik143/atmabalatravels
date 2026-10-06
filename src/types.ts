export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggage: string;
  ac: boolean;
  image: string;
  tagline: string;
  description: string;
  pricePerKm: number;
  perDayEstimate: number;
  features: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  category?: 'beach' | 'pilgrimage' | 'nature' | 'outstation' | 'combo';
  duration: string;
  highlights: string[];
  route: string;
  popularFor: string;
  recommendedVehicle: string;
  startingPrice: string;
  badge?: string;
  image?: string;
  itineraryDays?: { day: string; title: string; activities: string[] }[];
}

export interface AirportTransferRoute {
  id: string;
  source: string;
  destination: string;
  distanceKm: number;
  driveTime: string;
  sedanFare: number;
  suvFare: number;
  crystaFare: number;
  tempoFare: number;
  popular: boolean;
  highlights: string[];
  image: string;
}

export interface HotelStayOption {
  id: string;
  name: string;
  location: string;
  type: 'Beachfront Resort' | 'Heritage Homestay' | 'Budget Hotel' | 'Eco Cottage';
  priceRange: string;
  features: string[];
  nearTo: string;
  image: string;
}

export interface CustomerTestimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  tripType: string;
  vehicleUsed: string;
  rating: number;
  comment: string;
  avatarText: string;
  verifiedBadge: string;
  destinationTag: string;
  photo?: string;
}

export interface TouristDestination {
  id: string;
  title: string;
  category: 'temple' | 'beach' | 'nature' | 'heritage';
  image: string;
  distanceFromGokarna: string;
  bestTimeToVisit: string;
  description: string;
}

export interface BookingFormState {
  fullName: string;
  phoneNumber: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  passengers: number;
  selectedVehicle: string;
  selectedPackage?: string;
  tripType: 'one-way' | 'round-trip' | 'sightseeing' | 'package' | 'airport-transfer';
  specialNotes: string;
}

