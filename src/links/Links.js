import React from "react"
import "./Links.css"
import { Navbar, Nav } from "react-bootstrap"

function Navigation() {
  return (
    <>
      <div id='wrapper' className=" navbar">
        <div className='container-fluid links'>
          <Navbar fixed='top' className='navbar'>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto '>
                <Nav.Link href='/home' className='navigation'>
                  <i className='fas fa-home'></i> Home
                </Nav.Link>
                <Nav.Link href='/about' className='navigation'>
                  <i className='fas fa-address-card'></i> About Us
                </Nav.Link>
                <Nav.Link href='/login' className='navigation'>
                  <i className='fas fa-sign-in-alt'></i> Log In
                </Nav.Link>
                <Nav.Link href='/contact' className='navigation'>
                  <i className='fas fa-id-card-alt'></i> Contact
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
