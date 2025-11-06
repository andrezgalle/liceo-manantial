"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./videoSectionOurUs.module.css";
import { animateVideoSectionOurUs } from "@/animations/nosotros/videoSectionOurUs/animations";

export default function VideoSectionOurUs() {
  useEffect(() => {
    animateVideoSectionOurUs();
  }, []);

  return (
    <section className={`${styles.container} section-video-ourus`}>
      <div className="video-container-ourus">
        <Image
          src="/resources/ourUs/videoSection/video.svg"
          alt="Video"
          width={800}
          height={400}
          className="video-image-ourus"
        />
      </div>
    </section>
  );
}
