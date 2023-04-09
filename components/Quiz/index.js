import { useState } from 'react';
import Head from 'next/head';
import styles from '@/components/Quiz/Quiz.module.css';
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
        const totalQuestions = quizData.length;
        const currentProgress = currentQuestion + 1;
        const progressPercentage = (currentProgress / totalQuestions) * 100;

        return (
            <div className={styles.questionContainer}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressPercentage}>{`${progressPercentage}%`} completed</div>
                    <div className={styles.progressWrapper}>
                        <div className={styles.progress} style={{ width: `${progressPercentage}%` }} />
                    </div>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.question}>{question}</p>
                </div>
                <div className={styles.options}>
                    {options.map((option, index) => (
                        <div key={index} className={styles.answer}>
                            <button onClick={() => handleAnswerClick(index)}>{option}</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    const renderResults = () => {
        return (
            <div className={styles.card}>
                <h1>Review</h1>
                {quizData.map((question, index) => {
                    const { title, options } = question;
                    const selectedOptionIndex = answers[index];
                    const selectedOption = options[selectedOptionIndex];

                    return (
                        <div key={index} className={styles.result}>
                            <h2>{title}</h2>
                            <p>{selectedOption}</p>
                        </div>
                    );
                })}
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
                    {currentQuestion < quizData.length - 1 && <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>next question</button>}
                </div>
            </main>
        </>
    );
}
