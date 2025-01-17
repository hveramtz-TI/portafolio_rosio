import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'; // Importa el archivo CSS

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className="navbar">
      <Container className='contenedor-navbar'>
        <Navbar.Brand href="#home" className="mx-auto">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;