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
            <a className='menu-item' href='#'>
              Numbers
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item' href='/cardinal-numbers'>
                Cardinal Numbers
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className='menu-item' href='/ordinal-numbers'>
                Ordinal Numbers
              </a>
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/time'>
              Time
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/date'>
              Date
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='/idioms'>
              Idioms
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item' href='#'>
                Parts of the body
              </a>
            </li>
            <ul>
              <li>
                <a className='menu-item' href='/body'>
                  Kopf, Hand, Rücken (Head, Hand, Back)
                </a>
              </li>
            </ul>
          </ul>
        </ul>
        <ul>
          <li>
            <a className='menu-item' href='#'>
              Seasons
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item' href='/spring'>
                Spring(Frühling)
              </a>
            </li>
          </ul>
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
      <div>
        <a className='menu-item' href='/exercices'>
          <i className='fas fa-caret-right arrow'></i>
          Exercises
        </a>
        <ul>
          <li>
            <a className='menu-item' href='#'>
              Grammar
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item' href='/exercises-grammar'>
                Verbs
              </a>
            </li>
          </ul>
        </ul>
      </div>

      <a className='menu-item' href='/quizes'>
        <i className='fas fa-caret-right arrow'></i>
        Quizes
      </a>
    </Menu>
  )
}
