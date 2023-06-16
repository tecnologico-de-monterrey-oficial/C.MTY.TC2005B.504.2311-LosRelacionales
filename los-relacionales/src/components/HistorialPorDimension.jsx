import React, { useEffect } from 'react'
import './HistorialPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchPamTestByPamIdQuery } from '../store';
import Table from 'react-bootstrap/Table';


function HistorialPorDimension( { id }) {

    const {data: storyData, isFetching, isError } = useFetchPamTestByPamIdQuery(id);
    
    const [pamTestArray, setPamTestArray] = React.useState(null);

    useEffect(() => {
        if (storyData) {
            setPamTestArray(storyData.pam_tests);
            console.log(storyData.pam_tests);
        }
    }, [storyData]);

    return (
        <div className="historial">

            <h2>Historial</h2>

            {!isFetching && pamTestArray && (

                <Table striped bordered hover>
                    <thead>   
                        <tr>
                        <th>Prueba</th>
                        <th>Fecha de Realización</th>
                        <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pamTestArray.map((pam_test) => (
                            <tr>
                            <td>{pam_test.test_id}</td>
                            <td>{pam_test.test_date}</td>
                            <td>{pam_test.test_result}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            )}

        </div>    
    );
}
export default HistorialPorDimension;
