import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/components/Quiz/Quiz.module.css';
import quizData from '@/data/questions.json';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const router = useRouter();

    const handleAnswerClick = (answerIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = answerIndex;
        setAnswers(updatedAnswers);

        if (currentQuestion === 0 && answerIndex === 2) {
            setCurrentQuestion(3);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };


    const renderCurrentQuestion = () => {
        const { title, question, options } = quizData[currentQuestion];
        const totalQuestions = quizData.length;
        const currentProgress = currentQuestion + 1;
        const progressPercentage = (currentProgress / totalQuestions) * 100;

        const letters = progressPercentage.toString().split("");

        return (
            <div className={styles.questionContainer}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressPercentage}>
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className={`${styles.progressLetter} bounce`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {letter}
                            </span>
                        ))}
                        {"%"} completed
                    </div>
                    <div className={styles.progressWrapper}>
                        <div
                            className={styles.progress}
                            style={{ width: `${progressPercentage}%` }}
                        />
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
        const familiarityAnswer = answers[3];
        let message = '';
        let lessonLink = '';

        if (familiarityAnswer === 0) {
            message = "If you know a bit about naloxone and recreational opioid use, it's important to keep educating yourself about the risks and benefits of opioid use. In case of an emergency, it's essential to have access to naloxone. If you or someone you know is struggling with opioid addiction, reach out to a healthcare provider or addiction specialist for support and guidance.";
            lessonLink = "./pages/lessonOne";
        } else if (familiarityAnswer === 1) {
            message = "If you've heard of naloxone and recreational opioid use, it's important to continue educating yourself on the topic to understand the potential risks and benefits. It's crucial to have access to naloxone in case of an emergency. If you or someone you know is dealing with opioid addiction, seeking guidance and support from a healthcare provider or addiction specialist can be helpful.";
            lessonLink = "./pages/lessonTwo";
        } else if (familiarityAnswer === 2) {
            message = "If you have a good understanding of naloxone and rec, as well as the risks of recreational opioid use, it's important to have access to Naloxone and know how to use it properly. Naloxone is available without a prescription at most pharmacies. You can also check with your local health department or community organizations to obtain a free naloxone kit. However, it's important to remember that naloxone is not a substitute for seeking medical care and counselling for addiction.";
            lessonLink = "./pages/lessonThree";
        } else {
            message = "If you have a thorough understanding of naloxone, its use, and the risks of recreational opioid use, it's important to continue educating yourself on the topic. Additionally, if you or someone you know is struggling with opioid addiction, seeking professional guidance and support is critical. Finding harm reduction services in your area can also be helpful.";
            lessonLink = "./pages/lessonFour";
        }

        return (
            <div className={styles.resultsContainer}>
                <div className={styles.card}>
                    <div className={styles.review}>
                        <h1>Review</h1>
                        <p>Summary of your answers:</p>
                    </div>
                    <div className={styles.results}>
                        {quizData.map((question, index) => {
                            const { title, options } = question;
                            const selectedOptionIndex = answers[index];
                            const selectedOption = selectedOptionIndex !== undefined ? options[selectedOptionIndex] : 'N/A';

                            return (
                                <div key={index} className={styles.result}>
                                    <div className={styles.userAnswers}>
                                        <h2 className={styles.headingResults}>{title}</h2>
                                        <p className={styles.cardOption}>{selectedOption}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {message && <div className={styles.message}>{message}
                    <div>
                        {familiarityAnswer === 0 &&
                            <div>
                                <div>Based on what you answered, we recommend learning Lesson 1 as a starting point!:</div>
                                <Link href="./pages/lessonOne">Lesson 1: What is Naloxone?</Link>
                            </div>
                        }
                    </div>
                    <div>
                        {familiarityAnswer === 1 &&
                            <div>
                                <div>Based on what you answered, we recommend starting on Lesson 2 for more information:</div>
                                <Link href="./pages/lessonTwo">Lesson 2: Spotting an Overdose</Link>
                            </div>
                        }
                    </div>
                    <div>
                        {familiarityAnswer === 2 &&
                            <div>
                                <div>Based on what you answered, we recommend starting on these lessons to further expand your knowledge!:</div>
                                <Link href="./pages/lessonThree">Lesson 3: Administering Naloxone Spray</Link>
                                <div>
                                    <Link href="./pages/lessonFour">Lesson 4: Administering Naloxone Injection</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>}

            </div>
        );
    };


    const handleContinueClick = () => {
        router.push('/home');
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
                    {currentQuestion > 0 && (
                        <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                            <span>&#8592; Back</span>
                        </button>
                    )}
                    {currentQuestion >= quizData.length && (
                        <button onClick={handleContinueClick}>
                            <span>Continue &#8594;</span>
                        </button>
                    )}
                </div>
            </main>
        </>
    );
}