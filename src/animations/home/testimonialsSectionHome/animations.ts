import { gsap } from 'gsap';

export const animateTestimonialsSectionHome = () => {
    const sectionTestimonials = document.querySelector('.section-testimonials');
    const titleTestimonials = document.querySelector('.title-testimonials');
    const imgTestimonials = document.querySelector('.img-testimonials');
    const testimonialsContainerItems = document.querySelector('.testimonials-container-items');


    if (sectionTestimonials) {
        gsap.fromTo(sectionTestimonials, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (titleTestimonials) {
        gsap.fromTo(titleTestimonials, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    }

    if (imgTestimonials) {
        gsap.fromTo(imgTestimonials, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 });
    }

    if (testimonialsContainerItems) {
        const articles = testimonialsContainerItems.querySelectorAll('article');
        articles.forEach((article, index) => {
            gsap.fromTo(article, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: .2, delay: .3 + index * 0.2 });
        });
    }
}

export const animateTestimonialsSectionHomeInit = () => {

    const sectionTestimonials = document.querySelector('.section-testimonials');
    const titleTestimonials = document.querySelector('.title-testimonials');


    // dejar todo en opacidad 0

    if (sectionTestimonials) {
        gsap.set(sectionTestimonials, { opacity: 0 });
    }

    if (titleTestimonials) {
        gsap.set(titleTestimonials, { opacity: 0 });
    }
}