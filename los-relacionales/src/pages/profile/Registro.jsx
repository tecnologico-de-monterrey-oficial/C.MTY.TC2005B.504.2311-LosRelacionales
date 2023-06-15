export default function Registro() {
    {
        person.length == 0 &&
        <div className='registro'>
            {/* {isFetching && <p>Cargando...</p>} */}
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
                <Form.Group className="mb-3" controlId="formBirthDate">
                    <Form.Label>Selecciona tu fecha de nacimiento</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Escribe aquí"
                        value={birth_date}
                        onChange={(e) => dispatch(changeBirthDate(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBelongsToArchdiocese"
                    value={belongs_to_archdiocese}
                    onChange={(e) => dispatch(changeBelongsToArchdiocese(e.target.value))}
                >
                    <Form.Label>¿Asistes a alguna iglesia católica?</Form.Label>
                    <Form.Check type='radio' name='dioc' label='Sí' value={true} />
                    <Form.Check type='radio' name='dioc' label='No' value={false} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Enviar
                </Button>
            </Form>
        </div>
    }
}