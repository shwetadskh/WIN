import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar className="navBar" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand className="navBarHome">Pet World</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navBarLinks">
                    <LinkContainer to="/products">
                        <Nav.Link className="productLink">Available Animals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="aboutLink">About Us</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;