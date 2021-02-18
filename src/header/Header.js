import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h1>
        <span>German</span> with{" "}
        <img className='friends' src='friends.png' alt='friends'></img>
      </h1>
      <h5>
        Have <span>Fun</span> while learning
      </h5>
    </div>
  )
}

export default Header
