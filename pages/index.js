import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Hamburger from '@/components/Hamburger'
import Logomark from '@/components/Logo';
import Homeheroimg from '@/components/Home-hero-img';

export default function homePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>


      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <Logomark className={styles.logomark} />

          <Hamburger className={styles.hamburger} />
        </div>
        <Homeheroimg />


      </main>
    </>
  )
}



