import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Footer.css';
import navegacion from './Navegacion';
import SobreNosotros from './SobreNosotros';
import Contacto from './Contacto';

function Footer() {
    return (
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
    );
    }
export default Footer;