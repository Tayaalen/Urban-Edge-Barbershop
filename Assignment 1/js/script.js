// ========== NAVBAR TOGGLE FOR MOBILE ==========
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Close menu when clicking outside (optional)
document.addEventListener('click', function (event) {
  const navLinks = document.getElementById('navLinks');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('show');
  }
});

// ========== CONTACT FORM VALIDATION & SUCCESS MESSAGE ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
      formMessage.style.color = '#ff6b6b';
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simulate sending success
    formMessage.style.color = '#8aff8a';
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';

    // Clear form
    contactForm.reset();

    // Remove message after a few seconds
    setTimeout(() => {
      formMessage.textContent = '';
    }, 4000);
  });
}
// ========== SEND FORM TO WHATSAPP ==========
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
  whatsappForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent normal form submission

    // Collect input values
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || subject === '' || message === '') {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Replace with your WhatsApp number (no +, no spaces)
    const phoneNumber = '60167626078';

    // Encode message to make it URL-safe
    const whatsappMessage = `Hi Urban Edge! My name is ${name}. Subject: ${subject}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp chat
    window.open(whatsappURL, '_blank');

    // Reset form
    whatsappForm.reset();
  });
}
