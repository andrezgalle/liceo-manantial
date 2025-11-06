'use client'
import Image from 'next/image';
import styles from './testimonialsSectionHome.module.css';
import ArticleTestimonials from '@/components/home/articleTestimonials/ArticleTestimonials';
import { testimonials } from '@/data/testimonials';
import { useEffect, useState } from 'react';
import { animateTestimonialsSectionHome, animateTestimonialsSectionHomeInit } from '@/animations/home/testimonialsSectionHome/animations';
import json from "@/utils/languagesHome.json";

export default function TestimonialsSectionHome() {

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        animateTestimonialsSectionHomeInit();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.' + styles.section);
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.screenTop;
                if ((sectionTop < windowHeight / 2)) {
                    animateTestimonialsSectionHome();
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
        <section className={`${styles.section} section-testimonials`}>

            <div className={styles.container}>
                <p className={`${styles.title} title-testimonials`}>
                    {language === 'es' ? json.testimonials.title.es : json.testimonials.title.en}
                </p>
                <Image
                    src="/resources/home/testimonials/encabezado.svg"
                    alt="Testimonio heading"
                    width={600}
                    height={200}
                    className={`${styles.encabezado} img-testimonials`}
                />

                <section className={`${styles.testimonialContainer} testimonials-container-items`}>

                    {language === 'es' ? json.testimonials.es.map( testimonial => (
                        <ArticleTestimonials key={testimonial.id} testimonial={testimonial} />
                    )) : json.testimonials.en.map(testimonial => (
                        <ArticleTestimonials key={testimonial.id} testimonial={testimonial} />
                    ))}
                </section>
            </div>

        </section>
    )
}
