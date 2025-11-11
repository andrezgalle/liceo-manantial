'use client'
import Image from 'next/image'
import styles from './chooseUsSectionHome.module.css'
import ItemChooseUs from '@/components/home/itemChooseUs/ltemChooseUs'
import { animateChooseUsSectionHome, animateChooseUsSectionHomeInit } from '@/animations/home/chooseUsSectionHome/animations';
import { useEffect, useState } from 'react';
import json from "@/utils/languagesHome.json";

export default function ChooseUsSectionHome() {

  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    animateChooseUsSectionHomeInit();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-choose-us');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.screenTop;
        if ((sectionTop < windowHeight + 200)) {
          animateChooseUsSectionHome();
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
    <section className={`${styles.container} section-choose-us`}>
      <div className={styles.containerContent}>
        <h2 className='title-choose-us'>
          {language === 'es' ? json.chooseUs.title.es : json.chooseUs.title.en}

        </h2>
        <section className={styles.flexContainer}>

          <div>
            <Image
              src={'/resources/home/choose-us/8.png'}
              alt='mujer'
              width={500}
              height={400}
              className={styles.imageWomenMobile}
            />
          </div>

          <div className={`${styles.flexContainerColumn} flex-container-column-choose-us`}>
            <ItemChooseUs
              item={
                language === 'es' ? json.chooseUs.cards.es[0] : json.chooseUs.cards.en[0]
              }
            />
            <ItemChooseUs
              item={
                language === 'es' ? json.chooseUs.cards.es[1] : json.chooseUs.cards.en[1]
              }
            />
          </div>
          <div>
            <Image
              src={'/resources/home/choose-us/8.png'}
              alt='mujer'
              width={550}
              height={500}
              className={`${styles.imageWomen} image-women-choose-us`}
            />
          </div>
          <div className={`${styles.flexContainerColumn} flex-container-column-choose-us-2`}>
            <ItemChooseUs

              item={
                language === 'es' ? json.chooseUs.cards.es[2] : json.chooseUs.cards.en[2]
              }

            />
            <ItemChooseUs
              item={
                language === 'es' ? json.chooseUs.cards.es[3] : json.chooseUs.cards.en[3]
              }

            />
          </div>
        </section>
      </div>
    </section>
  )
}
