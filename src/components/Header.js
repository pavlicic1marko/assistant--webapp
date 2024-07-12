import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import {  useNavigate } from 'react-router-dom'


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate()
  const redirect ='/'

  const dispatch = useDispatch()

  const logoutHandler = () => {
      navigate(redirect)
      dispatch(logout())
      console.log('logout')
  }

  return (
    <header>
    <Navbar expand="lg" bg='dark' cariant='dark' collapseOnSelect>
      <Container>

        <LinkContainer qa-id='qa-home' to='/'>
            <Navbar.Brand >Home</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">


            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer qa-id='profile' to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer qa-id='ai-chat' to='/ai-chat'>
                                        <NavDropdown.Item >AI Chat</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer qa-id='todo' to='/todo'>
                                        <NavDropdown.Item >Todo</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer  to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}

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