import './PAM.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useFetchPamGroupByParentIdQuery } from '../../store';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    changePerson,
    useEditPersonMutation,
    useEditPamMutation,
} from '../../store';

export default function PAM() {
    const params = useParams();
    const dispatch = useDispatch();
    const { first_name, last_name, gender_id, role_id, phone, email, country, state, city, address_1, address_2, zip_code,
        birth_date, deceased_date, guardian_id, doctor_id, belongs_to_archdiocese, pam_group_id, diocese_id, zone_id, deanery_id,
        parish_id } = useSelector((state) => state.person);

    const [editPerson] = useEditPersonMutation();
    const [editPam] = useEditPamMutation();

    const handleSubmit = () => {
        editPerson({
            first_name: first_name,
            last_name: last_name,
            gender_id: gender_id,
            role_id: role_id,
            phone: phone,
            email: email,
            country: country,
            state: state,
            city: city,
            address_1: address_1,
            address_2: address_2,
            zip_code: zip_code,
        });

        editPam({
            birth_date: birth_date,
            deceased_date: deceased_date,
            guardian_id: guardian_id,
            doctor_id: doctor_id,
            belongs_to_archdiocese: belongs_to_archdiocese,
            pam_group_id: pam_group_id,
            diocese_id: diocese_id,
            zone_id: zone_id,
            deanery_id: deanery_id,
            parish_id: parish_id,
        });
    };

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

    return (
        <div className='pam'>
            <h3>{first_name} {last_name}</h3>
            <div className='data'>
                <Form onSubmit={() => handleSubmit()}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            value={first_name}
                            onChange={(e) => dispatch(changeFirstName(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido"
                            value={last_name}
                            onChange={(e) => dispatch(changeLastName(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label>Género</Form.Label>
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
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Teléfono"
                            value={phone}
                            onChange={(e) => dispatch(changePhone(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => dispatch(changeEmail(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCountry">
                        <Form.Label>País</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="País"
                            value={country}
                            onChange={(e) => dispatch(changeCountry(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Estado"
                            value={state}
                            onChange={(e) => dispatch(changeState(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ciudad"
                            value={city}
                            onChange={(e) => dispatch(changeCity(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress1">
                        <Form.Label>Dirección 1</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Dirección 1"
                            value={address_1}
                            onChange={(e) => dispatch(changeAddress1(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress2">
                        <Form.Label>Dirección 2</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Dirección 2"
                            value={address_2}
                            onChange={(e) => dispatch(changeAddress2(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formZipCode">
                        <Form.Label>Código postal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Código postal"
                            value={zip_code}
                            onChange={(e) => dispatch(changeZipCode(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBirthDate">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Fecha de nacimiento"
                            value={birth_date}
                            onChange={(e) => dispatch(changeBirthDate(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDeceasedDate">
                        <Form.Label>Fecha de fallecimiento</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Fecha de fallecimiento"
                            value={deceased_date}
                            onChange={(e) => dispatch(changeDeceasedDate(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGuardianId">
                        <Form.Label>ID del guardián</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ID del guardián"
                            value={guardian_id}
                            onChange={(e) => dispatch(changeGuardianId(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDoctorId">
                        <Form.Label>ID del doctor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ID del doctor"
                            value={doctor_id}
                            onChange={(e) => dispatch(changeDoctorId(e.target.value))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBelongsToArchdiocese">
                        <Form.Label>¿Perteneces a una diócesis?</Form.Label>
                        <Form.Check
                            type="switch"
                            checked={belongs_to_archdiocese}
                            onChange={(e) => {
                                if (e.target.checked) { // No sé si es checked o target.checked
                                    dispatch(changeBelongsToArchdiocese(true));
                                    setShowDiocese(true);
                                } else {
                                    dispatch(changeBelongsToArchdiocese(false));
                                    setShowDiocese(false);
                                }
                            }}
                        />
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
                        <Button type='submit'>
                            Actualizar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}