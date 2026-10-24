import {
  FleetVehicle,
  TouristDestination,
  AirportTransferRoute,
  CustomerTestimonial
} from './types';

export const COMPANY_DETAILS = {
  name: 'ATMABALA Travels',
  tagline: 'Your Journey, Our Drive.',
  subtitle: 'Premium car rentals, airport transfers, and bespoke coastal tour packages across Gokarna, Kumta, and Karwar.',
  founder: 'Harish. G',
  phone: '+91 8073756776',
  rawPhone: '8073756776',
  whatsappUrl: 'https://wa.me/918073756776',
  email: 'atmabalagokarna@gmail.com',
  locations: {
    gokarna: 'Welcome Digital Point, Kamat complex, near Canara Bank, Ganjigadde, Gokarna, Karnataka 581326',
    kumta: 'Opposite Old KSRTC Bus Stand, Main Road, Kumta, Karnataka 581343',
    gokarnaMapsUrl: 'https://maps.app.goo.gl/D8Nh5CjvQevnhewNA'
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
    description: 'Crisp chilled AC, smooth suspension for coastal highways and Ghats. Ideal for Gokarna local and outstation.',
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
    description: 'Perfect for group temple tours, beach hopping, and airport drops across Uttara Kannada.',
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
    image: '/images/urbania-van.jpg',
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
    highlights: ['Doorstep Drop to Kudle / Om Beach / Town', 'Goa Border Permit & All Tolls Arranged', 'Flight Tracking & Meet/Greet at Terminal'],
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
    highlights: ['Doorstep Hotel & Beach Shack Drop', 'South Goa Coastal Scenic Highway NH-66', 'Goa Border Permit, Toll & Driver Bata Arranged'],
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
    highlights: ['Smooth Yellapur Western Ghats Route', 'Synchronized Flight / Train Arrival Pickup', '24/7 Night Arrival Chauffeur Support'],
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
    highlights: ['Direct Platform Exit Pickup for Konkan & Vande Bharat Trains', 'Doorstep Drop to Shacks or Hilltop Hotels', 'Clean AC Vehicles with Chilled Airflow'],
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
    highlights: ['Coastal NH-66 Kali River Bridge Views', 'Fastest Transfer for Goa border arrivals', 'Experienced Local Chauffeurs'],
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
    highlights: ['Scenic Coastal Highway NH-66 via Udupi & Kundapura', 'Doorstep Drop to Any Hotel / Resort', 'Complimentary Rest Stops on Route'],
    image: '/images/tempo-traveller.jpg'
  }
];

