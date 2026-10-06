import { FleetVehicle, TravelPackage, TouristDestination, AirportTransferRoute, HotelStayOption, CustomerTestimonial } from './types';

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
    gokarna: 'Main Bus Stand Road, Gokarna, Uttara Kannada, Karnataka 581326',
    kumta: 'National Highway Main Hub, Kumta, Uttara Kannada, Karnataka 581343'
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
    name: 'Swift Dzire',
    category: 'Sedan',
    capacity: '4 + 1 Passengers',
    luggage: '2 Medium Bags',
    ac: true,
    image: '/images/swift-dzire.jpg',
    tagline: 'Economical & comfortable sedan for couples, families, and city hops.',
    description: 'Perfect for local Gokarna temple visits, Kumta town travel, and quick coastal hops with chilled AC and smooth driving.',
    pricePerKm: 14,
    perDayEstimate: 2400,
    features: ['Chilled Air Conditioning', 'Bluetooth Audio System', 'Generous Legroom', 'Clean & Sanitized Interiors']
  },
  {
    id: 'ertiga-smart',
    name: 'Maruti Ertiga Hybrid',
    category: 'Compact MUV',
    capacity: '6 Passengers',
    luggage: '3 Bags',
    ac: true,
    image: '/images/maruti-ertiga.jpg',
    tagline: 'Budget-friendly 6-seater for small groups and airport transfers.',
    description: 'Affordable and flexible seating with superior mileage and comfort on coastal ghat roads.',
    pricePerKm: 16,
    perDayEstimate: 2900,
    features: ['Rear AC Vents', 'Foldable 3rd Row', 'USB Fast Charging', 'Smooth Suspension']
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Luxury MPV',
    capacity: '6+1 / 7+1 Passengers',
    luggage: '4 Large Bags',
    ac: true,
    image: '/images/innova-crysta.jpg',
    tagline: 'Spacious luxury comfort for coastal highways and family vacations.',
    description: 'The undisputed king of road comfort. Plush captain seats, dual-zone AC, and generous luggage capacity for long journeys.',
    pricePerKm: 20,
    perDayEstimate: 3800,
    features: ['Captain Seat Comfort', 'Dual Zone Climate Control', 'Highway Cruising Stability', 'Roof Carrier Available']
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller (12-20 Seater)',
    category: 'Mini Bus / Van',
    capacity: '12 to 20 Passengers',
    luggage: '10+ Bags & Luggage Deck',
    ac: true,
    image: '/images/tempo-traveller.jpg',
    tagline: 'Group adventures, corporate retreats, and large family pilgrim tours.',
    description: 'Individual pushback luxury seats, high roof walk-in aisle, premium surround sound, and ample boot space for luggage.',
    pricePerKm: 26,
    perDayEstimate: 5500,
    features: ['Pushback Recliner Seats', 'High Ceiling Air Flow', 'LED Entertainment TV', 'Dedicated Luggage Carrier']
  }
];

