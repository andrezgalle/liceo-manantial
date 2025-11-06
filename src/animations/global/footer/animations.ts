import { gsap } from 'gsap';

export const animateFooter = () => {
    const footer = document.querySelector('.footer');
    const contactInfoFooter = document.querySelector('.contact-info-footer');
    const footerMain = document.querySelector('.footer-main');
    const copyrightFooter = document.querySelector('.copyright-footer');

    if (footer) {
        gsap.fromTo(footer, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (contactInfoFooter) {
        gsap.fromTo(contactInfoFooter, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
    }

    if (footerMain) {
        gsap.fromTo(footerMain, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
    }

    if (copyrightFooter) {
        gsap.fromTo(copyrightFooter, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.5 });
    }
}

export const animateFooterInit = () => {
    
    const footer = document.querySelector('.footer');
    const contactInfoFooter = document.querySelector('.contact-info-footer');
    const footerMain = document.querySelector('.footer-main');
    const copyrightFooter = document.querySelector('.copyright-footer');

    // dejar todo en opacidad 0

    if (footer) {
        gsap.set(footer, { opacity: 0 });
    }

    if (contactInfoFooter) {
        gsap.set(contactInfoFooter, { opacity: 0 });
    }

    if (footerMain) {
        gsap.set(footerMain, { opacity: 0 });
    }

    if (copyrightFooter) {
        gsap.set(copyrightFooter, { opacity: 0 });
    }
}