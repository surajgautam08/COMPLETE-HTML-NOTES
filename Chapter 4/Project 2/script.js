// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ==============================
// FAQ ACCORDION
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100 && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.getAttribute("data-target"));

            let current = 0;

            const duration = 1800;
            const increment = target / (duration / 16);


            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.floor(current).toLocaleString();

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target.toLocaleString();

                }

            };

            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

startCounters();


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent = new Date().getFullYear();


// ==============================
// HERO BUTTON EFFECT
// ==============================

const primaryButtons = document.querySelectorAll(".primary-btn");

primaryButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        // Simple click animation
        this.style.transform = "scale(0.96)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});


// ==============================
// PARALLAX EFFECT ON HERO
// ==============================

const heroVisual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (event) => {

    // Only apply on larger screens
    if (window.innerWidth < 900) return;

    const x = (window.innerWidth / 2 - event.clientX) / 60;
    const y = (window.innerHeight / 2 - event.clientY) / 60;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


// Reset position when mouse leaves page

document.addEventListener("mouseleave", () => {

    heroVisual.style.transform = "translate(0, 0)";

});