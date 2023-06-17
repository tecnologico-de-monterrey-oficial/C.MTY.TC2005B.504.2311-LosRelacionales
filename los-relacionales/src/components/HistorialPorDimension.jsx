import React, { useEffect } from 'react'
import './HistorialPorDimension.css';
import Button from 'react-bootstrap/Button';
import { 
    useFetchPamTestByPamIdQuery,
    useFetchTestByDimensionIdQuery, 
    useFetchColorFromPamTestQuery,
} from '../store';
import Table from 'react-bootstrap/Table';

import Axios from 'axios';

function HistorialPorDimension( { idPam, idDimension }) {

    const [isLoading, setIsLoading] = React.useState(true);
    const [pamTestArray, setPamTestArray] = React.useState(null);
    const [testsByDimensionArray, setTestsByDimensionArray] = React.useState(null);
    const [mappedColor, setMappedColor] = React.useState(new Map());
    const [mapSize, setMapSize] = React.useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pamTestReq = Axios.get(`http://10.14.255.53:3010/get-pam-test-by-pam/${idPam}`);      
                const pamTestResp = await pamTestReq;
                setPamTestArray(pamTestResp.data.pam_tests);


                const testDimensionReq = Axios.get(`http://10.14.255.53:3010/get-tests-by-dimension/${idDimension}`);
                const testDimensionResp = await testDimensionReq;
                setTestsByDimensionArray(testDimensionResp.data.tests);

            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();

    }, []);

    useEffect(() => {

        if (pamTestArray && testsByDimensionArray) {

            mapColors();
            //console.log(pamTestArray);
            //console.log(testsByDimensionArray);
        }

        //mapColors();
    }, [pamTestArray, testsByDimensionArray]);

    useEffect(() => {
        if (pamTestArray && mappedColor.size === pamTestArray.length) {
            setIsLoading(false);
        }
    }, [mapSize]);

    const mapColors = async () => {
        for (const pam_test of pamTestArray) {
            const color = await getColorFromPamTest(pam_test.pam_test_id);
            mappedColor.set(pam_test.pam_test_id, color);
            setMapSize(mappedColor.size);
          }
        setMappedColor(mappedColor);
    }

    const getColorFromPamTest = async (idPamTest) => {
        try {
            const colorReq = Axios.get(`http://10.14.255.53:3010/get-color-from-test/${idPamTest}`);
            const colorResp = await colorReq;

            if (colorResp.data.color === "Verde") {
                return "#40eb34";

            } else if (colorResp.data.color === "Amarillo") {
                return "#f2ef13";

            } else if (colorResp.data.color === "Rojo") {
                return "#f21313";
            }

            //return colorResp.data.color;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="historial">

            <h2>Historial</h2>

            {!isLoading && (

                <Table striped bordered hover>
                    <thead>   
                        <tr>
                        <th>Prueba</th>
                        <th>Fecha de Realización</th>
                        <th>Resultado</th>
                        <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pamTestArray
                        //.reverse()
                        //.filter((pam_test) => {testDimensionData.tests.filter((test_dimension) => test_dimension.test_id === pam_test.test_id).length > 0})
                        .map((pam_test) => (
                            <tr>
                                <td>{pam_test.test_id}</td>
                                <td>{pam_test.test_date.substring(0, 10)}</td>
                                <td>{pam_test.test_result}</td>
                                <td style={{background:`${mappedColor.get(pam_test.pam_test_id)}`}}></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            )}
            
        </div>    
    );
}
export default HistorialPorDimension;
