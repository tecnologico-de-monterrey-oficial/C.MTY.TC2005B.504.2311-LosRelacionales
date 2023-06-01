import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar className="">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img
              alt=""
              src="/logo.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="Link" to="/">Inicio</Link>
            <Link className="Link" to="/">Testimonios</Link>
            <Link className="Link" to="/">Contacto</Link>
            <Link className="Link" to="/">Acceder a mi cuenta</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;