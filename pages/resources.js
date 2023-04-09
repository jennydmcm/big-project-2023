import styles from '@/styles/Resources.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Logomark from '@/components/Logo'
import Hamburger from '@/components/Hamburger'
import hand from '@/public/resources.svg'
import { PieChart } from '@/components/Pie'
export default function Resources() {
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
                <div className={styles.header}>
                    <h1 className={styles.title}>resources</h1>
                    <Image src={hand} className={styles.img} ></Image>
                </div>
                <h3 className={styles.info}>Most pharmacies provide take-home naloxone kits without requiring a prescription. You can simply ask the pharmacist! <br></br><br></br>Additionally, certain provinces offer free take-home naloxone kits, and you can check with your province to find out where these kits can be obtained.</h3>
                <h1 className={styles.titleData}>data</h1>
                <h2 className={styles.chartTitle}>Contribution of drug poisoning deaths to changes in life expectancy from 2015 - 2017</h2>
                <PieChart className={styles.chart} />

                <h1 className={styles.titleData}>resources to visit</h1>
                <div className={styles.sites}>
                    <h3 className={styles.linkTitle}><b>Toward the Heart:</b></h3>
                    <li className={styles.about} >A harm reduction program provides naloxone training and free naloxone kits
                        Offers education on safer opioid use and overdose prevention.</li>
                    <li className={styles.link} >https://towardtheheart.com/naloxone</li>

                    <h3 className={styles.linkTitle}><b>Vancouver Coastal Health:</b></h3>
                    <li className={styles.about} >Offers free naloxone kits and training to people who use drugs and their loved ones </li>
                    <li className={styles.link}>https://www.vch.ca/en/service/<br></br>overdose-prevention-sites#wysiwyg--17351</li>

                    <h3 className={styles.linkTitle}><b>BC Centre for Substance Use:</b></h3>
                    <li className={styles.about} >Provides education and resources on substance use and addiction </li>
                    <li className={styles.link} >https://www.bccsu.ca/</li>

                    <h3 className={styles.linkTitle}><b>Government of British Columbia: </b></h3>
                    <li className={styles.about} >Provides education and resources on substance use and addiction</li>
                    <li className={styles.link} >https://www2.gov.bc.ca/gov/content<br></br>/overdose/naloxone-kit</li>

                </div>
            </main>

        </>
    )

}