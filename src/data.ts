import {
  FleetVehicle,
  TravelPackage,
  TouristDestination,
  AirportTransferRoute,
  HotelStayOption,
  CustomerTestimonial,
  Sightseeing1DayItem,
  OneWayDropItem,
  GoaDropItem,
  HourlyRentalItem,
  KmWiseTariff
} from './types';

export const COMPANY_DETAILS = {
  name: 'ATMABALA Travels',
  tagline: 'Your Journey, Our Drive.',
  subtitle: 'Premium car rentals, airport transfers, and bespoke coastal tour packages across Gokarna, Kumta, and Karwar.',
  founder: 'Harish. G',
  phone: '+91 8073756776',
  rawPhone: '8073756776',
  whatsappUrl: 'https://wa.me/918073756776',
  email: 'bookings@atmabalatravels.com',
  locations: {
    gokarna: 'Welcome Digital Point, Kamat complex, near Canara Bank, Ganjigadde, Gokarna, Karnataka 581326',
    kumta: 'National Highway Main Hub, Kumta, Uttara Kannada, Karnataka 581343',
    gokarnaMapsUrl: 'https://maps.app.goo.gl/gGgVsEcqELeYQrYG7',
    gokarnaEmbedUrl: 'https://maps.google.com/maps?q=Mahabala+Tours+%26+Travels,+Welcome+Digital+Point,+Kamat+complex,+near+Canara+Bank,+Ganjigadde,+Gokarna,+Karnataka+581326&t=&z=16&ie=UTF8&iwloc=&output=embed',
    officeName: 'Mahabala Tours & Travels (Atmabala Travels Head Office)'
  },
  stats: {
    happyCustomers: '15,000+',
    successfulTrips: '850+',
    premiumCars: '45+',
    rating: '4.9 ★',
    yearsServing: '12+ Years'
  }
};

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Sedan 4+1 A/c (Swift Dzire / Etios)',
    category: 'Sedan (4+1)',
    capacity: '4 + 1 Passengers',
    luggage: '2 Medium Bags',
    ac: true,
    image: '/images/swift-dzire.jpg',
    tagline: 'Economical & comfortable AC sedan for couples, small families & outstation drops.',
    description: 'Crisp chilled AC, smooth suspension for coastal highways and Ghats. Officially rated at ₹13/km (300 km/day base).',
    pricePerKm: 13,
    perDayEstimate: 2400,
    features: ['Chilled Air Conditioning', 'Bluetooth Audio System', 'Generous Legroom', 'Clean & Sanitized Interiors', 'Toll & Bata Transparent']
  },
  {
    id: 'ertiga-smart',
    name: 'Ertiga 6+1 A/c',
    category: 'MUV (6+1)',
    capacity: '6 + 1 Passengers',
    luggage: '3-4 Bags',
    ac: true,
    image: '/images/maruti-ertiga.jpg',
    tagline: 'High-utility 6+1 family car with dual AC & versatile foldable luggage layout.',
    description: 'Perfect for group temple tours, beach hopping, and airport drops. Officially rated at ₹16/km (300 km/day base).',
    pricePerKm: 16,
    perDayEstimate: 2900,
    features: ['Dual Zone AC Vents', 'Foldable 3rd Row', 'USB Fast Charging', 'Smooth Ghat Suspension', '6+1 Passenger Seating']
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta 6+1 A/c',
    category: 'Luxury MPV (6+1)',
    capacity: '6 + 1 Passengers',
    luggage: '4 Large Bags',
    ac: true,
    image: '/images/innova-crysta.jpg',
    tagline: 'Plush Captain Seat luxury comfort for coastal highways and VIP family vacations.',
    description: 'The premier benchmark of road comfort in Karnataka. Executive reclining captain seats, dual-zone digital AC, and supreme ride stability.',
    pricePerKm: 19,
    perDayEstimate: 3800,
    features: ['Plush Captain Seats', 'Individual AC Louvers', 'Highway Cruising Stability', 'Roof Carrier Available', 'Generous Boot Space']
  },
  {
    id: 'innova-crysta-7plus1',
    name: 'Innova Crysta 7+1 A/c',
    category: 'Luxury MPV (7+1)',
    capacity: '7 + 1 Passengers',
    luggage: '4 Large Bags',
    ac: true,
    image: '/images/fleet-innova-silver.jpg',
    tagline: 'Executive 7+1 seating for larger families and pilgrimage groups.',
    description: 'Spacious bench configuration accommodating up to 7 passengers with generous boot space and full climate control.',
    pricePerKm: 21,
    perDayEstimate: 4200,
    features: ['7+1 Executive Seating', 'Rear Digital AC', 'Premium Leather Upholstery', 'Highway Stability Control', 'Luggage Carrier Ready']
  },
  {
    id: 'urbania-9plus1',
    name: 'Urbania 9+1 A/c',
    category: 'Luxury Van (9+1)',
    capacity: '9 + 1 Passengers',
    luggage: '6-8 Large Bags',
    ac: true,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    tagline: 'Next-gen luxury van with individual reclining seats, panoramic windows & high ceiling.',
    description: 'Ultra-modern Force Urbania 9+1. Walk-in cabin height, individual AC vents, reading lights, and international-standard ergonomics.',
    pricePerKm: 24,
    perDayEstimate: 4800,
    features: ['9+1 Luxury Reclining Seats', 'Walk-in Tall Cabin', 'Panoramic Tinted Windows', 'Individual USB Charging', 'Dedicated Luggage Bay']
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveler 12+1 A/c',
    category: 'Mini Coach (12+1 to 20)',
    capacity: '12 + 1 to 20 Passengers',
    luggage: '12+ Bags & Luggage Deck',
    ac: true,
    image: '/images/tempo-traveller.jpg',
    tagline: 'Large family pilgrimages, wedding parties, corporate offsites & student batches.',
    description: 'Individual pushback luxury seats, high roof walk-in aisle, premium surround audio system, and heavy-duty rooftop luggage carrier.',
    pricePerKm: 26,
    perDayEstimate: 5500,
    features: ['Pushback Recliner Seats', 'High Ceiling Dual AC Flow', 'LED Entertainment TV', 'Heavy-Duty Rooftop Carrier', 'Experienced Ghat Chauffeur']
  }
];

