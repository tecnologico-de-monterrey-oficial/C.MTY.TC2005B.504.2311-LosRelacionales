import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Banner() {
  const { user } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);

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
              Si deseas continuar, oprime el botón de abajo para inicar sesión y después llena tus datos en tu perfil.
            </p>
            <div className='btns'>
              {!isLogged &&
                <Button>
                  <Link to="/login">Iniciar sesión</Link>
                </Button>
              }
              {isLogged &&
                <Button>
                  <Link to="/profile">Ir a mi perfil</Link>
                </Button>
              }
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
