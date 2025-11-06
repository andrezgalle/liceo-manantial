import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateActionSectionOurUs = () => {
    const section = document.querySelector(".section-action-ourus");
    const content = document.querySelector(".content-action-ourus");
    const title = document.querySelector(".title-action-ourus");
    const text = document.querySelector(".text-action-ourus");
    const button = document.querySelector(".button-action-ourus");
    const arrow = document.querySelector(".arrow-action-ourus");

    if (!section) return;

    // Fade general del contenedor al hacer scroll
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

    // Timeline principal
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
        },
    });

    tl.fromTo(
        content,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
        title,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
    );

    tl.fromTo(
        text,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
    );

    tl.fromTo(
        button,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
    );

    if (arrow) {
        gsap.fromTo(
            arrow,
            { x: -10, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: button,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }
};
