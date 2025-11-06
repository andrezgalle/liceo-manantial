'use client'

import { useEffect, useState } from 'react';
import Header from "@/components/global/header/Header";
import styles from './mainSectionTestimonials.module.css';
import CarouselTestimonials from "../carouselTestimonials/CarouselTestimonials";
import { animateMainSectionTestimonials } from '@/animations/testimonios/mainSectionTestimonials/animations';
import json from "@/utils/languagesTestimonials.json";

export default function MainSectionTestimonials() {
    useEffect(() => {
        animateMainSectionTestimonials();
    }, []);

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    return (
        <>
            <div className="header">
                <Header state={'black'} />
            </div>


            <section className={`${styles.mainSection} section-testimonials`}>

                <h1 className={`${styles.title} title-testimonials`}>
                    {language === 'es' ? json.es.title : json.en.title}
                </h1>

                <p className={`${styles.description} description-testimonials`}>
                    {language === 'es' ? json.es.description : json.en.description}
                </p>

                <div className="carousel-container-testimonials">
                    <CarouselTestimonials />
                </div>

            </section>
        </>
    )
}
