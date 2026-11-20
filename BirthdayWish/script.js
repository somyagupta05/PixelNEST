
// const surpriseBtn = document.getElementById("surpriseBtn");

// surpriseBtn.addEventListener("click", function () {
//     alert("Your special surprise is coming soon! 💗");
// });


// ===== WELCOME BUTTON =====

const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letter");

surpriseBtn.addEventListener("click", function () {
    letterSection.scrollIntoView({
        behavior: "smooth"
    });
});

// ===== ENVELOPE INTERACTION =====

const envelopeContainer = document.getElementById("envelopeContainer");
const openLetterBtn = document.getElementById("openLetterBtn");

openLetterBtn.addEventListener("click", function () {

    envelopeContainer.classList.toggle("opened");

    if (envelopeContainer.classList.contains("opened")) {
        openLetterBtn.textContent = "Close Your Letter ♡";
    } else {
        openLetterBtn.textContent = "Open Your Letter ♡";
    }

});

// ===== BIRTHDAY WISHES =====

const wishButton = document.getElementById("wishButton");
const hiddenWish = document.getElementById("hiddenWish");

wishButton.addEventListener("click", function () {
    hiddenWish.classList.toggle("show");

    if (hiddenWish.classList.contains("show")) {
        wishButton.textContent = "Hide Your Wish ♡";
    } else {
        wishButton.textContent = "Open Your Birthday Wish ♡";
    }
});

// ===== CONFETTI CELEBRATION =====

const celebrateButton = document.getElementById("celebrateButton");

celebrateButton.addEventListener("click", function () {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti-piece");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            ["#f4a6b8", "#d98ca3", "#f7d6a3", "#c9a7d8", "#ffffff"][
                Math.floor(Math.random() * 5)
            ];

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
});

// ===== LETTER OPENING SPARKLE EFFECT =====

openLetterBtn.addEventListener("click", function () {

    if (!envelopeContainer.classList.contains("opened")) {
        return;
    }

    const rect = envelopeContainer.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 24; i++) {
        const sparkle = document.createElement("span");

        sparkle.classList.add("letter-sparkle");

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 130;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.left = centerX + "px";
        sparkle.style.top = centerY + "px";

        sparkle.style.setProperty("--sparkle-x", x + "px");
        sparkle.style.setProperty("--sparkle-y", y + "px");

        sparkle.textContent = ["✦", "✧", "♡", "⋆"][
            Math.floor(Math.random() * 4)
        ];

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1200);
    }
});
