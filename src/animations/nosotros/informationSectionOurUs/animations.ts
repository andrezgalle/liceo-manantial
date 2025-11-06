import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateInformationSectionOurUs = () => {
    const section = document.querySelector(".section-information-ourus");
    const items = document.querySelectorAll(".item-information-ourus");

    if (!section || items.length === 0) return;

    // Fade general de la sección
    gsap.fromTo(
        section,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación individual por cada bloque (item)
    items.forEach((item, index) => {
        const text = item.querySelector(".text-information-ourus");
        const image = item.querySelector(".image-information-ourus");

        // Timeline individual por item
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Animación del contenedor (fade + slide general)
        tl.fromTo(
            item,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Determinar dirección según si es par o impar
        const isEven = index % 2 === 1;

        // Texto (izquierda para impares, derecha para pares)
        if (text) {
            tl.fromTo(
                text,
                { x: isEven ? 100 : -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.8"
            );
        }

        // Imagen (opuesta al texto)
        if (image) {
            tl.fromTo(
                image,
                { x: isEven ? -100 : 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.8"
            );
        }
    });
};
