import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className='header-pic'>
        <div>
          <h1 className='header'>
            <span>German</span> with Friends
          </h1>
          <h5 className='subhead'>
            Have <span>Fun</span> while learning
          </h5>
          <img
            className='study img-fluid'
            src='studygroup.jpg'
            alt='studygroup'
          ></img>
        </div>
      </div>
    </>
  )
}

export default Header
