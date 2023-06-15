import React from 'react';
import Button from 'react-bootstrap/Button';
import './MiPerfil.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';


function MiPerfil() {
  return (
    
    <div className="container">
      <h1>Mi Perfil</h1>
      <div className="perfil">
      <div className="perfil_contenido">
          <img
            alt=""
            src="/fotoperfil.jpg"
            height="200"
            className="imagen_perfil"
          />
          <p className="imagen_perfil_text">Juanito Perez</p>
        </div>
        <div className="dimensiones">
          <h2>Mis Dimensiones:</h2>
          <Link to="/DimensionFuncional">
          <Button variant="secondary" size="lg">
            Dimensión funcional
          </Button>
          </Link>
          <Link to="/MiPerfil">
          <Button variant="secondary" size="lg">
            Dimensión de riesgo social
          </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Dimensión cognitiva
          </Button>
          <Link to="/DimensionDFisico">
          <Button variant="secondary" size="lg">
            Dimensión de desempeño físico
          </Button>
          </Link>
          <Link to="/DimensionAfectiva">
          <Button variant="secondary" size="lg">
            Dimensión afectiva
          </Button>
          </Link>
        </div>
      </div>
      <div className="dimension_funcional">
        <h1>Dimension Funcional</h1>
        <p>El riesgo social se refiere a las situaciones que pueden afectar negativamente nuestra seguridad y bienestar en la sociedad.
             Puede incluir cosas como violencia, desempleo, discriminación y falta de acceso a recursos básicos.
            Es importante estar informado y tomar medidas para protegernos. Trabajemos juntos para crear una sociedad más segura y justa para todos.</p>
      </div>
      <br />
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Pruebas</Button>
      <Button variant="secondary">Historial</Button>
      <Button variant="secondary">Apoyo</Button>
    </ButtonGroup>
      <h2>Test de Katz</h2> 
      <img
            alt=""
            src="/cerebro.png"
            height="200"
            className="imagen_prueba"
          />
          <br />
      <Link to="/PruebaKatz">Tomar prueba</Link>
      <br />
        <p>El test de Katz es un test de valoración funcional que se utiliza para evaluar la capacidad funcional de una persona mayor.</p>
        <h2>Test de Lawton & Brody</h2> 
      <img
            alt=""
            src="/cerebro.png"
            height="200"
            className="imagen_prueba"
          />
          <br />
      <Link to="/PruebaLawtonBrody">Tomar prueba</Link>
      <br />
        <p>El test de Lawton & Brody es un test de valoración funcional que se utiliza para evaluar la capacidad funcional de una persona mayor.</p>

    </div>
  );
}

export default MiPerfil;
