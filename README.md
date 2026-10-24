# 🚗 ATMABALA Travels — Official Web Application

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg?style=for-the-badge)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-Apache--2.0-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **"Your Journey, Our Drive."**  
> Premium car rentals, 24/7 airport transfers, and bespoke coastal sightseeing packages across Gokarna, Kumta, Murudeshwar, Karwar, and Western Ghats.

---

## 📖 About ATMABALA Travels

**ATMABALA Travels** is a government-registered private taxi and coastal tour service based in **Gokarna, Uttara Kannada, Karnataka**. Operating under proprietor **Harish G**, the agency provides door-to-door cab pickups, synchronized airport and railway transfers, and custom pilgrimage and beach exploration itineraries.

### 🌟 Core Principles
- **100% Transparent Quotation Model**: All bookings and quotations are handled directly through WhatsApp and phone calls with zero hidden surcharges, sudden driver bhatta demands, or peak-surge price spikes.
- **Experienced Ghat Chauffeurs**: Seasoned local drivers trained on steep coastal switchbacks, narrow rainforest roads (Yana & Vibhuti), and interstate highway routes (NH-66).
- **Showroom-Condition Fleet**: Modern, sanitized, 100% air-conditioned sedans, MUVs, luxury SUVs, and executive coaches.
- **24/7 Ground Support**: Instant dispatch across Gokarna town, beachfront shacks, luxury resorts, and railway stations.

---

## 🎯 Key Application Features

