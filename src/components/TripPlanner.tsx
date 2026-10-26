import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  ArrowRightLeft,
  MapPin,
  Calendar,
  Users,
  Car,
  Clock,
  MessageCircle,
  Copy,
  Check,
  Phone,
  Sparkles,
  Info,
  ShieldCheck,
  Fuel,
  Navigation
} from 'lucide-react';
import { COMPANY_DETAILS, FLEET_VEHICLES } from '../data';

// Curated starting locations across coastal Karnataka & transit hubs
const STARTING_LOCATIONS = [
  'Gokarna Town / Main Bus Stand',
  'Kudle Beach / Om Beach Resorts',
  'Gokarna Road Railway Station (GOK)',
  'Kumta Railway Station (KT)',
  'Goa Mopa International Airport (GOX)',
  'Goa Dabolim Airport (GOI)',
  'Mangaluru International Airport (IXE)',
  'Bengaluru Kempegowda Airport (BLR)',
  'Madgaon Railway Station (MAO, Goa)',
  'Mangaluru Junction (MAJN)',
  'Mangaluru Central Railway Station (MAQ)',
  'Udupi Sri Krishna Matha / Malpe',
  'Shivamogga / Shimoga',
  'Hubli Airport / Railway Station (HBX)',
  'Murudeshwar Town / Temple Beach',
  'Honnavar Town / Eco Beach',
  'Karwar City / Railway Station',
  'Ankola Town / Junction',
  'Sirsi / Banavasi',
  'Custom Starting Location'
];

// Curated popular destinations & sightseeing tours
const DESTINATIONS = [
  'Gokarna Local Beaches (Om, Kudle, Half Moon & Paradise)',
  'Mahabaleshwar Temple & Kotiteertha (Sacred Atmalinga)',
  'Yana Rocks & Vibhuti Waterfalls (Sahyadri Forest Circuit)',
  'Murudeshwar 123ft Shiva Statue & Mirjan Fort',
  'Mirjan Fort (Historic Queen Chennabhairadevi Citadel)',
  'Jog Falls Western Ghats Full-Day Tour',
  'Honnavar Mangrove Boardwalk & Sharavati Boating',
  'Apsara Konda Waterfalls & Kasarkod Eco Beach',
  'Udupi Sri Krishna Matha & Malpe St. Mary Island',
  'Mangaluru International Airport (IXE) Drop',
  'Bengaluru Kempegowda Airport (BLR) Drop',
  'Mangaluru Junction (MAJN) & Central (MAQ) Drop',
  'Madgaon Railway Station (MAO, Goa) Drop',
  'Shivamogga / Shimoga Transit',
  'Gokarna Road Railway Station (GOK) Drop',
  'Kumta Railway Station (KT) Drop',
  'Goa Mopa Airport (GOX) / Dabolim (GOI) Drop',
  'Goa South Beaches (Palolem, Agonda & Colva)',
  'Hubli Junction / Airport Transfer',
  'Dandeli River Rafting & Wildlife Jungle Safari',
  'Karwar Coastal & INS Chapal Warship Museum',
  'Custom Destination'
];

// Route intel dictionary for instant accurate travel insights
interface RouteInfo {
  distance: string;
  duration: string;
  highlights: string;
  bestVehicle: string;
}

