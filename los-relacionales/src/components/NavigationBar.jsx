import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './footer';

function NavigationBar() {
  return (
    <div>
      <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/logo.png"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="Link" to="/">
              Inicio
            </Link>
            <Link className="Link" to="/MiPerfil">
              Mi Perfil
            </Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    </div>
  );
}

export default NavigationBar;
