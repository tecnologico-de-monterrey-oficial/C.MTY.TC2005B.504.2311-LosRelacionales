import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner'>
      <Container fluid >
        <Row>
          <Col className='text' lg={6} md={12}>
            <h1>Vida Plena</h1>
            <h2>&quot;Los abuelitos somos fuente de sabiduría&quot;</h2>
            <p style={{ marginTop: '1rem' }}>¡Bienvenido a Vida Plena! <br /><br />
              En esta página te guiaremos en cada proceso para evaluar los distintos aspectos de tu salud.
              Te daremos recomendaciones para seguir teniendo una salud y vida plena. <br /><br />
              Si deseas continuar, oprime el botón de abajo para registrarte.
            </p>
            <div className='btns'>
              <Button>
                <Link to="/login">Iniciar sesión</Link>
              </Button>
            </div>
          </Col>
          <Col className='imgs' lg={6} md={12}>
            <div className='img-container'>
              <img className='image1' src='/assets/abuelitos.png' />
              <img className='image2' src='/assets/abuelitos2.png' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner