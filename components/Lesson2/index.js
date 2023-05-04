import styles from './Lesson2.module.css'
import Image from 'next/image'
import pill from '@/public/icons/pill.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson2() {
    return (
        <>
            <div className={styles.container}>
                <Image className={styles.icon} src={pill} />
                <div className={styles.textbox}>
                    <h2 className={styles.title}>Lesson 2:</h2>
                    <h2 className={styles.subtitle}>Spotting an Overdose</h2>
                    <p className={styles.description}>
                        Knowing the signs of an overdose can help you take action quickly and potentially save a life.
                    </p>
                </div>
                <div className={styles.arrowContainer}>
                    <Image className={styles.arrow} src={arrow} />
                </div>

            </div>




        </>
    )
}