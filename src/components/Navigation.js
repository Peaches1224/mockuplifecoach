import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <div>
      <Navbar >
        <Container className='flex justify-content-between'>
          <Navbar.Brand justify-content='flex-end' ><Link style={{ textDecoration: 'none',color:"#800020"}} to="/">ITherapy</Link></Navbar.Brand>
          <Nav className="me-auto" style={{color:"#800020"}}>
            <Nav.Link><Link style={{ textDecoration: 'none',color:"#800020"  }} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none',color:"#800020" }} to="/about">About</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none',color:"#800020" }} to="/services">Services</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' ,color:"#800020"}} to="/pricing">Pricing</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' ,color:"#800020"}} to="/contacts">Contacts</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' ,color:"#800020"}} to="/signup">Sign Up</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none',color:"#800020" }} to="/login">Log In</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

