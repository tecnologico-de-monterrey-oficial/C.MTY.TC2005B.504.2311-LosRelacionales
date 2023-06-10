import './Footer.css';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer-logo">
                    <img alt="Logo" src="/assets/logo.png" style={{ height: '30px', width: 'auto' }} />
                </div>
                <div className="footer-links">
                    {/*<Link to="/navegacion">Navegación</Link>
                    <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    <Link to="/contacto">Contacto</Link>*/}
                </div>
            </Container>
        </div>
    );
}
export default Footer;