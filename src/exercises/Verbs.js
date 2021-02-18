import React, { useState, useCallback } from "react"
import "./Verbs.css"

export default function Verbs() {
  const correctAnswers = {
    q1: "bin",
    q2: "bin",
    q3: "habe",
    q4: "ist",
    q5: "haben",
    q6: "sind",
    q7: "sind",
    q8: "ist",
    q9: "sind",
    q10: "haben",
    q11: "Issabela ist Schüllerin",
    q12: "Sie wird am 1.April sieben Jahre alt",
    q13: "Ich habe am 3.November Geburstag",
    q14: "Dann werde ich sieben Jahre alt",
    q15: "Heute ist das Wetter schlecht",
    q16: "Morgen wird es besser",
    q17: "t",
    q18: "t",
    q19: "en",
    q20: "en",
    q21: "t",
    q22: "e",
    q23: "e",
  }

  const [answers, setAnswers] = useState({})
  const [quizStatus, setQuizStatus] = useState({})
  const useForceUpdate = () => {
    const [, setTick] = useState(0)
    const update = useCallback(() => {
      setTick((tick) => tick + 1)
    }, [])
    return update
  }
  const forceUpdate = useForceUpdate()

  const checkAnswers = () => {
    let status = quizStatus
    for (const answer in answers) {
      status[answer] =
        answers[answer].toLowerCase() === correctAnswers[answer].toLowerCase()
    }
    setQuizStatus(status)
    forceUpdate()
  }

  const handleChange = (e) => {
    let ans = answers
    ans[e.target.name] = e.target.value
    setAnswers(ans)
  }

  return (
    <>
      <div>
        <h2 className='title'>Verbs</h2>
        <p className='introparag'>
          Ü1. Was ist das? Ergänzen Sie "Sein" oder "Haben" in der richtigen
          Form.
        </p>
        <p className='introparag'>
          Das{" "}
          <input
            className='text'
            name='q1'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q1") ? (
            ""
          ) : quizStatus.q1 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q1}</span>
          )}{" "}
          ich. Ich{" "}
          <input
            className='text'
            name='q2'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q2") ? (
            ""
          ) : quizStatus.q2 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q2}</span>
          )}{" "}
          sieben Jahre alt. Ich{" "}
          <input
            className='text'
            name='q3'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q3") ? (
            ""
          ) : quizStatus.q3 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q3}</span>
          )}{" "}
          eine Schwester. Sie{" "}
          <input
            className='text'
            name='q4'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q4") ? (
            ""
          ) : quizStatus.q4 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q4}</span>
          )}{" "}
          Fußballerina. Wir{" "}
          <input
            className='text'
            name='q5'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q5") ? (
            ""
          ) : quizStatus.q5 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q5}</span>
          )}{" "}
          auch zwei Brüder, Leo und Max. Sie{" "}
          <input
            className='text'
            name='q6'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q6") ? (
            ""
          ) : quizStatus.q6 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q6}</span>
          )}{" "}
          noch klein, sie{" "}
          <input
            className='text'
            name='q7'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q7") ? (
            ""
          ) : quizStatus.q7 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q7}</span>
          )}{" "}
          erst für Jahre alt. Und das{" "}
          <input
            className='text'
            name='q8'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q8") ? (
            ""
          ) : quizStatus.q8 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q8}</span>
          )}{" "}
          ist Dora. Wir{" "}
          <input
            className='text'
            name='q9'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q9") ? (
            ""
          ) : quizStatus.q9 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q9}</span>
          )}{" "}
          gute Freundinnen. Wir{" "}
          <input
            className='text'
            name='q10'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q10") ? (
            ""
          ) : quizStatus.q10 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q10}</span>
          )}{" "}
          viele Hobbys.
        </p>
      </div>
      <div>
        <p className='introparag'>Ü2. Schreiben Sie die Sätze. </p>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            1. Issabela/Schüllerin/sein
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q11'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q11") ? (
              ""
            ) : quizStatus.q11 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q11}</span>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            2. sie/am 1.April/sieben Jahre alt/werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q12'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q12") ? (
              ""
            ) : quizStatus.q12 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q12}</span>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            3. Ich/am 3.November/Geburstag/haben
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q13'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q13") ? (
              ""
            ) : quizStatus.q13 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q13}</span>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            4. dann/ich/sieben Jahre alt/ werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q14'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q14") ? (
              ""
            ) : quizStatus.q14 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q14}</span>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            5. heute/das Wetter/schlecht/sein
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q15'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q15") ? (
              ""
            ) : quizStatus.q15 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q15}</span>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            6. morgen/es/besser/werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
              name='q16'
              onChange={handleChange}
            />
            {!quizStatus.hasOwnProperty("q16") ? (
              ""
            ) : quizStatus.q16 ? (
              <i className='fas fa-check checkMark'></i>
            ) : (
              <span className='incorrect'>{correctAnswers.q16}</span>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className='introparag'>
          Ü3. Was macht was? Unterstreichen Sie das Subject und ergänzen Sie die
          Endungen.
        </p>
        <p className='introparag'>
          Familie Bahr wonhn<em>t</em> in Berlin. Herr Bahr arbeitet
          <input
            className='text'
            name='q17'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q17") ? (
            ""
          ) : quizStatus.q17 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q17}</span>
          )}{" "}
          in einem Krankenhaus. Er komm
          <input
            className='text'
            name='q18'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q18") ? (
            ""
          ) : quizStatus.q18 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q18}</span>
          )}{" "}
          aus Hamburg. Herr und Frau Bahr und die beiden Kinder Lisa und Felix
          leb
          <input
            className='text'
            name='q19'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q19") ? (
            ""
          ) : quizStatus.q19 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q19}</span>
          )}{" "}
          schon zhen Jahre in Berlin. "Wir leb
          <input
            className='text'
            name='q20'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q20") ? (
            ""
          ) : quizStatus.q20 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q20}</span>
          )}{" "}
          gern in Berlin", sag
          <input
            className='text'
            name='q21'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q21") ? (
            ""
          ) : quizStatus.q21 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q21}</span>
          )}{" "}
          Lisa, "ich find
          <input
            className='text'
            name='q22'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q22") ? (
            ""
          ) : quizStatus.q22 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q22}</span>
          )}{" "}
          es hier richtig gut. Aber später geh
          <input
            className='text'
            name='q23'
            type='text'
            onChange={handleChange}
          ></input>
          {!quizStatus.hasOwnProperty("q23") ? (
            ""
          ) : quizStatus.q23 ? (
            <i className='fas fa-check checkMark'></i>
          ) : (
            <span className='incorrect'>{correctAnswers.q23}</span>
          )}{" "}
          ich nach London."
        </p>
        <div>
          <button className='check' onClick={() => checkAnswers()}>
            <span>
              <i className='fa fa-check fa-fw'></i>Check answers
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
