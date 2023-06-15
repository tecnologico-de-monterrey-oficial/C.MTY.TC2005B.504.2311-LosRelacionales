import './Testimonios.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Testimonios() {
    return (
        <div className='testimonios'>
            <h3 style={{textAlign: 'center'}}>Testimonios</h3>
            <Container className='outer-container' fluid>
                <Row>
                    <Col className='col-mes' md={12} lg={6}>
                        <Container className='mensajes' fluid>
                            <Row>
                                <img className='quotation' src="/assets/quotationMarks.png" alt="Quotation Marks" />
                                <div className='item'>
                                    <p>
                                        Gracias a Vida Plena he podido monitorear mi salud física, mental, y de otros tipos
                                        por varios meses. Es muy fácil de usary te dan muchas recomendaciones.
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <img className='quotation' src="/assets/quotationMarks.png" alt="Quotation Marks" />
                                <div className='item'>
                                    <p>Con Vida Plena he logrado avances en mi salud que no había logrado en años.
                                        Y lo mejor de todo es que es gratis.
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <img className='quotation' src="/assets/quotationMarks.png" alt="Quotation Marks" />
                                <div className='item'>
                                    <p>Ahora puedo ver mi progreso en tiempo real y eso me motiva a seguir adelante.
                                        Gracias Vida Plena.
                                    </p>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='col-img' md={12} lg={6}>
                        <div className='frame'>
                            <div className='img-container'>
                                <Image src="/assets/harold1.jpg" />
                            </div>
                            <div className='info'>
                                <h5 style={{ textAlign: 'center' }}>Haroldo Pérez</h5>
                                <p style={{ fontSize: '1rem', textAlign: 'center' }}>Ingeniero eléctrico y padre de 4 hijos</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
