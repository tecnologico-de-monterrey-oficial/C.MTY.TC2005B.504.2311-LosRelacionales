import './Searcher.css';
import Table from 'react-bootstrap/Table';
import { useFetchPamPersonByRoleIdQuery } from '../../store';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';


export default function Searcher() {
    const [name, setName] = useState('');
    const [search, setSearch] = useState('%20');
    const { data, error, isFetching } = useFetchPamPersonByRoleIdQuery(search);

    console.log(data);

const handleSearch = (e) => {
    if (e !== '') {
        setName(e);
        setSearch(e);
    }else{
        setSearch('%20');
        setName('');
    }
};

    return (
        <div>
            <div className='searcher'>
                <h4>Búsqueda de Persona Adulta Mayor</h4>
                <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Buscar por nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder ="Escribe aquí"
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
                        </tr>
                    </thead>
                    { <tbody>
                        {isFetching && (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        )}
                        {!isFetching && data.pam.map((pam) => (
                            <tr key={pam.person_id}>
                                <td>{pam.first_name}</td>
                                <td>{pam.last_name}</td>
                                <td>{pam.birth_date.substring(0, 10)}</td>
                                {pam.gender_id === 1 ? <td>Femenino</td> : <td>Masculino</td>}
                                <td>{pam.group_name}</td>
                            </tr>
                        ))
                        }
                    </tbody> } 
                </Table>
            </div>
        </div>
    );
}