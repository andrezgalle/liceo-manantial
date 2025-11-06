"use client";
import { useEffect, useState } from "react";
import Header from "@/components/global/header/Header";
import styles from "./formSectionContact.module.css";
import FormContact from "@/components/contact/formContact/FormContact";
import { animateFormContactSection } from "@/animations/contact/animationsContact";
import { animateFooter } from "@/animations/global/footer/animations";
import json from "@/utils/languagesForm.json";

export default function FormSectionContact() {
  useEffect(() => {
    animateFormContactSection();
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
    <section className="formContact-section">
      <div className="header">
        <Header state="black" />
      </div>

      <div className={`${styles.container} formContact-container`}>
        <h1>
          {language === "es" ? json.es.mainTitle : json.en.mainTitle}
        </h1>
        <p>{language === "es" ? json.es.secondTitle : json.en.secondTitle}</p>
        <FormContact />
      </div>
    </section>
  );
}
