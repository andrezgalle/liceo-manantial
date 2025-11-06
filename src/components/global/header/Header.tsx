'use client'
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";
import { useState } from "react";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import Link from "next/link";
import json from "@/utils/navbarLanguages.json";
import { useEffect } from "react";

export default function Header({ state }: { state: 'white' | 'black' }) {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [language, setLanguage] = useState<"es" | "en">("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    const handleMenuClick = () => {

        setMobileMenuOpen(!isMobileMenuOpen);

        const body = document.body;
        if (!isMobileMenuOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }

    return (
        <>
            <header className={styles.header}>


                {state === 'white' ? (
                    <Link href="/home">
                        <Image
                            src="/resources/home/main/liceo-icon.svg"
                            alt="Liceo Manantial Logo"
                            width={200}
                            height={100}
                            className={`${styles.logo} logo`}
                        />
                    </Link>
                ) : (
                    <Link href="/home">
                        <Image
                            src="/resources/global/nav/logo-black.svg"
                            alt="Liceo Manantial Logo"
                            width={200}
                            height={100}
                            className={`${styles.logo} logo`}
                        />
                    </Link>
                )}



                <Navbar state={state} />

                <button className={`${state === 'white' ? styles.button : styles.buttonBlack} button-header`}>
                    {language === 'es' ? json.signIn.es : json.signIn.en}
                    <Image
                        src="/resources/home/main/arrow.svg"
                        alt="arrow icon"
                        width={15}
                        height={15}
                    />
                </button>

                <div className={`${styles.containerLanguages} container-languages`}>

                    <Image
                        src="/resources/home/main/EN.svg"
                        alt="English Flag"
                        width={30}
                        height={30}
                        onClick={() => { localStorage.setItem('lang', 'en'); window.location.reload(); }}
                    />

                    <Image
                        src="/resources/home/main/ES.svg"
                        alt="Spanish Flag"
                        width={30}
                        height={30}
                        onClick={() => { localStorage.setItem('lang', 'es'); window.location.reload(); }}
                    />
                </div>

                <Image
                    src="/resources/home/global/menu-hamburguesa.svg"
                    alt="menu"
                    width={30}
                    height={30}
                    className={`${state === 'white' ? styles.menu : styles.menuBlack} menu-hamburguesa`}
                    onClick={handleMenuClick}
                />
            </header>

            {isMobileMenuOpen && (
                <MobileNavbar onClose={handleMenuClick} />
            )}
        </>


    )
}
