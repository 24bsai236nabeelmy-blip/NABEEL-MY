// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handler
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = "Message sent successfully (demo).";
  form.reset();

  // refill default values
  form.elements.name.value = "MY. NABEEL";
  form.elements.email.value = "24bsai236nabeelmy@skacas.ac.in";
  form.elements.phone.value = "1234567890";
});