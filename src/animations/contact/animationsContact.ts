import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFormContactSection = () => {
  const section = document.querySelector("section.formContact-section");
  if (!section) return;

  // --- ELEMENTOS DEL HEADER ---
  const header = document.querySelector(".header");
  const logo = header?.querySelector(".logo");
  const navBar = header?.querySelector(".navBar");
  const buttonHeader = header?.querySelector(".button-header");
  const containerLanguages = header?.querySelector(".container-languages");
  const menuHamburger = header?.querySelector(".menu-hamburguesa");

  // --- ELEMENTOS DE LA SECCIÓN ---
  const title = section.querySelector("h1");
  const paragraph = section.querySelector("p");
  const formContainer = section.querySelector(".formContact-container");
  const infoColumn = section.querySelector(".formContact-info");
  const rightForm = section.querySelector(".formContact-formContainer");
  const fields = section.querySelectorAll(".formContact-field");
  const button = section.querySelector(".formContact-buttonWrapper");

  // --- ANIMACIONES DEL HEADER ---
  if (logo) {
    gsap.fromTo(logo, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
  }

  if (navBar) {
    const links = navBar.querySelectorAll("a");
    links.forEach((link, index) => {
      gsap.fromTo(
        link,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 + index * 0.1 }
      );
    });
  }

  if (buttonHeader) {
    gsap.fromTo(
      buttonHeader,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.6 }
    );
  }

  if (containerLanguages) {
    const flags = containerLanguages.querySelectorAll("img");
    flags.forEach((img, index) => {
      gsap.fromTo(
        img,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.8 + index * 0.2 }
      );
    });
  }

  if (menuHamburger) {
    gsap.fromTo(
      menuHamburger,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1 }
    );
  }

  // --- ANIMACIONES DE LA SECCIÓN ---
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });

  tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6");
  tl.fromTo(paragraph, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8");
  tl.fromTo(formContainer, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=0.6");

  if (infoColumn) {
    tl.fromTo(infoColumn, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1");
  }

  if (rightForm) {
    tl.fromTo(rightForm, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1");
  }

  if (fields?.length) {
    tl.fromTo(fields, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=0.6");
  }

  if (button) {
    tl.fromTo(
      button,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }
};
