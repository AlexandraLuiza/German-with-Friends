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
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

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

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <div>
            <button className='restart'>Restart</button>
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
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div>
            <button className='restart'>Restart</button>
          </div>
        </>
      )}
    </div>
  )
}
