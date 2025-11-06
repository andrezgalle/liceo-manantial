'use client'
import Image from 'next/image'
import styles from './carousel.module.css'
import Carousel from '@/components/home/carousel/Carousel';
import { animateCarouselSectionHome, animateCarouselSectionHomeInit } from '@/animations/home/carouselSectionHome/animations';
import { useEffect, useState } from 'react'
import json from "@/utils/languagesHome.json";

const carouselItems = [
    { id: 1, image: '/resources/util/1.svg', alt: 'Imagen 1' },
    { id: 2, image: '/resources/util/2.svg', alt: 'Imagen 2' },
    { id: 3, image: '/resources/util/3.svg', alt: 'Imagen 3' },
    { id: 4, image: '/resources/util/1.svg', alt: 'Imagen 4' },
    { id: 5, image: '/resources/util/2.svg', alt: 'Imagen 5' },
    { id: 6, image: '/resources/util/3.svg', alt: 'Imagen 6' },
    { id: 7, image: '/resources/util/1.svg', alt: 'Imagen 7' },
    { id: 8, image: '/resources/util/2.svg', alt: 'Imagen 8' },
    { id: 9, image: '/resources/util/3.svg', alt: 'Imagen 9' },
];

export default function CarouselSectionHome() {

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);


    useEffect(() => {
        animateCarouselSectionHomeInit();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.container-carousel-home');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.screenTop;
                if ((sectionTop < windowHeight + 200)) {
                    animateCarouselSectionHome();
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`${styles.container} container-carousel-home`}>
            <div className={styles.containerContent}>
                <Image
                    src={'/resources/home/carousel/title.svg'}
                    alt='carousel'
                    width={400}
                    height={100}
                    className='title-carousel-home'
                />

                <p className='subtitle-carousel-home'>
                    {language === 'es' ? json.carousel.paragraph.es : json.carousel.paragraph.en}
                </p>

                <Image
                    src={'/resources/home/global/flechas.svg'}
                    alt='carousel'
                    width={250}
                    height={100}
                    className='flechas-carousel-home'
                />
            </div>

            <Carousel items={carouselItems} />


        </section>
    )
}
