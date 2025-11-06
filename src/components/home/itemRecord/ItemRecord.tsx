import { ItemRecordProps } from '@/types'
import Image from 'next/image'
import styles from './itemRecord.module.css'

type ItemsRecordProps = {
    ItemRecord: ItemRecordProps
}

export default function ItemRecord({ ItemRecord }: ItemsRecordProps) {
    return (
        <div className={styles.itemRecord}>
            <Image
                src={ItemRecord.iconUrl || ""}
                alt={ItemRecord.title || "Icono del item record"}
                width={60}
                height={60}
            />
            <div className={styles.textContainer}>
                <h3>{ItemRecord.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: ItemRecord.description || "" }}></p>
            </div>
        </div>  
    )
}
