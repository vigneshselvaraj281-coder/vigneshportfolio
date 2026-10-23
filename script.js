```javascript
// ========================================
// VIGNESH S — PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------
  // 1. MOBILE NAVIGATION
  // ----------------------------------------

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (menuToggle && nav) {
    // Toggle the mobile navigation
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');

      menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );
    });

    // Close the menu after selecting a navigation link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');

        menuToggle.setAttribute(
          'aria-expanded',
          'false'
        );
      });
    });

    // Close the menu when Escape is pressed
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');

        menuToggle.setAttribute(
          'aria-expanded',
          'false'
        );

        menuToggle.focus();
      }
    });
  }


  // ----------------------------------------
  // 2. AUTOMATIC COPYRIGHT YEAR
  // ----------------------------------------

  const yearElement = document.querySelector('#year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ----------------------------------------
  // 3. CONTACT FORM
  // ----------------------------------------

  const contactForm = document.querySelector('#contact-form');
  const formNote = document.querySelector('#form-note');

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      // Keep the visitor on the portfolio page
      event.preventDefault();

      // Read and trim the form values
      const name = contactForm.elements.name.value.trim();
      const email = contactForm.elements.email.value.trim();
      const message = contactForm.elements.message.value.trim();

      // Check that the required fields are filled
      if (!name || !email || !message) {
        if (formNote) {
          formNote.textContent =
            'Please complete all fields before sending.';
        }

        return;
      }

      // Create the email subject and message
      const subject = `Portfolio contact from ${name}`;

      const body =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `${message}`;

      // Encode the subject and body for a mailto link
      const mailtoURL =
        'mailto:vigneshselvaraj281@gmail.com' +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // Tell the visitor what will happen
      if (formNote) {
        formNote.textContent =
          'Your email app should open with your message ready to send.';
      }

      // Open the visitor's default email application
      window.location.href = mailtoURL;
    });
  }

});
```
