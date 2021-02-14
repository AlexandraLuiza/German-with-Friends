import React from "react"
import "./Sidebar.css"
import { slide as Menu } from "react-burger-menu"

export default (props) => {
  return (
    <Menu>
      <h2 className='categories'>Categories</h2>
      <div>
        <a className='menu-item' href='#'>
          <i className='fas fa-caret-right arrow'></i>
          Grammar
        </a>
        <ul>
          <li>
            <a className='menu-item' href='/tenses'>
              Tenses Overview
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item' href='/present'>
                Present Tense
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className='menu-item' href='/present-perfect'>
                Present Perfect
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <a className='menu-item' href='/vocabulary'>
          <i className='fas fa-caret-right arrow'></i>
          Vocabulary
        </a>
        <ul>
          <li>
            <a className='menu-item' href='/numbers'>
              Numbers
            </a>
          </li>
        </ul>
      </div>
      <a className='menu-item' href='/writing'>
        <i className='fas fa-caret-right arrow'></i>
        Writing
      </a>

      <a className='menu-item' href='/listening'>
        <i className='fas fa-caret-right arrow'></i>
        Listening
      </a>

      <a className='menu-item' href='/speaking'>
        <i className='fas fa-caret-right arrow'></i>
        Speaking
      </a>

      <a className='menu-item' href='/exercices'>
        <i className='fas fa-caret-right arrow'></i>
        Exercices
      </a>

      <a className='menu-item' href='/quizes'>
        <i className='fas fa-caret-right arrow'></i>
        Quizes
      </a>
    </Menu>
  )
}
