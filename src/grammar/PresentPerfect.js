import React from "react"
import { Table } from "react-bootstrap"
import "./PresentPerfect.css"

export const PresentPerfect = () => {
  return (
    <>
      <div>
        <h2 className='title'>Perfekt – Perfect Tense </h2>
        <h4 className='introduction'>Introduction</h4>
        <p className='introparag'>
          The perfect tense, also called present perfect (Perfekt), is a past
          tense.It is used to speak about actions completed in the recent past.
          In spoken German, the present perfect tense is often used instead of
          the past tense. The perfect tense can translated using the English
          simple past tense.
        </p>
      </div>
      <div>
        <h4 className='conjugation'>
          Conjugation of German Verbs in Present Tense
        </h4>
        <p className='note'>
          To conjugate verbs in the perfect tense we need the present tense form
          of <em>sein/haben</em> and <em>the past participle (Partizip II).</em>
        </p>
        <div>
          <Table responsive='sm' className='table-bordered'>
            <thead>
              <tr>
                <th>Person</th>
                <th>Sein</th>
                <th>Partizip II: gehen</th>
                <th>Haben</th>
                <th>Partizip II: lesen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1<sup>st</sup> person singular (ich)
                </td>
                <td>ich bin</td>
                <td>gegangen</td>
                <td>ich habe</td>
                <td>gelesen</td>
              </tr>
              <tr>
                <td>
                  2<sup>nd</sup> person singular (du)
                </td>
                <td>du bist</td>
                <td>gegangen</td>
                <td>du hast</td>
                <td>gelesen</td>
              </tr>
              <tr>
                <td>
                  3<sup>rd</sup> person singular (er/sie/es/man)
                </td>
                <td>er ist</td>
                <td>gegangen</td>
                <td>er hat</td>
                <td>gelesen</td>
              </tr>
              <tr>
                <td>
                  1<sup>st</sup> person plural (wir)
                </td>
                <td>wir sind</td>
                <td>gegangen</td>
                <td>wir haben</td>
                <td>gelesen</td>
              </tr>
              <tr>
                <td>
                  2<sup>nd</sup> person plural (ihr)
                </td>
                <td>ihr seid</td>
                <td>gegangen</td>
                <td>ihr habt</td>
                <td>gelesen</td>
              </tr>
              <tr>
                <td>
                  3<sup>rd</sup> person plural/polite form (sie/Sie)
                </td>
                <td>ie sind</td>
                <td>gegangen</td>
                <td>sie haben</td>
                <td>gelesen</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h4 className='conjugation'>When to Use Haben or Sein</h4>
          <p className='introparag'>
            The verbs haben and sein <em>are used as auxiliary</em> or{" "}
            <em>helping verbs</em> in the present perfect. Sometimes it can be
            difficult to know which verb to use. There are a few rules for the
            usage of haben and sein.
          </p>
          <p className='introparag'>
            <em>Haben</em> is used to conjugate the present perfect with:
            <ul>
              <li>verbs that take an accusative object</li>
              <span className='beispiel'>
                <em>
                  Exemple: Ich gebe <u>dem Jungen einen großen Apfel.</u>
                </em>
              </span>
              <li>
                verbs without an accusative object that don’t express a change
                of state or place{" "}
              </li>
              <span className='beispiel'>
                <em>
                  Exemple: Er <u>hat</u> aufgeräumt.
                </em>
              </span>
              <li>reflexive verbs</li>
              <span className='beispiel'>
                <em>
                  Exemple: Das Büro <u>hat</u> sich verändert.
                </em>
              </span>
            </ul>
          </p>
          <p className='introparag'>
            <em>Sein</em> is used to conjugate the present perfect with:
            <ul>
              <li>
                verbs of movement that don’t take an accusative object:{" "}
                <em>
                  gehen, laufen, fahren, fallen, fliegen, kommen, reisen,
                  stolpern, stürzen
                </em>
              </li>
              <span className='beispiel'>
                <em>
                  Exemple: Alle Kollegen <u>sind</u> in sein Büro gekommen.
                </em>
              </span>
              <li>
                verbs that express a change of state:{" "}
                <em>
                  aufwachen/erwachen, einschlafen, gefrieren, tauen, sterbn,
                  zerfallen
                </em>{" "}
              </li>
              <span className='beispiel'>
                <em>
                  Exemple: Michaels Ordungsliebe <u>ist</u> erwacht.
                </em>
              </span>
              <li>
                the following verbs:{" "}
                <em>bleiben, geschehen, gelingen, misslingen, sein, werden</em>
              </li>
              <span className='beispiel'>
                <em>
                  Exemple: Was <u>ist</u> mit Michael geschehen.
                </em>
              </span>
            </ul>
          </p>
        </div>
        <div>
          <h4 className='conjugation'>Past Participle</h4>
          <p className='introparag'>
            <em>The past participle (Partizip II)</em> is formed in the
            following ways:
          </p>
          <strong>Regular Verbs</strong> known as weak verbs (schwache Verben)
          form the past participle with ge…t and the verb stem.
          <p className='introparag'>
            <span className='beispiel'>
              <em>Exemple: lernen – gelernt</em>
            </span>
          </p>
          <strong>Irregular verbs</strong> are verbs that change their verb stem
          in simlpe past and/or the participle form. There are two kinds of
          irregular verbs: <em>strong verbs (starke Verben)</em> and{" "}
          <em>mixed verbs (gemischte Verben)</em>.
          <ul>
            <li>
              <em>Strong Verbs</em> form the past particple with mit{" "}
              <em>ge…en</em>
            </li>
            <span className='beispiel'>
              <em>Exemple: sehen – gesehen (sehen-sah-gesehen)</em>
            </span>
          </ul>
          <ul>
            <li>
              <em>Mixed Verbs </em> form the past particple with mit{" "}
              <em>ge…t</em>
            </li>
            <span className='beispiel'>
              <em>Exemple: bringen – gebracht (bringen-brachte-gebracht)</em>
            </span>
          </ul>
        </div>
        <div className='exceptions'>
          <h4>Exceptions</h4>
          <ul>
            <li>
              The ending <em>-et</em> is added to weak/mixed verbs when the word
              stem ends in <em>d/t</em>.
            </li>
            <span className='beispiel'>
              <em>
                Exemple: warten – gewart<u>et</u>
              </em>
            </span>
          </ul>
          <ul>
            <li>
              Verbs that end in <em>-ieren </em> form their past participle
              without <em>ge</em>.
            </li>
            <span className='beispiel'>
              <em>
                Exemple: stud<u>ieren</u> – studiert
              </em>
            </span>
          </ul>
          <ul>
            <li>
              <em>Inseparable verbs </em> form the past participle without{" "}
              <em>ge</em>.
            </li>
            <span className='beispiel'>
              <em>Exemple: verstehen – verstanden</em>
            </span>
          </ul>
          <ul>
            <li>
              For <em> separable verbs, </em> the <em>ge</em> comes after the{" "}
              <em>prefix</em>.
            </li>
            <span className='beispiel'>
              <em>Exemple: ankommen – angekommen</em>
            </span>
          </ul>
        </div>
      </div>
    </>
  )
}
