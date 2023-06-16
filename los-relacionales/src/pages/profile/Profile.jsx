import './Profile.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


import BotonDimension from '../../components/BotonDimension';
import PruebaPorDimension from '../../components/PruebaPorDimension';
import HistorialPorDimension from '../../components/HistorialPorDimension';
import ApoyoPorDimension from '../../components/ApoyoPorDimension';


import fotoperfil from '../../assets/fotoperfil.jpg';
import cerebro from '../../assets/cerebro.png';


import { 
  useFetchDimensionsQuery,
  useFetchPersonByEmailQuery,
  useFetchPamByPersonIdQuery,
} from '../../store';

function Profile() {
  const user = useSelector((state) => state.auth.user);

  const [currentState, setCurrentState] = useState(null); // ["pruebas", "historial", "apoyo"
  const [currentDimension, setCurrentDimension] = React.useState(null);
  const [dimensionsArray, setDimensionsArray] = React.useState(null);
  const {data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions} = useFetchDimensionsQuery();
 
  const handleDimensionClick = (dimension) => {
    setCurrentDimension(dimension);
  };

  const handleChangeState = (state) => {
    setCurrentState(state);
  };

  useEffect(() => {
    if (dimensionsData) {
      setDimensionsArray(dimensionsData.dimensions);
    }
  }, [dimensionsData]);

  const {data: personData, isFetching: isFetchingPerson, isError: isErrorPerson} = useFetchPersonByEmailQuery(user.email);
  const {data: pamData, isFetching: isFetchingPam, isError: isErrorPam} = useFetchPamByPersonIdQuery(personData.person[0].person_id);
  

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
            src={fotoperfil}
            height="200"
            className="imagen_perfil"
          />
          <p className="imagen_perfil_text">Juanito Perez</p>
        </div>
        <div className="dimensiones">
          <h2>Mis Dimensiones:</h2>
          {dimensionsArray && !isFetchingDimensions && !isErrorDimensions &&
            (dimensionsArray.map((dimension) => (
              <BotonDimension key={dimension.dimension_id} id={dimension.dimension_id} func={()=> handleDimensionClick(dimension)} />
            )))
          }
        </div>
      </div>
      <div className="tipo_dimension">
        {currentDimension && currentDimension.dimension && (
        <h1>{currentDimension.dimension}</h1>
        
      )}
        {/* <p>El riesgo social se refiere a las situaciones
          que pueden afectar negativamente nuestra seguridad
          y bienestar en la sociedad.</p> */}

        {
          currentDimension && (
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => handleChangeState("pruebas")} variant="secondary">Pruebas</Button>
              <Button onClick={() => handleChangeState("historial")} variant="secondary">Historial</Button>
              <Button onClick={() => handleChangeState("apoyo")} variant="secondary">Apoyo</Button>
            </ButtonGroup>
          )
        }

      </div>
      <br />
      
      <h2>Titulo temporal</h2>

      {currentState == "pruebas" && currentDimension && currentDimension.dimension_id && (
          <PruebaPorDimension id={currentDimension.dimension_id} />
      )}

      {currentState == "historial" && currentDimension && currentDimension.dimension_id && (
          <HistorialPorDimension id={currentDimension.dimension_id} />
      )}

      {currentState == "apoyo" && currentDimension && currentDimension.dimension_id && (
          <ApoyoPorDimension id={currentDimension.dimension_id} />
      )}
      

    </div>
  );
}

export default Profile;
