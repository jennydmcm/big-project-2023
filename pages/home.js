import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Hamburger from '@/components/Hamburger'
import Logomark from '@/components/Logo';
import Homeheroimg from '@/components/Homeimg';
import Lesson1 from '@/components/Lesson1';
import Lesson2 from '@/components/Lesson2';
import Lesson3 from '@/components/Lesson3';
import Lesson4 from '@/components/Lesson4';
import IntroductionModal from '../components/IntroductionModal';


export default function homePage() {
  var title = process.env.NEXT_PUBLIC_TITLE;
  return (
    <>
    <IntroductionModal />
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
          <h1>{title}</h1>
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
          <Link style={{ textDecoration: 'none' }} href="/lessonFour">
            <Lesson4 />
          </Link >
        </div>
      </main >
    </>
  )
}



