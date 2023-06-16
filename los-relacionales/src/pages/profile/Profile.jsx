import "./Profile.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import BotonDimension from "../../components/BotonDimension";
import PruebaPorDimension from "../../components/PruebaPorDimension";
import HistorialPorDimension from "../../components/HistorialPorDimension";
import ApoyoPorDimension from "../../components/ApoyoPorDimension";

import fotoperfil from "../../assets/fotoperfil.jpg";
import cerebro from "../../assets/cerebro.png";

import {
  useFetchDimensionsQuery,
  useFetchPersonByEmailQuery,
  useFetchPamByPersonIdQuery,
} from "../../store";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  const {
    first_name,
    last_name,
    gender_id,
    role_id,
    phone,
    email,
    country,
    state,
    city,
    address_1,
    address_2,
    zip_code,
    birth_date,
    deceased_date,
    guardian_id,
    doctor_id,
    belongs_to_archdiocese,
    pam_group_id,
    diocese_id,
    zone_id,
    deanery_id,
    parish_id,
  } = useSelector((state) => state.person);

  const [currentState, setCurrentState] = useState(null); // ["pruebas", "historial", "apoyo"
  const [currentDimension, setCurrentDimension] = React.useState(null);
  const [dimensionsArray, setDimensionsArray] = React.useState(null);
  const [currentPersonId, setCurrentPersonId] = React.useState(null);
  const {
    data: dimensionsData,
    isFetching: isFetchingDimensions,
    isError: isErrorDimensions,
  } = useFetchDimensionsQuery();
  const {
    data: personData,
    isFetching: isFetchingPerson,
    isError: isErrorPerson,
  } = useFetchPersonByEmailQuery(user.email);
  const {
    data: pamData,
    isFetching: isFetchingPam,
    isError: isErrorPam,
  } = useFetchPamByPersonIdQuery(currentPersonId);

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

  useEffect(() => {
    if (personData && personData.person.length > 0) {
      setCurrentPersonId(personData.person[0].person_id);
    }
  }, [personData]);

  return (
    <div className="profile">
      {!isFetchingPam && (
        <>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <h1>Mi Perfil</h1>
                <div>
                  {user && (
                    <div>
                      <p>Nombre de usuario: {user.displayName}</p>
                      <p>Correo electrónico: {user.email}</p>
                    </div>
                  )}
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="dimensiones">
                  <h2>Mis Dimensiones</h2>
                  {dimensionsArray &&
                    !isFetchingDimensions &&
                    !isErrorDimensions &&
                    dimensionsArray.map((dimension) => (
                      <BotonDimension
                        key={dimension.dimension_id}
                        id={dimension.dimension_id}
                        func={() => handleDimensionClick(dimension)}
                      />
                    ))}
                </div>
              </Col>
            </Row>
          </Container>

          <div className="component">
            {currentDimension && currentDimension.dimension && (
              <h1>{currentDimension.dimension}</h1>
            )}
            {/* <p>El riesgo social se refiere a las situaciones
            que pueden afectar negativamente nuestra seguridad
            y bienestar en la sociedad.</p> */}

            {currentDimension && (
              <ButtonGroup aria-label="Basic example">
                <Button
                  onClick={() => handleChangeState("pruebas")}
                  variant="secondary"
                  className="first"
                >
                  Pruebas
                </Button>
                <Button
                  onClick={() => handleChangeState("historial")}
                  variant="secondary"
                >
                  Historial
                </Button>
                <Button
                  onClick={() => handleChangeState("apoyo")}
                  variant="secondary"
                  className="last"
                >
                  Apoyo
                </Button>
              </ButtonGroup>
            )}
            <br />

            {currentState == "pruebas" &&
              currentDimension &&
              currentDimension.dimension_id && (
                  <PruebaPorDimension id={currentDimension.dimension_id} />
              )}

            {currentState == "historial" &&
              currentDimension &&
              currentDimension.dimension_id && (
                  <HistorialPorDimension idPam={pamData.pam[0].pam_id} idDimension={currentDimension.dimension_id} />
              )}

            {currentState == "apoyo" &&
              currentDimension &&
              currentDimension.dimension_id && (
                  <ApoyoPorDimension id={currentDimension.dimension_id} />
              )}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
