import React from "react"
import { Table } from "react-bootstrap"

const Time = () => {
  return (
    <div className='container-fluid'>
      <h2 className='title'>Time </h2>
      <h4 className='introduction'>Introduction</h4>
      <p className='introparag'>
        There are different ways to tell the time in German. The 24-hour clock
        is used for official information (e.g. programmes, timetables). In
        spoken language, the 12-hour clock cam be used as well.
      </p>
      <h4 className='introduction'>Telling the Time</h4>
      <div className='row'>
        <div className='col-md-6'>
          <Table bordered>
            <thead>
              <tr>
                <th>Time</th>
                <th>Formal</th>
                <th>Colloquial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00</td>
                <td>sechs Uhr</td>
                <td>um sechs</td>
              </tr>
              <tr>
                <td>6:05</td>
                <td>sechs Uhr fünf</td>
                <td>fünf nach sechs</td>
              </tr>
              <tr>
                <td>6:15</td>
                <td>sechs Uhr fünfzehn</td>
                <td>Viertel nach sechs</td>
              </tr>
              <tr>
                <td>6:20</td>
                <td>sechs Uhr zwanzig</td>
                <td>zwanzig nach sechs</td>
              </tr>
              <tr>
                <td>6:30</td>
                <td>sechs Uhr dreißig</td>
                <td>halb sieben</td>
              </tr>
              <tr>
                <td>6:40</td>
                <td>sechs Uhr vierzig</td>
                <td>zwanzig vor sieben</td>
              </tr>
              <tr>
                <td>6:45</td>
                <td>sechs Uhr fünfundvierzig</td>
                <td>Viertel vor sieben</td>
              </tr>
              <tr>
                <td>6:50</td>
                <td>sechs Uhr fünfzig</td>
                <td>zehn vor sieben</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='col-md-5'>
          <img src='time.png' alt='time'></img>
        </div>
      </div>
    </div>
  )
}

export default Time
