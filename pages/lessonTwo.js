import { useState } from 'react';
import styles from '@/styles/QTwo.module.css';
import Image from 'next/image';

const images = [
  '/lessontwopageone.svg',
  '/lessontwopagetwo.svg',
  '/lessontwopagethree.svg',
  '/lessontwopagefour.svg',
  '/checkmark.svg',
]

const data = [
  {
    "title": "spotting an overdose",
    "information": "Here is how to administer a nalaxone injection.",
    "options": [
      "Back to Menu", 
      "Continue"
    ]
  },
  {
    "title": "spotting an overdose",
    "header": "Signs + Symptoms",
    "information": "Extremely small pupils, Cold + clammy skin, Dizziness/confusion, Drowsiness, Choking, gurgling, snoring sounds, Slow/no breathing", 
    "options": [
      "Back to Menu", 
      "Continue" 
    ]
  },
  {
    "title": "spotting an overdose",
    "header": "Responding to overdose",
    "information": "Call 911 right away, Give Naloxone while waiting for help , Follow the steps in your naloxone kit/from emergency help line operator, Provide another naloxone dose if needed",
    "options": [
      "Back to Menu", 
      "Continue" 
    ]
  },
  {
    "title": "spotting an overdose",
    "information": "Lesson Complete!",
    "options": [
      "Next Lesson", 
      "Menu"
    ]
  }
];

export default function IndexPage() {
  const [currentData, setCurrentData] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOptionClick = (option) => {
    if (option === 'Back to Menu') {
      setCurrentData(0);
      setCurrentImage(0);
    } else if (option === 'Continue') {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentData(currentData + 1);
        setCurrentImage(0);
      }
    } else if (option === 'Next Lesson') {
      setCurrentData(currentData + 1);
      setCurrentImage(0);
    } else if (option === 'Menu') {
      setCurrentData(0);
      setCurrentImage(0);
    }
  };


  return (
    <div className={styles.main}>
      <h1 className={styles.header}>{data[currentData].title}</h1>
      <Image className={styles.image} src={images[currentImage]} alt={`Image ${currentImage + 1}`} width={200} height={200} />
      {data[currentData].header && <h2 className={styles.header2}>{data[currentData].header}</h2>}
      <p className={styles.captions} style={{ fontSize: '14px' }}>{data[currentData].information}</p>
      <div>
        {data[currentData].options.map((option) => (
          <button className={styles.button} onClick={() => handleOptionClick(option)} key={option} style={{width: '100%', height: '50px', margin: '10px 0'}}>{option}</button>
        ))}
      </div>
    </div>
  );
}  



