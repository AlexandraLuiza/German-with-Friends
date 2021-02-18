import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className='head-wrapper container-fluid'>
      <h1 className='header'>
        <span>German</span> with Friends
      </h1>
      <h5 className='subhead'>
        Have <span>Fun</span> while learning
      </h5>
    </div>
  )
}

export default Header
