import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="dark" >
        <Container className='flex justify-content-between'>
          <Navbar.Brand justify-content='flex-end' ><Link style={{ textDecoration: 'none' }} to="/">Company Name Here</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/about">About</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/services">Services</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/pricing">Pricing</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/contacts">Contacts</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/login">Log In</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

