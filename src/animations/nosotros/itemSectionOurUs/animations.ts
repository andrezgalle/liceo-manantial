import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateItemsSectionOurUs = () => {
    const section = document.querySelector(".section-items-ourus");
    const container = document.querySelector(".container-items-ourus");
    const cards = document.querySelectorAll(".card-item-ourus");

    if (!section || cards.length === 0) return;

    // fade in de la sección completa
    gsap.fromTo(
        section,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // animación de subida para el contenedor
    if (container) {
        gsap.fromTo(
            container,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }

    // animar cada card de forma escalonada
    cards.forEach((card, index) => {
        const image = card.querySelector(".image-item-ourus");
        const title = card.querySelector(".title-item-ourus");
        const description = card.querySelector(".description-item-ourus");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            delay: index * 0.2,
        });

        tl.fromTo(
            card,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        tl.fromTo(
            image,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6 },
            "-=0.4"
        );

        tl.fromTo(
            title,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3"
        );

        tl.fromTo(
            description,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3"
        );
    });
};
