import './Searcher.css';
import Table from 'react-bootstrap/Table';
import { useFetchPamPersonByRoleIdQuery } from '../../store';
import { useEffect } from 'react';


export default function Searcher() {
    const { data, error, isFetching } = useFetchPamPersonByRoleIdQuery({ role: 1,name: ' ' });

    console.log(data);

    return (
        <div>
            <div className='searcher'>
                <h4>Búsqueda de Persona Adulta Mayor</h4>
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
                    {/* { <tbody>
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
                    </tbody> } */}
                </Table>
            </div>
        </div>
    );
}