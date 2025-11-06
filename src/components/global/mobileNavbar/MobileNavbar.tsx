import Image from 'next/image'
import Link from 'next/link'
import styles from './mobileNavbar.module.css'
import { useEffect, useState } from 'react';
import json from '@/utils/navbarLanguages.json';

export default function MobileNavbar({ onClose }: { onClose: () => void }) {
    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.close} onClick={onClose}>
                <p>X</p>
            </div>
            <nav className={styles.nav}>

                <Link href="/" onClick={onClose}>
                    <Image
                        src="/resources/global/nav/home.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <p>{language === 'es' ? json.navbar.es.home : json.navbar.en.home}</p>
                </Link>

                <Link href="/nosotros" onClick={onClose}>
                    <Image
                        src="/resources/global/nav/users.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <p>{language === 'es' ? json.navbar.es.about : json.navbar.en.about}</p>
                </Link>

                <Link href="/testimonios" onClick={onClose}>
                    <Image
                        src="/resources/global/nav/comments.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <p>{language === 'es' ? json.navbar.es.testimonials : json.navbar.en.testimonials}</p>
                </Link>

                <Link href="/contactanos" onClick={onClose}>
                    <Image
                        src="/resources/global/nav/bell.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <p>{language === 'es' ? json.navbar.es.contact : json.navbar.en.contact}</p>
                </Link>

                <button>
                    {language === 'es' ? json.signIn.es : json.signIn.en}
                    <Image
                        src="/resources/global/nav/arrow.svg"
                        alt="arrow icon"
                        width={15}
                        height={15}
                    />
                </button>
            </nav>

            <div className={styles.containerLanguages}>

                <Image
                    src="/resources/home/main/EN.svg"
                    alt="English Flag"
                    width={40}
                    height={40}
                    onClick={() => { localStorage.setItem('lang', 'en'); window.location.reload(); }}
                />

                <Image
                    src="/resources/home/main/ES.svg"
                    alt="Spanish Flag"
                    width={40}
                    height={40}
                    onClick={() => { localStorage.setItem('lang', 'es'); window.location.reload(); }}
                />
            </div>
        </div>
    )
}
