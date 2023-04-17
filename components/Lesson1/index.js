import styles from './Lesson1.module.css'
import Image from 'next/image'
import naloxone from '@/public/icons/naloxone.svg'
import arrow from '@/public/icons/arrow.svg'

export default function Lesson1() {
    return (
        <>
            <div href="http://localhost:3000/contact" className={styles.container}>
                <Image className={styles.icon} src={naloxone} />
                <div className={styles.textbox}>
                    <h2 className={styles.title} >lesson 1:</h2>
                    <h2 className={styles.subtitle} >what is naloxone?</h2>
                </div>
                <Image className={styles.arrow} src={arrow} />


            </div>
            <div>
                
            </div>



        </>
    )
}