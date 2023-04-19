import { useState } from 'react';
import styles from '@/styles/QThree.module.css';


const data = [
  {
    title: 'administering nalaxone spray',
    information: 'Here’s how to administer nalaxone nasal spray.',
    options: ['Back to Menu', 'Continue'],
  },
  {
    title: 'administering nalaxone spray',
    header: 'How effective is Nalaxone?',
    information: 'Lay the person on their back to receive their dosage. Remove the nasal spray from the box.',
    options: ['Back to Menu', 'Continue'],
  },
  {
    title: 'administering nalaxone spray',
    header: 'Who can take Nalaxone?',
    information: 'Hold the spray with your thumb on the bottom of the red plunger. Your first and middle fingers should be on either side of the nozzle.',
    options: ['Back to Menu', 'Continue'],
  },
  {
    title: 'administering nalaxone spray',
    information: 'Provide support under the person’s neck with your hand and tilt their head back. Gently insert the tip of the nozzle into one nostril until your first and middle fingers reach the bottom of their nose.',
    options: ['Back to Menu', 'Continue'],
  },
  {
    title: 'administering nalaxone spray',
    information: 'Firmly press the red plunger to spray into their nose. Remove the spray from the nostril after giving the dosage.',
    options: ['Back to Menu', 'Continue'],
  },
  {
    title: 'administering nalaxone spray',
    information: 'Lesson Complete!',
    options: ['Next Lesson', 'Menu'],
  },
];

export default function IndexPage() {
  const [currentData, setCurrentData] = useState(0);

  const handleOptionClick = (option) => {
    if (option === 'Back to Menu') {
      setCurrentData(0);
    } else if (option === 'Continue') {
      setCurrentData(currentData + 1);
    } else if (option === 'Next Lesson') {
      setCurrentData(currentData + 1);
    } else if (option === 'Menu') {
      setCurrentData(0);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>{data[currentData].title}</h1>
      {data[currentData].header && <h2 className={styles.header2}>{data[currentData].header}</h2>}
      <p className={styles.captions}>{data[currentData].information}</p>
      <ul>
        {data[currentData].options.map((option) => (
          <li key={option}>
            <button className={styles.button} onClick={() => handleOptionClick(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
