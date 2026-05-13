document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    function setActiveNav() {
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();

    const fadeElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .publication-card, .contact-card');
    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => observer.observe(el));
});
