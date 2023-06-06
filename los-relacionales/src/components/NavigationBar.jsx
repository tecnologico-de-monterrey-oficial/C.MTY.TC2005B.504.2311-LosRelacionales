import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navegacion from './Navegacion';

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
            <Link className="Link" to="/">
              Testimonios
            </Link>
            <Link className="Link" to="/">
              Contacto
            </Link>
            <Link className="Link" to="/">
              Acceder a mi cuenta
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <footer className="Footer">
        <Container>
          <div className="Footer-links">
            <Link to="/navegacion">Navegación</Link>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="Footer-logo">
            <img alt="Logo" src="/logo.png" height="30" />
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default NavigationBar;
