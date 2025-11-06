import Image from 'next/image';
import styles from './cardMaindHome.module.css';
import { CardMainProps } from '@/types';

type CardMainHomeProps = {
    cardProps: CardMainProps
}

export default function CardMainHome({ cardProps }: CardMainHomeProps) {
    const { imageUrl, title, description } = cardProps || {};
    return (
        <article className={`${styles.card} cardMainHome`}>
            <Image
                src={imageUrl || ""}
                alt={title || "Imagen del card"}
                width={50}
                height={50}
            />
            <h3 className={styles.title}></h3>
            <Image
                src="/resources/home/main/line-card.svg"
                alt="Línea decorativa"
                width={50}
                height={2}
                className={styles.line}

            />
            <p>{description}</p>
        </article>
    )
}
