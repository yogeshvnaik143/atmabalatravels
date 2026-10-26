/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AirportTransfersSection from './components/AirportTransfersSection';
import FleetSection from './components/FleetSection';
import GokarnaPosterSection from './components/GokarnaPosterSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import StatsAndParallax from './components/StatsAndParallax';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import TripPlanner from './components/TripPlanner';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import ThemePaletteModal from './components/ThemePaletteModal';
import FloatingPaletteButton from './components/FloatingPaletteButton';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  // Strictly 3 Pages: 'home' | 'places' | 'about'
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] dark:bg-[#070D18] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-[#FF6500] selection:text-white transition-colors duration-300">
      {/* Sleek 1.8s Fullscreen Welcome / Loading Screen Overlay with Smooth Scale-Down Exit */}
      <WelcomeScreen minDuration={1800} />

      {/* 8-Theme Palette Studio Modal */}
      <ThemePaletteModal />

      {/* Floating Theme Switcher Quick Pill (Bottom Left) */}
      <FloatingPaletteButton />

      {/* Skip to Main Content Link for Accessibility (WCAG 2.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#FF6500] focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-bold focus:outline-hidden"
      >
        Skip to main content
      </a>

      {/* Fixed Navigation Header (Direct 3-Tab Bar + Rock-Solid Theme Toggle) */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Main Content Area: Strictly 3 Pages */}
      <main id="main-content" className="flex-1">
        
        {/* PAGE 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div>
            <Hero
              onNavigateTab={handleTabChange}
            />
            {/* Interactive Trip Planner Component */}
            <TripPlanner />
            <AirportTransfersSection />
            <FleetSection />
            <TestimonialsCarousel />
            <StatsAndParallax onOpenBooking={() => {}} />
          </div>
        )}

        {/* PAGE 2: TOURIST PLACES (17 Must-Visit Places, Photos, Details & WhatsApp Fare Inquiry) */}
        {activeTab === 'places' && (
          <div className="pt-20">
            <GokarnaPosterSection />
          </div>
        )}

        {/* PAGE 3: ABOUT US (Harish G Story, Values, Kamat Complex Office & Contact) */}
        {activeTab === 'about' && (
          <div className="pt-20">
            <AboutSection />
          </div>
        )}

        {/* Animated Office Location Section in Bottom (Google Maps https://maps.app.goo.gl/D8Nh5CjvQevnhewNA) */}
        <LocationSection />

      </main>

      {/* Floating Instant Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.a
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20get%20a%20cab%20fare%20quote%20with%20Atmabala%20Travels."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center shadow-2xl hover:bg-[#1EBE5D] transition-colors"
          title="Chat with Harish G on WhatsApp"
          aria-label="Chat with Harish G on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          href="tel:8073756776"
          className="w-14 h-14 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-2xl hover:bg-[#E55A00] transition-colors"
          title="Call Harish.G (8073756776)"
          aria-label="Call Harish G at 8073756776"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Site Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
