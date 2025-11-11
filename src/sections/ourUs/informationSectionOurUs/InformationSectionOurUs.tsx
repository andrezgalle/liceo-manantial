"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./informationSectionOurUs.module.css";
import { animateInformationSectionOurUs } from "@/animations/nosotros/informationSectionOurUs/animations";
import json from "@/utils/languagesOurUs.json";

export default function InformationSectionOurUs() {
    useEffect(() => {
        animateInformationSectionOurUs();
    }, []);


    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    return (
        <section className={`${styles.container} section-information-ourus`}>
            <div className={`${styles.content} content-information-ourus`}>
                {/* Item 1 */}
                <div className={`${styles.itemContent} item-information-ourus`}>
                    <div className={`${styles.textContent} text-information-ourus`}>
                        <h2>
                            {language === 'es' ? json.section.es[0].title : json.section.en[0].title}
                        </h2>
                        <p>
                            {language === 'es' ? json.section.es[0].description : json.section.en[0].description}
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/resources/ourUs/information/1.png"
                            alt="Quiénes somos"
                            width={650}
                            height={450}
                            className="image-information-ourus"
                        />
                    </div>
                </div>

                {/* Item 2 */}
                <div className={`${styles.itemContent} item-information-ourus`}>
                    <div>
                        <Image
                            src="/resources/ourUs/information/2.png"
                            alt="Nuestra misión"
                            width={650}
                            height={450}
                            className="image-information-ourus"
                        />
                    </div>
                    <div className={`${styles.textContent} text-information-ourus`}>
                        <h2 className={styles.rightText}>
                            {language === 'es' ? json.section.es[1].title : json.section.en[1].title}
                        </h2>
                        <p className={styles.rightText}>
                            {language === 'es' ? json.section.es[1].description : json.section.en[1].description}
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className={`${styles.itemContent} item-information-ourus`}>
                    <div className={`${styles.textContent} text-information-ourus`}>
                        <h2>
                            {language === 'es' ? json.section.es[2].title : json.section.en[2].title}
                        </h2>
                        <p>
                            {language === 'es' ? json.section.es[2].description : json.section.en[2].description}
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/resources/ourUs/information/3.png"
                            alt="Nuestra visión"
                            width={550}
                            height={450}
                            className="image-information-ourus"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
