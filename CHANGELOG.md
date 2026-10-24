# Changelog & Release Notes

All notable changes to the **ATMABALA Travels** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-10-24

### 🚀 Major Highlights
- **100% WhatsApp Quotation Model**: Removed all hardcoded price figures, estimate ranges, and static tariff charts across the entire website. Introduced instant, personalized fare quotation directly through proprietor **Harish G (+91 8073756776)**.
- **Interactive Trip Planner**: Brand-new custom trip planning component with 14 curated starting hubs (Gokarna, Kudle, Kumta, Goa Mopa, Dabolim, Hubli, etc.), 14 destination circuits, 1-click origin/destination swap, vehicle fleet selector, travel date & time selection, passenger count, live route intel (approximate distance & drive time), and 1-click formatted WhatsApp inquiry generator.
- **Dedicated 3-Page Single Page Architecture**: Streamlined entire site navigation into strictly 3 primary views:
  1. **Home / Hero Page** (Hero with trip planner jump, Interactive Trip Planner, Airport Transfers, Fleet showcase, Testimonials carousel, Stats & Parallax).
  2. **Tourist Places Page** (Filterable 15 nearest attractions: Om Beach, Kudle Beach, Mahabaleshwar Temple, Yana Caves, Vibhuti Falls, Murudeshwar, etc. with distance from Gokarna and best visiting times).
  3. **About Us Page** (Proprietor Harish G founder story, core values, Kamat Complex office address, and contact desk).
- **Watermark-Free Local Asset Suite**: Replaced all external third-party image URLs with 28 verified, high-resolution, watermark-free images bundled locally in `/public/images/`.
- **Animated Location Section**: Added high-accuracy interactive headquarters section with radar beacon animations, landmark proximity tags, live 24/7 operating status, and direct navigation link to [Google Maps Location](https://maps.app.goo.gl/D8Nh5CjvQevnhewNA).
- **Footer Social & Contact Enhancements**: Added animated hover & tap micro-interactions for Instagram, Facebook, WhatsApp, and Direct Call.
- **Developer Attribution**: Added official creator & engineering section for **YOGESH NAIK** in the footer.
- **Repository Optimization & Cleanup**: Removed legacy static HTML/CSS/JS templates from `/public/`, cleaned redundant webmanifest files, and created automated GitHub CI workflows.

---

## [1.2.0] - 2026-10-23

### Added
- Complete SEO audit compliance (Schema.org JSON-LD LocalBusiness & TouristTrip structured data, Open Graph social share cards, Twitter cards, non-blocking fonts).
- Dual theme support (Dark/Light mode) with persistent `localStorage` synchronization and zero layout shift.
- RTO Uttara Kannada licensing and passenger safety accreditation documentation modal.

### Fixed
- Menu navigation responsiveness on desktop and mobile viewports.
- Theme toggle positioning consistency across diverse screen sizes and orientations.

---

## [1.1.0] - 2026-10-22

### Added
- Airport transfer focus cards for Goa Mopa (GOX), Goa Dabolim (GOI), and Hubli (HBX).
- Force Urbania 9+1 and Tempo Traveller 12-20 seater luxury coaches added to fleet data.
- E-E-A-T trust signals: proprietor certification, passenger safety policies, and cancellation guidelines.

---

## [1.0.0] - 2026-10-21

### Initial Release
- Initial deployment of ATMABALA Travels web application.
- Fleet catalog: Swift Dzire, Toyota Innova Crysta, Maruti Ertiga, Tempo Traveller.
- Initial Gokarna tourism guide and local travel booking contact desk.
