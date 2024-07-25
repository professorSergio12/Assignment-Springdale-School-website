import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../img/logo.avif';
import '../css/navbar.css';

function NavBar({ scrollToFooter, scrollToAcademics }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
          />
          Springdale Public School
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="hoverTxt px-2 px-md-3 px-lg-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="hoverTxt px-2 px-md-3 px-lg-4">About</Nav.Link>
            <Nav.Link as={Link} to="/admissions" className="hoverTxt px-2 px-md-3 px-lg-4">Admissions</Nav.Link>
            <Nav.Link as={HashLink} to="/#academics" className="hoverTxt px-2 px-md-3 px-lg-4">Academics</Nav.Link>
            <Nav.Link as={HashLink} to="/#faculty" className="hoverTxt px-2 px-md-3 px-lg-4">Faculty</Nav.Link>
            <Nav.Link as={Link} to="/student" className="hoverTxt px-2 px-md-3 px-lg-4">Students</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="hoverTxt px-2 px-md-3 px-lg-4">Gallery</Nav.Link>
            <Nav.Link onClick={scrollToFooter} className="hoverTxt px-2 px-md-3 px-lg-4" style={{ cursor: 'pointer' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
