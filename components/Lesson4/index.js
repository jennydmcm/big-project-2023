import styles from './Lesson4.module.css'
import Image from 'next/image'
import injection from '@/public/icons/injection.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson4() {
    return (
        <>
            <div className={styles.container}>
                <Image className={styles.icon} src={injection} />
                <div className={styles.textbox}>
                    <h2 className={styles.title} >Lesson 4:</h2>
                    <h2 className={styles.subtitle} >Administering<br />Naloxone Injections</h2>
                    <p className={styles.description}>
                        Administering a naloxone injection, a simple and potentially life-saving process.
                    </p>
                </div>
                <div className={styles.arrowContainer}>
                    <Image className={styles.arrow} src={arrow} />
                </div>

            </div>




        </>
    )
}