import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function NavigationBar() {
  const { user } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);

  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img alt="Logo" src="/assets/logo.png" style={{ height: '100px', width: 'auto', margin: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/pams">Personas Adultas Mayores</Nav.Link>
              <Nav.Link as={Link} to="/pam">PAM</Nav.Link>
              {isLogged &&
                <Nav.Link as={Link} to="/profile">Mi perfil</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </div>
  );
}

export default NavigationBar;
