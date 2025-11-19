"use client";

import Image from "next/image";
import styles from "./itemGroupOurUs.module.css";
import { useEffect, useState } from "react";

type ItemProps = { 
    item: {
        id: number;
        image: string;
        title: string;
        description: string;
    }
}

export default function ItemGroupOurUs({ item }: ItemProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(item.description);
  }, [item.description]);

  return (
    <div key={item.id} className={`${styles.card} card-item-ourus`}>
      <Image
        src={item.image}
        alt={item.title}
        width={64}
        height={64}
        className={`${styles.image} image-item-ourus`}
      />
      <h3 className={`${styles.title} title-item-ourus`}>{item.title}</h3>
      <p
        className={`${styles.description} description-item-ourus`}
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    </div>
  );
}
