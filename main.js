document.addEventListener("DOMContentLoaded", () => {

  // ✅ FIXED (NO SPACES)
  const BUSINESS_WHATSAPP = "2349124990891";
  const BUSINESS_EMAIL = "ennystitches825@gmail.com";

  // =============================
  // MOBILE MENU
  // =============================
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
      });
    });
  }

  // =============================
  // CATALOGUE FILTER + SEARCH
  // =============================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const catalogueCards = document.querySelectorAll(".catalogue-card");
  const catalogueSearch = document.getElementById("catalogueSearch");
  const noResults = document.getElementById("noResults");

  if (filterButtons.length && catalogueCards.length) {

    let currentFilter = "all";

    const updateCatalogue = () => {
      const searchValue = catalogueSearch
        ? catalogueSearch.value.toLowerCase().trim()
        : "";

      let visibleCount = 0;

      catalogueCards.forEach((card) => {
        const category = card.dataset.category.toLowerCase();
        const name = card.dataset.name.toLowerCase();

        const matchesFilter =
          currentFilter === "all" || category === currentFilter;

        const matchesSearch = name.includes(searchValue);

        if (matchesFilter && matchesSearch) {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (noResults) {
        noResults.classList.toggle("hidden", visibleCount !== 0);
      }
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter.toLowerCase();
        updateCatalogue();
      });
    });

    if (catalogueSearch) {
      catalogueSearch.addEventListener("input", updateCatalogue);
    }

    updateCatalogue();
  }

  // =============================
  // BOOKING FORM
  // =============================
  const bookingForm = document.getElementById("bookingForm");
  const bookingActionBox = document.getElementById("bookingActionBox");
  const bookingWhatsappBtn = document.getElementById("bookingWhatsappBtn");
  const bookingEmailBtn = document.getElementById("bookingEmailBtn");

  if (bookingForm && bookingActionBox && bookingWhatsappBtn && bookingEmailBtn) {

    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value.trim();
      const date = document.getElementById("date").value.trim();
      const time = document.getElementById("time").value.trim();
      const message = document.getElementById("message").value.trim();

      const bookingText = `Hello Ennystitches,

I would like to book an appointment.

Full Name: ${fullName}
Phone Number: ${phone}
Email Address: ${email}
Service Needed: ${service}
Preferred Date: ${date}
Preferred Time: ${time}
Style Details: ${message || "None provided"}

Please get back to me with the next step.`;

      const whatsappURL =
        `https://wa.me/${BUSINESS_WHATSAPP}?text=` +
        encodeURIComponent(bookingText);

      const mailtoURL =
        `mailto:${BUSINESS_EMAIL}?subject=` +
        encodeURIComponent(`Booking Request - ${fullName}`) +
        `&body=` +
        encodeURIComponent(bookingText);

      bookingWhatsappBtn.href = whatsappURL;
      bookingEmailBtn.href = mailtoURL;

      bookingActionBox.classList.remove("hidden");
      bookingActionBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  // =============================
  // CONTACT FORM
  // =============================
  const contactForm = document.getElementById("contactForm");
  const contactActionBox = document.getElementById("contactActionBox");
  const contactWhatsappBtn = document.getElementById("contactWhatsappBtn");
  const contactEmailBtn = document.getElementById("contactEmailBtn");

  if (contactForm && contactActionBox && contactWhatsappBtn && contactEmailBtn) {

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim();
      const message = document.getElementById("contactMessageInput").value.trim();

      const contactText = `Hello Ennystitches,

You have a new enquiry.

Full Name: ${name}
Email Address: ${email}
Subject: ${subject}
Message: ${message}`;

      const whatsappURL =
        `https://wa.me/${BUSINESS_WHATSAPP}?text=` +
        encodeURIComponent(contactText);

      const mailtoURL =
        `mailto:${BUSINESS_EMAIL}?subject=` +
        encodeURIComponent(`${subject} - ${name}`) +
        `&body=` +
        encodeURIComponent(contactText);

      contactWhatsappBtn.href = whatsappURL;
      contactEmailBtn.href = mailtoURL;

      contactActionBox.classList.remove("hidden");
      contactActionBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
// =============================
// CATALOGUE WHATSAPP ORDER
// =============================
const catalogueWhatsappLinks = document.querySelectorAll(".catalogue-whatsapp");

if (catalogueWhatsappLinks.length) {
  catalogueWhatsappLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const styleName = link.dataset.style || "an Ennystitches style";

      const message = `Hello Ennystitches,

I am interested in this style: ${styleName}

Please send me the price, fabric options, and booking details.`;

      const whatsappURL =
        `https://wa.me/${BUSINESS_WHATSAPP}?text=` +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });
  });
}

});