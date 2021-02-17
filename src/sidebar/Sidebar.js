import React from "react"
import "./Sidebar.css"
import { slide as Menu } from "react-burger-menu"

export default (props) => {
  return (
    <Menu>
      <h2 className='categories'>Categories</h2>
      <div>
        <a className='menu-item categ' href='#'>
          <i className='fas fa-caret-right arrow'></i>
          Grammar
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='/tenses'>
              Tenses Overview
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item categ' href='/present'>
                Present Tense
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className='menu-item categ' href='/present-perfect'>
                Present Perfect
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <a className='menu-item categ' href='/vocabulary'>
          <i className='fas fa-caret-right arrow'></i>
          Vocabulary
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='#'>
              Numbers
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item categ' href='/cardinal-numbers'>
                Cardinal Numbers
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className='menu-item categ' href='/ordinal-numbers'>
                Ordinal Numbers
              </a>
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <a className='menu-item categ' href='/time'>
              Time
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item categ' href='/date'>
              Date
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className='menu-item categ' href='/idioms'>
              Idioms
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item categ' href='/body'>
                Parts of the body
              </a>
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <a className='menu-item categ' href='#'>
              Seasons
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item categ' href='/spring'>
                Spring(Frühling)
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <a className='menu-item categ' href='/#'>
          <i className='fas fa-caret-right arrow'></i>
          Writing
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='/tips'>
              Tips&Tricks
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className='menu-item categ' href='/#'>
          <i className='fas fa-caret-right arrow'></i>
          Listening
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='/listening-tips'>
              Tips&Tricks
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className='menu-item categ' href='/#'>
          <i className='fas fa-caret-right arrow'></i>
          Speaking
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='/speaking-tips'>
              Tips&Tricks
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className='menu-item categ' href='/exercices'>
          <i className='fas fa-caret-right arrow'></i>
          Exercises
        </a>
        <ul>
          <li>
            <a className='menu-item categ' href='#'>
              Grammar
            </a>
          </li>
          <ul>
            <li>
              <a className='menu-item categ' href='/exercises-grammar'>
                Verbs
              </a>
            </li>
          </ul>
        </ul>
      </div>

      <a className='menu-item categ' href='/quizes'>
        <i className='fas fa-caret-right arrow'></i>
        Quizes
      </a>
    </Menu>
  )
}
