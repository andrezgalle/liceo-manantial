"use client";

import { useEffect, useState } from "react";
import { itemsOurUs } from "@/data/itemsOurUs";
import styles from "./itemsSectionOurUs.module.css";
import ItemGroupOurUs from "@/components/ourUs/itemGroupOurUs/ItemGroupOurUs";
import { animateItemsSectionOurUs } from "@/animations/nosotros/itemSectionOurUs/animations";
import json from "@/utils/languagesOurUs.json";

export default function ItemsSectionOurUs() {
    useEffect(() => {
        animateItemsSectionOurUs();
    }, []);

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    return (
        <section className={`section-items-ourus`}>
            <div className={`${styles.container} container-items-ourus`}>
                {language === 'es' ? json.items.es.map(item => (
                    <ItemGroupOurUs key={item.id} item={item} />
                )) : json.items.en.map(item => (
                    <ItemGroupOurUs key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
