import { useState } from 'react';


const data = [
  {
      "title": "nalaxone, what is it?",
      "information": "Naloxone is a drug that can quickly and temporarily reverse the effects of opioid overdoses.",
      "options": [
           "Back to Menu", 
           "Continue"
      ]

  },


  {
      "title": "nalaxone, what is it?",
      "header": "How effective is Nalaxone?",
      "information": "Naloxone's effects last for a relatively short period of time, varying from 20 - 90 minutes. However, opioids tend to remain active in the body for a longer duration. It’s possible for naloxone's effects to wear off before the opioids have been eliminated from the body, which can result in a recurrence of breathing problems.",
      "options": [ 
          "Back to Menu", 
          "Continue" 
      ]

  },

  {
      "title": "nalaxone, what is it?",
      "header": "Who can take Nalaxone?",
      "information": "Naloxone is a safe medication that can be used by people of all ages. It's effective only if there are opioids present in the body’s system, and there's no way to misuse it. Naloxone does not lead to dependency, making it a safe option for those who need it. It's highly recommended to keep a naloxone kit within reach in case of an emergency.",
      "options": [ 
          "Back to Menu", 
          "Continue" 
      ]

  },

  {
      "title": "nalaxone, what is it?",
      "information": "A single dose of naloxone might not be enough to fully reverse the effects of an opioid overdose. Additional doses may be required. The amount, type, and how the opioid was ingested (Ex. swallowing pills/injecting), can impact the need for repeat administration of Naloxone.",
      "options": [
           "Back to Menu", 
           "Continue"
      ]

  },

  {
      "title": "nalaxone, what is it?",
      "information": "Lesson Complete!",
      "options": [
           "Next Lesson", 
           "Menu"
      ]

  }
]

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





