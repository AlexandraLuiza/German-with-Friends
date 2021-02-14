import React from "react"
import "./About.css"

const about = () => {
  return (
    <div>
      <h2 className='about'>About Us</h2>
      <p className='paragraph1'>
        Welcome at German with
        <div className='friends-pic'>
          <img src='friends.png' alt='friends'></img>
        </div>
        .
      </p>
      <p className='paragraph'>
        Here you can learn German while having fun. On our platform you can find
        Grammar tips, Sentence Structure, but also some funny phrases. If you
        are a F.R.I.E.N.D.S. fan, you know the most important catchphrases.
      </p>
      <p className='paragraph'>
        If you don't know them yet, let us show you how you can say them in
        German.
      </p>
      <p className='paragraph'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        exercitationem doloribus eaque, temporibus architecto minus molestiae
        dignissimos in, laborum commodi quas optio voluptatibus dolore. Omnis
        quos magnam officia in quidem.
      </p>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
        corrupti, quas expedita aliquid sit debitis veniam, cupiditate mollitia
        ut qui corporis! Dolorem delectus quo consectetur corrupti officia nobis
        expedita?
      </p>
    </div>
  )
}

export default about
