// Grab DOM elements with null checks
const header = document.getElementById('main-header');
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// --- 1. Scroll Event (Logo Slide Left) ---
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- 2. Mobile Hamburger Menu Toggle ---
if (menuBtn && navMenu) {
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !navMenu.classList.contains('active');
    if (shouldOpen) {
      menuBtn.classList.add('active');
      navMenu.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      menuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  backdrop.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });
}

// --- 3. Intersection Observer for Scroll Animations ---
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reveal Cards / Items
      if (entry.target.classList.contains('reveal') || entry.target.classList.contains('poster-item')) {
        entry.target.classList.add('active');
      }
      
      // Trigger SVG Map Drawing
      if (entry.target.id === 'packages') {
        entry.target.classList.add('active');
      }

      // Trigger Number Counters
      if (entry.target.id === 'stats' && !entry.target.classList.contains('counted')) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const speed = 60;
          const inc = Math.max(1, Math.floor(target / speed));

          const updateCount = () => {
            count += inc;
            if (count < target) {
              counter.innerText = count.toLocaleString();
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target.toLocaleString() + "+";
            }
          };
          updateCount();
        });
        entry.target.classList.add('counted');
      }
    }
  });
}, observerOptions);

// Safely attach observer
document.querySelectorAll('.reveal, .poster-item').forEach(el => observer.observe(el));
const packagesSection = document.getElementById('packages');
if (packagesSection) observer.observe(packagesSection);
const statsSection = document.getElementById('stats');
if (statsSection) observer.observe(statsSection);

// --- 4. Booking Modal Logic ---
const bookingModal = document.getElementById('booking-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const bookButtons = document.querySelectorAll('.open-booking-modal, button.book-btn, a[href="#book"]');
const bookingForm = document.getElementById('quick-booking-form');

function openBookingModal(prefillVehicle = '') {
  if (bookingModal) {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (prefillVehicle) {
      const vehicleSelect = document.getElementById('modal-vehicle');
      if (vehicleSelect) vehicleSelect.value = prefillVehicle;
    }
  }
}

function closeBookingModal() {
  if (bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

bookButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // If it's a direct phone or external link, allow natural behavior
    const href = btn.getAttribute('href') || '';
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      if (!btn.classList.contains('open-booking-modal')) {
        return;
      }
    }
    e.preventDefault();
    const vehicle = btn.getAttribute('data-vehicle') || '';
    openBookingModal(vehicle);
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeBookingModal);
}

if (bookingModal) {
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
    if (menuBtn && navMenu) {
      menuBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
});

// Quick Booking Form Submission to WhatsApp
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('modal-name')?.value || 'Guest';
    const phone = document.getElementById('modal-phone')?.value || '';
    const vehicle = document.getElementById('modal-vehicle')?.value || 'Cab';
    const pickup = document.getElementById('modal-pickup')?.value || 'Gokarna';
    const destination = document.getElementById('modal-destination')?.value || 'Sightseeing';
    const date = document.getElementById('modal-date')?.value || '';

    const text = `Hi Harish G (Atmabala Travels),%0A%0AI would like to book a cab:%0A• *Name:* ${encodeURIComponent(name)}%0A• *Phone:* ${encodeURIComponent(phone)}%0A• *Vehicle:* ${encodeURIComponent(vehicle)}%0A• *Pickup:* ${encodeURIComponent(pickup)}%0A• *Destination:* ${encodeURIComponent(destination)}%0A• *Date:* ${encodeURIComponent(date)}%0A%0APlease confirm availability and tariff.`;
    
    closeBookingModal();
    window.open(`https://wa.me/918073756776?text=${text}`, '_blank');
  });
}