| Feature | Description |
| :--- | :--- |
| **🧭 Interactive Trip Planner** | Select origin and destination from 14+ curated transit hubs with 1-click swap, vehicle matcher, travel time estimate, and formatted WhatsApp message generator. |
| **🏖️ 17 Tourist Destinations Guide** | Comprehensive guide covering Om Beach, Kudle Beach, Mahabaleshwar Atmalinga Temple, Yana Caves, Vibhuti Falls, Murudeshwar, Mirjan Fort, Jog Falls, Honnavar Mangroves, and more. |
| **✈️ Airport & Transit Transfers** | Flight-synchronized pickups for Goa Mopa (GOX), Goa Dabolim (GOI), Hubli (HBX), Kumta Railway Station (KT), and Gokarna Road (GOK). |
| **🚗 Dedicated Fleet Showcase** | Interactive specifications for Swift Dzire (Sedan), Maruti Ertiga (Hybrid MUV), Toyota Innova Crysta (Luxury SUV), Force Urbania (9+1 Van), and Tempo Traveller (12-20 seater). |
| **🌓 Rock-Solid Dual Theme** | Seamless Light/Dark mode with system preference auto-detection, local storage persistence, and zero layout shift. |
| **📍 Animated Radar Headquarters** | Live status beacon, nearby landmark distances, and direct directions link to [Google Maps Location](https://maps.app.goo.gl/D8Nh5CjvQevnhewNA). |
| **💬 Direct WhatsApp Quotation** | Instant pre-filled inquiry builder linking directly to proprietor Harish G on WhatsApp. |
| **📱 PWA & Mobile-First** | Fully responsive, installable web application with offline asset caching and non-blocking performance. |

---

## 🗂️ Clean Repository Architecture

```text
atmabala-travels/
├── .github/
│   └── workflows/
│       └── ci.yml              # Automated GitHub Actions CI workflow (lint & build)
├── public/                     # Static Web Assets (served directly by Vite)
│   ├── images/                 # 28 semantic, watermark-free local images
│   │   ├── innova-crysta.jpg
│   │   ├── swift-dzire.jpg
│   │   ├── maruti-ertiga.jpg
│   │   ├── urbania-van.jpg
│   │   ├── tempo-traveller.jpg
│   │   ├── mahabaleshwar-temple.jpg
│   │   ├── gokarna-beach.jpg
│   │   ├── kudle-beach.jpg
│   │   ├── yana-caves.jpg
│   │   ├── vibhuti-falls.jpg
│   │   ├── murudeshwar-temple.jpg
│   │   └── ... (full local photo suite)
│   ├── assets/aistudio/        # Archived studio audit references
│   ├── _headers                # Production security & cache headers
│   ├── _redirects              # SPA routing rewrite rule
│   ├── manifest.json           # Web App Manifest
│   ├── site.webmanifest        # Cross-browser PWA manifest
│   ├── robots.txt              # Search engine crawler guidelines
│   └── sitemap.xml             # Complete XML sitemap
│
├── src/                        # React 19 + TypeScript Source Code
│   ├── components/             # Modular, accessible UI components
│   │   ├── Header.tsx          # Sticky navigation with 3-tab routing & theme toggle
│   │   ├── Hero.tsx            # Hero banner, quick WhatsApp quote & trip planner shortcut
│   │   ├── TripPlanner.tsx     # Interactive origin-destination route & quotation builder
│   │   ├── AirportTransfersSection.tsx # Dedicated Goa/Hubli airport transfer cards
│   │   ├── FleetSection.tsx    # Vehicle specifications, capacity & comfort details
│   │   ├── GokarnaPosterSection.tsx # Filterable 15-destination visual guide
│   │   ├── TestimonialsCarousel.tsx # Verified traveler feedback & customer reviews
│   │   ├── StatsAndParallax.tsx# Animated counters & scenic parallax banner
│   │   ├── AboutSection.tsx    # Harish G founder story & operating values
│   │   ├── LocationSection.tsx # Animated GPS radar beacon & Google Maps integration
│   │   ├── ThemeToggle.tsx     # High-contrast accessible theme switcher
│   │   └── Footer.tsx          # Social buttons, developer credit & legal compliance
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme provider with system preference detection
│   ├── types.ts                # Strict TypeScript interfaces & definitions
│   ├── data.ts                 # Fleet catalog, destinations & company details
│   ├── App.tsx                 # Main application view controller
│   ├── main.tsx                # React DOM root entry point
│   └── index.css               # Tailwind CSS v4 styling entry point
│
├── .gitattributes              # Cross-platform line-ending normalization
├── .gitignore                  # Comprehensive production ignore patterns
├── CHANGELOG.md                # Release history & version changelog
├── LICENSE                     # Apache 2.0 Open Source License
├── package.json                # Dependencies, scripts & repository metadata
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundler configuration
├── netlify.toml                # Netlify deployment configuration
├── vercel.json                 # Vercel deployment configuration
└── README.md                   # Complete repository documentation
```

---

## 📦 Package & Dependencies

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **`react`** | `^19.0.1` | Modern component architecture & hooks |
| **`react-dom`** | `^19.0.1` | React DOM renderer |
| **`vite`** | `^6.2.3` | Next-generation frontend build tool |
| **`typescript`** | `~5.8.2` | Static type checking and interface contracts |
| **`tailwindcss`** | `^4.1.14` | Utility-first CSS styling engine |
| **`motion`** | `^12.23.24` | Fluid animations, gestures & transitions |
| **`lucide-react`** | `^0.546.0` | Accessible, lightweight icon system |

---

## 🛠️ Scripts & Development Commands

```bash
# Install all dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev

# Run TypeScript type verification
npm run lint

# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview

# Clean build artifacts
npm run clean
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yogeshvnaik93/atmabala-travels.git
cd atmabala-travels
```

### 2. Install dependencies
```bash
npm install
```

### 3. Launch development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🌐 Deployment

The application is pre-configured for automated one-click deployment to multiple cloud hosting providers:

- **Netlify**: Pre-configured via `netlify.toml` with SPA redirects and security headers.
- **Vercel**: Pre-configured via `vercel.json` with static build outputs and edge routing.
- **Google Cloud Run / Docker**: Configured with standard static web server or Vite preview.

---

## 🏷️ Releases & Versioning

This project strictly adheres to [Semantic Versioning](https://semver.org/).  
For complete release history, see [CHANGELOG.md](CHANGELOG.md).

- **Current Version**: `2.0.0` (Major Release)
- **Key Updates**: Interactive Trip Planner, 100% WhatsApp quote system, 3-page layout, local watermark-free images, animated location radar, and creator attribution.

---

## 👨‍💻 Creator & Engineering Credits

- **Website Designer & Developer:** **YOGESH NAIK**  
  - Email: [yogeshvnaik93@gmail.com](mailto:yogeshvnaik93@gmail.com)  
  - GitHub: [@yogeshvnaik93](https://github.com/yogeshvnaik93)

---

## 📞 Business Contact

- **Proprietor:** **Harish. G**
- **24/7 Dispatch Phone:** `+91 8073756776`
- **WhatsApp:** [wa.me/918073756776](https://wa.me/918073756776)
- **Official Office Address:**  
  Kamat Complex, Ganjigadde, Gokarna, Uttara Kannada, Karnataka - 581326  
  📍 [View on Google Maps](https://maps.app.goo.gl/D8Nh5CjvQevnhewNA)

---

## 📄 License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for details.