const ROUTE_INSIGHTS: Record<string, RouteInfo> = {
  'Gokarna Town / Main Bus Stand -> Gokarna Local Beaches (Om, Kudle, Half Moon & Paradise)': {
    distance: '6 - 8 km',
    duration: '15 - 20 mins',
    highlights: 'Cliffside coastal switchbacks, Om Beach sunset viewpoint & Kudle shack access',
    bestVehicle: 'Swift Dzire or Ertiga'
  },
  'Gokarna Town / Main Bus Stand -> Yana Rocks & Vibhuti Waterfalls (Sahyadri Forest Circuit)': {
    distance: '52 km',
    duration: '1 hr 35 mins',
    highlights: 'Dense rainforest ghat drive, crystal limestone rock monoliths & freshwater plunge pools',
    bestVehicle: 'Innova Crysta or Ertiga'
  },
  'Gokarna Town / Main Bus Stand -> Murudeshwar 123ft Shiva Statue & Mirjan Fort': {
    distance: '78 km',
    duration: '1 hr 25 mins',
    highlights: '4-lane coastal highway NH-66, 16th-century laterite stone Mirjan fort & oceanfront temple',
    bestVehicle: 'Innova Crysta or Swift Dzire'
  },
  'Gokarna Town / Main Bus Stand -> Mirjan Fort (Historic Queen Chennabhairadevi Citadel)': {
    distance: '22 km',
    duration: '30 mins',
    highlights: 'Scenic NH-66 drive near Kumta, lush moss-covered 16th-century laterite bastions, double moats & watchtowers',
    bestVehicle: 'Swift Dzire, Ertiga or Innova Crysta'
  },
  'Gokarna Town / Main Bus Stand -> Jog Falls Western Ghats Full-Day Tour': {
    distance: '112 km',
    duration: '2 hrs 45 mins',
    highlights: 'Scenic Western Ghats ascent, Sharavathi river gorge, Raja, Roarer, Rocket & Rani waterfalls',
    bestVehicle: 'Innova Crysta or Ertiga'
  },
  'Gokarna Town / Main Bus Stand -> Honnavar Mangrove Boardwalk & Sharavati Boating': {
    distance: '48 km',
    duration: '55 mins',
    highlights: 'Scenic Sharavati river estuary, wooden mangrove walkway & sunset backwater boat cruise',
    bestVehicle: 'Swift Dzire or Ertiga'
  },
  'Kumta Railway Station (KT) -> Gokarna Town / Main Bus Stand': {
    distance: '32 km',
    duration: '40 mins',
    highlights: 'Direct platform pickup, Aghanashini river bridge & smooth NH-66 coastal highway',
    bestVehicle: 'Innova Crysta, Ertiga or Swift Dzire'
  },
  'Goa Mopa International Airport (GOX) -> Gokarna Town / Main Bus Stand': {
    distance: '165 km',
    duration: '3 hrs 45 mins',
    highlights: 'Scenic drive spanning Goa & Karnataka border via Canacona & Karwar coastal highway',
    bestVehicle: 'Innova Crysta (Luxury Comfort)'
  },
  'Goa Dabolim Airport (GOI) -> Gokarna Town / Main Bus Stand': {
    distance: '142 km',
    duration: '3 hrs 15 mins',
    highlights: 'South Goa coastal route, scenic Zuari bridge & hassle-free border crossing handled',
    bestVehicle: 'Innova Crysta or Ertiga'
  },
  'Hubli Airport / Railway Station (HBX) -> Gokarna Town / Main Bus Stand': {
    distance: '152 km',
    duration: '3 hrs 10 mins',
    highlights: 'Yellapur Western Ghats winding road, Areca nut plantations & 24/7 airport connection',
    bestVehicle: 'Innova Crysta or Ertiga'
  }
};

