import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateMainSectionTestimonials = () => {
    const section = document.querySelector(".section-testimonials");
    const title = document.querySelector(".title-testimonials");
    const description = document.querySelector(".description-testimonials");
    const carousel = document.querySelector(".carousel-container-testimonials");

    // elementos del header
    const header = document.querySelector('.header');
    const logo = header?.querySelector('.logo');
    const navBar = header?.querySelector('.navBar');
    const buttonHeader = header?.querySelector('.button-header');
    const containerLanguages = header?.querySelector('.container-languages');
    const menuHamburger = header?.querySelector('.menu-hamburguesa');

    // Aseguramos prioridades de stacking visual

    // --- Animaciones del HEADER ---
    if (logo) {
        gsap.fromTo(logo, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }

    if (navBar) {
        const links = navBar.querySelectorAll('a');
        links.forEach((link, index) => {
            gsap.fromTo(link, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2 + index * 0.1 });
        });
    }

    if (buttonHeader) {
        gsap.fromTo(buttonHeader, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.6 });
    }

    if (containerLanguages) {
        const flags = containerLanguages.querySelectorAll('img');
        flags.forEach((img, index) => {
            gsap.fromTo(img, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.8 + index * 0.2 });
        });
    }

    if (menuHamburger) {
        gsap.fromTo(menuHamburger, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1 });
    }

    // --- Animaciones de la SECCIÓN ---
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
        },
    });

    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });

    tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(description, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.7");
    tl.fromTo(carousel, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.5");
};
