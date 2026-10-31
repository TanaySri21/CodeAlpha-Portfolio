
// ==========================================
// KAYASTH MOTORS - JAVASCRIPT
// ==========================================

// IMAGE SLIDER
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dotsContainer = document.getElementById("sliderDots");
const slideCounter = document.getElementById("slideCounter");
const heroContainer = document.querySelector(".hero-image-container");

let currentSlide = 0;
let autoSlide = null;
const slideInterval = 5000;

if (slides.length > 0 && dotsContainer) {
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.classList.add("slider-dot");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

        dot.addEventListener("click", () => {
            goToSlide(index);
            restartAutoSlide();
        });

        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll(".slider-dot");

function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    if (slideCounter) {
        const current = String(index + 1).padStart(2, "0");
        const total = String(slides.length).padStart(2, "0");
        slideCounter.textContent = `${current} / ${total}`;
    }
}

function goToSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoSlide() {
    if (slides.length <= 1 || autoSlide !== null) return;
    autoSlide = setInterval(nextSlide, slideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

if (slides.length > 0) {
    showSlide(currentSlide);
    startAutoSlide();
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        nextSlide();
        restartAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        prevSlide();
        restartAutoSlide();
    });
}

if (heroContainer) {
    heroContainer.addEventListener("mouseenter", stopAutoSlide);
    heroContainer.addEventListener("mouseleave", startAutoSlide);
    heroContainer.addEventListener("focusin", stopAutoSlide);
    heroContainer.addEventListener("focusout", startAutoSlide);
}

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// SUCCESS POPUP
const successStyle = document.createElement("style");

successStyle.textContent = `
.success-modal {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: rgba(0,0,0,0.78);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
}

.success-modal.show {
    opacity: 1;
    visibility: visible;
}

.success-box {
    width: 100%;
    max-width: 420px;
    padding: 40px 30px;
    border-radius: 22px;
    background: #fff;
    text-align: center;
    transform: translateY(20px);
    transition: 0.3s ease;
}

.success-modal.show .success-box {
    transform: translateY(0);
}

.success-icon {
    width: 75px;
    height: 75px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff4d2;
    color: #c58a18;
    font-size: 2.5rem;
    font-weight: bold;
}

.success-box h2 {
    color: #181c24;
    font-size: 1.7rem;
    margin-bottom: 12px;
}

.success-box p {
    color: #666;
    line-height: 1.7;
    font-size: 0.9rem;
    margin-bottom: 12px;
}

.success-note {
    font-size: 0.75rem !important;
    color: #999 !important;
    margin-top: 12px;
}

.success-close {
    margin-top: 15px;
    padding: 13px 30px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(90deg, #ffb347, #ffe066);
    color: #181c24;
    font-weight: 800;
    cursor: pointer;
}
`;

document.head.appendChild(successStyle);

const successModal = document.createElement("div");
successModal.className = "success-modal";
successModal.innerHTML = `
    <div class="success-box">
        <div class="success-icon">✓</div>
        <h2 id="successTitle">Service Booked!</h2>
        <p id="successMessage">
            Your service request has been successfully submitted.
        </p>
        <button class="success-close" id="successClose">Continue</button>
    </div>
`;

document.body.appendChild(successModal);

function showSuccess(title, message) {
    document.getElementById("successTitle").textContent = title;
    document.getElementById("successMessage").textContent = message;

    successModal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeSuccess() {
    successModal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

document.getElementById("successClose").addEventListener("click", closeSuccess);

successModal.addEventListener("click", event => {
    if (event.target === successModal) closeSuccess();
});

// BOOKING MODAL
const bookingModal = document.getElementById("bookingModal");
const closeModalBtn = document.getElementById("closeModal");
const bookingForm = document.getElementById("bookingForm");
const bookingService = document.getElementById("bookingService");

const originalBookingContent = bookingModal
    ? bookingModal.querySelector(".modal-content").innerHTML
    : "";

function openBooking(service = "") {
    if (!bookingModal) return;

    const modalContent = bookingModal.querySelector(".modal-content");

    if (modalContent && !modalContent.querySelector("#bookingForm")) {
        modalContent.innerHTML = originalBookingContent;
        attachBookingForm();
    }

    bookingModal.classList.add("show");
    bookingModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const serviceSelect = document.getElementById("bookingService");

    if (serviceSelect && service) {
        serviceSelect.value = service;
    }
}

function closeBooking() {
    if (!bookingModal) return;

    bookingModal.classList.remove("show");
    bookingModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeBooking);
}

if (bookingModal) {
    bookingModal.addEventListener("click", event => {
        if (event.target === bookingModal) closeBooking();
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeBooking();
        closeSuccess();
    }
});

// SERVICE BUTTONS
document.querySelectorAll(".service-btn").forEach(button => {
    button.addEventListener("click", () => {
        openBooking(button.dataset.service || "");
    });
});

// BOOKING FORM
function attachBookingForm() {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    const dateInput = document.getElementById("bookingDate");

    if (dateInput) {
        const today = new Date();
        const localToday = [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");

        dateInput.min = localToday;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        closeBooking();
        form.reset();

        showSuccess(
            "Service Booked!",
            "Thank you! Your service request has been successfully submitted. We appreciate your interest in Kayasth Motors."
        );
    });
}

attachBookingForm();

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        contactForm.reset();

        showSuccess(
            "Message Submitted!",
            "Thank you for contacting Kayasth Motors. Your enquiry has been submitted successfully."
        );
    });
}

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// END OF KAYASTH MOTORS JAVASCRIPT
