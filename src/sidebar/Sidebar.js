import React from "react"
import "./Sidebar.css"
import { slide as Menu } from "react-burger-menu"

export default (props) => {
  return (
    <Menu>
      <h2>Categories</h2>
      <div>
        <a className='menu-item' href='/pages'>
          <i className='fas fa-caret-right arrow'></i>
          Grammar
        </a>
        <ul>
          <li>
            <a className='menu-item' href='/tenses'>
              Tenses
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/present'>
              Present Tense
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/present-perfect'>
              Present Perfect
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/past-tense'>
              Past Tense
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/past-perfect'>
              Past Perfect
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/future'>
              Future
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/future-perfect'>
              Future Perfect
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/tenses/irregular-verbs'>
              Irregular Verbs
            </a>
          </li>
        </ul>
      </div>

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
