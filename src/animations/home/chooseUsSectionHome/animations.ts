import { gsap } from 'gsap';

export const animateChooseUsSectionHome = () => {
    const sectionChooseUs = document.querySelector('.section-choose-us');
    const titleChooseUs = document.querySelector('.title-choose-us');
    const flexContainerColumnChooseUs = document.querySelector('.flex-container-column-choose-us');
    const flexContainerColumnChooseUs2 = document.querySelector('.flex-container-column-choose-us-2');
    const imageWomenChooseUs = document.querySelector('.image-women-choose-us');

    if (sectionChooseUs) {
        gsap.fromTo(sectionChooseUs, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (titleChooseUs) {
        gsap.fromTo(titleChooseUs, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    }

    if (flexContainerColumnChooseUs) {
        gsap.fromTo(flexContainerColumnChooseUs, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
    }

    if (flexContainerColumnChooseUs2) {
        gsap.fromTo(flexContainerColumnChooseUs2, { x: 500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
    }

    if (imageWomenChooseUs) {
        gsap.fromTo(imageWomenChooseUs, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.5 });
    }

}

export const animateChooseUsSectionHomeInit = () => {
    const sectionChooseUs = document.querySelector('.section-choose-us');
    const titleChooseUs = document.querySelector('.title-choose-us');
    const flexContainerColumnChooseUs = document.querySelector('.flex-container-column-choose-us');
    const flexContainerColumnChooseUs2 = document.querySelector('.flex-container-column-choose-us-2');
    const imageWomenChooseUs = document.querySelector('.image-women-choose-us');

    // dejar todo en opacidad 0

    if (sectionChooseUs) {
        gsap.set(sectionChooseUs, { opacity: 0 });
    }

    if (titleChooseUs) {
        gsap.set(titleChooseUs, { opacity: 0 });
    }

    if (flexContainerColumnChooseUs) {
        gsap.set(flexContainerColumnChooseUs, { opacity: 0 });
    }

    if (flexContainerColumnChooseUs2) {
        gsap.set(flexContainerColumnChooseUs2, { opacity: 0 });
    }

    if (imageWomenChooseUs) {
        gsap.set(imageWomenChooseUs, { opacity: 0 });
    }
}