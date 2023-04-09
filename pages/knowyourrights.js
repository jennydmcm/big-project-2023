import Head from "next/head";
import styles from '@/styles/Rights.module.css'
import Logomark from "@/components/Logo";
import Hamburger from "@/components/Hamburger"
import Image from "next/image";
import icon from '@/public/samaritan.svg'

export default function knowYourRights() {
    return (
        <>
            <Head>
                <title>naloxONE</title>
                <link rel="icon" href="/icons/favicon.svg" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Figtree&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
                </style>
            </Head>
            <main className={styles.main}>
                <div className={styles.navbar}>
                    <Logomark className={styles.logomark} />
                    <Hamburger className={styles.hamburger} />
                </div>
                <h1 className={styles.title}>good samaritan <br></br>drug overdose act</h1>
                <Image src={icon} className={styles.img} />
                <h2 className={styles.subtitle}>are you aware of the<br></br>Good Samaritan<br></br>Drug Overdose Act?</h2>
                <h2 className={styles.quote}>“No one who seeks emergency medical or law enforcement assistance because that person, or another person, is suffering from an overdose is to be charged or convicted under subsection 4(1)”</h2>
                <h2 className={styles.source}>(Consolidated federal laws of Canada, good samaritan drug overdose act, 2023)</h2>
                <div className={styles.info1}>
                    <h3 className={styles.listTitle}>This act <i>protects </i>individuals that:</h3>
                    <li className={styles.list}>Seek emergency support during overdose (including the person experiencing it) </li>
                    <li className={styles.list}>Leave or stay from the overdose scene before professional help arrives</li>
                    <li className={styles.list}>Possession charges of a controlled substance</li>
                </div>
                <div className={styles.info2} >
                    <h3 className={styles.witness}>If you’re a witness:</h3>
                    <li className={styles.list}>Possession charges of a controlled substances</li>
                    <li className={styles.list}>Be prepared - carry naloxone if you suspect an overdose</li>
                    <li className={styles.list}>Provide first aid (CPR) until emergency help arrives</li>
                    <li className={styles.list}>Remain calm and reassure the person</li>
                </div>

                <h2 className={styles.psa}>Tell others about the Good Samaritan Drug Overdose Act – you could save a life. </h2>
            </main >
        </>
    )

}