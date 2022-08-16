import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  
  
  
  
  return (
    <div>
    <Navbar className="bg-green navbar-dark d-flex align-items-start " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="/images/Bwhite.png" width='30' height='30' className='img-circle d-inline-block align top mr-5'/>{' '}</Navbar.Brand>
        <Navbar.Toggle classname="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className= "navbar-dark" id="basic-navbar-nav">
          <Nav className="ms-auto navbar-dark">
            <Nav.Link className="ms-auto text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="ms-auto text-light" href="/solitaire">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;