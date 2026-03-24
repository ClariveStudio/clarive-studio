// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        document.getElementById('nav-menu').classList.remove('active');
        document.getElementById('hamburger').classList.remove('active');
    });
});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

// FAQ accordion toggle
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const open = item.classList.contains('open');

        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            openItem.classList.remove('open');
        });

        if (!open) {
            item.classList.add('open');
        }
    });
});