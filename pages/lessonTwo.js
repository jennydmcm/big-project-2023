import { useState } from 'react';
import styles from '@/styles/QTwo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';


const images = [
  '/lessontwopageone.svg',
  '/lessontwopagetwo.svg',
  '/lessontwopagethree.svg',
  '/checkmark.svg',
]

const data = [
  {
    "title": "spotting an overdose",
    "information": "Here is how to administer a nalaxone injection.",
    "options": ["Next"]

  },
  {
    "title": "spotting an overdose",
    "header": "Signs + Symptoms",
    "information": "Extremely small pupils, Cold + clammy skin, Dizziness/confusion, Drowsiness, Choking, gurgling, snoring sounds, Slow/no breathing", 
    options: ["Back", "Next"]
  },
  {
    "title": "spotting an overdose",
    "header": "Responding to overdose",
    "information": "Call 911 right away, Give Naloxone while waiting for help , Follow the steps in your naloxone kit/from emergency help line operator, Provide another naloxone dose if needed",
    options: ["Back", "Next"]
  },
  {
    "title": "spotting an overdose",
    "information": "Lesson Complete!",
    "options": ["Next Lesson"]
  }
];

export default function IndexPage() {
  const [currentData, setCurrentData] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const router = useRouter();

  const handleOptionClick = (option) => {
    if (option === 'Back') {
      setCurrentData((currentData) => currentData - 1);
      setCurrentImage((currentImage) => currentImage - 1);
    } else if (option === 'Next') {
      if (currentData < data.length - 1) {
        setCurrentData((currentData) => currentData + 1);
        setCurrentImage((currentImage) => currentImage + 1);
      }
    } else if (option === 'Next Lesson') {
      router.push('/lessonThree');
    }
  };
  
  const isLastPage = currentData === data.length - 1;
  const isFirstPage = currentData === 0;


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



