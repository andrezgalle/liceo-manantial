import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateVideoSectionOurUs = () => {
  const section = document.querySelector(".section-video-ourus");
  const videoContainer = document.querySelector(".video-container-ourus");
  const videoImage = document.querySelector(".video-image-ourus");

  if (section) {
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
  }

  if (videoContainer) {
    gsap.fromTo(
      videoContainer,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: videoContainer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  if (videoImage) {
    gsap.fromTo(
      videoImage,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoImage,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }
};
