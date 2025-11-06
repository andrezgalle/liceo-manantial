import Link from "next/link";
import styles from "./navbar.module.css";
import json from "@/utils/navbarLanguages.json";
import { useEffect, useState } from "react";

export default function Navbar({ state }: { state: 'white' | 'black' }) {
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  return (
    <nav className={`${state === 'black' ? styles.navWhite : styles.nav} navBar`}>
      <Link href="/home">
        {language === 'es' ? json.navbar.es.home : json.navbar.en.home}
      </Link>
      <Link href="/nosotros">
        {language === 'es' ? json.navbar.es.about : json.navbar.en.about}
      </Link>
      <Link href="/testimonios">
        {language === 'es' ? json.navbar.es.testimonials : json.navbar.en.testimonials}
      </Link>
      <Link href="/contactanos">
        {language === 'es' ? json.navbar.es.contact : json.navbar.en.contact}
      </Link>
    </nav>
  )
}
