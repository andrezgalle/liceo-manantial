import { gsap } from 'gsap';

export const animateCarouselSectionHome = () => {
    const container = document.querySelector('.container-carousel-home');
    const title = document.querySelector('.title-carousel-home');
    const subtitle = document.querySelector('.subtitle-carousel-home');
    const flechas = document.querySelector('.flechas-carousel-home');
    const track = document.querySelector('.carousel-track-home');

    if (container) {
        gsap.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (title) {
        gsap.fromTo(title, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    }

    if (subtitle) {
        gsap.fromTo(subtitle, { x: 500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    }

    if (flechas) {
        gsap.fromTo(flechas, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
    }

    if (track) {
        // quitar el opacity de track 
        gsap.set(track, { opacity: 1 });
        // iterar todas las secciones y animarlas
        const sections = track.querySelectorAll('div');
        sections.forEach((section, index) => {
            gsap.fromTo(section, { x: 500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: index * 0.5 });
        });
    }
}

export const animateCarouselSectionHomeInit = () => {
    const container = document.querySelector('.container-carousel-home');
    const title = document.querySelector('.title-carousel-home');
    const subtitle = document.querySelector('.subtitle-carousel-home');
    const flechas = document.querySelector('.flechas-carousel-home');
    const track = document.querySelector('.carousel-track-home');

    // dejar todo en opacidad 0

    if (container) {
        gsap.set(container, { opacity: 0 });
    }

    if (title) {
        gsap.set(title, { opacity: 0 });
    }

    if (subtitle) {
        gsap.set(subtitle, { opacity: 0 });
    }

    if (flechas) {
        gsap.set(flechas, { opacity: 0 });
    }

    if (track) {
        gsap.set(track, { opacity: 0 });
    }
}