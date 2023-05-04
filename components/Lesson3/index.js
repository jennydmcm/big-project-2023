import styles from './Lesson3.module.css'
import Image from 'next/image'
import spray from '@/public/icons/spray.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson3() {
    return (
        <>
            <div href="http://localhost:3000/contact" className={styles.container}>
                <Image className={styles.icon} src={spray} />
                <div className={styles.textbox}>
                    <h2 className={styles.title}>Lesson 3:</h2>
                    <h2 className={styles.subtitle}> Administering<br />Naloxone Spray</h2>
                    <p className={styles.description}>
                        Administering naloxone spray,<br />a simple and potentially life-saving process.
                    </p>
                </div>
                <div className={styles.arrowContainer}>
                    <Image className={styles.arrow} src={arrow} />
                </div>

            </div>




        </>
    )
}