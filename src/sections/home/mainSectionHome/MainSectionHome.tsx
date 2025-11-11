'use client'
import Header from "@/components/global/header/Header";
import styles from "./mainSectionHome.module.css"
import CardMainHome from "@/components/home/cardMainHome/CardMainHome";
import { useEffect, useState } from "react";
import { animateMainSection, animationByScrollContainerCards } from "@/animations/home/mainSectionHome/animations";
import json from "@/utils/languagesHome.json";

export default function MainSectionHome() {

    useEffect(() => {
        animateMainSection();
    }, [])



    // leer scroll despues de 400 px de scroll y lanzar la animacion de las cards solo 1 vez
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                animationByScrollContainerCards();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
            <section className={`${styles.mainSection} sectionHome`}>
                <Header state="white" />

                <div className={styles.containerVideo}>
                    <video className={styles.video} autoPlay muted loop>
                        <source src="/video/mainvideo.webm" type="video/webm" />
                    </video>
                </div>


                <div className={styles.content}>
                    <div className={styles.titles}>
                        <h1>
                            {language === 'es' ? json.main.initTitle.es : json.main.initTitle.en}
                        </h1>
                        <h2>{language === 'es' ? json.main.secondTitle.es : json.main.secondTitle.en} {new Date().getFullYear() + 1}</h2>
                    </div>

                    <div className={styles.text}>
                        <p className="text-main-section-home">
                            {language === 'es' ? json.main.description.es : json.main.description.en}
                        </p>
                        <button className="button-main-section-home">
                            {language === 'es' ? json.main.button.es : json.main.button.en}
                        </button>
                    </div>
                </div>


                <div className={`${styles.containerCards} containerCards`}>
                    {language === 'es' ? json.cards[0].es.map(card => (
                        <CardMainHome key={card.id} cardProps={card} />
                    )) : json.cards[0].en.map(card => (
                        <CardMainHome key={card.id} cardProps={card} />
                    ))}
                </div>


            </section>

            <div className={`${styles.containerCardsMobile} containerCardsMobile`}>
                {language === 'es' ? json.cards[0].es.map(card => (
                    <CardMainHome key={card.id} cardProps={card} />
                )) : json.cards[0].en.map(card => (
                    <CardMainHome key={card.id} cardProps={card} />
                ))}
            </div>
        </>
    )
}
