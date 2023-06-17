import './Searcher.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchPamPersonByRoleIdQuery } from '../../store';
import { changePerson, }
    from '../../store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';


export default function Searcher() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [search, setSearch] = useState('%20');

    const { data: pamPersonData, error, isFetching } = useFetchPamPersonByRoleIdQuery(search);
    const [pamPerson, setPamPerson] = useState({});

    useEffect(() => {
        if (pamPersonData) {
            setPamPerson(pamPersonData);
        }
    }, [pamPersonData]);

    const handleSearch = (e) => {
        if (e !== '') {
            setName(e);
            setSearch(e);
        } else {
            setSearch('%20');
            setName('');
        }
    };

    const handleEdit = (id) => {
        dispatch(changePerson(pamPerson.pam.find((pam) => pam.person_id === id)));
        navigate(`/pam/edit/${id}`);
    };

    return (
        <div className='searcher'>
            <h4>Búsqueda de Persona Adulta Mayor</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Busca por nombre"
                        value={name}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Table striped hover>
                <thead>
                    <tr className='header-row'>
                        <th className='first'>Nombre</th>
                        <th>Apellidos</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Sexo</th>
                        <th className='last'>Parroquia</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {<tbody>
                    {isFetching && (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    )}
                    {!isFetching && pamPersonData.pam.map((pam) => (
                        <tr key={pam.person_id}>
                            <td>{pam.first_name}</td>
                            <td>{pam.last_name}</td>
                            <td>{pam.birth_date.substring(0, 10)}</td>
                            {pam.gender_id === 1 ? <td>Femenino</td> : <td>Masculino</td>}
                            <td>{pam.group_name}</td>
                            <td>
                                <Button onClick={() => handleEdit(pam.person_id)}>Editar</Button>
                                <Button>Eliminar</Button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>}
            </Table>
        </div>
    );
}