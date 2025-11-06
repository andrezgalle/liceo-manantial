import { gsap } from 'gsap';

export const animateAcademicLevelSectionHome = () => {
    const section = document.querySelector('.sectionAcademicMain');
    const imageAcademicLevel = document.querySelector('.image-academic-level');
    const textAcademicLevel = document.querySelector('.text-academic-level');
    const containerItemsAcademicLevel = document.querySelector('.container-items-academic-level');
    const heroImageAcademicLevel = document.querySelector('.hero-image-academic-level')

    if (section) {
        gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    // primero aparecer el contenedor con un fade in y despues de 1 segundo la img1Records
    if (imageAcademicLevel) {
        gsap.fromTo(imageAcademicLevel, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (textAcademicLevel) {
        gsap.fromTo(textAcademicLevel, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
    }

    // despues de 1.5 segundos la img2Records y hacer que venga desde abajo con algo de rebote
    if (heroImageAcademicLevel) {
        gsap.fromTo(heroImageAcademicLevel, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.5 });
    }

    if (containerItemsAcademicLevel) {
        const articles = containerItemsAcademicLevel.querySelectorAll('.itemAcademicLevel');
        console.log(articles)

        articles.forEach((article, index) => {
            console.log()
            gsap.fromTo(article, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: .2, delay: .5 + index * 0.7 });
        });
    }
}

export const animateAcademicLevelSectionHomeInit = () => {
    const section = document.querySelector('.sectionAcademicMain');
    const imageAcademicLevel = document.querySelector('.image-academic-level');
    const textAcademicLevel = document.querySelector('.text-academic-level');
    const heroImageAcademicLevel = document.querySelector('.hero-image-academic-level')

    // dejar todo en opacidad 0

    if (section) {
        gsap.set(section, { opacity: 0 });
    }

    if (imageAcademicLevel) {
        gsap.set(imageAcademicLevel, { opacity: 0 });
    }

    if (textAcademicLevel) {
        gsap.set(textAcademicLevel, { opacity: 0 });
    }


    if (heroImageAcademicLevel) {
        gsap.set(heroImageAcademicLevel, { opacity: 0 });
    }
}