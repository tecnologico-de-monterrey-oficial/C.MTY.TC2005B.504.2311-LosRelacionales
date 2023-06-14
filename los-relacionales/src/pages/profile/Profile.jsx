import './Profile.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DimensionFuncional from '../dimensiones/DimensionFuncional';
import PruebaGijon from '../pruebas/PruebaGijon';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function MiPerfil() {
  const user = useSelector((state) => state.auth.user);

  return (

    <div className="container">
      <h1>Mi Perfil</h1>
      <div>
        {user &&
          <div>
            <p>Username: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>
        }
      </div>

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
      <div className="tipo_dimension">
        <h1>Dimension de Riesgo Social</h1>
        <p>El riesgo social se refiere a las situaciones
          que pueden afectar negativamente nuestra seguridad
          y bienestar en la sociedad.</p>
      </div>
      <br />
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Pruebas</Button>
        <Button variant="secondary">Historial</Button>
        <Button variant="secondary">Apoyo</Button>
      </ButtonGroup>
      <h2>Test de Gijón</h2>

      <img
        alt=""
        src="/cerebro.png"
        height="200"
        className="imagen_prueba"
      />
      <br />
      <Link to="/PruebaGijon">Tomar prueba</Link>
      <br />
      <Link to="/PruebaGijon2">Tomar prueba2</Link>
      <p>El test de Gijón es un test de valoración funcional que se utiliza para evaluar la capacidad funcional de una persona mayor.</p>

    </div>
  );
}

export default MiPerfil;
