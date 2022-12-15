import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

//-------bootsrtap links--------
import Container from 'react-bootstrap/Container';
const NavbarTwo = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container>
        <Link to ='/'><Navbar.Brand >Styleout</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            <Nav.Link to ="Register"><Link to ="Register">Login</Link></Nav.Link>
            <Nav.Link to ="/CartTwo"><Link to = "/Cart2">Cart</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarTwo
