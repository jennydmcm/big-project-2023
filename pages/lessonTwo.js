import { useState } from 'react';

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
    <div>
      <h1>{data[currentData].title}</h1>
      {data[currentData].header && <h2>{data[currentData].header}</h2>}
      <p>{data[currentData].information}</p>
      <ul>
        {data[currentData].options.map((option) => (
          <li key={option}>
            <button onClick={() => handleOptionClick(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

