import './Contacto.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data);
}

function Contacto() {
  return (
    <div className="contacto">
      <h1>Contáctanos</h1>
      <Form onSubmit={handleSubmit}>
        <Container fluid>
          <Row>
            <Col md={6} lg={4}>
              <b>Correo electrónico: </b>
              <a href="mailto:a01411863@tec.mx">a01411863@tec.mx</a>
              <br />
              <b>Número de teléfono: </b>
              <p style={{ display: 'inline' }}>+52 123 456 7890</p>
              <p>Monterrey, Nuevo León, México</p>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>* Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="Escribe aquí" />
              </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>* Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Escribe aquí" />
                <Form.Text className="text-muted">
                  Nunca compartiremos tu correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>* Mensaje</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Escribe aquí" />
              </Form.Group>
              <p style={{fontSize:'13px'}}>Los campos obligatorios están indicados con *</p>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Contacto;