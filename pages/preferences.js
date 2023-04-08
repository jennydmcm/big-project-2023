import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/QOne.module.css';
import Quiz from '@/components/quizScreen/Index';
import quizData from '@/data/questions.json';

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
                <Quiz data={quizData} />
            </main>
        </>
    )
}