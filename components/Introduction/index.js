import { useState, useEffect } from 'react';
import styles from '@/components/Introduction/Introduction.module.css'

const IntroductionModal = ({ show, handleCloseModal }) => {

  return (
    <>
      {show && (
        <div className= {styles.modal-container}>
          <div className={styles.modal}>
            <button className={styles.close-button} onClick={handleCloseModal}>
              X
            </button>
            <img src="/girl.svg" alt="Girl" className={styles.modal.img} />
            <h3 className={styles.modal-heading}>Welcome to our Naloxone web app!</h3>
            <p className={styles.modal-text}>This app is designed to help individuals learn about and access naloxone, a medication used to reverse opioid overdoses. We hope you find it helpful!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroductionModal;
