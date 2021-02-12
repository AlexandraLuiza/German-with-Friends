import React from "react"
import "./Tenses.css"
import { Table } from "react-bootstrap"

export const Tenses = () => {
  return (
    <>
      <div>
        <h4>Introduction</h4>
        <p>
          German has six tenses: <span>present</span> (Präsens),
          <span>present perfect</span>
          (Perfekt),
          <span>simple past</span> (Präteritum),
          <span>past perfect</span>
          (Plusquamperfekt),
          <span>future</span> (Futur I) and
          <span>future perfect</span> (Futur II).
        </p>
      </div>
      <h2>German Tenses with Verb Conjugations: Overview</h2>
      <div></div>
      <div>
        <Table responsive='md'>
          <thead>
            <tr>
              <th>Tense</th>
              <th>Conjugation: lernen (week/regular verb)</th>
              <th>Conjugation: sehen (strong/irregular verb)</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Present (Präsens)</td>
              <td>
                <ul>
                  <li>
                    ich lern<span>e</span>
                  </li>
                  <li>
                    du lern<span>st</span>
                  </li>
                  <li>
                    er lern<span>t</span>
                  </li>
                  <li>
                    wir lern<span>en</span>
                  </li>
                  <li>
                    ihr lern<span>t</span>
                  </li>
                  <li>
                    sie lern<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    ich seh<span>e</span>
                  </li>
                  <li>
                    du s<span>ie</span>h<span>st</span>
                  </li>
                  <li>
                    er s<span>ie</span>h<span>t</span>
                  </li>
                  <li>
                    wir seh<span>en</span>
                  </li>
                  <li>
                    ihr seh<span>t</span>
                  </li>
                  <li>
                    sie seh<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>a condition or action in the present</li>
                  <li>a pre-arranged action in the future</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Present perfect (Perfekt)</td>
              <td>
                <ul>
                  <li>
                    ich <span>habe ge</span>lern<span>t</span>
                  </li>
                  <li>
                    du <span>hast ge</span>lern<span>t</span>
                  </li>
                  <li>
                    er <span>hat ge</span>lern<span>t</span>
                  </li>
                  <li>
                    wir <span>haben ge</span>lern<span>t</span>
                  </li>
                  <li>
                    ihr <span>habt ge</span>lern<span>t</span>
                  </li>
                  <li>
                    sie <span>haben ge</span>lern<span>t</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    ich <span>habe ge</span>seh<span>en</span>
                  </li>
                  <li>
                    du <span>hast ge</span>seh<span>en</span>
                  </li>
                  <li>
                    er <span>hat ge</span>seh<span>en</span>
                  </li>
                  <li>
                    wir <span>haben ge</span>seh<span>en</span>
                  </li>
                  <li>
                    ihr <span>habt ge</span>seh<span>en</span>
                  </li>
                  <li>
                    sie <span>haben ge</span>seh<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>a completed action in the past</li>
                  <li>usually focusing on the result of the action</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Simple past (Präteritum, Imperfekt)</td>
              <td>
                <ul>
                  <li>
                    ich lern<span>te</span>
                  </li>
                  <li>
                    du lern<span>te</span>
                  </li>
                  <li>
                    er lern<span>test</span>
                  </li>
                  <li>
                    wir lern<span>ten</span>
                  </li>
                  <li>
                    ihr lern<span>tet</span>
                  </li>
                  <li>
                    sie lern<span>ten</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>ich sah</li>
                  <li>
                    du sah<span>st</span>
                  </li>
                  <li>er sah</li>
                  <li>
                    wir sah<span>en</span>
                  </li>
                  <li>
                    ihr sah<span>t</span>
                  </li>
                  <li>
                    sie sah<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>a condition or completed action in the past</li>
                  <li>stories, reports</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Past perfect(Plusquamperfekt)</td>
              <td>
                <ul>
                  <li>
                    ich <span>hatte ge</span>lern<span>t</span>
                  </li>
                  <li>
                    du <span>hattest ge</span>lern<span>t</span>
                  </li>
                  <li>
                    er <span>hatte ge</span>lern<span>t</span>
                  </li>
                  <li>
                    wir <span>hatten ge</span>lern<span>t</span>
                  </li>
                  <li>
                    ihr <span>hattet ge</span>lern<span>t</span>
                  </li>
                  <li>
                    sie <span>hatten ge</span>lern<span>t</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    ich <span>hatte ge</span>seh<span>en</span>
                  </li>
                  <li>
                    du <span>hattest ge</span>seh<span>en</span>
                  </li>
                  <li>
                    er <span>hatte ge</span>seh<span>en</span>
                  </li>
                  <li>
                    wir <span>hatten ge</span>seh<span>en</span>
                  </li>
                  <li>
                    ihr <span>hattet ge</span>seh<span>en</span>
                  </li>
                  <li>
                    sie <span>hatten ge</span>seh<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    an action that took place before a certain point in the past
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Future (Zukunft)</td>
              <td>
                <ul>
                  <li>
                    ich <span>werde</span> lern<span>en</span>
                  </li>
                  <li>
                    du <span>wirst</span> lern<span>en</span>
                  </li>
                  <li>
                    er <span>wird</span> lern<span>en</span>
                  </li>
                  <li>
                    wir <span>werden</span> lern<span>en</span>
                  </li>
                  <li>
                    ihr <span>werdet</span> lern<span>en</span>
                  </li>
                  <li>
                    sie <span>werden</span> lern<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    ich <span>werde</span> seh<span>en</span>
                  </li>
                  <li>
                    du <span>wirst</span> seh<span>en</span>
                  </li>
                  <li>
                    er <span>wird</span> seh<span>en</span>
                  </li>
                  <li>
                    wir <span>werden</span> seh<span>en</span>
                  </li>
                  <li>
                    ihr <span>werdet</span> seh<span>en</span>
                  </li>
                  <li>
                    sie <span>werden</span> seh<span>en</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    intention, supposition, or hope for the future or present
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Future perfect (vollendete Zukunft))</td>
              <td>
                <ul>
                  <li>
                    ich <span>werde ge</span>lern<span>en haben</span>
                  </li>
                  <li>
                    du <span>wirst ge</span>lern<span>en haben</span>
                  </li>
                  <li>
                    er <span>wird ge</span>lern<span>en haben</span>
                  </li>
                  <li>
                    wir <span>werden ge</span>lern<span>en haben</span>
                  </li>
                  <li>
                    ihr <span>werdet ge</span>lern<span>en haben</span>
                  </li>
                  <li>
                    sie <span>werden ge</span>lern<span>en haben</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    ich <span>werde ge</span>seh<span>en haben</span>
                  </li>
                  <li>
                    du <span>wirst ge</span>seh<span>en haben</span>
                  </li>
                  <li>
                    er <span>wird ge</span>seh<span>en haben</span>
                  </li>
                  <li>
                    wir <span>werden ge</span>seh<span>en haben</span>
                  </li>
                  <li>
                    ihr <span>werdet ge</span>seh<span>en haben</span>
                  </li>
                  <li>
                    sie <span>werden ge</span>seh<span>en haben</span>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>supposition about past events</li>
                  <li>
                    supposition or hope about something that will have happened
                    by a certain point in the future
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}
