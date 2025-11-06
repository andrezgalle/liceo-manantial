import Image from 'next/image'
import styles from './itemAcademicLevel.module.css'
import type { ItemAcademicLevel } from '@/types'

type ItemAcademicLevelProps = {
    item: ItemAcademicLevel
}

export default function ItemAcademicLevel({item}:ItemAcademicLevelProps ) {
    const {title , description} = item;
    return (
        <article className={`${styles.itemAcademicLevel} itemAcademicLevel`}>
            <div className={styles.itemAcademicLevelContent}>
                <Image
                    src="/resources/home/academic-level/check.svg"
                    alt="check icon"
                    width={20}
                    height={20}
                />
                <p>{title}</p>
            </div>
            <p>{description}</p>
        </article>
    )
}
