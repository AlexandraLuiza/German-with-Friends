import React from "react"
import "./Idioms.css"

const Idioms = () => {
  return (
    <div>
      <h2 className='title'>Idioms</h2>
      <h4 className='introduction'>Introduction</h4>
      <p className='parag'>
        Idioms (also known as expressions or phrases) are fixed expressions that
        must be understood in a figurative, rather than literal sense. Although
        the origin of these expression is often no longer known, they are
        frequently used by native speakers in everyday conversation. Idioms can
        be tricky to understand.
      </p>
      <p className='parag'>
        This chapter will cover:
        <ul>
          <li>Parts of the body</li>
          <li>Seasons</li>
          <li>Holiday</li>
          <li>In the city</li>
          <li>Travel</li>
        </ul>
      </p>
      <div className='row container-fluid'>
        <div className='column'>
          <img className='idioms' src='idioms.png' alt='idioms'></img>
        </div>
        <div className='column'>
          <img className='idioms' src='idioms1.png' alt='idioms'></img>
        </div>
        <div className='column'>
          <img className='idioms' src='idioms2.png' alt='idioms'></img>
        </div>
      </div>
    </div>
  )
}

export default Idioms
