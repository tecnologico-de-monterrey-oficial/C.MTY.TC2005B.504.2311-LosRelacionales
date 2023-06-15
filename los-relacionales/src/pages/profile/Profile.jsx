import './Profile.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DimensionFuncional from '../dimensiones/DimensionFuncional';
import PruebaGijon from '../pruebas/PruebaGijon';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useFetchDimensionsQuery } from '../../store';
import BotonDimension from '../../components/BotonDimension';

function MiPerfil() {
  const user = useSelector((state) => state.auth.user);

  const [dimensionsArray, setDimensionsArray] = React.useState(null);
  const {data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions} = useFetchDimensionsQuery();

  useEffect(() => {
    if (dimensionsData) {
      console.log(dimensionsData.dimensions);
      setDimensionsArray(dimensionsData.dimensions);
    }
  }, [dimensionsData]);

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
          {dimensionsArray && !isFetchingDimensions && !isErrorDimensions &&
            (dimensionsArray.map((dimension) => (
              <BotonDimension id={dimension.dimension_id} />
            )))
          }
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
