import React from "react"
import { Table } from "react-bootstrap"

const PartsOfTheBody = () => {
  return (
    <div>
      <h2 className='title'>Parts of the body </h2>
      <h4 className='introduction'>Kopf (Head)</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Idiom</th>
            <th>Explanation</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jemandem die Haare vom Kopf fressen</td>
            <td>
              to eat a lot of food when someone else has paid for it/ eat
              someone out of house and home
            </td>
            <td>
              Nein, deinen Cousin will ich nicht wieder einladen. Der frisst uns
              wieder die Haare vom Kopf!
            </td>
          </tr>
          <tr>
            <td>Kopf hoch!/ Lass den Kopf nicht hängen!</td>
            <td>
              keep your chin up!/ expression used to encourage or motivate
              someone
            </td>
            <td>
              Du hast den Kuchen im Ofen verbrennen lassen, aber lass trotzdem
              den Kopf nicht hängen! Das ist halb so wild
            </td>
          </tr>
          <tr>
            <td>von Kopf bis Fuß</td>
            <td>from head to toe/ completely</td>
            <td>
              Meine kleine Schwester hat sich von Kopf bis Fuß mit Pudding
              bekleckert
            </td>
          </tr>
          <tr>
            <td>nicht auf den Kopf gefallen sein</td>
            <td>to be clever</td>
            <td>
              Das war eine tolle Idee von Max. Er ist eben nicht auf den Kopf
              gefallen!
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Hand (Hand)</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Idiom</th>
            <th>Explanation</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>im Handumdrehen</td>
            <td>very fast/ in the blink of an eye</td>
            <td>Im Handumdrehen hat er ein leckeres Abendessen zubereitet</td>
          </tr>
          <tr>
            <td>etwas mit Kusshand annehmen</td>
            <td>to accept something with pleasure</td>
            <td>
              – „Möchtest du mit meinem Fahrrad fahren?“ / – „Dieses Angebot
              nehme ich mit Kusshand an!“
            </td>
          </tr>
          <tr>
            <td>für jemanden die Hand ins Feuer legen</td>
            <td>to vouch for someone</td>
            <td>
              Lara ist die ehrlichste Person, die ich kenne. Für sie würde ich
              meine Hand ins Feuer legen.
            </td>
          </tr>
          <tr>
            <td>etwas hat Hand und Fuß/ etwas hat weder Hand noch Fuß</td>
            <td>
              something is well/badly thought out; something does (not) hold
              water
            </td>
            <td>
              Dein Vorhaben hat weder Hand noch Fuß. Darüber musst du noch
              einmal nachdenken!
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Rücken (Back)</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Idiom</th>
            <th>Explanation</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jemandem den Rücken stärken</td>
            <td>to support someone/ have someone’s back</td>
            <td>
              Ich habe diese stressige Zeit nur überstehen können, weil meine
              Familie mir den Rücken gestärkt hat.
            </td>
          </tr>
          <tr>
            <td>etwas hinter jemandes Rücken tun</td>
            <td>to do something behind someone’s back</td>
            <td>
              Hinter meinem Rücken haben sie beschlossen, eine Reise auf die
              Malediven zu unternehmen.
            </td>
          </tr>
          <tr>
            <td>jemandem in den Rücken fallen</td>
            <td>to betray someone/ stab someone in the back</td>
            <td>
              Ich habe ihn die ganze Zeit lang unterstützt und er fällt mir so
              in den Rücken. Ich bin ganz schön enttäuscht!
            </td>
          </tr>
          <tr>
            <td>mit dem Rücken zur/an der Wand stehen</td>
            <td>to have your back to the wall/ be in a bad situation</td>
            <td>
              Du musst mir helfen. Ich weiß nicht mehr, was ich noch machen
              soll. Ich stehe mit dem Rücken an der Wand.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PartsOfTheBody
