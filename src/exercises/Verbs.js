import React from "react"
import "./Verbs.css"

const Verbs = () => {
  return (
    <>
      <div>
        <h2 className='title'>Verbs</h2>
        <p className='introparag'>
          Ü1. Was ist das? Ergänzen Sie "Sein" oder "Haben" in der richtigen
          Form.
        </p>
        <p className='introparag'>
          Das <input className='text' type='text'></input> ich. Ich{" "}
          <input className='text' type='text'></input> sieben Jahre alt. Ich{" "}
          <input className='text' type='text'></input> eine Schwester. Sie{" "}
          <input className='text' type='text'></input> Fußballerina. Wir{" "}
          <input className='text' type='text'></input> auch zwei Brüder, Leo und
          Max. Sie <input className='text' type='text'></input> noch klein, sie{" "}
          <input className='text' type='text'></input> erst für Jahre alt. Und
          das <input className='text' type='text'></input> ist Dora. Wir{" "}
          <input className='text' type='text'></input> gute Freundinnen. Wir{" "}
          <input className='text' type='text'></input> vielle Hobbys.
        </p>
      </div>
      <div>
        <p className='introparag'>Ü2. Schreiben Sie die Sätze. </p>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            1. Issabela/Schüllerin/sein
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            2. sie/am 1.April/sieben Jahre alt/werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            3. Ich/am 3.November/Geburstag/haben
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            4. dann/ich/sieben Jahre alt/ werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            5. heute/das Wetter/schlecht/sein
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
          </div>
        </div>
        <div class='form-group row'>
          <label className='col-sm-6 col-form-label introparag'>
            6. morgen/es/besser/werden
          </label>
          <div className='col-sm-6'>
            <input
              type='text'
              className='form-control form-control-sm phrases'
            />
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
          <input className='text' type='text'></input> in einem Krankenhaus. Er
          komm
          <input className='text' type='text'></input> aus Hamburg. Herr und
          Frau Bahr und die beiden Kinder Lisa und Felix leb
          <input className='text' type='text'></input> schon zhen Jahre in
          Berlin. "Wir leb
          <input className='text' type='text'></input> gern in Berlin", sag
          <input className='text' type='text'></input> Lisa, "ich find
          <input className='text' type='text'></input> es hier richtig gut. Aber
          später geh
          <input className='text' type='text'></input> ich nach London."
        </p>
        <div>
          <button className='check'>
            <span>
              <i class='fa fa-check fa-fw'></i>Check answers
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Verbs
