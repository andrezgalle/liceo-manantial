'use client'
import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { animateFooter, animateFooterInit } from '@/animations/global/footer/animations'
import json from "@/utils/languagesFooter.json";

export default function Footer() {

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);


    useEffect(() => {
        animateFooterInit();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.container-carousel-home');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.screenTop;
                if ((sectionTop < windowHeight - 200)) {
                    animateFooter();
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
        <footer className={`${styles.footer} footer`}>

            <section className={`${styles.contactInfo} contact-info-footer`}>

                <div className={styles.contactItem}>
                    <div className={styles.contactInner}>

                        <Image
                            src="/resources/global/footer/location.svg"
                            alt="location"
                            width={60}
                            height={60}
                        />

                        <div className={styles.contactText}>
                            <p>{language === 'es' ? json.itemsContact.es.address : json.itemsContact.en.address}:</p>
                            <p>Calle 37 sur # 52-35</p>
                        </div>

                    </div>
                </div>

                <div className={styles.contactItem}>
                    <div className={styles.contactInner}>

                        <Image
                            src="/resources/global/footer/phone.svg"
                            alt="phone"
                            width={60}
                            height={60}
                        />

                        <div className={styles.contactText}>
                            <p>{language === 'es' ? json.itemsContact.es.whatsApp : json.itemsContact.en.whatsApp}:</p>
                            <p>+57 310 8108728</p>
                        </div>

                    </div>
                </div>

                <div className={styles.contactItem}>
                    <div className={styles.contactInner}>

                        <Image
                            src="/resources/global/footer/mail.svg"
                            alt="email"
                            width={60}
                            height={60}
                        />

                        <div className={styles.contactText}>
                            <p>{language === 'es' ? json.itemsContact.es.email : json.itemsContact.en.email}:</p>
                            <p>info@liceomanantial.com</p>
                        </div>

                    </div>
                </div>

            </section>

            <section className={`${styles.footerMain} footer-main`}>

                <div className={styles.containerSocial}>

                    <Image
                        src="/resources/home/main/liceo-icon.svg"
                        alt="Logo Liceo Manantial"
                        width={160}
                        height={80}
                    />

                    <p>{language === 'es' ? json.description.es : json.description.en}</p>

                    <div>
                        <a href="https://www.facebook.com/yosoyliceomanantial/?locale=es_LA" target='_blank'>
                            <Image
                                src="/resources/global/footer/fb.svg"
                                alt="facebook"
                                width={45}
                                height={45}
                            />
                        </a>

                        <a href="https://www.instagram.com/liceomanantial/?hl=es-la" target='_blank'>
                            <Image
                                src="/resources/global/footer/ig.svg"
                                alt="instagram"
                                width={45}
                                height={45}
                            />
                        </a>

                    </div>
                </div>

                <div className={styles.containerLinks}>
                    <p>{language === 'es' ? json.title.es : json.title.en}</p>

                    <div className={styles.links}>

                        <nav className={styles.navLinks}>
                            <Link href="/">
                                {language === 'es' ? json.links.es.home : json.links.en.home}
                            </Link>
                            <Link href="/nosotros">
                                {language === 'es' ? json.links.es.about : json.links.en.about}
                            </Link>
                            <Link href="/testimonios">
                                {language === 'es' ? json.links.es.testimonials : json.links.en.testimonials}
                            </Link>
                            <Link href="/contactanos">
                                {language === 'es' ? json.links.es.contact : json.links.en.contact}
                            </Link>
                            <Link href="/">
                                {language === 'es' ? json.links.es.signIn : json.links.en.signIn}
                            </Link>
                        </nav>

                        <div>
                            <Link href="/">
                                {language === 'es' ? json.links.es.tutorial : json.links.en.tutorial}
                            </Link>
                            <Link href="/">
                                {language === 'es' ? json.links.es.pdf : json.links.en.pdf}
                            </Link>
                            <Link href="/">
                                {language === 'es' ? json.links.es.instructions : json.links.en.instructions}
                            </Link>
                        </div>

                    </div>

                </div>

                <div className={styles.containerSubscribe}>

                    <p>{language === 'es' ? json.forms.es.title : json.forms.en.title}</p>

                    <form className={styles.formSubscribe}>
                        <input type="email" placeholder={language === 'es' ? json.forms.es.placeholder : json.forms.en.placeholder} />
                        <button type="submit">
                            {language === 'es' ? json.forms.es.button : json.forms.en.button}
                        </button>
                    </form>

                </div>
            </section>

            <div className={`${styles.containerCopyright} copyright-footer`}>
                <p>@Copyright {new Date().getFullYear()} Liceo Manantial | All Rights Reserved {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}
