'use client';
import Image from 'next/image';
import styles from './recordsSectionHome.module.css';
import ItemRecord from '@/components/home/itemRecord/ItemRecord';
import { itemsRecords } from '@/data/itemsRecords';
import { useEffect, useState } from 'react';
import { animateRecordsSectionHome, animateRecordsSectionHomeInit } from '@/animations/home/recordsSectionHome/animations';
import json from "@/utils/languagesHome.json";

export default function RecordsSectionHome() {

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        animateRecordsSectionHomeInit();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.' + styles.section);
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.screenTop;
                if ((sectionTop < windowHeight / 2 + 100)) {
                    animateRecordsSectionHome();
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
        <section className={`${styles.section} section-records-home`}>
            <div>
                <div className={styles.containerImages}>
                    <Image
                        src="/resources/home/records/childrens.png"
                        alt="Childrens"
                        width={600}
                        height={640}
                        className={`${styles.imageChildrens} img1-records`}
                    />
                    <Image
                        src="/resources/home/records/texto1.svg"
                        alt="Texto 1"
                        width={850}
                        height={200}
                        className={`${styles.imageText1} img2-records`}
                    />
                    <Image
                        src="/resources/home/records/texto2.svg"
                        alt="Texto 2"
                        width={550}
                        height={150}
                        className={`${styles.imageText2} img3-records`}
                    />
                </div>

                <Image
                    src="/resources/home/global/flechas.svg"
                    alt="Texto 2"
                    width={550}
                    height={120}
                    className={styles.imageResponsive}
                />

                <section className={`${styles.recordsContainer} records-container-items-home`}>
                    {language === 'es' ? json.records.es.map( item => (
                        <ItemRecord key={item.id} ItemRecord={item} />
                    )) : json.records.en.map(item => (
                        <ItemRecord key={item.id} ItemRecord={item} />
                    ))}
                </section>

            </div>

        </section>
    )
}
