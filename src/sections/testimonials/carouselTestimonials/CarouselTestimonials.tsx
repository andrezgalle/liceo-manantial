'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './carouselTestimonials.module.css';
import { animateFooter } from '@/animations/global/footer/animations';

const items = [
  {
    id: 1,
    name: 'Carlos',
    video: '/resources/testimonials/testimonial1.mp4',
    title: 'Katherin García',
    desc: 'Ex alumna',
  },
  {
    id: 2,
    name: 'Carolina',
    video: '/resources/testimonials/testimonial2.mp4',
    title: 'Carolina Pérez',
    desc: 'Estudiante',
  },
  {
    id: 3,
    name: 'Andrés',
    video: '/resources/testimonials/testimonial3.mp4',
    title: 'Andrés Gómez',
    desc: 'Estudiante',
  },
  {
    id: 4,
    name: 'Camila',
    video: '/resources/testimonials/testimonial4.mp4',
    title: 'Camila Díaz',
    desc: 'Estudiante',
  },
  {
    id: 5,
    name: 'Maria',
    video: '/resources/testimonials/testimonial5.mp4',
    title: 'Maria López',
    desc: 'Estudiante',
  },
];

export default function CarouselTestimonials() {
  const [activeIndex, setActiveIndex] = useState(2);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    animateFooter();  
  }, []);

  // Pausar todos los videos excepto el activo cuando cambia el slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index !== activeIndex) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ''
            }`}
            onClick={() => handleSlideClick(index)}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className={styles.video}
                controls={index === activeIndex}
                playsInline
                preload="metadata"
              >
                <source src={item.video} type="video/quicktime" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className={styles.label}>{item.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ''
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.info}>
        <h3>{items[activeIndex].title}</h3>
        <p>{items[activeIndex].desc}</p>
      </div>
    </div>
  );
}