'use client'
import Image from 'next/image'
import styles from './academicLevelSectionHome.module.css'
import ItemAcademicLevel from '@/components/home/itemAcademicLevel/ItemAcademicLevel'
import { academicLevel } from '@/data/itemsAcademicLevel'
import { useEffect, useState } from 'react';
import { animateAcademicLevelSectionHome, animateAcademicLevelSectionHomeInit } from '@/animations/home/academicLevelSectionHome/animations'
import json from "@/utils/languagesHome.json";

export default function AcademicLevelSectionHome() {

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        animateAcademicLevelSectionHomeInit();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.sectionAcademicMain');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.screenTop;
                if ((sectionTop < windowHeight / 2)) {
                    animateAcademicLevelSectionHome();
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
        <section className={`sectionAcademicMain`}>
            <section className={styles.academicLevelSectionHome}>

                <section className={styles.academicLevelContent}>
                    <div className={styles.academicLevelText}>
                        <div className={styles.containerImage}>
                            <Image
                                src="/resources/home/academic-level/heading.svg"
                                alt="Niveles Académicos"
                                width={450}
                                height={85}
                                className='image-academic-level'
                            />
                        </div>


                        <p className='text-academic-level'>
                            {language === 'es' ? json.academicLevels.paragraph.es : json.academicLevels.paragraph.en}
                        </p>

                        <div>
                            <Image
                                src="/resources/home/academic-level/boy.png"
                                alt="Niveles Académicos"
                                width={500}
                                height={300}
                                className={styles.imageMobile}
                            />
                        </div>

                        <div className={`${styles.academicLevelGrid} container-items-academic-level`}>
                            {language === 'es' ? json.academicLevels.cards.es.map(item => (
                                <ItemAcademicLevel key={item.id} item={item} />
                            )) : json.academicLevels.cards.en.map(item => (
                                <ItemAcademicLevel key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.academicLevelImage}>
                        <Image
                            src="/resources/home/academic-level/boy.png"
                            alt="Niveles Académicos"
                            width={600}
                            height={800}
                            className='hero-image-academic-level'
                        />
                    </div>

                </section>

            </section>
        </section>
    )
}
