import { ItemChooseUsType } from '@/types'
import styles from './itemChooseUs.module.css'

type ItemChooseUsProps = {
  item: ItemChooseUsType
}

export default function ItemChooseUs({ item }: ItemChooseUsProps) {
  const { title, description, active } = item;
  return (
    <article className={`${active ? 'active' : ''} ${styles.card}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )

}
