import './Searcher.css';
import Table from 'react-bootstrap/Table';

export default function Searcher() {
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
                </Table>
            </div>
        </div>
    );
}