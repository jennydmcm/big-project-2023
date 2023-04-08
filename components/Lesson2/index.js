import styles from './Lesson2.module.css'
import Image from 'next/image'
import pill from '@/public/icons/pill.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson2() {
    return (
        <>
            <div href="http://localhost:3000/contact" className={styles.container}>
                <Image className={styles.icon} src={pill} />
                <div className={styles.textbox}>
                    <h2 className={styles.title} >lesson 2:</h2>
                    <h2 className={styles.subtitle} >spotting an overdose</h2>
                </div>
                <Image className={styles.arrow} src={arrow} />


            </div>




        </>
    )
}