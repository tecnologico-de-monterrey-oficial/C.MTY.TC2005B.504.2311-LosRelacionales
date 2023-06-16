import './Searcher.css';
import Table from 'react-bootstrap/Table';
import { useFetchPersonsByRoleIdQuery } from '../../store';

export default function Searcher() {
    const { data, error, isFetching } = useFetchPersonsByRoleIdQuery(1);


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
                            <th className='last'>Decanato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isFetching && (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        )}
                        {!isFetching && data.person.map((person) => (
                            <tr key={person.person_id}>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.birth_date}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}