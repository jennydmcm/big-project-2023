import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/QOne.module.css';
import Quiz from '@/components/Quiz/index';
import quizData from '@/data/questions.json';

<<<<<<< HEAD
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
=======
export default function homePage() {
  return (
    <>
      <Head>
        <title>naloxONE</title>
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <Logomark className={styles.logomark} />

          <Hamburger className={styles.hamburger} />
        </div>
        <Homeheroimg />
        <div className={styles.introText}>
          <h1 className={styles.header} >welcome!</h1>
          <h3 className={styles.introP} >we have easy-to-follow lessons on how to use naloxone and offer information on how to spot the signs of an overdose. find your local harm reduction services and <b>know your rights!</b>
          </h3>
          <h1 className={styles.header} >your lessons</h1>
        </div>
        <div className={styles.lessons}>
          <Link style={{
            textDecoration: 'none'

          }} href="/lessonOne">
            <Lesson1 />
          </Link >
          <Link style={{ textDecoration: 'none' }} href="/lessonTwo">
            <Lesson2 />
          </Link >
          <Link style={{ textDecoration: 'none' }} href="/lessonThree">
            <Lesson3 />
          </Link >
          <Link style={{ textDecoration: 'none' }} href="/lessonfour">
            <Lesson4 />
          </Link >
        </div>
      </main >
    </>
  )
>>>>>>> origin/procedures
}
