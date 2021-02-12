import React from "react"
import "./Sidebar.css"
import { slide as Menu } from "react-burger-menu"

export default (props) => {
  return (
    <Menu>
      <h2>Categories</h2>
      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Grammar
      </a>

      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Vocabulary
      </a>

      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Writing
      </a>

      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Listening
      </a>

      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Speaking
      </a>

      <a className='menu-item' href='/nopagesde'>
        <i className='fas fa-caret-right arrow'></i>
        Exercices
      </a>

      <a className='menu-item' href='/pages'>
        <i className='fas fa-caret-right arrow'></i>
        Quizes
      </a>
    </Menu>
  )
}
