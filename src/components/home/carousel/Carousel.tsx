'use client'
import React, { useRef, useEffect } from 'react';
import styles from './carousel.module.css';

type CarouselItem = {
  id: string | number;
  image: string;
  alt?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = 'default';
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    document.body.style.cursor = 'default';
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={`${styles.carouselTrack} carousel-track-home`}
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ userSelect: isDragging.current ? 'none' : 'auto' }}
      >
        {items.map(item => (
          <div className={styles.carouselItem} key={item.id}>
            <img
              src={item.image}
              alt={item.alt || 'carousel item'}
              draggable={false}
              onDragStart={e => e.preventDefault()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}