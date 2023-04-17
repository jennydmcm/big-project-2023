import React from 'react';
import Link from 'next/link';
import styles from '@/styles/QFour.module.css';
import Head from 'next/head';
import Logomark from '@/components/Logo';
import { useState } from 'react';
import Image from 'next/image';
import backarrow from 'public/icons/backarrow.svg'
import nextarrow from 'public/icons/nextarrow.svg'
import { useRouter } from 'next/router';

const images = [

    '/lesson-four/injectionhome.svg',
    '/lesson-four/page1.svg',
    '/lesson-four/page2.svg',
    '/lesson-four/page3.svg',
    '/lesson-four/page4.svg',
    '/lesson-four/page5.svg',
    '/lesson-four/page6.svg',
    '/complete.svg',
]


const captions = [
    'Here’s how to administer a naloxone injection',
    'Remove the device from the packaging. Injection naloxone typically comes in a pre-filled syringe with a needle attached.',
    'Find a large muscle in the person’s upper arm or thigh. The injection should be given into the muscle.',
    'Clean the injection site with an alcohol pad. This helps to prevent infection.',
    'Insert the needle into the muscle at a 90-degree angle. Push the plunger down all the way to inject the naloxone.',
    'After injecting, remove the needle and massage the injection site for a few seconds to help the medication spread through the muscle. Call emergency services right away and stay with the person until help arrives.',
    'It’s important to note that nasal Naloxone is a temporary measure and does not replace emergency medical care. Seek medical attention right away after administering Naloxone, as the effects of the overdose can return once the Naloxone wears off.',
    'lesson complete!'
]
export default function lessonFour() {

    const router = useRouter();

    function handleReturn() {
        router.push('/');
    }

    const [currentImage, setCurrentImage] = useState(0)

    const handleNext = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1)
        }
    }

    const handleBack = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        }
    }



    return (<>

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

            </div>
            <div className={styles.lesson}>
                <h1 className={styles.title} >administering a naloxone injection</h1>
                <img className={styles.image} src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
                <p className={styles.captions} >{captions[currentImage]}</p>
                <div className={styles.buttons}>
                    {currentImage > 0 && (
                        <button className={styles.backbtn} onClick={handleBack}>
                            <Image className={styles.backarrow} src={backarrow} />
                            Back</button>
                    )}

                    {currentImage < images.length - 1 ? (
                        <button className={styles.nextbtn} onClick={handleNext}>

                            Next<Image className={styles.nextarrow} src={nextarrow} /></button>
                    ) : (
                        <button className={styles.returnbtn} onClick={handleReturn}>

                            Return to Menu <Image className={styles.nextarrow} src={nextarrow} /></button>
                    )}
                </div>

            </div>
        </main>
    </>

    )
};





