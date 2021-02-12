import React from "react"
import { Table } from "react-bootstrap"
import "./Present.css"

const Present = () => {
  return (
    <>
      <div>
        <h2>Introduction</h2>
        <p>
          The present tense also called the simple present (Präsens) is used to
          talk about the present and future in German. In English will be
          corresponding with: the simple present, present progressive and future
          with will or going to.
        </p>
      </div>
      <div>
        <h4>Conjugation of German Verbs in Present Tense</h4>
        <p>
          To conjugate verbs in the German present tense, the infinitive ending
          <em>-en</em> is removed and add the following endings are added:
        </p>
        <Table responsive='sm'>
          <thead>
            <tr>
              <th>Person</th>
              <th>Ending</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1<sup>st</sup> person singular (ich)
              </td>
              <td>-e</td>
              <td>ich lerne</td>
            </tr>
            <tr>
              <td>
                2<sup>nd</sup> person singular (du)
              </td>
              <td>-st</td>
              <td>du lernst</td>
            </tr>
            <tr>
              <td>
                3<sup>rd</sup> person singular (er/sie/es/man)
              </td>
              <td>-t</td>
              <td>er lernt</td>
            </tr>
            <tr>
              <td>
                1<sup>st</sup> person plural (wir)
              </td>
              <td>-en</td>
              <td>wir lernen</td>
            </tr>
            <tr>
              <td>
                2<sup>nd</sup> person plural (ihr)
              </td>
              <td>-t</td>
              <td>ihr lernt</td>
            </tr>
            <tr>
              <td>
                3<sup>rd</sup> person plural/polite form (sie/Sie)
              </td>
              <td>-en</td>
              <td>sie lernen</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <p>
          The verbs
          <span>
            <em>sein</em>
          </span>
          and
          <span>
            <em>haben</em>
          </span>
          are irregular:
        </p>
        <Table responsive='sm'>
          <thead>
            <tr>
              <th>Person</th>
              <th>Sein</th>
              <th>Haben</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1<sup>st</sup> person singular (ich)
              </td>
              <td>ich bin</td>
              <td>ich habe</td>
            </tr>
            <tr>
              <td>
                2<sup>nd</sup> person singular (du)
              </td>
              <td>du bist</td>
              <td>du hast</td>
            </tr>
            <tr>
              <td>
                3<sup>rd</sup> person singular (er/sie/es/man)
              </td>
              <td>er ist</td>
              <td>er hat</td>
            </tr>
            <tr>
              <td>
                1<sup>st</sup> person plural (wir)
              </td>
              <td>wir sind</td>
              <td>wir haben</td>
            </tr>
            <tr>
              <td>
                2<sup>nd</sup> person plural (ihr)
              </td>
              <td>ihr seid</td>
              <td>ihr habt</td>
            </tr>
            <tr>
              <td>
                3<sup>rd</sup> person plural/polite form (sie/Sie)
              </td>
              <td>sie sind</td>
              <td>sie haben</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h4>Exceptions</h4>
        <ul>
          <li>
            If the word stem ends in <em>d/t</em>, an <em>e</em> is added before
            the endings <em>-st</em> and <em>-t</em>
            <p>This doesn’t happen when the vowel changes.</p>
            <p>
              Example: laden - du lädst, er lädt, ihr lad<span>e</span>t (vowel
              change a to ä)
            </p>
          </li>
        </ul>
        <ul>
          <li>
            If the word stem ends in <em>s/ß/x/z</em>, the <em>s</em> is removed
            in the 2<sup>nd</sup> person singular ending
            <p>
              Example: tanzen – du tanzt (not: <del>tanzst</del>)
            </p>
          </li>
        </ul>
        <ul>
          <li>
            If the word stem ends in <em>ie</em>, the <em>e</em> is removed from
            the ending.
            <p>
              Example: knien – ich knie, wir knien, sie knien (not:{" "}
              <del>kniee</del>, <del>knieen</del>)
            </p>
          </li>
        </ul>
        <ul>
          <li>
            The word stem changes in some strong verbs.
            <p>
              Example: lesen – ich lese, du liest, er liest, wir lesen, ihr
              lest, sie lesen
            </p>
          </li>
        </ul>
        <ul>
          <li>
            If the infinitive ends in <em>-eln/-ern</em>, the <em>e</em> is
            removed in the ending.
            <p>Example: wandern – ich wandere, wir wandern, sie wandern</p>
            <p>
              In the case of <em>-eln</em>, the <em>e</em> from the word stem in
              the 1st person singular is can be removed.
            </p>
            <p>Example: lächeln – ich läch(e)le, wir lächeln, sie lächeln</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Present