export default function TripPlanner() {
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const originListId = useId();
  const destListId = useId();

  // State
  const [startPoint, setStartPoint] = useState<string>('Gokarna Town / Main Bus Stand');
  const [customStart, setCustomStart] = useState<string>('');
  const [destination, setDestination] = useState<string>('Yana Rocks & Vibhuti Waterfalls (Sahyadri Forest Circuit)');
  const [customDest, setCustomDest] = useState<string>('');
  const [tripType, setTripType] = useState<string>('Full Day Sightseeing (Round Trip)');
  const [vehicle, setVehicle] = useState<string>('innova-crysta-7plus1');
  const [travelDate, setTravelDate] = useState<string>(tomorrowStr);
  const [passengerCount, setPassengerCount] = useState<string>('4 - 6 Passengers');
  const [pickupTime, setPickupTime] = useState<string>('08:30 AM (Morning Tour)');
  const [specialNote, setSpecialNote] = useState<string>('Looking for clean AC car with experienced Ghat road driver.');
  const [copied, setCopied] = useState<boolean>(false);

  // Computed starting and ending points
  const activeStart = startPoint === 'Custom Starting Location' ? (customStart || 'Custom Origin') : startPoint;
  const activeDest = destination === 'Custom Destination' ? (customDest || 'Custom Destination') : destination;

  // Selected vehicle object
  const selectedVehicleObj = FLEET_VEHICLES.find(v => v.id === vehicle) || FLEET_VEHICLES[2];

  // Lookup Route Insights
  const lookupKey = `${startPoint} -> ${destination}`;
  const routeInsight: RouteInfo = ROUTE_INSIGHTS[lookupKey] || {
    distance: 'Custom Route Distance',
    duration: 'Calculated upon Inquiry',
    highlights: 'Personalized private chauffeur, 100% chilled AC, flexible photo stops & temple darshan support',
    bestVehicle: selectedVehicleObj.name
  };

  // Swap locations handler
  const handleSwap = () => {
    const prevStart = startPoint;
    const prevCustomStart = customStart;
    setStartPoint(destination === 'Custom Destination' ? 'Custom Starting Location' : destination);
    setCustomStart(customDest);
    setDestination(prevStart === 'Custom Starting Location' ? 'Custom Destination' : prevStart);
    setCustomDest(prevCustomStart);
  };

  // Generate WhatsApp text
  const generateWhatsAppMessage = () => {
    return `Namaste Harish G! 🙏
I would like to plan a trip with Atmabala Travels Gokarna:

📍 Pickup Point: ${activeStart}
🏁 Destination / Tour: ${activeDest}
🔄 Trip Type: ${tripType}
🚗 Vehicle Preference: ${selectedVehicleObj.name} (${selectedVehicleObj.capacity})
📅 Date of Travel: ${travelDate}
⏰ Desired Pickup Time: ${pickupTime}
👥 Group Size: ${passengerCount}
📝 Special Notes / Request: ${specialNote ? specialNote : 'None'}

Please provide your best all-inclusive quotation and availability. Thank you!`;
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/918073756776?text=${encodeURIComponent(text)}`;
    try {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.location.href = url;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateWhatsAppMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="trip-planner" className="py-8 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#070D18] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF6500]/10 dark:bg-[#FF6500]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF6500]/10 dark:bg-[#FF6500]/20 text-[#FF6500] text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 border border-[#FF6500]/30 shadow-2xs">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6500]" />
            <span>Interactive Route &amp; Cab Quotation Builder</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B192C] dark:text-white">
            Plan Your Coastal Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2 sm:mt-3 text-xs sm:text-base max-w-2xl mx-auto">
            Select your starting point, sightseeing route, and favorite vehicle to generate a tailor-made quotation message instantly sent to proprietor Harish G.
          </p>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Form Controls (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#0B1523] rounded-3xl p-4 sm:p-7 shadow-xl border border-slate-200/90 dark:border-slate-800 space-y-4 sm:space-y-6"
          >
            {/* Step 1: Origin & Destination with 1-Click Swap */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Step 1 • Pick Route &amp; Transit Points
                </span>
                <span className="text-xs font-semibold text-[#FF6500] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gokarna &amp; Coastal Hubs
                </span>
              </div>

              {/* Starting Point Selection */}
              <div>
                <label htmlFor={originListId} className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Starting Point / Pickup Location</span>
                </label>
                <select
                  id={originListId}
                  value={startPoint}
                  onChange={(e) => setStartPoint(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-colors"
                >
                  {STARTING_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {loc}
                    </option>
                  ))}
                </select>
                {startPoint === 'Custom Starting Location' && (
                  <input
                    type="text"
                    value={customStart}
                    onChange={(e) => setCustomStart(e.target.value)}
                    placeholder="Enter hotel, homestay, or landmark name..."
                    className="mt-2 w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                )}
              </div>

              {/* Swap Button Divider */}
              <div className="relative flex items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.12, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSwap}
                  type="button"
                  title="Swap Starting Point & Destination"
                  aria-label="Swap Starting Point & Destination"
                  className="relative z-10 p-2 rounded-full bg-[#FF6500] text-white shadow-md hover:bg-[#E55A00] transition-colors cursor-pointer"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Destination Selection */}
              <div>
                <label htmlFor={destListId} className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#FF6500]" />
                  <span>Destination / Tour Circuit</span>
                </label>
                <select
                  id={destListId}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500] transition-colors"
                >
                  {DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                      {dest}
                    </option>
                  ))}
                </select>
                {destination === 'Custom Destination' && (
                  <input
                    type="text"
                    value={customDest}
                    onChange={(e) => setCustomDest(e.target.value)}
                    placeholder="Enter custom town, beach, or resort..."
                    className="mt-2 w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                )}
              </div>
            </div>

            {/* Step 2: Trip Type & Vehicle Preference */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Step 2 • Travel Type &amp; Vehicle
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Trip Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Trip Type
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  >
                    <option value="Full Day Sightseeing (Round Trip)">Full Day Sightseeing (Round Trip)</option>
                    <option value="One-Way Direct Drop">One-Way Direct Drop</option>
                    <option value="Airport / Railway Station Pickup">Airport / Railway Station Pickup</option>
                    <option value="Multi-Day Coastal Karnataka Tour">Multi-Day Coastal Karnataka Tour</option>
                  </select>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Preferred Fleet Cab</span>
                  </label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  >
                    {FLEET_VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.capacity})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Selected Vehicle Quick Strip */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={selectedVehicleObj.image}
                    alt={selectedVehicleObj.name}
                    className="w-14 h-10 object-cover rounded-lg border border-slate-200 dark:border-slate-700 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {selectedVehicleObj.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {selectedVehicleObj.category} • {selectedVehicleObj.capacity}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 block">
                    ✓ Clean 100% AC
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Ghat Trained Driver
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3: Date, Time & Group Details */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Step 3 • Date &amp; Passengers
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Travel Date</span>
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Pickup Time</span>
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  >
                    <option value="06:00 AM (Early Sunrise)">06:00 AM (Early Sunrise)</option>
                    <option value="08:30 AM (Morning Tour)">08:30 AM (Morning Tour)</option>
                    <option value="11:00 AM (Mid-Day)">11:00 AM (Mid-Day)</option>
                    <option value="03:00 PM (Afternoon Sunset)">03:00 PM (Afternoon Sunset)</option>
                    <option value="Train / Flight Arrival Time">Train / Flight Arrival Time</option>
                    <option value="Night Cab (24/7 Support)">Night Cab (24/7 Support)</option>
                  </select>
                </div>

                {/* Passenger Count */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Passengers</span>
                  </label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  >
                    <option value="1 - 2 Passengers (Couples / Solo)">1 - 2 Passengers</option>
                    <option value="3 - 4 Passengers (Small Family)">3 - 4 Passengers</option>
                    <option value="5 - 6 Passengers (Family Group)">5 - 6 Passengers</option>
                    <option value="7 - 8 Passengers (Executive)">7 - 8 Passengers</option>
                    <option value="9 - 14 Passengers (Tempo Traveller)">9 - 14 Passengers</option>
                    <option value="15+ Passengers (Large Group)">15+ Passengers</option>
                  </select>
                </div>
              </div>

              {/* Special Note Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Special Notes or Priorities (Optional)
                </label>
                <input
                  type="text"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="e.g. Flight 6E 521 arrival at Goa Mopa, elderly travelers, need rooftop luggage deck..."
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Route Insights & WhatsApp Message Preview (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            {/* Route Insights Snapshot Card */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-4 sm:p-7 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Compass className="w-36 h-36 text-[#FF6500]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6500]">
                    Route Intel &amp; Highlights
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[10px] font-bold">
                    Direct Gokarna Cab
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl bg-[#FF6500]/20 text-[#FF6500] shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white leading-tight">
                      {activeStart.split('(')[0].trim()} ➔ {activeDest.split('(')[0].trim()}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {tripType}
                    </p>
                  </div>
                </div>

                {/* Key Metric Pills */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                      Approx Distance
                    </span>
                    <span className="text-base font-black text-white">
                      {routeInsight.distance}
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                      Drive Time
                    </span>
                    <span className="text-base font-black text-[#FF6500]">
                      {routeInsight.duration}
                    </span>
                  </div>
                </div>

                {/* Route Tip */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Chauffeur Tip:</strong> {routeInsight.highlights}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Proprietor Harish G Verified
                  </span>
                  <span>Zero Hidden Charges</span>
                </div>
              </div>
            </div>

            {/* Customized WhatsApp Message Generator Card */}
            <div className="bg-white dark:bg-[#0B1523] rounded-3xl p-4 sm:p-7 shadow-xl border border-slate-200/90 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Customized Inquiry Message
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#FF6500] dark:text-slate-400 dark:hover:text-[#FF6500] transition-colors cursor-pointer"
                  title="Copy formatted message"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Message Box Styled like WhatsApp bubble */}
              <div className="p-4 rounded-2xl bg-[#EFEAE2] dark:bg-[#111B21] border border-emerald-900/10 dark:border-emerald-500/20 shadow-inner font-mono text-[11.5px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line max-h-56 overflow-y-auto select-all">
                {generateWhatsAppMessage()}
              </div>

              {/* Interactive Primary Buttons */}
              <div className="mt-5 space-y-2.5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSendWhatsApp}
                  type="button"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-black text-sm shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>Get Quotation on WhatsApp</span>
                </motion.button>

                <div className="flex items-center gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`tel:${COMPANY_DETAILS.rawPhone}`}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#FF6500] text-slate-700 dark:text-slate-200 hover:text-[#FF6500] text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Call: +91 {COMPANY_DETAILS.phone}</span>
                  </motion.a>

                  <button
                    onClick={handleCopy}
                    type="button"
                    className="py-2.5 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Copy message to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-3 leading-snug">
                Harish G usually responds within 5 to 10 minutes with exact customized pricing, vehicle availability, and driver details.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
