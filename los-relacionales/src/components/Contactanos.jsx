import "./Contactanos.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Contactanos() {
    return (

        <Row>

            <Col>
                <h1>Contáctanos</h1>
            </Col>

            <Form>

                <Col>
                    <Form.Group className="formNombre" controlId="formNombre">
                        <Form.Label>Introduce tu nombre (obligatorio)</Form.Label>
                        <Form.Control type="text" placeholder="Nombre(s)" />
                    </Form.Group>

                    <Form.Group className="formApellido" controlId="formApellido">
                        <Form.Label>Introduce tu apellido (obligatorio)</Form.Label>
                        <Form.Control type="text" placeholder="Apellido(s)" />
                    </Form.Group>

                    <Form.Group className="formEmail" controlId="formEmail">
                        <Form.Label>Introduce tu nombre (obligatorio)</Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                    </Form.Group>
                </Col>
        
                <Col>
                    <Form.Group controlId="formMensaje">
                    <Form.Label>Introduce tu mensaje</Form.Label>
                    <Form.Control as="textarea" />
                    </Form.Group>

                    <Button type="submit">
                    Enviar
                    </Button>
                <Col>

            </Form>


        </Row>
        
    );
}

export default Contactanos;