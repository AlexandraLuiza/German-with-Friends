import React from "react"
import { Table } from "react-bootstrap"

const Numbers = () => {
  return (
    <div>
      <h2 className='title'>Numbers </h2>
      <h4 className='introduction'>Cardinal Numbers</h4>
      <p className='introparag'>
        Cardinal numbers are the basic numbers. They are used to indicate how
        much of something there is.
      </p>
      <h4 className='introduction'>Writing the cardinal numbers</h4>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>eins</td>
            <td>11</td>
            <td>elf</td>
            <td>21</td>
            <td>einundzwanzig</td>
            <td>31</td>
            <td>einunddreißig</td>
          </tr>
          <tr>
            <td>2</td>
            <td>zwei</td>
            <td>12</td>
            <td>zwölf</td>
            <td>22</td>
            <td>zweiundzwanzig</td>
            <td>40</td>
            <td>vierzig</td>
          </tr>
          <tr>
            <td>3</td>
            <td>drei</td>
            <td>13</td>
            <td>dreizehn</td>
            <td>23</td>
            <td>dreiundzwanzig</td>
            <td>50</td>
            <td>fünfzig</td>
          </tr>
          <tr>
            <td>4</td>
            <td>vier</td>
            <td>14</td>
            <td>vierzehn</td>
            <td>24</td>
            <td>vierundzwanzig</td>
            <td>60</td>
            <td>sechzig</td>
          </tr>
          <tr>
            <td>5</td>
            <td>fünf</td>
            <td>15</td>
            <td>fünfzehn</td>
            <td>25</td>
            <td>fünfundzwanzig</td>
            <td>70</td>
            <td>siebzig</td>
          </tr>
          <tr>
            <td>6</td>
            <td>sechs</td>
            <td>16</td>
            <td>sechzehn</td>
            <td>26</td>
            <td>sechsundzwanzig</td>
            <td>80</td>
            <td>achtzig</td>
          </tr>
          <tr>
            <td>7</td>
            <td>sieben</td>
            <td>17</td>
            <td>siebzehn</td>
            <td>27</td>
            <td>siebenundzwanzig</td>
            <td>90</td>
            <td>neunzig</td>
          </tr>
          <tr>
            <td>8</td>
            <td>acht</td>
            <td>18</td>
            <td>achtzehn</td>
            <td>28</td>
            <td>achtundzwanzig</td>
            <td>100</td>
            <td>einhundert</td>
          </tr>
          <tr>
            <td>9</td>
            <td>neun</td>
            <td>19</td>
            <td>neunzehn</td>
            <td>29</td>
            <td>neunundzwanzig</td>
            <td>1000</td>
            <td>eintausend</td>
          </tr>
          <tr>
            <td>10</td>
            <td>zehn</td>
            <td>20</td>
            <td>zwanzig</td>
            <td>30</td>
            <td>dreißig</td>
            <td>1.000.000</td>
            <td>eine Million</td>
          </tr>
        </tbody>
      </Table>

      <h4 className='introduction'>Double Digits</h4>
      <ul>
        <li>
          The single digits are written before the double digits, and connect
          them together with <em>und</em>.
          <p>
            <em>Example: 35 – fünf | und | dreißig</em>
          </p>
        </li>
      </ul>
      <h4 className='introduction'>Hundreds and Thousands</h4>
      <ul>
        <li>
          Hundreds/thousands can be connected to the single and double digits
          either with or without the word <em>und</em>.Between thousands and
          hundreds, however, <em>und</em> is not used.
          <p>
            <em>Example: 309 – dreihundert(und)neun,</em> aber{" "}
            <em>9815 – neuntausendachthundert(und)fünfzehn</em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          At the beginning of a word, we can shorten einhundert/eintausend to
          hundert/tausend.
          <p>
            <em>Example: 147 – (ein)hundert(und)siebenundvierzig</em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          Numbers over 10000 are often written with a point or space in German
          (not a comma!) to make them easier to read.
          <p>
            <em>Example: 57.458.302</em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          When writing them out in words, the numbers up to 999,999 are written
          as a single word.
          <p>
            <em>
              Example: 999.999 –
              neunhundertneunundneunzigtausendneunhundertneunundneunzig
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          The years up to 1999 are said and written as hundreds. Starting with
          2000, however, the normal cardinal numbers are used.
          <p>
            <em>Example: 1999 – neunzehnhundertneunundneunzig,</em> aber{" "}
            <em>2011 – zweitausend(und)elf</em>
          </p>
        </li>
      </ul>
      <h4 className='introduction'>Millions</h4>
      <ul>
        <li>
          Starting with the number 2,000,000, the plural is used. Note that
          Million is always written as a separate word.
          <p>
            <em>Example: 1.500.000 – eine Million fünfhunderttausend,</em> aber{" "}
            <em>
              47.850.203 – siebenundvierzig Millionen
              achthundertfünfzigtausendzweihundert(und)drei
            </em>
          </p>
        </li>
      </ul>
      <h4 className='introduction'>Ordinal Numbers</h4>
      <p className='introparag'>
        The ordinal numbers are used to show the order in which things come, or
        for example when saying/writing the date.
      </p>
      <h4 className='introduction'>Writing the ordinal numbers</h4>
      <p className='introparag'>
        In German, the ordinal numbers are written using a full-stop
      </p>
      <p className='introparag'>
        <em>Example: 1. Oktober 2011</em>
      </p>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
            <th>Number</th>
            <th>How do you write it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>erst…</td>
            <td>11</td>
            <td>elft…</td>
            <td>21</td>
            <td>einundzwanzigst…</td>
            <td>31</td>
            <td>einunddreißigst…</td>
          </tr>
          <tr>
            <td>2</td>
            <td>zweit…</td>
            <td>12</td>
            <td>zwölft…</td>
            <td>22</td>
            <td>zweiundzwanzigst…</td>
            <td>40</td>
            <td>vierzigst…</td>
          </tr>
          <tr>
            <td>3</td>
            <td>dritt…</td>
            <td>13</td>
            <td>dreizehnt…</td>
            <td>23</td>
            <td>dreiundzwanzigst…</td>
            <td>50</td>
            <td>fünfzigst…</td>
          </tr>
          <tr>
            <td>4</td>
            <td>viert…</td>
            <td>14</td>
            <td>vierzehnt…</td>
            <td>24</td>
            <td>vierundzwanzigst…</td>
            <td>60</td>
            <td>sechzigst…</td>
          </tr>
          <tr>
            <td>5</td>
            <td>fünft…</td>
            <td>15</td>
            <td>fünfzehnt…</td>
            <td>25</td>
            <td>fünfundzwanzigst…</td>
            <td>70</td>
            <td>siebzigst…</td>
          </tr>
          <tr>
            <td>6</td>
            <td>sechst…</td>
            <td>16</td>
            <td>sechzehnt…</td>
            <td>26</td>
            <td>sechsundzwanzigst…</td>
            <td>80</td>
            <td>achtzigst…</td>
          </tr>
          <tr>
            <td>7</td>
            <td>siebent…</td>
            <td>17</td>
            <td>siebzehnt…</td>
            <td>27</td>
            <td>siebenundzwanzigst…</td>
            <td>90</td>
            <td>neunzigst…</td>
          </tr>
          <tr>
            <td>8</td>
            <td>acht…</td>
            <td>18</td>
            <td>achtzehnt…</td>
            <td>28</td>
            <td>achtundzwanzigst…</td>
            <td>100</td>
            <td>einhundertst…</td>
          </tr>
          <tr>
            <td>9</td>
            <td>neunt…</td>
            <td>19</td>
            <td>neunzehnt…</td>
            <td>29</td>
            <td>neunundzwanzigst…</td>
            <td>1000</td>
            <td>eintausendst…</td>
          </tr>
          <tr>
            <td>10</td>
            <td>zehnt…</td>
            <td>20</td>
            <td>zwanzigst…</td>
            <td>30</td>
            <td>dreißigst…</td>
            <td>1.000.000</td>
            <td>Millionst…</td>
          </tr>
        </tbody>
      </Table>
      <h4 className='introduction'>Endings</h4>
      <ul>
        <li>
          The endings agree with the noun/pronoun and are declined to match.
          (The endings of ordinal numbers correspond to the adjective endings.)
          <p>
            <em>
              Example: Heute ist mein <u>erster</u> Urlaubstag. (masculine,
              nominative),
            </em>{" "}
            aber{" "}
            <em>
              Er fährt am <u>ersten</u> August in den Urlaub. (masculine,
              dative)
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          Only the last part of the word is used as an ordinal number.
          <p>
            <em>
              Example: 151. Stockwerk - hunderteinundfünfzigst<u>es</u>{" "}
              Stockwerk (neutral without article)
            </em>{" "}
            aber{" "}
            <em>
              das hunderteinundfünfzigst<u>e</u> Stockwerk (neutral with
              definite article)
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          When there is no noun, the ordinal number is written with a capital
          letter:
          <p>
            <em>
              Example: Er lief als <u>Erster</u> durchs Ziel (masculine,
              nominative)
            </em>{" "}
            aber{" "}
            <em>
              Sie lief als <u>Erste</u> durchs Ziel. (feminine, nominative)
            </em>
          </p>
        </li>
      </ul>
      <h4 className='introduction'>Usage</h4>
      <ul>
        <li>
          <strong>Date</strong>: The ordinal numbers are used for the date.
          <p>
            <em>
              Example: Heute ist der <u>elfte</u> Juni.
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Order</strong>: The ordinal numbers are used to indicate the
          order in which things come.
          <p>
            <em>
              Example: Deutsch ist seine <u>zweite</u> Fremdsprache.
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Numbered lists</strong>: For numbered lists, the ending
          <em>ens</em> is added.
          <strong>
            <em>This form is not declined.</em>
          </strong>
          <p>
            <em>
              Example: Warum ich nicht im Kino bin? <um>Erstens</um> habe ich
              keine Lust, <um>zweitens</um> bin ich pleite und <um>drittens</um>{" "}
              gefällt mir der Film nicht.
            </em>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Numbers in titles</strong>: In peoples’ titles, the ordinal
          number are written as a Roman number with a full-stop. When speaking,
          they use the definite article before the ordinal number.
          <p>
            <em>Example: Friedrich I. – Friedrich der Erste</em>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Numbers
