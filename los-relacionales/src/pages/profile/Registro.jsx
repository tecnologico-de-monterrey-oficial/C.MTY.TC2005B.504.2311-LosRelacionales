import './Registro.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useFetchPersonByEmailQuery, useFetchPamByPersonIdQuery, useFetchPamGroupByParentIdQuery, useFetchDimensionsQuery, changePerson } from '../../store';
import {
  changeFirstName,
  changeLastName,
  changeGenderId,
  changePhone,
  changeCountry,
  changeState,
  changeCity,
  changeAddress1,
  changeAddress2,
  changeZipCode,
  changeBirthDate,
  changeBelongsToArchdiocese,
  changeDioceseId,
  changeZoneId,
  changeDeaneryId,
  resetPerson,
  changeParishId,
  useAddPersonMutation,
  useAddPamMutation,
} from '../../store';

function Registro() {
  const [person, setPerson] = useState([]);
  const [personID, setPersonID] = useState();
  const [stage, setStage] = useState(0);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [addPerson] = useAddPersonMutation();
  const [addPam] = useAddPamMutation();

  const { data: dataPerson } = useFetchPersonByEmailQuery(user.email);
  const { data: dataPam } = useFetchPamByPersonIdQuery(personID);
  const { first_name, last_name, gender_id, role_id, phone, email, country, state, city, address_1, address_2, zip_code,
    birth_date, deceased_date, guardian_id, doctor_id, belongs_to_archdiocese, pam_group_id, diocese_id, zone_id, deanery_id, parish_id } = useSelector((state) => state.person);

  const dataDioceses = useFetchPamGroupByParentIdQuery(1);
  const [dioceses, setDioceses] = useState([]);
  const [showDiocese, setShowDiocese] = useState(false);
  const dataZones = useFetchPamGroupByParentIdQuery(diocese_id);
  const [zones, setZones] = useState([]);
  const [showZone, setShowZone] = useState(false);
  const dataDeaneries = useFetchPamGroupByParentIdQuery(zone_id);
  const [deaneries, setDeaneries] = useState([]);
  const [showDecanato, setShowDeanery] = useState(false);
  const dataParishes = useFetchPamGroupByParentIdQuery(deanery_id);
  const [parishes, setParishes] = useState([]);
  const [showParish, setShowParish] = useState(false);

  useEffect(() => {
    if (dataDioceses.data) {
      setDioceses(dataDioceses.data.pam_group);
    }
  }, [dataDioceses.data]);

  useEffect(() => {
    if (dataZones.data) {
      setZones(dataZones.data.pam_group);
    }
  }, [dataZones.data]);

  useEffect(() => {
    if (dataDeaneries.data) {
      setDeaneries(dataDeaneries.data.pam_group);
    }
  }, [dataDeaneries.data]);

  useEffect(() => {
    if (dataParishes.data) {
      setParishes(dataParishes.data.pam_group);
    }
  }, [dataParishes.data]);

  useEffect(() => {
    if (dataPerson) {
      setPerson(dataPerson.person);
      if (dataPerson.person.length > 0) setPersonID(dataPerson.person[0].person_id);
    }
  }, [dataPerson]);

  useEffect(() => {
    if (dataPam) {
      if (dataPam.pam.length > 0) {
        storeState(
          {
            first_name: person[0].first_name,
            last_name: person[0].last_name,
            gender_id: person[0].gender_id,
            role_id: person[0].role_id,
            phone: person[0].phone,
            email: person[0].email,
            country: person[0].country,
            state: person[0].state,
            city: person[0].city,
            address_1: person[0].address_1,
            address_2: person[0].address_2,
            zip_code: person[0].zip_code,
            birth_date: dataPam.pam[0].birth_date,
            deceased_date: dataPam.pam[0].deceased_date,
            guardian_id: dataPam.pam[0].guardian_id,
            doctor_id: dataPam.pam[0].doctor_id,
            belongs_to_archdiocese: dataPam.pam[0].belongs_to_archdiocese,
            pam_group_id: dataPam.pam[0].pam_group_id,
            diocese_id: dataPam.pam[0].diocese_id,
            zone_id: dataPam.pam[0].zone_id,
            deanery_id: dataPam.pam[0].deanery_id,
            parish_id: dataPam.pam[0].parish_id,
          }
        );
        setStage(2);
      }
    }
  }, [dataPam]);

  const handleSubmitPerson = () => {
    addPerson({
      first_name: first_name,
      last_name: last_name,
      gender_id: gender_id,
      role_id: 1,
      phone: phone,
      email: user.email,
      country: country,
      state: state,
      city: city,
      address_1: address_1,
      address_2: address_2,
      zip_code: zip_code,
    });
    setStage(1);
  };

  const handleSubmitPam = () => {
    addPam({
      person_id: person[0].person_id,
      birth_date: birth_date,
      guardian_id: 1,
      doctor_id: 1,
      belongs_to_archdiocese: belongs_to_archdiocese,
      pam_group_id: parish_id,
    });
    setStage(2);
    storeState({
      first_name: person[0].first_name,
      last_name: person[0].last_name,
      gender_id: person[0].gender_id,
      role_id: person[0].role_id,
      phone: person[0].phone,
      email: person[0].email,
      country: person[0].country,
      state: person[0].state,
      city: person[0].city,
      address_1: person[0].address_1,
      address_2: person[0].address_2,
      zip_code: person[0].zip_code,
      birth_date: dataPam.pam[0].birth_date,
      deceased_date: dataPam.pam[0].deceased_date,
      guardian_id: dataPam.pam[0].guardian_id,
      doctor_id: dataPam.pam[0].doctor_id,
      belongs_to_archdiocese: dataPam.pam[0].belongs_to_archdiocese,
      pam_group_id: dataPam.pam[0].pam_group_id,
      diocese_id: dataPam.pam[0].diocese_id,
      zone_id: dataPam.pam[0].zone_id,
      deanery_id: dataPam.pam[0].deanery_id,
      parish_id: dataPam.pam[0].parish_id,
    });
  };

  const storeState = (person) => {
    dispatch(changePerson(person));
  };

  const [dimensionsArray, setDimensionsArray] = useState(null);
  const { data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions } = useFetchDimensionsQuery();

  useEffect(() => {
    if (dimensionsData) {
      setDimensionsArray(dimensionsData.dimensions);
    }
  }, [dimensionsData]);

  return (
    <div className='perfil'>
      {stage == 0 &&
        <div className='registro'>
          <h1 style={{ marginBottom: '2rem' }}>Mi perfil</h1>
          <h2>Por favor llena tus datos para poder continuar</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Escribe tu nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={first_name}
                onChange={(e) => dispatch(changeFirstName(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Escribe tus appelidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={last_name}
                onChange={(e) => dispatch(changeLastName(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Selecciona tu género</Form.Label>
              <Form.Select
                value={gender_id}
                onChange={(e) => dispatch(changeGenderId(e.target.value))}
              >
                <option value={3}>Abre este menú</option>
                <option value={1}>Femenino</option>
                <option value={2}>Masculino</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Escribe tu número de teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={phone}
                onChange={(e) => dispatch(changePhone(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Escribe tu país</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={country}
                onChange={(e) => dispatch(changeCountry(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>Escribe tu estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={state}
                onChange={(e) => dispatch(changeState(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Escribe tu ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={city}
                onChange={(e) => dispatch(changeCity(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Escribe tu dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={address_1}
                onChange={(e) => dispatch(changeAddress1(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress2">
              <Form.Label>Escribe una segunda dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={address_2}
                onChange={(e) => dispatch(changeAddress2(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Label>Escribe tu código postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe aquí"
                value={zip_code}
                onChange={(e) => dispatch(changeZipCode(e.target.value))}
              />
            </Form.Group>
            <div className='btn-container'>
              <Button type='submit' onClick={handleSubmitPerson}>Continuar</Button>
            </div>
          </Form>
        </div>
      }

      {stage == 1 &&
        <div className='registro'>
          <Form>
            <Form.Group className="mb-3" controlId="formBirthDate">
              <Form.Label>Selecciona tu fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Escribe aquí"
                value={birth_date}
                onChange={(e) => dispatch(changeBirthDate(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBelongsToArchdiocese" value={belongs_to_archdiocese}>
              <Form.Label>¿Asistes a alguna iglesia católica?</Form.Label>
              <Form.Check type='radio' name='dioc' label='Sí' value={true} onClick={() => {
                dispatch(changeBelongsToArchdiocese(true));
                setShowDiocese(true)
              }} />
              <Form.Check type='radio' name='dioc' label='No' value={false} onClick={() => {
                dispatch(changeBelongsToArchdiocese(false));
                setShowDiocese(false);
              }} />
            </Form.Group>

            {showDiocese && (
              <>
                <Form.Group className="mb-3" controlId="diocese_id">
                  <Form.Label>Diócesis</Form.Label>
                  <Form.Select
                    value={diocese_id}
                    onChange={(e) => {
                      dispatch(changeDioceseId(e.target.value))
                      setShowZone(true);
                    }}
                  >
                    <option value={1}>Selecciona una diócesis</option>
                    {dioceses.map((diocese) => {
                      return (
                        <option key={diocese.pam_group_id} value={diocese.pam_group_id}>
                          {diocese.group_name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {showZone && (
                  <Form.Group className="mb-3" controlId="zone_id">
                    <Form.Label>Zona</Form.Label>
                    <Form.Select
                      value={zone_id}
                      onChange={(e) => {
                        dispatch(changeZoneId(e.target.value))
                        setShowDeanery(true);
                      }}
                    >
                      <option value={1}>Selecciona una zona</option>
                      {zones.map((zone) => {
                        return (
                          <option key={zone.pam_group_id} value={zone.pam_group_id}>
                            {zone.group_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                )}
                {showDecanato && (
                  <Form.Group className="mb-3" controlId="decanato_id">
                    <Form.Label>Decanato</Form.Label>
                    <Form.Select
                      value={deanery_id}
                      onChange={(e) => {
                        dispatch(changeDeaneryId(e.target.value))
                        setShowParish(true);
                      }}
                    >
                      <option value={1}>Selecciona una decanato</option>
                      {deaneries.map((deanery) => {
                        return (
                          <option key={deanery.pam_group_id} value={deanery.pam_group_id}>
                            {deanery.group_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                )}
                {showParish && (
                  <Form.Group className="mb-3" controlId="parish_id">
                    <Form.Label>Parroquia</Form.Label>
                    <Form.Select
                      value={parish_id}
                      onChange={(e) => {
                        dispatch(changeParishId(e.target.value))
                      }}
                    >
                      <option value={1}>Selecciona una parroquia</option>
                      {parishes.map((parish) => {
                        return (
                          <option key={parish.pam_group_id} value={parish.pam_group_id}>
                            {parish.group_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                )}
              </>
            )}

            <div className='btn-container'>
              <Button variant="primary" type="submit" onClick={handleSubmitPam}>Enviar</Button>
            </div>
          </Form>
        </div>
      }

      {stage == 2 &&
        <Profile />
      }
    </div >
  );
}

export default Registro;
