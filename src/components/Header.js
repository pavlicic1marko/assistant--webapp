import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
  return (
    <header>
    <Navbar expand="lg" bg='dark' cariant='dark' collapseOnSelect>
      <Container>

        <LinkContainer to='/'>
            <Navbar.Brand >ProShop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <LinkContainer to='/cart'>
                <Navbar.Brand >Cart</Navbar.Brand>
            </LinkContainer>

            <LinkContainer to='/login'>
                <Navbar.Brand >Login</Navbar.Brand>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>        
    </header>
  )
}

export default Header