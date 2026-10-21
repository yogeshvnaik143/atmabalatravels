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
  category?: 'beach' | 'pilgrimage' | 'nature' | 'outstation' | 'combo' | 'heritage';
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
  tripType: 'one-way' | 'round-trip' | 'sightseeing' | 'package' | 'airport-transfer' | 'goa-drop' | 'hourly';
  specialNotes: string;
}

export interface Sightseeing1DayItem {
  id: string;
  place: string;
  rate4Plus1: number;
  rate6Plus1: number;
  description?: string;
  inclusions?: string;
}

export interface OneWayDropItem {
  id: string;
  destination: string;
  rate4Plus1: number;
  rate6Plus1: number;
  category?: 'nearby' | 'ghat' | 'pilgrimage' | 'city' | 'long-distance' | 'coastal';
}

export interface GoaDropItem {
  id: string;
  destination: string;
  rate4Plus1: number;
  rate6Plus1: number;
  region?: 'South Goa' | 'North Goa' | 'Airports & Transit' | 'Central Goa';
}

export interface HourlyRentalItem {
  id: string;
  duration: string;
  hours: number;
  kilometers: number;
  rate4Plus1: number;
  rate6Plus1: number;
  extraHourRate: number;
  extraKmRate: number;
}

export interface KmWiseTariff {
  minKmPerDay: number;
  rate4Plus1PerKm: number;
  rate6Plus1PerKm: number;
  driverBataPerDay: number;
  tollParkingNote: string;
  inclusions: string;
}

