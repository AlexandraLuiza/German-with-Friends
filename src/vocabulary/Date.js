import React from "react"

const Date = () => {
  return (
    <div>
      <h2 className='title'>Date </h2>
      <h4 className='introduction'>Writing the date</h4>
      <p className='introparag'>
        When the date is written in German, the day and the month ar written as
        ordinal numbers. But the month cna also be written out as a word, a
        method which is particularly preferred when the day of the week is
        mentioned.
      </p>
      <p className='introparag'>
        <em>
          Example: 5.10.2011 / 5. Oktober 2011 / Dienstag, 5. Oktober 2011
        </em>
      </p>
      <h4 className='introduction'>Endings of the Ordinal Numbers</h4>
      <p className='introparag'>
        When the date is said or written, the ending changes, depending on
        whether the date is used with a preposition or with or without an
        article.
      </p>
      <p className='introparag'>
        <em>
          Example: fünft<u>er</u> Oktober zweitausendelf (no article → er)
        </em>
      </p>
      <p className='introparag'>
        <em>
          Example: Es war ein fünft<u>er</u> Oktober. (indefinite article → er)
        </em>
      </p>
      <p className='introparag'>
        <em>
          Example: der fünft<u>e</u> Oktober zweitausendelf (definite article →
          e)
        </em>
      </p>
      <p className='introparag'>
        <em>
          Example: am fünft<u>en</u> Oktober zweitausendelf (preposition and
          article → en)
        </em>
      </p>
      <h4 className='introduction'>Saying the Years</h4>
      <p className='introparag'>
        Up to the year 1999, the years are spoken as hundreds. Starting with
        2000, though, the normal cardinal numbers are used.
      </p>
      <p className='introparag'>
        <em>Example: 1813 – achtzehnhundertdreizehn</em>
      </p>
      <p className='introparag'>
        <em>Example: 1999 – neunzehnhundertneunundneunzig</em>
      </p>
      <p className='introparag'>
        <em>Example: 2000 – zweitausend</em>
      </p>
      <p className='introparag'>
        <em>Example: 2010 – zweitausendzehn</em>
      </p>
    </div>
  )
}

export default Date