export const AIRPORT_TRANSFER_ROUTES: AirportTransferRoute[] = [
  {
    id: 'goa-mopa-gokarna',
    source: 'Goa Mopa Airport (GOX)',
    destination: 'Gokarna Beach / Hotels',
    distanceKm: 165,
    driveTime: '3.5 Hours',
    sedanFare: 6000,
    suvFare: 7000,
    crystaFare: 7800,
    tempoFare: 9800,
    popular: true,
    highlights: ['Catalog Rate: 4+1 ₹6,000 | 6+1 ₹7,000', 'Goa Border Permit & All Tolls Included', 'Flight Tracking & Meet/Greet at Terminal'],
    image: '/images/fleet-innova-silver.jpg'
  },
  {
    id: 'goa-dabolim-gokarna',
    source: 'Goa Dabolim Airport (GOI)',
    destination: 'Gokarna Beach / Hotels',
    distanceKm: 145,
    driveTime: '3 Hours',
    sedanFare: 4500,
    suvFare: 5500,
    crystaFare: 6500,
    tempoFare: 8800,
    popular: true,
    highlights: ['Catalog Rate: 4+1 ₹4,500 | 6+1 ₹5,500', 'South Goa Coastal Scenic Highway NH-66', 'Goa Border Permit, Toll & Driver Bata Included'],
    image: '/images/innova-crysta.jpg'
  },
  {
    id: 'hubli-airport-gokarna',
    source: 'Hubli Airport / Hubli Junction (HBX)',
    destination: 'Gokarna / Kumta',
    distanceKm: 152,
    driveTime: '3.2 Hours',
    sedanFare: 4000,
    suvFare: 5000,
    crystaFare: 5800,
    tempoFare: 8000,
    popular: true,
    highlights: ['Catalog Rate: 4+1 ₹4,000 | 6+1 ₹5,000', 'Smooth Yellapur Western Ghats Route', 'Synchronized Flight / Train Arrival Pickup'],
    image: '/images/swift-dzire.jpg'
  },
  {
    id: 'kumta-railway-gokarna',
    source: 'Kumta Railway Station (KT)',
    destination: 'Gokarna Town / Kudle / Om Beach',
    distanceKm: 32,
    driveTime: '45 Mins',
    sedanFare: 1500,
    suvFare: 1800,
    crystaFare: 2200,
    tempoFare: 3000,
    popular: true,
    highlights: ['Catalog Rate: 4+1 ₹1,500 | 6+1 ₹1,800', 'Direct Platform Exit Pickup for Konkan & Vande Bharat Trains', 'Doorstep Drop to Shacks or Hilltop Hotels'],
    image: '/images/maruti-ertiga.jpg'
  },
  {
    id: 'karwar-station-gokarna',
    source: 'Karwar Railway Station / Madgaon',
    destination: 'Gokarna / Kumta',
    distanceKm: 65,
    driveTime: '1.2 Hours',
    sedanFare: 2800,
    suvFare: 3300,
    crystaFare: 3900,
    tempoFare: 5000,
    popular: false,
    highlights: ['Catalog Rate: 4+1 ₹2,800 | 6+1 ₹3,300', 'Coastal NH-66 Kali River Bridge Views', 'Fastest Transfer for Goa border arrivals'],
    image: '/images/swift-dzire.jpg'
  },
  {
    id: 'mangalore-airport-gokarna',
    source: 'Mangalore International Airport (IXE)',
    destination: 'Murudeshwar / Gokarna',
    distanceKm: 230,
    driveTime: '4.5 Hours',
    sedanFare: 6500,
    suvFare: 7500,
    crystaFare: 8800,
    tempoFare: 12000,
    popular: false,
    highlights: ['Catalog Rate: 4+1 ₹6,500 | 6+1 ₹7,500', 'Scenic Coastal Highway NH-66 via Udupi & Kundapura', 'Toll, AC & Driver Bata All Included'],
    image: '/images/tempo-traveller.jpg'
  }
];