export const AIRPORT_TRANSFER_ROUTES: AirportTransferRoute[] = [
  {
    id: 'goa-mopa-gokarna',
    source: 'Goa Mopa Airport (GOX)',
    destination: 'Gokarna Beach / Hotels',
    distanceKm: 165,
    driveTime: '3.5 Hours',
    sedanFare: 4200,
    suvFare: 5200,
    crystaFare: 6200,
    tempoFare: 8800,
    popular: true,
    highlights: ['Direct Highway NH-66 Route', 'Flight Tracking & Meet/Greet', 'Zero Toll Surprise (All Included)'],
    image: '/images/fleet-innova-silver.jpg'
  },
  {
    id: 'goa-dabolim-gokarna',
    source: 'Goa Dabolim Airport (GOI)',
    destination: 'Gokarna Beach / Hotels',
    distanceKm: 145,
    driveTime: '3 Hours',
    sedanFare: 3800,
    suvFare: 4800,
    crystaFare: 5800,
    tempoFare: 8200,
    popular: true,
    highlights: ['South Goa Coastal Scenic Drive', 'Airport Arrival Waiting Included', 'Late Night / Early Morning Available'],
    image: '/images/innova-crysta.jpg'
  },
  {
    id: 'hubli-airport-gokarna',
    source: 'Hubli Airport / Hubli Junction (HBX)',
    destination: 'Gokarna / Kumta',
    distanceKm: 152,
    driveTime: '3.2 Hours',
    sedanFare: 3600,
    suvFare: 4500,
    crystaFare: 5500,
    tempoFare: 7800,
    popular: true,
    highlights: ['Smooth Yellapur Western Ghats Highway', 'Train & Flight Synchronized Pickup', 'Tea/Refreshment Stop of Choice'],
    image: '/images/swift-dzire.jpg'
  },
  {
    id: 'kumta-railway-gokarna',
    source: 'Kumta Railway Station (KT)',
    destination: 'Gokarna Town / Kudle / Om Beach',
    distanceKm: 32,
    driveTime: '45 Mins',
    sedanFare: 950,
    suvFare: 1300,
    crystaFare: 1600,
    tempoFare: 2400,
    popular: true,
    highlights: ['Instant Station Platform Pickup', 'Ideal for Vande Bharat & Konkan Express Trains', 'Direct Hotel Drop to Shacks'],
    image: '/images/maruti-ertiga.jpg'
  },
  {
    id: 'karwar-station-gokarna',
    source: 'Karwar Railway Station / Madgaon',
    destination: 'Gokarna / Kumta',
    distanceKm: 65,
    driveTime: '1.2 Hours',
    sedanFare: 1900,
    suvFare: 2400,
    crystaFare: 2900,
    tempoFare: 4200,
    popular: false,
    highlights: ['Coastal NH-66 Bridge Views', 'Fastest Transfer for Goa border arrivals', 'Doorstep Drop at Resort'],
    image: '/images/swift-dzire.jpg'
  },
  {
    id: 'mangalore-airport-gokarna',
    source: 'Mangalore International Airport (IXE)',
    destination: 'Murudeshwar / Gokarna',
    distanceKm: 230,
    driveTime: '4.5 Hours',
    sedanFare: 5600,
    suvFare: 6800,
    crystaFare: 8200,
    tempoFare: 11500,
    popular: false,
    highlights: ['Cover Coastal NH-66 & Murudeshwar en route', 'Comfortable Cruise in Luxury AC', 'Family Luggage Capacity'],
    image: '/images/tempo-traveller.jpg'
  }
];

