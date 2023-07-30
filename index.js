const heroText = document.getElementById('heroText');
let currentIndex = 0;
const texts = [
    "Connect with top software engineers, product managers, data scientists, and more.",
    "Find the perfect talent for your team.",
    "Build innovative products with skilled professionals."
];

function animateHeroText() {
    heroText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(animateHeroText, 3000); // Change the text every 3 seconds

// Add a smooth scroll effect to the navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});