export const POPULAR_PACKAGES: TravelPackage[] = [
  {
    id: 'yana-vibhutifalls',
    title: 'Yana Caves & Vibhuti Waterfall Day Tour',
    category: 'nature',
    travelType: 'adventure',
    duration: '1 Full Day (8-9 Hours)',
    durationHours: 8,
    durationCategory: 'full-day',
    destinations: ['Yana', 'Yana Caves', 'Vibhuti Falls', 'Sahyadri Ghats', 'Kumta'],
    highlights: ['Yana Towering Limestone Monoliths', 'Bhairaveshwara & Mohini Shikhara', 'Vibhuti Forest Natural Plunge Pool', 'All Tolls, Parking, AC Cab & Driver Bata Included'],
    route: 'Gokarna → Kumta Ghats → Yana Monoliths → Vibhuti Waterfalls → Return',
    popularFor: 'Geological rock wonders, nature trekking, and refreshing plunge bath in natural limestone stream.',
    recommendedVehicle: 'Sedan 4+1 (₹3,000) or Ertiga 6+1 (₹3,500)',
    startingPrice: '₹ 3,000',
    numericPrice: 3000,
    pricingByVehicle: {
      sedan4: 3000,
      ertiga6: 3500,
      innova7: 4200,
      urbania9: 5500,
      tempo12: 6800
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.9,
    reviewsCount: 124,
    badge: 'Catalog Best Seller',
    image: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'yana-mirjan-vibhutifalls',
    title: 'Yana Monoliths, Mirjan Fort & Vibhuti Falls',
    category: 'nature',
    travelType: 'adventure',
    duration: '1 Full Day (8-9 Hours)',
    durationHours: 9,
    durationCategory: 'full-day',
    destinations: ['Yana', 'Mirjan Fort', 'Vibhuti Falls', 'Kumta', 'Aghanashini'],
    highlights: ['16th-Century Mirjan Pepper Queen Fort', 'Yana Rock Formations & Cave Shrine', 'Turquoise Vibhuti Falls Bath', 'All Inclusive (AC Cab, Toll, Parking, Bata)'],
    route: 'Gokarna → Mirjan Historical Fort → Yana Caves → Vibhuti Falls → Return',
    popularFor: 'Heritage exploration paired with Sahyadri waterfalls and tropical nature.',
    recommendedVehicle: 'Sedan 4+1 (₹3,200) or Ertiga 6+1 (₹3,800)',
    startingPrice: '₹ 3,200',
    numericPrice: 3200,
    pricingByVehicle: {
      sedan4: 3200,
      ertiga6: 3800,
      innova7: 4500,
      urbania9: 5800,
      tempo12: 7200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.9,
    reviewsCount: 98,
    badge: 'Heritage & Nature',
    image: 'https://images.unsplash.com/photo-1623946059868-8091807d0d0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sightseeing-murdeshwar',
    title: 'Murdeshwar Coastal Temple Sightseeing',
    category: 'pilgrimage',
    travelType: 'pilgrimage',
    duration: '1 Full Day (8 Hours)',
    durationHours: 8,
    durationCategory: 'full-day',
    destinations: ['Murdeshwar', 'Idagunji', 'Honnavar', 'Kanduka Hill', 'Bhatkal'],
    highlights: ['123-Ft Colossal Lord Shiva Statue', '20-Storey Raja Gopuram with Sea-View Lift', 'Murdeshwar Beach & Watersports', 'Idagunji Ganapati en route'],
    route: 'Gokarna → Honnavar → Murdeshwar Temple & Kanduka Hill → Return',
    popularFor: 'Spectacular seaside architectural marvel and Lord Shiva darshan.',
    recommendedVehicle: 'Sedan 4+1 (₹3,500) or Ertiga 6+1 (₹4,000)',
    startingPrice: '₹ 3,500',
    numericPrice: 3500,
    pricingByVehicle: {
      sedan4: 3500,
      ertiga6: 4000,
      innova7: 4800,
      urbania9: 6000,
      tempo12: 7500
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Temple Drop & Wait'],
    rating: 5.0,
    reviewsCount: 162,
    badge: 'Iconic Temple',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'jog-falls-murdeshwar',
    title: 'Jog Falls & Murdeshwar Grand Day Tour',
    category: 'outstation',
    travelType: 'family',
    duration: '1 Full Day (10-12 Hours)',
    durationHours: 11,
    durationCategory: 'extended-day',
    destinations: ['Jog Falls', 'Murdeshwar', 'Sharavati Valley', 'Honnavar', 'Gersoppa'],
    highlights: ['Jog Falls (India\'s 2nd Highest Plunge Waterfall)', 'Sharavati Valley Rainforest Vistas', 'Murdeshwar Shiva Temple & Sea Cliff', 'All Tolls, AC, Parking & Bata Included'],
    route: 'Gokarna → Honnavar → Sharavati Valley → Jog Falls → Murdeshwar → Return',
    popularFor: 'Western Ghats waterfalls combined with coastal Arabian Sea majesty.',
    recommendedVehicle: 'Sedan 4+1 (₹4,800) or Ertiga 6+1 (₹5,800)',
    startingPrice: '₹ 4,800',
    numericPrice: 4800,
    pricingByVehicle: {
      sedan4: 4800,
      ertiga6: 5800,
      innova7: 6800,
      urbania9: 8200,
      tempo12: 9800
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.9,
    reviewsCount: 145,
    badge: 'Grand Tour',
    image: 'https://images.unsplash.com/photo-1524220300957-612ce6ba1a30?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'yana-murdeshwar',
    title: 'Yana Rock Monoliths & Murdeshwar Temple',
    category: 'combo',
    travelType: 'family',
    duration: '1 Full Day (9 Hours)',
    durationHours: 9,
    durationCategory: 'full-day',
    destinations: ['Yana', 'Murdeshwar', 'Kumta', 'Honnavar'],
    highlights: ['Towering Yana Caves in Deep Rainforest', 'Bhairaveshwara & Mohini Shikhara', 'Murdeshwar Shiva Statue on Sea Cliff', 'Scenic Coastal & Ghat Highway'],
    route: 'Gokarna → Yana Monoliths → Coastal NH-66 → Murdeshwar → Return',
    popularFor: 'Combining geological mountain wonders with sacred coastal temple vibes.',
    recommendedVehicle: 'Sedan 4+1 (₹4,000) or Ertiga 6+1 (₹4,500)',
    startingPrice: '₹ 4,000',
    numericPrice: 4000,
    pricingByVehicle: {
      sedan4: 4000,
      ertiga6: 4500,
      innova7: 5400,
      urbania9: 6800,
      tempo12: 8200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.8,
    reviewsCount: 76,
    badge: 'Mountains & Sea',
    image: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'yana-vibhuti-murdeshwar',
    title: 'Yana Caves, Vibhuti Falls & Murdeshwar Trio',
    category: 'combo',
    travelType: 'adventure',
    duration: '1 Full Day (Early Start, 10-11 Hours)',
    durationHours: 11,
    durationCategory: 'extended-day',
    destinations: ['Yana', 'Vibhuti Falls', 'Murdeshwar', 'Kumta', 'Honnavar'],
    highlights: ['Yana Monoliths Rainforest Trek', 'Vibhuti Forest Natural Limestone Pool Bath', 'Murdeshwar Shiva Statue & Sunset Beach', 'Complete Coastal Karnataka Highlights'],
    route: 'Gokarna → Yana → Vibhuti Falls → Murdeshwar Temple & Beach → Return',
    popularFor: 'The ultimate all-in-one day package for families and friends visiting Gokarna.',
    recommendedVehicle: 'Sedan 4+1 (₹5,000) or Ertiga 6+1 (₹6,000)',
    startingPrice: '₹ 5,000',
    numericPrice: 5000,
    pricingByVehicle: {
      sedan4: 5000,
      ertiga6: 6000,
      innova7: 7000,
      urbania9: 8500,
      tempo12: 10200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 5.0,
    reviewsCount: 184,
    badge: 'Ultimate Trio',
    image: 'https://images.unsplash.com/photo-1623946059868-8091807d0d0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'jog-honavara',
    title: 'Jog Falls & Honnavar Eco-Boating Tour',
    category: 'nature',
    travelType: 'relaxation',
    duration: '1 Full Day (9-10 Hours)',
    durationHours: 10,
    durationCategory: 'full-day',
    destinations: ['Jog Falls', 'Honnavar', 'Sharavati Backwaters', 'Mangrove Boardwalk', 'Apsara Konda'],
    highlights: ['Majestic Jog Falls Mist & Viewpoints', 'Sharavati River Speedboating & Mangrove Boardwalk', 'Apsara Konda Natural Pool & Sunset Point', 'All Inclusive Fixed Fare'],
    route: 'Gokarna → Honnavar Riverfront → Sharavati Valley → Jog Falls → Return',
    popularFor: 'Emerald backwaters, mangrove boardwalk strolls and roaring waterfalls.',
    recommendedVehicle: 'Sedan 4+1 (₹4,500) or Ertiga 6+1 (₹5,500)',
    startingPrice: '₹ 4,500',
    numericPrice: 4500,
    pricingByVehicle: {
      sedan4: 4500,
      ertiga6: 5500,
      innova7: 6400,
      urbania9: 7800,
      tempo12: 9200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Boat Jetty Coordination'],
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Water & Mist',
    image: 'https://images.unsplash.com/photo-1622619472658-29be97e974e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'murdeshwar-kolluru',
    title: 'Murdeshwar & Kolluru Mookambika Darshan',
    category: 'pilgrimage',
    travelType: 'pilgrimage',
    duration: '1 Full Day (10 Hours)',
    durationHours: 10,
    durationCategory: 'full-day',
    destinations: ['Murdeshwar', 'Kolluru', 'Mookambika Temple', 'Kundapura', 'Bhatkal'],
    highlights: ['Murdeshwar 123-Ft Shiva & Gopuram', 'Kolluru Sri Mookambika Devi Temple in Kodachadri Foothills', 'Souparnika River Sacred Bathing', 'Doorstep Temple Drop & Wait'],
    route: 'Gokarna → Murdeshwar → Kundapura Highway → Kolluru Temple → Return',
    popularFor: 'Devotional families seeking deep spiritual blessings and peaceful darshans.',
    recommendedVehicle: 'Sedan 4+1 (₹4,600) or Ertiga 6+1 (₹5,500)',
    startingPrice: '₹ 4,600',
    numericPrice: 4600,
    pricingByVehicle: {
      sedan4: 4600,
      ertiga6: 5500,
      innova7: 6500,
      urbania9: 7900,
      tempo12: 9500
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Temple Waiting Included'],
    rating: 5.0,
    reviewsCount: 138,
    badge: 'Sacred Pilgrimage',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'murdeshwar-udupi',
    title: 'Murdeshwar, Udupi Krishna Matha & Malpe',
    category: 'pilgrimage',
    travelType: 'family',
    duration: '1 Full Day (11 Hours)',
    durationHours: 11,
    durationCategory: 'extended-day',
    destinations: ['Murdeshwar', 'Udupi', 'Malpe Beach', 'Kanakana Kindi', 'Kundapura'],
    highlights: ['Murdeshwar Shiva Temple Complex', 'Udupi Sri Krishna Matha & Kanakana Kindi', 'Malpe Sea Walkway / Beach', 'Authentic Udupi Satvik Lunch Stop'],
    route: 'Gokarna → Murdeshwar → Kundapura → Udupi Town → Return',
    popularFor: 'Lord Krishna devotion, divine temples and coastal Konkan heritage.',
    recommendedVehicle: 'Sedan 4+1 (₹5,700) or Ertiga 6+1 (₹6,800)',
    startingPrice: '₹ 5,700',
    numericPrice: 5700,
    pricingByVehicle: {
      sedan4: 5700,
      ertiga6: 6800,
      innova7: 7800,
      urbania9: 9400,
      tempo12: 11200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.9,
    reviewsCount: 95,
    badge: 'Coastal Temples',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'murdeshwar-kolluru-udupi',
    title: 'Murdeshwar, Kolluru & Udupi Triumvirate',
    category: 'pilgrimage',
    travelType: 'pilgrimage',
    duration: '1 Full Day (Early Departure, 12 Hours)',
    durationHours: 12,
    durationCategory: 'extended-day',
    destinations: ['Murdeshwar', 'Kolluru', 'Udupi', 'Kundapura', 'South Kanara'],
    highlights: ['Murdeshwar Shiva & Gopuram', 'Kollur Goddess Mookambika Shrine', 'Udupi Sri Krishna Temple Darshan', 'Complete Coastal South Kanara Yatra'],
    route: 'Gokarna → Murdeshwar → Kolluru → Udupi → Return',
    popularFor: 'Covering 3 celebrated coastal shrines in a comfortable, air-conditioned vehicle.',
    recommendedVehicle: 'Sedan 4+1 (₹6,200) or Ertiga 6+1 (₹7,300)',
    startingPrice: '₹ 6,200',
    numericPrice: 6200,
    pricingByVehicle: {
      sedan4: 6200,
      ertiga6: 7300,
      innova7: 8500,
      urbania9: 10200,
      tempo12: 12400
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Extended Yatra Coordination'],
    rating: 5.0,
    reviewsCount: 156,
    badge: 'Triple Darshan',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'murdeshwar-kolluru-sringeri',
    title: 'Murdeshwar, Kolluru & Sringeri Sharada Peetham',
    category: 'pilgrimage',
    travelType: 'pilgrimage',
    duration: 'Extended Yatra (12-14 Hours)',
    durationHours: 13,
    durationCategory: 'extended-day',
    destinations: ['Murdeshwar', 'Kolluru', 'Sringeri', 'Agumbe Ghats', 'Tunga River'],
    highlights: ['Murdeshwar Shiva Temple', 'Kollur Mookambika Devi Temple', 'Adi Shankaracharya Sringeri Sharada Peetham', 'Tunga River Holy Fish Feeding & Vidyashankara Temple'],
    route: 'Gokarna → Murdeshwar → Kolluru → Agumbe Ghats → Sringeri → Return',
    popularFor: 'The ultimate Western Ghats spiritual circuit for senior citizens and devout families.',
    recommendedVehicle: 'Sedan 4+1 (₹7,300) or Ertiga 6+1 (₹8,700)',
    startingPrice: '₹ 7,300',
    numericPrice: 7300,
    pricingByVehicle: {
      sedan4: 7300,
      ertiga6: 8700,
      innova7: 9900,
      urbania9: 11800,
      tempo12: 14200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 5.0,
    reviewsCount: 89,
    badge: 'Grand Pilgrimage',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sirsi-banavasi-sahasraling',
    title: 'Sirsi, Banavasi & Sahasralinga Heritage Tour',
    category: 'heritage',
    travelType: 'heritage',
    duration: '1 Full Day (9-10 Hours)',
    durationHours: 10,
    durationCategory: 'full-day',
    destinations: ['Sirsi', 'Banavasi', 'Sahasralinga', 'Devimane Ghat', 'Malenadu'],
    highlights: ['Sirsi Shri Marikamba Temple (Golden Rath)', 'Banavasi 9th-Century Madhukeshwara Temple (Kadamba Capital)', 'Sahasralinga 1000 Shivalingas Carved in Shalmala Riverbed', 'Fragrant Arecanut & Spice Plantations'],
    route: 'Gokarna → Devimane Ghat → Sirsi → Sahasralinga → Banavasi → Return',
    popularFor: 'Ancient Karnataka history, riverbed stone carvings and peaceful Malenadu forests.',
    recommendedVehicle: 'Sedan 4+1 (₹4,500) or Ertiga 6+1 (₹5,500)',
    startingPrice: '₹ 4,500',
    numericPrice: 4500,
    pricingByVehicle: {
      sedan4: 4500,
      ertiga6: 5500,
      innova7: 6400,
      urbania9: 7800,
      tempo12: 9200
    },
    inclusionsList: ['Chilled AC Cab', 'Highway Tolls Included', 'Parking Charges Paid', 'Driver Allowance (Bata)', 'Doorstep Pickup & Drop'],
    rating: 4.8,
    reviewsCount: 68,
    badge: 'Ancient Heritage',
    image: 'https://images.unsplash.com/photo-1600387802805-4d4ebdc3eb4c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gokarna-local-hourly',
    title: 'Gokarna Local Beaches & Temple Package',
    category: 'beach',
    travelType: 'relaxation',
    duration: 'Flexible (4 to 12 Hours)',
    durationHours: 6,
    durationCategory: 'half-day',
    destinations: ['Gokarna Town', 'Mahabaleshwar Temple', 'Kotiteertha', 'Om Beach', 'Kudle Beach', 'Shiva Cave'],
    highlights: ['Mahabaleshwar Temple & Kotiteertha', 'Om Beach & Half Moon Viewpoint', 'Kudle Beach & Sunset Hilltop', 'Hourly Packages from ₹1,500 (4 hrs / 40 km)'],
    route: 'Gokarna Town → Kotiteertha → Shiva Cave → Kudle Beach → Om Beach',
    popularFor: 'Flexible local sightseeing at your own pace with chilled AC and friendly local driver.',
    recommendedVehicle: 'Sedan 4+1 (from ₹1,500) or Ertiga 6+1 (from ₹2,000)',
    startingPrice: '₹ 1,500',
    numericPrice: 1500,
    pricingByVehicle: {
      sedan4: 1500,
      ertiga6: 2000,
      innova7: 2800,
      urbania9: 3800,
      tempo12: 4800
    },
    inclusionsList: ['Chilled AC Cab', 'Driver Allowance Included', 'Local Temple & Beach Parking', 'Flexible Stop Duration', 'Doorstep Pickup'],
    rating: 4.9,
    reviewsCount: 210,
    badge: 'Local Classic',
    image: '/images/gokarna-beach.jpg'
  }
];

// 1-DAY SIGHTSEEING CATALOG (from Official Tariff Card)
export const SIGHTSEEING_1DAY_PACKAGES: Sightseeing1DayItem[] = [
  {
    id: 'yana-vibhutifalls',
    place: 'Yana, Vibhutifalls',
    rate4Plus1: 3000,
    rate6Plus1: 3500,
    description: 'Bhairaveshwara & Mohini rock monoliths in dense forest + pristine natural limestone plunge pool.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'yana-mirjan-vibhutifalls',
    place: 'Yana, Mirjan, Vibhutifalls',
    rate4Plus1: 3200,
    rate6Plus1: 3800,
    description: '16th century Mirjan Fort pepper-queen citadel + Yana monoliths + turquoise Vibhuti falls bath.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'sightseeing-murdeshwar',
    place: 'Sightseeing Murdeshwar',
    rate4Plus1: 3500,
    rate6Plus1: 4000,
    description: '123-ft colossal Shiva sea statue, 20-storey Raja Gopuram with sea-view lift & pristine beach stroll.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'jog-falls-murdeshwar',
    place: 'Jog falls, Murdeshwar',
    rate4Plus1: 4800,
    rate6Plus1: 5800,
    description: 'Sharavati valley misty Jog Falls cascade combined with iconic cliff-side Murdeshwar Shiva temple.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'yana-murdeshwar',
    place: 'Yana, Murdeshwar',
    rate4Plus1: 4000,
    rate6Plus1: 4500,
    description: 'Spectacular geological rock monoliths of Yana combined with coastal Murdeshwar ocean temple.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'yana-vibhuti-murdeshwar',
    place: 'Yana, Vibhuti, Murdeshwar',
    rate4Plus1: 5000,
    rate6Plus1: 6000,
    description: 'The ultimate coastal nature & temple trio: Yana caves, Vibhuti forest waterfall & Murdeshwar sunset.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'jog-honavara',
    place: 'Jog, Honavara',
    rate4Plus1: 4500,
    rate6Plus1: 5500,
    description: 'Roaring Jog Falls expedition followed by serene Honnavar Sharavati river boating & Mangrove Boardwalk.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'murdeshwar-kolluru',
    place: 'Murdeshwar, Kolluru',
    rate4Plus1: 4600,
    rate6Plus1: 5500,
    description: 'Coastal Shiva blessing at Murdeshwar followed by sacred Mookambika Temple darshan at Kollur foothills.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'murdeshwar-udupi',
    place: 'Murdeshwar, Udupi',
    rate4Plus1: 5700,
    rate6Plus1: 6800,
    description: 'Murdeshwar Shiva temple + Udupi Sri Krishna Matha, Kanakana Kindi & Malpe beach promenade.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'murdeshwar-kolluru-udupi',
    place: 'Murdeshwar, Kolluru, Udupi',
    rate4Plus1: 6200,
    rate6Plus1: 7300,
    description: 'The golden devotional triumvirate: Murdeshwar + Kollur Mookambika Devi + Udupi Sri Krishna Temple.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'murdeshwar-kolluru-sringeri',
    place: 'Murdeshwar, Kolluru, Sringeri',
    rate4Plus1: 7300,
    rate6Plus1: 8700,
    description: 'Sacred Western Ghats circuit: Murdeshwar, Kollur Mookambika & Adi Shankaracharya Sharada Peetham Sringeri.',
    inclusions: 'AC cab, toll, parking, driver bata'
  },
  {
    id: 'sirsi-banavasi-sahasraling',
    place: 'Sirsi, Banavasi, Sahasraling',
    rate4Plus1: 4500,
    rate6Plus1: 5500,
    description: 'Sirsi Marikamba Temple, 9th-century Madhukeshwara Temple Banavasi & riverbed rock-carved Sahasralinga.',
    inclusions: 'AC cab, toll, parking, driver bata'
  }
];

// KM-WISE OUTSTATION RATE (300KM / DAY)
export const KM_WISE_TARIFF: KmWiseTariff = {
  minKmPerDay: 300,
  rate4Plus1PerKm: 13,
  rate6Plus1PerKm: 16,
  driverBataPerDay: 500,
  tollParkingNote: 'Toll & Parking Extra (At actuals)',
  inclusions: 'Sightseeing & outstation touring with AC cab, fuel and professional chauffeur. Minimum 300 km/day.'
};

// ONLY DROP / ONE-WAY TAXI SERVICE (20 DESTINATIONS)
// Note: This Drop including toll, ac, driver bata
export const ONE_WAY_DROPS: OneWayDropItem[] = [
  { id: 'ankola', destination: 'Ankola', rate4Plus1: 1200, rate6Plus1: 1500, category: 'nearby' },
  { id: 'kumta', destination: 'Kumta', rate4Plus1: 1500, rate6Plus1: 1800, category: 'nearby' },
  { id: 'honavara', destination: 'Honavara', rate4Plus1: 2500, rate6Plus1: 2800, category: 'nearby' },
  { id: 'karwar-murdeshwar', destination: 'Karwar, Murdeshwar', rate4Plus1: 2800, rate6Plus1: 3300, category: 'coastal' },
  { id: 'talaguppa', destination: 'Talaguppa', rate4Plus1: 4000, rate6Plus1: 4500, category: 'ghat' },
  { id: 'jog-falls', destination: 'Jog falls', rate4Plus1: 3800, rate6Plus1: 4300, category: 'ghat' },
  { id: 'hubli-alnavar', destination: 'Hubli, Alnavar', rate4Plus1: 4000, rate6Plus1: 5000, category: 'city' },
  { id: 'sirsi', destination: 'Sirsi', rate4Plus1: 3000, rate6Plus1: 3500, category: 'ghat' },
  { id: 'udupi', destination: 'Udupi', rate4Plus1: 5000, rate6Plus1: 6000, category: 'city' },
  { id: 'dandeli-city', destination: 'Dandeli (city)', rate4Plus1: 4000, rate6Plus1: 5000, category: 'ghat' },
  { id: 'dandeli-ganeshgudi', destination: 'Dandeli (ganesh gudi)', rate4Plus1: 4500, rate6Plus1: 5500, category: 'ghat' },
  { id: 'mangalore', destination: 'Mangalore', rate4Plus1: 6500, rate6Plus1: 7500, category: 'city' },
  { id: 'hampi', destination: 'Hampi', rate4Plus1: 8500, rate6Plus1: 9500, category: 'long-distance' },
  { id: 'kolluru', destination: 'Kolluru', rate4Plus1: 4500, rate6Plus1: 5500, category: 'pilgrimage' },
  { id: 'shivamogga', destination: 'Shivamogga', rate4Plus1: 6000, rate6Plus1: 7000, category: 'city' },
  { id: 'sringeri', destination: 'Sringeri', rate4Plus1: 7000, rate6Plus1: 8000, category: 'pilgrimage' },
  { id: 'horanadu', destination: 'Horanadu', rate4Plus1: 8000, rate6Plus1: 9500, category: 'pilgrimage' },
  { id: 'bangalore', destination: 'Bangalore', rate4Plus1: 14500, rate6Plus1: 17500, category: 'long-distance' },
  { id: 'mysore', destination: 'Mysore', rate4Plus1: 14000, rate6Plus1: 17000, category: 'long-distance' },
  { id: 'kukke-subramanya', destination: 'Kukke Subramanya', rate4Plus1: 10000, rate6Plus1: 12000, category: 'pilgrimage' }
];

// GOA DROPS (14 DESTINATIONS)
// Note: This drop including toll, ac, driver bata and goa permit
export const GOA_DROPS: GoaDropItem[] = [
  { id: 'palolem-agonda', destination: 'Pololem-Agond (Palolem & Agonda)', rate4Plus1: 3500, rate6Plus1: 4000, region: 'South Goa' },
  { id: 'madgaon', destination: 'Madgaon (Margao)', rate4Plus1: 4000, rate6Plus1: 4500, region: 'South Goa' },
  { id: 'colva-benaulim', destination: 'Colva, Benoliam (Benaulim)', rate4Plus1: 4300, rate6Plus1: 4800, region: 'South Goa' },
  { id: 'majorda-varca', destination: 'Marjorda, Varca', rate4Plus1: 4300, rate6Plus1: 4800, region: 'South Goa' },
  { id: 'dabolim-airport', destination: 'Daboliam Airport (GOI)', rate4Plus1: 4500, rate6Plus1: 5500, region: 'Airports & Transit' },
  { id: 'mopa-airport', destination: 'Mopa Airport (GOX)', rate4Plus1: 6000, rate6Plus1: 7000, region: 'Airports & Transit' },
  { id: 'calangute-baga', destination: 'Calangut, Baga', rate4Plus1: 6000, rate6Plus1: 7000, region: 'North Goa' },
  { id: 'vagator-anjuna', destination: 'Vagator, Anjuna', rate4Plus1: 6000, rate6Plus1: 7000, region: 'North Goa' },
  { id: 'candolim', destination: 'Candolim', rate4Plus1: 6000, rate6Plus1: 7000, region: 'North Goa' },
  { id: 'panjim', destination: 'Panjim', rate4Plus1: 5000, rate6Plus1: 5500, region: 'Central Goa' },
  { id: 'arambol-siolim', destination: 'Arambol, Shivolim (Siolim)', rate4Plus1: 6500, rate6Plus1: 7500, region: 'North Goa' },
  { id: 'mandrem-morjim', destination: 'Mandrem, Morjim', rate4Plus1: 6500, rate6Plus1: 7500, region: 'North Goa' },
  { id: 'ponda', destination: 'Ponda', rate4Plus1: 4500, rate6Plus1: 5000, region: 'South Goa' },
  { id: 'old-goa', destination: 'Old Goa', rate4Plus1: 5000, rate6Plus1: 5500, region: 'Central Goa' }
];

// HOURLY PACKAGE / ROUND TRIP
// Driver allowance including | Extra Hours: ₹ 180 | Extra KM: ₹ 26 | Parking & Toll: Extra
export const HOURLY_PACKAGES: HourlyRentalItem[] = [
  { id: '4hr-40km', duration: '4 Hours', hours: 4, kilometers: 40, rate4Plus1: 1500, rate6Plus1: 2000, extraHourRate: 180, extraKmRate: 26 },
  { id: '6hr-60km', duration: '6 Hours', hours: 6, kilometers: 60, rate4Plus1: 1800, rate6Plus1: 2300, extraHourRate: 180, extraKmRate: 26 },
  { id: '8hr-80km', duration: '8 Hours', hours: 8, kilometers: 80, rate4Plus1: 2500, rate6Plus1: 3000, extraHourRate: 180, extraKmRate: 26 },
  { id: '10hr-100km', duration: '10 Hours', hours: 10, kilometers: 100, rate4Plus1: 2800, rate6Plus1: 3300, extraHourRate: 180, extraKmRate: 26 },
  { id: '12hr-120km', duration: '12 Hours', hours: 12, kilometers: 120, rate4Plus1: 3500, rate6Plus1: 4000, extraHourRate: 180, extraKmRate: 26 }
];

export const HOTEL_STAY_RECOMMENDATIONS: HotelStayOption[] = [
  {
    id: 'kudle-beach-resorts',
    name: 'Kudle Ocean Shacks & Boutique Resorts',
    location: 'Kudle Beach, Gokarna',
    type: 'Beachfront Resort',
    priceRange: '₹ 1,500 – ₹ 4,500 / night',
    features: ['Direct Sand Access', 'Sunset Balcony Cafes', 'Yoga & Massage Nearby', 'Atmabala Cab Pickup at Hill Gate'],
    nearTo: 'Kudle Beach & Trek Path',
    image: '/images/kudle-beach.jpg'
  },
  {
    id: 'om-beach-cliff-stays',
    name: 'Om Beach Cliff Villas & Shacks',
    location: 'Om Beach Road, Gokarna',
    type: 'Eco Cottage',
    priceRange: '₹ 2,000 – ₹ 6,000 / night',
    features: ['Cliffside Panoramic Sea View', 'Proximity to Namaste Cafe & Boat Jetty', 'Peaceful Breezy Nights', 'Direct Vehicle Parking'],
    nearTo: 'Om Beach & Half Moon Trek',
    image: '/images/gokarna-beach.jpg'
  },
  {
    id: 'town-temple-heritage-stays',
    name: 'Town Heritage Lodges & Homestays',
    location: 'Car Street / Main Town, Gokarna',
    type: 'Heritage Homestay',
    priceRange: '₹ 900 – ₹ 2,800 / night',
    features: ['Walking Distance to Mahabaleshwar Temple', 'Traditional Brahmin Bhojana Halls', 'Safe for Senior Citizens & Families', 'Early Morning Darshan Ease'],
    nearTo: 'Mahabaleshwar Temple & Kotiteertha',
    image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kumta-coastal-resorts',
    name: 'Kumta Riverfront & Palm Cottages',
    location: 'Vannalli / Aghanashini, Kumta',
    type: 'Beachfront Resort',
    priceRange: '₹ 1,800 – ₹ 5,000 / night',
    features: ['Zero Crowd Virgin Golden Beaches', 'Serene Coconut Groves', 'Authentic Coastal Karavali Food', 'Ideal Midway Hub for Murudeshwar & Yana'],
    nearTo: 'Vannalli Beach & Mangrove Boardwalk',
    image: '/images/gokarna-main-beach.jpg'
  }
];

export const WHY_CHOOSE_ATMABALA = [
  {
    title: 'Transparent Pricing — Zero Hidden Surges',
    competitor: 'Vague phone quotes, sudden extra charges for luggage/AC, or unexpected driver "bhatta" at trip end.',
    atmabala: 'All-inclusive fixed quotes upfront. Tolls, state tax, AC, and driver allowances clearly outlined before departure.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Spotless, Sanitized & Premium AC Fleet',
    competitor: 'Random aged cabs with noisy AC, worn interiors, or rattling suspension on ghat roads.',
    atmabala: 'Showroom-maintained Swift Dzires, Ertiga Hybrids, Innova Crystas & Tempo Travellers with sanitized chilled AC.',
    icon: 'Sparkles'
  },
  {
    title: 'Born & Raised Gokarna Resident Drivers',
    competitor: 'Outsider drivers dependent on poor GPS network who miss hidden beach gates and sacred timing windows.',
    atmabala: 'Polite, multi-lingual local experts who know secret sunset viewpoints, puja timings, and best coastal eateries.',
    icon: 'MapPin'
  },
  {
    title: 'Punctual Flight & Train Meet-and-Greet',
    competitor: 'Cabs arriving late or canceling at the last minute at remote train stations late at night.',
    atmabala: 'Live flight and train tracking with driver arriving 15 minutes prior to platform or terminal exit.',
    icon: 'Clock'
  }
];

export const FAQS_AND_TRAVEL_TIPS = [
  {
    question: 'How do I book a cab from Goa Airport (Mopa or Dabolim) to Gokarna?',
    answer: 'Simply share your flight number and landing time on our WhatsApp or call +91 8073756776. Our driver will track your flight, wait at the arrivals gate with a name placard, and bring you smoothly across NH-66 in approximately 3 to 3.5 hours.'
  },
  {
    question: 'What is the dress code and darshan timing for Mahabaleshwar Temple?',
    answer: 'For entering the inner sanctum to touch the sacred Atmalinga: Men must wear a traditional Dhoti (shirts/vests not allowed inside the inner garbhagriha), and women must wear Sarees or Salwar Kameez. Normal darshan hours are 6:00 AM to 12:30 PM and 5:00 PM to 8:00 PM.'
  },
  {
    question: 'Can your cabs accommodate large groups for pilgrimage and college trips?',
    answer: 'Yes! We have 6-seater Ertiga Hybrids, 7-seater Innova Crystas, and 12-to-20 seater luxury Tempo Travellers with high roof pushback recliners, ample boot space, and roof carriers.'
  },
  {
    question: 'Are there hidden toll or night driving charges?',
    answer: 'No. When Harish G provides you an Atmabala Travels quote, it includes the vehicle rental, fuel, driver allowance, and standard highway tolls. Everything is 100% transparent.'
  },
  {
    question: 'Do you help arrange hotel, resort, or beach shack accommodations in Gokarna?',
    answer: 'Yes! Having operated in Gokarna for over 12 years, we maintain direct partnerships with vetted beachfront shacks on Kudle & Om Beach, family homestays near the temple, and luxury resorts in Kumta.'
  }
];

export const TOURIST_DESTINATIONS: TouristDestination[] = [
  {
    id: '1',
    title: 'Mahabaleshwar Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Heart of Town (0 km)',
    bestTimeToVisit: 'Morning 6:00 AM - 12:30 PM & 5:00 PM - 8:00 PM',
    description: 'The sacred 4th-century Dravidian temple housing the legendary Atmalinga consecrated by Lord Shiva and worshipped by thousands of pilgrims.'
  },
  {
    id: '2',
    title: 'Mahaganapati Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Beside Mahabaleshwar Temple',
    bestTimeToVisit: 'Early morning before visiting the Atmalinga',
    description: 'Ancient standing Ganesha deity temple honoring the boy Ganesha who tricked the demon king Ravana to place the Atmalinga down.'
  },
  {
    id: '3',
    title: 'Ramateertha Temple & Beach',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1600387802805-4d4ebdc3eb4c?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '1.5 km from Main Town',
    bestTimeToVisit: 'Sunrise & Evening Sunset',
    description: 'Serene sacred water spring surrounded by coconut groves with an expansive panorama over the Arabian Sea.'
  },
  {
    id: '4',
    title: 'Om Beach',
    category: 'beach',
    image: '/images/gokarna-beach.jpg',
    distanceFromGokarna: '6 km from Gokarna center',
    bestTimeToVisit: 'Afternoon till Sunset (3:30 PM - 7:00 PM)',
    description: 'World-famous crescent beach naturally contoured into two semi-circular coves resembling the auspicious spiritual Sanskrit symbol Om (ॐ).'
  },
  {
    id: '5',
    title: 'Kudle Beach',
    category: 'beach',
    image: '/images/kudle-beach.jpg',
    distanceFromGokarna: '2 km from Gokarna center',
    bestTimeToVisit: 'Late afternoon & sunset cafe dinners',
    description: 'Sweeping golden sand beach enclosed by towering rocky hills with vibrant beachside shacks, yoga corners, and tranquil tides.'
  },
  {
    id: '6',
    title: 'Belekhan Beach & Anjaneya Temple',
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1520935515357-196561fbe61d?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '8 km South of Gokarna',
    bestTimeToVisit: 'Morning for peaceful nature strolls',
    description: 'Quiet rocky shore with the historic hillside Anjaneya (Lord Hanuman) temple offering crystal blue coastal waters.'
  },
  {
    id: '7',
    title: 'Shiva Cave (Gogarbha)',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1624514064560-fca3aa9a4eb0?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '1.5 km near Kudle road',
    bestTimeToVisit: 'Daylight hours with flashlights',
    description: 'Mystical rock cave associated with the mythological emergence of Lord Shiva from the ear of a cow (Gokarna meaning cow\'s ear).'
  },
  {
    id: '8',
    title: 'Vibhuti Falls',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1623946059868-8091807d0d0f?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '45 km through Sahyadri hills',
    bestTimeToVisit: 'Post-Monsoon & Winter (Sept - Feb)',
    description: 'Multi-tiered natural forest waterfall dropping into crystal-clear turquoise limestone plunge pools perfect for a refreshing dip.'
  },
  {
    id: '9',
    title: 'Murdeshwar Temple & Beach',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '78 km South via NH-66',
    bestTimeToVisit: 'Full day trip (Morning to Sunset)',
    description: 'Home to the magnificent 123-foot tall statue of Lord Shiva perched on Kanduka Hill surrounded on three sides by the roaring Arabian Sea.'
  },
  {
    id: '10',
    title: 'Apsara Konda',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1524220300957-612ce6ba1a30?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '52 km near Honnavar',
    bestTimeToVisit: 'Morning or late afternoon',
    description: 'Known as the "Pond of Angels", featuring a freshwater plunge pool, gentle cascade, and hill-top sunset viewpoint over the sea.'
  },
  {
    id: '11',
    title: 'Mangrove Boardwalk',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1622619472658-29be97e974e4?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '35 km near Kumta / Honnavar',
    bestTimeToVisit: 'High tide times for boat cruising',
    description: 'Elevated wooden trail weaving through lush tidal mangrove forests with rare migratory birds and estuarine boat rides.'
  },
  {
    id: '12',
    title: 'Sharavati Water Sports & Backwater',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '48 km near Honnavar',
    bestTimeToVisit: '10:00 AM - 5:00 PM',
    description: 'Thrilling water rides including jet-skis, speedboats, banana rides, and kayaking in the calm Sharavati river backwaters.'
  },
  {
    id: '13',
    title: 'Yana Caves & Monoliths',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '50 km via forest ghat road',
    bestTimeToVisit: 'Morning 9:00 AM - 1:00 PM',
    description: 'Two gigantic black crystalline limestone rock monoliths (Bhairaveshwara and Mohini peaks) towering inside dense rainforests.'
  },
  {
    id: '14',
    title: 'Sharavati Backwater & Boating',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '45 km near Honnavar Eco-beach',
    bestTimeToVisit: 'Sunset golden hour boat cruise',
    description: 'Tranquil emerald waters where the Sharavati river meets the Arabian sea, lined with scenic suspension bridges and islands.'
  },
  {
    id: '15',
    title: 'Kotiteertha Lake & Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Walking distance in Gokarna town',
    bestTimeToVisit: 'Early morning & Deepotsava evening',
    description: 'A vast man-made sacred lake surrounded by ancient stone shrines, temples, and banyan trees where pilgrims take holy cleansing baths.'
  }
];

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Kulkarni',
    location: 'Bengaluru, Karnataka',
    date: 'September 2026',
    tripType: 'Sacred Coastal Pilgrimage Circuit',
    vehicleUsed: 'Innova Crysta (7-Seater AC)',
    rating: 5,
    comment: 'We travelled with my elderly parents for Mahabaleshwar Atmalinga and Murudeshwar darshan. Harish G was wonderful — driver dropped us right at the car street entrance so my mother did not have to walk far, guided us on dhoti dress codes, and waited patiently. The Innova Crysta was spotless and comfortable on ghat roads. Absolutely 5 stars!',
    avatarText: 'RK',
    verifiedBadge: 'Verified Family Pilgrimage',
    destinationTag: 'Gokarna & Murudeshwar',
    photo: '/images/innova-crysta.jpg'
  },
  {
    id: 'test-2',
    name: 'Aditi Sharma & Friends',
    location: 'Mumbai, Maharashtra',
    date: 'August 2026',
    tripType: 'Goa Mopa Airport to Gokarna & Beach Trek',
    vehicleUsed: 'Maruti Ertiga Hybrid AC',
    rating: 5,
    comment: 'Our flight to Goa Mopa was delayed by almost 1.5 hours, but our driver was waiting right at arrivals with a name board! No cancellation, no surge drama. He drove us smoothly down NH-66 directly to our Kudle beach shack gate and even recommended hidden sunset cafes. Fair, transparent rates — best cab operator in Gokarna.',
    avatarText: 'AS',
    verifiedBadge: 'Verified Airport Transfer',
    destinationTag: 'Goa Mopa ➔ Kudle Beach',
    photo: '/images/kudle-beach.jpg'
  },
  {
    id: 'test-3',
    name: 'Aniruddh Menon',
    location: 'Pune, Maharashtra',
    date: 'August 2026',
    tripType: 'Yana Caves & Vibhooti Waterfall Forest Trip',
    vehicleUsed: 'Swift Dzire AC',
    rating: 5,
    comment: 'Booked a 1-day trip to Yana Rocks and Vibhooti Falls from Kumta. The ghat roads through Sahyadri can be narrow, but our driver handled every curve with utmost safety and calm. Chilled AC, crisp seats, and zero unexpected tolls or driver bhatta demands at the end. What Harish quoted on WhatsApp was exactly what we paid.',
    avatarText: 'AM',
    verifiedBadge: 'Verified Couple Trek',
    destinationTag: 'Kumta ➔ Yana & Vibhooti',
    photo: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'test-4',
    name: 'Dr. Vinay Hegde',
    location: 'Hubli, Karnataka',
    date: 'July 2026',
    tripType: 'Honnavar Mangrove Boardwalk & Sharavati Boating',
    vehicleUsed: 'Swift Dzire AC',
    rating: 5,
    comment: 'Having used local taxis in Uttara Kannada for years, Atmabala Travels is leagues ahead of typical roadside operators. Everything was arranged with a single phone call with Harish G. Driver was on time at Kumta, assisted with boating tickets at Honnavar, and vehicle was in showroom condition.',
    avatarText: 'VH',
    verifiedBadge: 'Verified Local Resident',
    destinationTag: 'Kumta & Honnavar',
    photo: 'https://images.unsplash.com/photo-1622619472658-29be97e974e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'test-5',
    name: 'Sneha & Rahul Deshmukh',
    location: 'Hyderabad, Telangana',
    date: 'June 2026',
    tripType: '3-Day Coastal Karnataka & Karwar Heritage',
    vehicleUsed: 'Innova Crysta AC',
    rating: 5,
    comment: 'Atmabala made our 3-day anniversary trip seamless. From Om Beach to the INS Chapal Warship Museum in Karwar, our driver knew the best seaside restaurants for Karavali seafood and viewpoints that aren’t even on Google Maps. We will only book with Atmabala whenever we visit Gokarna!',
    avatarText: 'SD',
    verifiedBadge: 'Verified Holiday Tour',
    destinationTag: 'Gokarna ➔ Karwar Coastal',
    photo: '/images/gokarna-beach.jpg'
  },
  {
    id: 'test-6',
    name: 'Vikramaditya Rao & College Batch',
    location: 'Chennai, Tamil Nadu',
    date: 'May 2026',
    tripType: 'Kumta Railway Station Pickup (14 Pax Reunion)',
    vehicleUsed: 'Tempo Traveller Luxury 17-Seater',
    rating: 5,
    comment: 'We were a group of 14 friends arriving by the late-night Konkan Express at Kumta station. The Tempo Traveller was already parked outside platform 1 with AC running and plenty of luggage deck space. Pushback recliner seats and high ceiling made traveling together so fun and comfortable.',
    avatarText: 'VR',
    verifiedBadge: 'Verified Group Trip (14 Pax)',
    destinationTag: 'Kumta Station ➔ Gokarna',
    photo: '/images/tempo-traveller.jpg'
  }
];


