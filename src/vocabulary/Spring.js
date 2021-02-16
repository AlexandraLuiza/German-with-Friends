import React from "react"
import { Table } from "react-bootstrap"

const Spring = () => {
  return (
    <div>
      <h2 className='title'>Frühling (Spring): Frosch, Nest, Ei, Hase</h2>
      <h4 className='introduction'>Frosch</h4>
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
            <td>Sei kein Frosch!</td>
            <td>don’t be a spoilsport/don’t ruin the fun for others</td>
            <td>
              {" "}
              – Kommst du mit ins Schwimmbad?
              <p>– Nein, ich muss noch Hausaufgaben machen.</p>
              <p>
                – Ach, sei kein Frosch! Die Hausaufgaben kannst du auch heute
                Abend noch machen.
              </p>
            </td>
          </tr>
          <tr>
            <td>einen Frosch im Hals haben</td>
            <td>
              have a frog in one’s throat/the need to constantly clear your
              throat when speaking
            </td>
            <td>
              Ähem - Ich möchte Ihnen heute – ähem – etwas darüber erzählen -
              ähem … Entschuldigen Sie bitte, ich habe heute einen Frosch im
              Hals - ähem
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Nest</h4>
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
            <td>das eigene Nest beschmutzen</td>
            <td>talk badly about your family, colleagues etc.</td>
            <td>
              {" "}
              Man soll ja nicht das eigene Nest beschmutzen, aber meine Familie
              besteht wirklich nur aus Idioten.
            </td>
          </tr>
          <tr>
            <td>sich ins gemachte Nest setzen</td>
            <td>
              come into a good situation without having to do anything/have got
              it made or marry well
            </td>
            <td>
              Der alte Chef hatte viele Jahre gebraucht, um eine gut
              funktionierende Firma aufzubauen. Jetzt, wo er in Rente geht,
              funktioniert alles hervorragend. Der neue Chef kann sich ins
              gemachte Nest setzen und von der Arbeit seines Vorgängers
              profitieren.
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Ei</h4>
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
            <td>Ach, du dickes Ei!</td>
            <td>expresseion of (negative) surprise/good heavens!.</td>
            <td>
              {" "}
              Ach du dickes Ei! Wir haben verschlafen; es ist schon 10 Uhr.
            </td>
          </tr>
          <tr>
            <td>sich gleichen wie ein Ei dem anderen</td>
            <td>look very similar/cast from the same mold</td>
            <td>
              Die Häuser in dieser Gegend gleichen sich wie ein Ei dem anderen
            </td>
          </tr>
          <tr>
            <td>wie aus dem Ei gepellt</td>
            <td>dressed very neatly/dressed to the nines</td>
            <td>
              Während sich Herr Schulze eher salopp kleidet, sieht seine Frau
              immer aus wie aus dem Ei gepellt.
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Hase</h4>
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
            <td>ein alter Hase sein</td>
            <td>be very experienced in something/be an old hand</td>
            <td>
              {" "}
              Du kannst Uwe glauben, wenn er sagt, dass das so nicht
              funktioniert. Er ist ein alter Hase auf dem Gebiet.
            </td>
          </tr>
          <tr>
            <td>wissen, wie der Hase läuft</td>
            <td>know how something works/know the score</td>
            <td>
              Nachdem ich nun zehn Jahre bei dieser Firma arbeite, weiß ich
              genau, wie der Hase läuft.
            </td>
          </tr>
          <tr>
            <td>Da liegt der Hase im Pfeffer.</td>
            <td>That is the real problem/there’s the rub</td>
            <td>
              {" "}
              <p>– Trink etwas, wenn dir schwindelig ist.</p>
              <p>– Aber ich habe keinen Durst.</p>
              <p>
                – Genau da liegt der Hase im Pfeffer. Wenn du zu wenig trinkst,
                musst du dich nicht wundern, wenn dir schwindelig wird.
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Spring
