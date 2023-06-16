import React, { useEffect } from 'react'
import './HistorialPorDimension.css';
import Button from 'react-bootstrap/Button';
import { 
    useFetchPamTestByPamIdQuery,
    useFetchTestByDimensionIdQuery, 
    useFetchColorFromPamTestQuery,
} from '../store';
import Table from 'react-bootstrap/Table';


function HistorialPorDimension( { idPam, idDimension }) {

    //console.log("idPam: " + idPam);

    const [isFetching, setIsFetching] = React.useState(true);
    const [pamTestArray, setPamTestArray] = React.useState(null);
    const [colorArray, setColorArray] = React.useState(null);
    const {data: storyData, isFetching: isFetchingPamTest, isError } = useFetchPamTestByPamIdQuery(idPam);
    const {data: testDimensionData, isFetching: isFetchingTestDimension, isError: isErrorTestDimension } = useFetchTestByDimensionIdQuery(idDimension);
    // const {data: colorData, isFetching: isFetchingColor, isError: isErrorColor} = useFetchColorFromPamTestQuery(idDimension);

    useEffect(() => {
        if (!isFetchingPamTest && !isFetchingTestDimension && storyData && testDimensionData && pamTestArray) {

            setIsFetching(false);
            // console.log("1:");
            // console.log(testDimensionData.tests.filter((test_dimension) => test_dimension.test_id == 12).length > 0);
            // console.log(pamTestArray);
            // console.log(testDimensionData.tests);
            // console.log("2:");
            // console.log(pamTestArray.filter((pam_test) => {testDimensionData.tests.filter((test_dimension) => test_dimension.test_id == pam_test.test_id).length > 0}));
        }
    }, [storyData, testDimensionData]);
    

    useEffect(() => {
        if (storyData) {
            setPamTestArray([...storyData.pam_tests].reverse());
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
                        {pamTestArray
                        //.reverse()
                        //.filter((pam_test) => {testDimensionData.tests.filter((test_dimension) => test_dimension.test_id === pam_test.test_id).length > 0})
                        .map((pam_test) => (
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
