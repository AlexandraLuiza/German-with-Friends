import React from "react"
import "./Links.css"
import { Navbar, Nav } from "react-bootstrap"

function Navigation() {
  return (
    <>
      <div id='wrapper'>
        <div className='links'>
          <Navbar fixed='top' className='navbar'>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link href='/about' className='navigation'>
                  About Us
                </Nav.Link>
                <Nav.Link href='#' className='navigation'>
                  En/Ro
                </Nav.Link>
                <Nav.Link href='/login' className='navigation'>
                  Log In/Sign Up
                </Nav.Link>
                <Nav.Link href='/contact' className='navigation'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  )
}

export default Navigation