export const POPULAR_PACKAGES: TravelPackage[] = [
  {
    id: 'gokarna-1day-classic',
    title: 'Gokarna Complete 1-Day Highlights',
    category: 'beach',
    duration: '1 Full Day (8-9 Hours)',
    highlights: ['Mahabaleshwar & Mahaganapati Temple', 'Om Beach Sunset Cove', 'Kudle Beach & Hilltop Lookout', 'Shiva Cave & Kotiteertha Lake'],
    route: 'Gokarna Town → Kotiteertha → Shiva Cave → Kudle Beach → Om Beach Sunset',
    popularFor: 'The definitive first-time Gokarna experience covering spirituality, viewpoints & beach shacks.',
    recommendedVehicle: 'Swift Dzire or Ertiga',
    startingPrice: '₹ 1,800',
    badge: 'Most Popular',
    image: '/images/gokarna-beach.jpg'
  },
  {
    id: 'sacred-pilgrimage-circuit',
    title: 'Sacred Coastal Shiva Pilgrimage Circuit',
    category: 'pilgrimage',
    duration: '1 Full Day or 2 Days',
    highlights: ['Mahabaleshwar Atmalinga Darshan', 'Kotiteertha Holy Bathing Tank', 'Idagunji Mahaganapati Temple', 'Murdeshwar 123-Ft Shiva & Gopuram Lift'],
    route: 'Gokarna → Kotiteertha → Idagunji Temple → Murudeshwar Beach & Temple → Return',
    popularFor: 'Devotional families & elders seeking blessed darshans with stress-free doorstep temple drops.',
    recommendedVehicle: 'Innova Crysta or Ertiga',
    startingPrice: '₹ 3,400',
    badge: 'Spiritual Choice',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'yana-vibhooti-rainforest',
    title: 'Yana Caves & Vibhooti Waterfall Adventure',
    category: 'nature',
    duration: '1 Full Day',
    highlights: ['Yana Towering Limestone Monoliths', 'Bhairaveshwara & Mohini Shikhara', 'Vibhooti Forest Natural Plunge Pool', 'Sahyadri Rainforest Ghat Cruise'],
    route: 'Gokarna → Kumta Ghats → Yana Monoliths → Vibhuti Falls → Forest Tea Stop → Gokarna',
    popularFor: 'Hiking, refreshing swim in natural limestone pool, and geologic wonders.',
    recommendedVehicle: 'Innova Crysta or Swift Dzire',
    startingPrice: '₹ 2,900',
    badge: 'Nature & Trek',
    image: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'honnavar-backwater-mangrove',
    title: 'Honnavar Eco-Boating & Sharavati Backwaters',
    category: 'nature',
    duration: '1 Day (Morning to Evening)',
    highlights: ['Sharavati Riverfront Speedboating', 'Mangrove Forest Elevated Boardwalk', 'Apsara Konda Waterfall & Pond of Angels', 'Kasarkod Eco-Beach Sunset'],
    route: 'Gokarna → Kumta → Honnavar Boardwalk → Sharavati Boating → Apsara Konda → Gokarna',
    popularFor: 'Calm emerald boat cruises, bird watching, and uncrowded sunset boardwalks.',
    recommendedVehicle: 'Ertiga Hybrid or Dzire',
    startingPrice: '₹ 2,600',
    badge: 'Relaxing Cruise',
    image: 'https://images.unsplash.com/photo-1622619472658-29be97e974e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'murdeshwar-jog-falls',
    title: 'Murdeshwar Temple & Jog Falls Expedition',
    category: 'outstation',
    duration: '1 Full Day (10-12 Hours)',
    highlights: ['Murdeshwar Shiva Statue on Sea Cliff', '20-Storey Raja Gopuram Lift', 'Jog Falls (India\'s 2nd Highest Waterfall)', 'Sharavati Valley Rainforest Vistas'],
    route: 'Gokarna → Honnavar → Murdeshwar → Sharavati Valley → Jog Falls → Return',
    popularFor: 'Breathtaking Western Ghats waterfalls and coastal architectural grandeur.',
    recommendedVehicle: 'Innova Crysta or Tempo Traveller',
    startingPrice: '₹ 4,400',
    badge: 'Iconic Grand Tour',
    image: 'https://images.unsplash.com/photo-1524220300957-612ce6ba1a30?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dandeli-adventure-safari',
    title: 'Dandeli Jungle Safari & River Rafting',
    category: 'nature',
    duration: '2 Days / 1 Night',
    highlights: ['Kali River White Water Rafting', 'Dandeli Wildlife Jungle Safari', 'Syntheri Rocks Canyon', 'Kayaking & Natural Jacuzzi Bath'],
    route: 'Gokarna → Ankola → Yellapur → Dandeli Jungle Camps → Return',
    popularFor: 'Adrenaline junkies, water sports, deep forest wildlife and campfires.',
    recommendedVehicle: 'Innova Crysta or Tempo Traveller',
    startingPrice: '₹ 6,800',
    badge: 'Adventure Thrill',
    image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'karwar-scenic-coast',
    title: 'Karwar Scenic Coast & Sadashivgad Heritage',
    category: 'outstation',
    duration: '1 Full Day',
    highlights: ['INS Chapal Warship Sea Museum', 'Rabindranath Tagore Beach', 'Sadashivgad Hilltop Fort & Kali Bridge', 'Devbagh Beach Watersports'],
    route: 'Gokarna → Ankola → Karwar Marine Highway → Sadashivgad → Return',
    popularFor: 'Seafood delicacies, naval museum heritage, and estuary panoramas.',
    recommendedVehicle: 'Dzire or Innova Crysta',
    startingPrice: '₹ 3,200',
    badge: 'Coastal Heritage',
    image: '/images/kudle-beach.jpg'
  }
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