export const TOURIST_DESTINATIONS: TouristDestination[] = [
  {
    id: '1',
    title: 'Mahabaleshwar Temple',
    category: 'temple',
    image: '/images/mahabaleshwar-temple.jpg',
    distanceFromGokarna: 'Heart of Town (0 km)',
    bestTimeToVisit: 'Morning 6:00 AM - 12:30 PM & 5:00 PM - 8:00 PM',
    description: 'The sacred 4th-century Dravidian temple housing the legendary Atmalinga consecrated by Lord Shiva and worshipped by thousands of pilgrims.'
  },
  {
    id: '2',
    title: 'Mahaganapati Temple',
    category: 'temple',
    image: '/images/mahaganapati-temple.jpg',
    distanceFromGokarna: 'Beside Mahabaleshwar Temple',
    bestTimeToVisit: 'Early morning before visiting the Atmalinga',
    description: 'Ancient standing Ganesha deity temple honoring the boy Ganesha who tricked the demon king Ravana to place the Atmalinga down.'
  },
  {
    id: '3',
    title: 'Ramateertha Temple & Beach',
    category: 'temple',
    image: '/images/ramateertha.jpg',
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
    image: '/images/belekhan-beach.jpg',
    distanceFromGokarna: '8 km South of Gokarna',
    bestTimeToVisit: 'Morning for peaceful nature strolls',
    description: 'Quiet rocky shore with the historic hillside Anjaneya (Lord Hanuman) temple offering crystal blue coastal waters.'
  },
  {
    id: '7',
    title: 'Shiva Cave (Gogarbha)',
    category: 'heritage',
    image: '/images/shiva-cave.jpg',
    distanceFromGokarna: '1.5 km near Kudle road',
    bestTimeToVisit: 'Daylight hours with flashlights',
    description: 'Mystical rock cave associated with the mythological emergence of Lord Shiva from the ear of a cow (Gokarna meaning cow\'s ear).'
  },
  {
    id: '8',
    title: 'Vibhuti Falls',
    category: 'nature',
    image: '/images/vibhuti-falls.jpg',
    distanceFromGokarna: '45 km through Sahyadri hills',
    bestTimeToVisit: 'Post-Monsoon & Winter (Sept - Feb)',
    description: 'Multi-tiered natural forest waterfall dropping into crystal-clear turquoise limestone plunge pools perfect for a refreshing dip.'
  },
  {
    id: '9',
    title: 'Murdeshwar Temple & Beach',
    category: 'temple',
    image: '/images/murudeshwar-temple.jpg',
    distanceFromGokarna: '78 km South via NH-66',
    bestTimeToVisit: 'Full day trip (Morning to Sunset)',
    description: 'Home to the magnificent 123-foot tall statue of Lord Shiva perched on Kanduka Hill surrounded on three sides by the roaring Arabian Sea.'
  },
  {
    id: '10',
    title: 'Apsara Konda',
    category: 'nature',
    image: '/images/apsara-konda.jpg',
    distanceFromGokarna: '52 km near Honnavar',
    bestTimeToVisit: 'Morning or late afternoon',
    description: 'Known as the "Pond of Angels", featuring a freshwater plunge pool, gentle cascade, and hill-top sunset viewpoint over the sea.'
  },
  {
    id: '11',
    title: 'Mangrove Boardwalk',
    category: 'nature',
    image: '/images/mangrove-boardwalk.jpg',
    distanceFromGokarna: '35 km near Kumta / Honnavar',
    bestTimeToVisit: 'High tide times for boat cruising',
    description: 'Elevated wooden trail weaving through lush tidal mangrove forests with rare migratory birds and estuarine boat rides.'
  },
  {
    id: '12',
    title: 'Sharavati Water Sports & Backwater',
    category: 'nature',
    image: '/images/sharavati-water-sports.jpg',
    distanceFromGokarna: '48 km near Honnavar',
    bestTimeToVisit: '10:00 AM - 5:00 PM',
    description: 'Thrilling water rides including jet-skis, speedboats, banana rides, and kayaking in the calm Sharavati river backwaters.'
  },
  {
    id: '13',
    title: 'Yana Caves & Monoliths',
    category: 'nature',
    image: '/images/yana-caves.jpg',
    distanceFromGokarna: '50 km via forest ghat road',
    bestTimeToVisit: 'Morning 9:00 AM - 1:00 PM',
    description: 'Two gigantic black crystalline limestone rock monoliths (Bhairaveshwara and Mohini peaks) towering inside dense rainforests.'
  },
  {
    id: '14',
    title: 'Sharavati Backwater & Boating',
    category: 'nature',
    image: '/images/sharavati-backwater.jpg',
    distanceFromGokarna: '45 km near Honnavar Eco-beach',
    bestTimeToVisit: 'Sunset golden hour boat cruise',
    description: 'Tranquil emerald waters where the Sharavati river meets the Arabian sea, lined with scenic suspension bridges and islands.'
  },
  {
    id: '15',
    title: 'Kotiteertha Lake & Temple',
    category: 'temple',
    image: '/images/kotiteertha-lake.jpg',
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
    comment: 'Our flight to Goa Mopa was delayed by almost 1.5 hours, but our driver was waiting right at arrivals with a name board! No cancellation, no surge drama. He drove us smoothly down NH-66 directly to our Kudle beach shack gate and even recommended hidden sunset cafes. Fair, transparent quotations — best cab operator in Gokarna.',
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
    photo: '/images/yana-caves.jpg'
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
    photo: '/images/mangrove-boardwalk.jpg'
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
