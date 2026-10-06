/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AirportTransfersSection from './components/AirportTransfersSection';
import FareCalculator from './components/FareCalculator';
import PackagesSection from './components/PackagesSection';
import CompetitorComparisonSection from './components/CompetitorComparisonSection';
import FleetSection from './components/FleetSection';
import GokarnaPosterSection from './components/GokarnaPosterSection';
import StayAndPilgrimageGuide from './components/StayAndPilgrimageGuide';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import StatsAndParallax from './components/StatsAndParallax';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { FleetVehicle, TravelPackage } from './types';
import { FLEET_VEHICLES } from './data';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const handleOpenBooking = () => {
    setSelectedVehicle(null);
    setSelectedPackage(null);
    setIsBookingOpen(true);
  };

  const handleBookVehicle = (vehicle: FleetVehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedPackage(null);
    setIsBookingOpen(true);
  };

  const handleSelectPackage = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setSelectedVehicle(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-slate-900 flex flex-col selection:bg-[#FF6500] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <Hero
              onOpenBooking={handleOpenBooking}
              onSelectVehicleForBooking={(vId) => {
                const v = FLEET_VEHICLES.find((item) => item.id === vId);
                if (v) setSelectedVehicle(v);
              }}
              onViewPackages={() => {
                setActiveTab('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <FareCalculator />
            <AirportTransfersSection />
            <PackagesSection
              onSelectPackage={handleSelectPackage}
              onViewPosterPlaces={() => {
                setActiveTab('poster');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <CompetitorComparisonSection />
            <FleetSection onBookVehicle={handleBookVehicle} />
            <TestimonialsCarousel onOpenBooking={handleOpenBooking} />
            <StayAndPilgrimageGuide />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
            <AboutSection />
            <ContactSection />
          </div>
        )}

        {activeTab === 'transfers' && (
          <div className="pt-20">
            <AirportTransfersSection />
            <FareCalculator />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="pt-20">
            <FareCalculator />
            <AirportTransfersSection />
            <CompetitorComparisonSection />
          </div>
        )}

        {activeTab === 'fleet' && (
          <div className="pt-20">
            <FleetSection onBookVehicle={handleBookVehicle} />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="pt-20">
            <PackagesSection
              onSelectPackage={handleSelectPackage}
              onViewPosterPlaces={() => {
                setActiveTab('poster');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'poster' && (
          <div className="pt-20">
            <GokarnaPosterSection />
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="pt-20">
            <StayAndPilgrimageGuide />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="pt-20">
            <TestimonialsCarousel onOpenBooking={handleOpenBooking} />
            <CompetitorComparisonSection />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-20">
            <AboutSection />
            <CompetitorComparisonSection />
            <StatsAndParallax onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-20">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Floating Quick Action Contacts for Instant Access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.a
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20a%20cab%20with%20Atmabala%20Travels"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#1EBE5D] transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          href="tel:8073756776"
          className="w-14 h-14 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-2xl hover:bg-[#E55A00] transition-colors"
          title="Call Harish.G (8073756776)"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVehicle={selectedVehicle}
        initialPackage={selectedPackage}
      />

      {/* Site Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
