import { useState, useEffect } from 'react';
import styles from '@/components/Introduction/Introduction.module.css';

const IntroductionModal = ({ handleCloseModal }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasShownModal = localStorage.getItem('hasShownModal');
    if (!hasShownModal) {
      setShow(true);
      localStorage.setItem('hasShownModal', true);
    }
  }, []);

  return (
    <>
      {show && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              X
            </button>
            <img src="/girl.svg" alt="Girl" className={styles.modalImg} />
            <h3 className={styles.modalHeading}>Welcome to our Naloxone web app!</h3>
            <p className={styles.modalText}>
              This app is designed to help individuals learn about and access naloxone, a medication used to reverse opioid overdoses. We hope you find it helpful!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroductionModal;
