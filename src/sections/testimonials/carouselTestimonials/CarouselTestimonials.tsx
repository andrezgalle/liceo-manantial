'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './carouselTestimonials.module.css';
import { animateFooter } from '@/animations/global/footer/animations';

const items = [
  {
    id: 1,
    name: 'Maria Paula',
    video: '/resources/testimonials/1.mov',
    title: 'Maria Paula',
    desc: 'Estudiante',
  },
  {
    id: 2,
    name: 'Juan Pablo',
    video: '/resources/testimonials/2.mov',
    title: 'Juan Pablo',
    desc: 'Estudiante',
  },
  {
    id: 3,
    name: 'Maria Paula',
    video: '/resources/testimonials/1.mov',
    title: 'Maria Paula',
    desc: 'Estudiante',
  },
  {
    id: 4,
    name: 'Juan Pablo',
    video: '/resources/testimonials/2.mov',
    title: 'Juan Pablo',
    desc: 'Estudiante',
  },
  {
    id: 5,
    name: 'Maria Paula',
    video: '/resources/testimonials/1.mov',
    title: 'Maria Paula',
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
                ref={(el : any) => (videoRefs.current[index] = el)}
                className={styles.video}
                controls={index === activeIndex}
                playsInline
                preload="metadata"
              >
                <source src={item.video} type="video/mp4" />
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