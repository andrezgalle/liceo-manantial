import Image from 'next/image';
import styles from './articleTestimonials.module.css';
import { TestimonialProps } from '@/types';


type ArticleTestimonialsProps = {
    testimonial: TestimonialProps

}

export default function ArticleTestimonials({ testimonial }: ArticleTestimonialsProps) {
    return (
        <article className={styles.article}>
            <Image
                src="/resources/home/testimonials/quote.svg"
                alt="quote icon"
                width={50}
                height={50}
                className={styles.image}
            />

            <div className={styles.content}>
                <p>{testimonial.paragraph}</p>

                <div className={styles.author}>
                    <p>{testimonial.author}</p>
                    <p className={styles.role}>{testimonial.role}</p>
                </div>
            </div>

        </article>
    )
}
