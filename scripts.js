// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // --- SEARCH FUNCTIONALITY for Programs page ---
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const servicesList = document.getElementById('servicesList');
    const services = servicesList.querySelectorAll('.service');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();

      services.forEach(service => {
        const title = service.querySelector('h2').textContent.toLowerCase();
        const description = service.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
          service.style.display = 'block';
        } else {
          service.style.display = 'none';
        }
      });
    });
  }

  // --- GALLERY LIGHTBOX ---
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  if (galleryImages.length > 0) {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(imgClone);
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // --- FORM VALIDATION & AJAX SUBMISSION ---
  // Basic example for enquiry and contact forms
  const enquiryForm = document.querySelector('.enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', e => {
      e.preventDefault();

      // Simple validation example
      const name = enquiryForm.name.value.trim();
      const email = enquiryForm.email.value.trim();
      const message = enquiryForm.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Here you could add AJAX submission (fetch or XMLHttpRequest)
      alert('Thank you for your enquiry. We will get back to you soon!');
      enquiryForm.reset();
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      alert('Thank you for contacting us. We will get back to you soon!');
      contactForm.reset();
    });
  }

  // --- ACCORDION FUNCTIONALITY (optional for future) ---
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      acc.classList.toggle('active');
      const panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // --- LEAFLET MAP INIT (Contact page) ---
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    const map = L.map('map').setView([-25.7479, 28.2293], 13); // Pretoria coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-25.7479, 28.2293]).addTo(map)
      .bindPopup('Rams Academy Head Office')
      .openPopup();
  }
});