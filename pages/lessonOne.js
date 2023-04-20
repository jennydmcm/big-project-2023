import { useState } from 'react';
import styles from '@/styles/QOne.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logomark from '@/components/Logo';
import Hamburger from '@/components/Hamburger'



const images = [
  '/lessononepageone.svg',
  '/lessononepagetwo.svg',
  '/lessononepagethree.svg',
  '/lessononepagefour.svg',
  '/checkmark.svg',
]


const data = [
  {
    "title": "nalaxone, what is it?",
    "information": "Naloxone is a drug that can quickly and temporarily reverse the effects of opioid overdoses.",
    "options": ["Next"]
  },
  {
    "title": "nalaxone, what is it?",
    "header": "How effective is Nalaxone?",
    "information": "Naloxone's effects last for a relatively short period of time, varying from 20 - 90 minutes. However, opioids tend to remain active in the body for a longer duration. It’s possible for naloxone's effects to wear off before the opioids have been eliminated from the body, which can result in a recurrence of breathing problems.",
    "options": ["Back", "Next"]
  },
  {
    "title": "nalaxone, what is it?",
    "header": "Who can take Nalaxone?",
    "information": "Naloxone is a safe medication that can be used by people of all ages. It's effective only if there are opioids present in the body’s system, and there's no way to misuse it. Naloxone does not lead to dependency, making it a safe option for those who need it. It's highly recommended to keep a naloxone kit within reach in case of an emergency.",
    "options": ["Back", "Next"]
  },
  {
    "title": "nalaxone, what is it?",
    "information": "A single dose of naloxone might not be enough to fully reverse the effects of an opioid overdose. Additional doses may be required. The amount, type, and how the opioid was ingested (Ex. swallowing pills/injecting), can impact the need for repeat administration of Naloxone.",
    "options": ["Back", "Next"]
  },
  {
    "title": "nalaxone, what is it?",
    "information": "Lesson Complete!",
    "options": ["Next Lesson"]
  }
]

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
      router.push('/lessonTwo');
    }
  };

  const isLastPage = currentData === data.length - 1;
  const isFirstPage = currentData === 0;


  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Logomark className={styles.logomark} />

        <Hamburger className={styles.hamburger} />
      </div>
      <h1 className={styles.header}>{data[currentData].title}</h1>
      <Image className={styles.image} src={images[currentImage]} alt={`Image ${currentImage + 1}`} width={200} height={200} />
      {data[currentData].header && <h2 className={styles.header2}>{data[currentData].header}</h2>}
      <p className={styles.captions} style={{ fontSize: '14px' }}>{data[currentData].information}</p>
      <div>
        {data[currentData].options.map((option) => (
          <button className={styles.button} onClick={() => handleOptionClick(option)} key={option} style={{ width: '100%', height: '50px', margin: '10px 0' }}>{option}</button>
        ))}
      </div>
    </div>
  );
}  