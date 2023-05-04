import styles from './Lesson1.module.css'
import Image from 'next/image'
import naloxone from '@/public/icons/naloxone.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson1() {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <Image className={styles.icon} src={naloxone} />
            </div>
            <div className={styles.textbox}>
                <h2 className={styles.title}>Lesson 1:</h2>
                <h2 className={styles.subtitle}>What is Naloxone?</h2>
                <p className={styles.description}>
                    Naloxone is a medication designed to rapidly reverse opioid overdose.
                    Learn more about it in this lesson.
                </p>
            </div>
            <div className={styles.arrowContainer}>
                <Image className={styles.arrow} src={arrow} />
            </div>
        </div>
    )
}