"use client";

import { useEffect } from "react";
import Header from "@/components/global/header/Header";
import styles from "./mainSectionOurUs.module.css";
import Image from "next/image";
import { animateOurUsSection } from "@/animations/nosotros/mainSectionOurUs/animations";

export default function MainSectionOurUs() {
    useEffect(() => {
        animateOurUsSection();
    }, []);

    return (
        <section className={`${styles.mainSection} sectionOurUs`}>
            <div className="header">
                <Header state="black" />
            </div>

            <div className={`${styles.container} container-ourus`}>
                <Image
                    src="/resources/ourUs/main/text1.svg"
                    alt="Our Us Image 1"
                    width={500}
                    height={100}
                    className="image-ourus image-ourus-1"
                />
                <Image
                    src="/resources/ourUs/main/text2.svg"
                    alt="Our Us Image 2"
                    width={500}
                    height={100}
                    className="image-ourus image-ourus-2"
                />
            </div>
        </section>
    );
}
