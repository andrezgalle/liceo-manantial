import { gsap } from 'gsap';

export const animateRecordsSectionHome = () => {

    const sectionRecordsHome = document.querySelector('.section-records-home');
    const img1Records = document.querySelector('.img1-records');
    const img2Records = document.querySelector('.img2-records');
    const img3Records = document.querySelector('.img3-records');
    const recordsContainerItemsHome = document.querySelector('.records-container-items-home')

    // primero aparecer el contenedor con un fade in y despues de 1 segundo la img1Records
    if (sectionRecordsHome) {
        gsap.fromTo(sectionRecordsHome, { opacity: 0 }, { opacity: 1, duration: 1 });
    }

    if (img1Records) {
        gsap.fromTo(img1Records, { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
    }

    // despues de 1.5 segundos la img2Records y hacer que venga desde abajo con algo de rebote
    if (img2Records) {
        gsap.fromTo(img2Records, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.5 });
    }

    // despues de 2 segundos la img3Records y hacer que venga desde arriba con algo de rebote
    if (img3Records) {
        gsap.fromTo(img3Records, { y: 400, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 2 });
    }

    if(recordsContainerItemsHome) {
        const divs = recordsContainerItemsHome.querySelectorAll('div');
        divs.forEach((div, index) => {
            gsap.fromTo(div, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: .2, delay: .5 + index * 0.4 });
        });
    }

}

export const animateRecordsSectionHomeInit = () => {

    const sectionRecordsHome = document.querySelector('.section-records-home');
    const img1Records = document.querySelector('.img1-records');
    const img2Records = document.querySelector('.img2-records');
    const img3Records = document.querySelector('.img3-records');

    // dejar todo en opacidad 0

    if (sectionRecordsHome) {
        gsap.set(sectionRecordsHome, { opacity: 0 });
    }

    if (img1Records) {
        gsap.set(img1Records, { opacity: 0 });
    }

    if (img2Records) {
        gsap.set(img2Records, { opacity: 0 });
    }

    if (img3Records) {
        gsap.set(img3Records, { opacity: 0 });
    }
}