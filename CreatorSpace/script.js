
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ===== SCROLL REVEAL =====

const revealElements = document.querySelectorAll(
    ".about-section, .categories-section, .featured-section, .brands-section, .contact-section"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====

const pageSections = document.querySelectorAll(
    "#home, #about, #work, #featured, #brands, #contact"
);

const navigationLinks = document.querySelectorAll(".navbar nav a");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navigationLinks.forEach(link => {
                link.classList.remove("active-link");

                if (link.getAttribute("href") === `#${entry.target.id}`) {
                    link.classList.add("active-link");
                }
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

pageSections.forEach(section => {
    sectionObserver.observe(section);
});
