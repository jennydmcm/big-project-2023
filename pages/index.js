import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/QOne.module.css';
import Quiz from '@/components/Quiz/index';
import quizData from '@/data/questions.json';
import IntroductionModal from '../components/IntroductionModal';

export default function landingPage() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 5000); // 5 seconds
  }, []);

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
      <IntroductionModal show={showModal} />
      <main className={styles.main}>
        <Quiz data={quizData} />
      </main>
    </>
  );
}

