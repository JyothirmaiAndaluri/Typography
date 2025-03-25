document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Remove the heading character animation code and start with subtitle
    gsap.to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
    });

    // Button animation
    gsap.from('.cta-buttons .btn', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Navbar Animation
    gsap.to('.navbar', {
        background: 'rgba(0, 0, 0, 1)',
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Geometric Elements
    const geometric = document.querySelector('.geometric-overlay');
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.cssText = `
            position: absolute;
            width: ${50 + Math.random() * 100}px;
            height: ${50 + Math.random() * 100}px;
        `;
        geometric.appendChild(shape);

        gsap.to(shape, {
            duration: 8 + Math.random() * 4,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotation: Math.random() * 180,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // About Section Animation
    gsap.from('.about-section .section-title, .about-section .lead, .about-section .col-md-4', {
        duration: 1,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%'
        }
    });

    // Parallax Effect
    gsap.to('.parallax-bg', {
        y: '-30%',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Portfolio Section Animation
    gsap.from('.portfolio-item', {
        duration: 1,
        y: 80,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top 80%'
        }
    });

    // Contact Section Animation
    gsap.from('.contact-section .section-title, .contact-section .lead, .contact-section .contact-card', {
        duration: 1,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        }
    });
});