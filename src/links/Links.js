import React from "react"
import "./Links.css"
import { Navbar, Nav } from "react-bootstrap"

function Navigation() {
  return (
    <>
      <div id='wrapper'>
        <div className='links'>
          <Navbar fixed='top'>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='#'>En/Ro</Nav.Link>
                <Nav.Link href='/login'>Log In/Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  )
}

export default Navigation
