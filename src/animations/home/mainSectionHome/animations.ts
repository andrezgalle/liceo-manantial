import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// --- ANIMACIÓN PRINCIPAL DEL HOME (hero) ---
export const animateMainSection = () => {
  const sectionHome = document.querySelector(".sectionHome");
  const mainTextSectionHome = document.querySelector(".text-main-section-home");
  const buttonMainSectionHome = document.querySelector(".button-main-section-home");
  const logo = document.querySelector(".logo");
  const containerCards = document.querySelector(".containerCards");
  const buttonHeader = document.querySelector(".button-header");
  const containerLanguages = document.querySelector(".container-languages");
  const navBar = document.querySelector(".navBar");
  const menuHamburger = document.querySelector(".menu-hamburguesa");

  // Asegurar visibilidad correcta
  if (sectionHome) gsap.set(sectionHome, { position: "relative" });

  // Ocultar las cards al inicio
  if (containerCards) {
    const cards = containerCards.querySelectorAll(".cardMainHome");
    gsap.set(cards, { opacity: 0 });
  }

  // --- Timeline principal (entrada inicial del home) ---
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Logo de izquierda a derecha
  if (logo) {
    tl.fromTo(logo, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
  }

  // Fade general del home + títulos
  if (sectionHome) {
    tl.fromTo(sectionHome, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.3");

    const h1 = sectionHome.querySelector("h1");
    const h2 = sectionHome.querySelector("h2");

    if (h1) tl.fromTo(h1, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4");
    if (h2) tl.fromTo(h2, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");
  }

  // Texto principal
  if (mainTextSectionHome) {
    tl.fromTo(
      mainTextSectionHome,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.6"
    );
  }

  // Botón principal
  if (buttonMainSectionHome) {
    tl.fromTo(
      buttonMainSectionHome,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.8"
    );
  }

  // Botón del header
  if (buttonHeader) {
    tl.fromTo(buttonHeader, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1");
  }

  // Idiomas (banderas) con delay escalonado
  if (containerLanguages) {
    const images = containerLanguages.querySelectorAll("img");
    tl.fromTo(
      images,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.6"
    );
  }

  // Navbar links
  if (navBar) {
    const links = navBar.querySelectorAll("a");
    tl.fromTo(
      links,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=1"
    );
  }

  // Menú hamburguesa
  if (menuHamburger) {
    tl.fromTo(
      menuHamburger,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.8"
    );
  }
};

// --- ANIMACIONES DE LAS CARDS POR SCROLL ---
export const animationByScrollContainerCards = () => {
  const containerCards = document.querySelector(".containerCards");
  const containerCardsMobile = document.querySelector(".containerCardsMobile");

  // --- Desktop ---
  if (containerCards) {
    const cards = containerCards.querySelectorAll(".cardMainHome");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }

  // --- Mobile ---
  if (containerCardsMobile) {
    const cards = containerCardsMobile.querySelectorAll(".cardMainHome");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }
};
