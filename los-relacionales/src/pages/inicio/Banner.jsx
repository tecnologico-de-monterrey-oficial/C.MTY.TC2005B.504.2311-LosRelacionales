import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signUpWithGoogle } from "../../store";
import Image from 'react-bootstrap/Image';
import { Navigate } from "react-router-dom";
import btnGoogleSignIn from "/assets/btn_google_signin.png";

function Banner() {
  const [isLogged, setIsLogged] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const handleSignUpWithGoogle = () => {
    dispatch(signUpWithGoogle());
    handleClose();
  };

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
                <Button onClick={handleShow}>Iniciar sesión</Button>
              }
              {isLogged &&
                <Button>
                  <Link to="/profile">Ir a mi perfil</Link>
                </Button>
              }

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Inicio de sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Signin">
                    {isLoading && <p>Loading...</p>}
                    {user && <Navigate to="/" />}
                    {!user && (
                      <div>
                        <h2 style={{textAlign: 'center'}}>¡Bienvenido!</h2>
                        <Button
                          variant="light"
                          size="lg"
                          onClick={handleSignUpWithGoogle}
                          style={{ padding: '0px' }}>
                          <Image className="btnGoogleSignin" src={btnGoogleSignIn} alt="Sign in with Google" />
                        </Button>
                      </div>
                    )}
                  </div>
                </Modal.Body>
              </Modal>

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
