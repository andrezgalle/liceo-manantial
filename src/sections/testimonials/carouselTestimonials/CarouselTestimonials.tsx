'use client'
import React, { useEffect, useState } from 'react';
import styles from './carouselTestimonials.module.css';
import { animateFooter } from '@/animations/global/footer/animations';

const items = [
  {
    id: 1,
    name: 'Carlos',
    image: '/resources/testimonials/testimonials.png',
    title: 'Katherin García',
    desc: 'Ex alumna',
  },
  {
    id: 2,
    name: 'Carolina',
    image: '/resources/testimonials/testimonials.png',
    title: 'Carolina Pérez',
    desc: 'Estudiante',
  },
  {
    id: 3,
    name: 'Andrés',
    image: '/resources/testimonials/testimonials.png',
    title: 'Andrés Gómez',
    desc: 'Estudiante',
  },
  {
    id: 4,
    name: 'Camila',
    image: '/resources/testimonials/testimonials.png',
    title: 'Camila Díaz',
    desc: 'Estudiante',
  },
    {
    id: 5,
    name: 'Maria',
    image: '/resources/testimonials/testimonials.png',
    title: 'Camila Díaz',
    desc: 'Estudiante',
  },
];

export default function CarouselTestimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    animateFooter();  
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ''
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} className={styles.image} />
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
