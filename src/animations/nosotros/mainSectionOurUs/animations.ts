import { gsap } from "gsap";

export const animateOurUsSection = () => {
    const sectionOurUs = document.querySelector('.sectionOurUs');
    const containerOurUs = document.querySelector('.container-ourus');
    const imagesOurUs = document.querySelectorAll('.image-ourus');

    // elementos del header
    const header = document.querySelector('.header');
    const logo = header?.querySelector('.logo');
    const navBar = header?.querySelector('.navBar');
    const buttonHeader = header?.querySelector('.button-header');
    const containerLanguages = header?.querySelector('.container-languages');
    const menuHamburger = header?.querySelector('.menu-hamburguesa');

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

    // --- Animaciones de la SECCIÓN OUR US ---
    if (sectionOurUs) {
        gsap.fromTo(sectionOurUs, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (containerOurUs) {
        gsap.fromTo(containerOurUs, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
    }

    if (imagesOurUs.length > 0 && window.innerWidth >= 1024) {
        imagesOurUs.forEach((img, index) => {
            gsap.fromTo(
                img,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, delay: 1 + index * 0.4 }
            );
        });
    }
};
