import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/components/quizScreen/Quiz.module.css';
import quizData from '@/data/questions.json';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswerClick = (answerIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = answerIndex;
        setAnswers(updatedAnswers);
        setCurrentQuestion(currentQuestion + 1);
    };

    const renderCurrentQuestion = () => {
        const { title, question, options } = quizData[currentQuestion];
        return (
            <div className={styles.card}>
                <h1>{title}</h1>
                <p>{question}</p>
                {options.map((option, index) => (
                    <div key={index} className={styles.answer}>
                        <button onClick={() => handleAnswerClick(index)}>{option}</button>
                    </div>
                ))}
            </div>
        );
    };

    const renderResults = () => {
        return (
            <div className={styles.card}>
                <h1>review</h1>
                <p>summary of your answers</p>
            </div>
        );
    };

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
            <main className={styles.main}>
                {currentQuestion < quizData.length ? renderCurrentQuestion() : renderResults()}
                <div className={styles.buttons}>
                    {currentQuestion > 0 && <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>back</button>}
                    {currentQuestion < quizData.length - 1 ? (
                        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>next question</button>
                    ) : (
                        <button>submit</button>
                    )}
                </div>
            </main>
        </>
    );
}