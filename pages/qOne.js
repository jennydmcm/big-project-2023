import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/QOne.module.css';

export default function landingPage() {
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
                <div className={styles.card}>
                    <h1>experience</h1>
                    <p>do you have any experience <br />with drug use, either<br /> personally or through <br /> someone you know?</p>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.answerOne}>
                        <button>i have personally used <br /> drugs in the past</button>
                    </div>
                    <div className={styles.answerTwo}>
                        <button>someone close to me <br /> has used drugs</button>
                    </div>
                </div>
            </main>
        </>
    )
}