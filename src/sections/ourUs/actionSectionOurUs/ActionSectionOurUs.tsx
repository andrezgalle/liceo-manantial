"use client";

import Image from "next/image";
import styles from "./actionSectionOurUs.module.css";
import { useEffect, useState } from "react";
import { animateActionSectionOurUs } from "@/animations/nosotros/actionSectionOurUs/animations";
import { animateFooter } from "@/animations/global/footer/animations";
import json from "@/utils/languagesOurUs.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ActionSectionOurUs() {

    const router = useRouter();

    useEffect(() => {
        animateActionSectionOurUs();
        animateFooter();
    }, []);

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);


    return (
        <section className={`${styles.container} section-action-ourus`}>
            <div className={`${styles.content} content-action-ourus`}>
                <h3 className="title-action-ourus">
                    {language === 'es' ? json.actions.es.title : json.actions.en.title}
                </h3>
                <p className="text-action-ourus">
                    {language === 'es' ? json.actions.es.description : json.actions.en.description}
                </p>
                    <button className="button-action-ourus" onClick={() => router.push("/contactanos")}>
                        {language === 'es' ? json.actions.es.button : json.actions.en.button}
                        <Image
                            src="/resources/home/main/arrow.svg"
                            alt="arrow icon"
                            width={14}
                            height={14}
                            className={`${styles.arrow} arrow-action-ourus`}
                        />
                    </button>
            </div>
        </section>
    );
}
