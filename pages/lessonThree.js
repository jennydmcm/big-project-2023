import { useState } from 'react';
import styles from '@/styles/QThree.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';


const images = [
  '/lessonthreepageone.svg',
  '/lessonthreepagetwo.svg',
  '/lessonthreepagethree.svg',
  '/lessonthreepagefour.svg',
  '/lessonthreepagefive.svg',
  '/checkmark.svg',
]

const data = [
  {
    title: 'administering nalaxone spray',
    information: 'Here’s how to administer nalaxone nasal spray.',
    options: ["Next"]

  },
  {
    title: 'administering nalaxone spray',
    header: 'How effective is Nalaxone?',
    information: 'Lay the person on their back to receive their dosage. Remove the nasal spray from the box.',
    options: ["Back", "Next"]
  },
  {
    title: 'administering nalaxone spray',
    header: 'Who can take Nalaxone?',
    information: 'Hold the spray with your thumb on the bottom of the red plunger. Your first and middle fingers should be on either side of the nozzle.',
    options: ['Back to Menu', 'Continue'],
    "options": ["Back", "Next"]
  },
  {
    title: 'administering nalaxone spray',
    information: 'Provide support under the person’s neck with your hand and tilt their head back. Gently insert the tip of the nozzle into one nostril until your first and middle fingers reach the bottom of their nose.',
    options: ['Back to Menu', 'Continue'],
    "options": ["Back", "Next"]
  },
  {
    title: 'administering nalaxone spray',
    information: 'Firmly press the red plunger to spray into their nose. Remove the spray from the nostril after giving the dosage.',
    options: ['Back to Menu', 'Continue'],
    "options": ["Back", "Next"]
  },
  {
    title: 'administering nalaxone spray',
    information: 'Lesson Complete!',
    options: ['Next Lesson', 'Menu'],
    "options": ["Next Lesson"]
  },
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
      router.push('/lessonFour');
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