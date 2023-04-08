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
                    <h2 className={styles.title} >lesson 4:</h2>
                    <h2 className={styles.subtitle} >administering<br></br>naloxone injections</h2>
                </div>
                <Image src={arrow} />


            </div>




        </>
    )
}