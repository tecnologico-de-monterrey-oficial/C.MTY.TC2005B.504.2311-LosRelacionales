import '../profile/Profile.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


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
          <Button variant="secondary" size="lg">
            Dimensión funcional
          </Button>
          <Button variant="secondary" size="lg">
            Dimensión de riesgo social
          </Button>
          <Button variant="secondary" size="lg">
            Dimensión cognitiva
          </Button>
          <Button variant="secondary" size="lg">
            Dimensión de desempeño físico
          </Button>
          <Button variant="secondary" size="lg">
            Dimensión afectiva
          </Button>
        </div>
      </div>
      <div className="tipo_dimension">
        <h1>Dimension de Desempeño Fisico</h1>
        <p>El riesdo de desempeño fisico se refiere a las situaciones</p>
        
      </div>
      <br />
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Pruebas</Button>
      <Button variant="secondary">Historial</Button>
      <Button variant="secondary">Apoyo</Button>
    </ButtonGroup>
      <h2>Test de Sarc-F</h2> 
      <img
            alt=""
            src="/cerebro.png"
            height="200"
            className="imagen_prueba"
          />
          <p>El test de Sarc-F es un test de valoración fisica que se utiliza para evaluar la capacidad de desempeño fisico de una persona mayor.</p>

          <h2>Test Riego de Fragilidad</h2> 
      <img
            alt=""
            src="/cerebro.png"
            height="200"
            className="imagen_prueba"
          />
          <p>El test de Riesgo de Fragilidad es un test de valoración fisica que se utiliza para evaluar la capacidad de desempeño fisico de una persona mayor.</p>

    </div>
  );
}

export default MiPerfil;
