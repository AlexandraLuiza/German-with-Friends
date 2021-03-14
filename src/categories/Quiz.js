import React, { useState } from "react"
import "./Quiz.css"

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is the article for "Hund"?',
      answerOptions: [
        { answerText: "der", isCorrect: true },
        { answerText: "die", isCorrect: false },
        { answerText: "das", isCorrect: false },
      ],
    },
    {
      questionText:
        'How do you conjugate "gehen" on 3rd person singular present?',
      answerOptions: [
        { answerText: "ging", isCorrect: false },
        { answerText: "geht", isCorrect: true },
        { answerText: "gehe", isCorrect: false },
      ],
    },
    {
      questionText: "How do you say ant in German?",
      answerOptions: [
        { answerText: "der Hund", isCorrect: false },
        { answerText: "die Emse", isCorrect: true },
        { answerText: "das Huhn", isCorrect: false },
      ],
    },
    {
      questionText: 'What is the plural form from "die Alpen"?',
      answerOptions: [
        { answerText: "die Alpen", isCorrect: true },
        { answerText: "die Alpe", isCorrect: false },
        { answerText: "die Älpen", isCorrect: false },
      ],
    },
    {
      questionText: 'What is the correct translation for "hospital"? ',
      answerOptions: [
        { answerText: "das Krankenhaus", isCorrect: true },
        { answerText: "das Haus", isCorrect: false },
        { answerText: "der Regenschirm", isCorrect: false },
      ],
    },
    {
      questionText: 'How would you write "a very nice friend"? ',
      answerOptions: [
        {
          answerText: "ein sehr netter Freund",
          isCorrect: true,
        },
        { answerText: "ein hohes Gebäude", isCorrect: false },
        { answerText: "ein grüner Baum", isCorrect: false },
      ],
    },
    {
      questionText:
        " Which of these sentences is written in the perfect tense? ",
      answerOptions: [
        { answerText: "Ich bin ins Kino gegangen.", isCorrect: true },
        { answerText: "Ich hätte einen Film gesehen.", isCorrect: false },
        { answerText: "Ich spielte Fußball.", isCorrect: false },
      ],
    },
    {
      questionText:
        " FUDGEBO (für, um, durch, gegen, entlang, bis, ohne) prepositions trigger which case? ",
      answerOptions: [
        { answerText: "Accusative", isCorrect: true },
        { answerText: "Dative", isCorrect: false },
        { answerText: "Genitive", isCorrect: false },
      ],
    },
    {
      questionText:
        " Which German case deals with possession (things like my brother's car, or the car of my brother)? ",
      answerOptions: [
        { answerText: "Genitive", isCorrect: true },
        { answerText: "Dative", isCorrect: false },
        { answerText: "Accusative", isCorrect: false },
      ],
    },
    {
      questionText:
        '  In the sentence "The teacher gives the children homework" what is the verb? ',
      answerOptions: [
        {
          answerText: "Homework",
          isCorrect: false,
        },
        {
          answerText: "Gives",
          isCorrect: true,
        },
        {
          answerText: "The children",
          isCorrect: false,
        },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleReset = () => {
    setScore(0)
    setShowScore(false)
    setCurrentQuestion(0)
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handleAnswerOptionBack = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion - 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <div>
            <button className='btn' onClick={() => handleReset()}>
              Restart
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='btn' key={answerOption.answerText}>
                {answerOption.answerText}
              </button>
            ))}
            <button className='btn' onClick={() => handleAnswerOptionClick()}>
              Next
            </button>
            <button
              className='btn nextback'
              onClick={() => handleAnswerOptionBack()}
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  )
}
