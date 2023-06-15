import React, { useEffect } from 'react'
import './HistorialPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchTestByDimensionIdQuery } from '../store';
import Table from 'react-bootstrap/Table';


function HistorialPorDimension( { id }) {
    // const {data: testData, isFetching, isError } = useFetchTestByDimensionIdQuery(id);
    
    // const [testArray, setTestArray] = React.useState(null);

    // useEffect(() => {
    //     if (testData) {
    //         setTestArray(testData.tests);
    //     }
    // }, [testData]);

    return (
        <div className="historial">

            <h2>Historial</h2>

            {/* {!isFetching && testArray && (
                testArray.map((test) => (
                    <Button variant="secondary" size="lg">
                    {test.test_name}
                    </Button>
                ))
            )} */}



            <Table striped bordered hover>
                <thead>   
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>

        </div>    
    );
}
export default HistorialPorDimension;
