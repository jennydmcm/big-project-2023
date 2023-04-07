import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Hamburger from '@/components/Hamburger'
import Logomark from '@/components/logo';
import Homeheroimg from '@/components/Home-hero-img';

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
          <h3 className={styles.introP} >we have easy-to-follow lessons on how to use naloxone and offer information on how to spot the signs of an overdose. Find your local harm reduction services and <b>know your rights!</b>
          </h3>
          <h1 className={styles.header} >your lessons</h1>
        </div>
        <div className={styles.lessons}>

        </div>


      </main>
    </>
  )
}



