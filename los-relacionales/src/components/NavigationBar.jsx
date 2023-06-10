import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img alt="Logo" src="/assets/logo.png" style={{ height:'30px', width: 'auto', margin: '10px' }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
