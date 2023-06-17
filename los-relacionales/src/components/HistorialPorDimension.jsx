import React, { useEffect } from 'react'
import './HistorialPorDimension.css';
import Table from 'react-bootstrap/Table';

import Axios from 'axios';

function HistorialPorDimension( { idPam, idDimension }) {

    const [isLoading, setIsLoading] = React.useState(true);
    const [pamTestArray, setPamTestArray] = React.useState(null);
    const [testsByDimensionArray, setTestsByDimensionArray] = React.useState(null);
    const [testArray, setTestArray] = React.useState(null);

    const [mappedColor, setMappedColor] = React.useState(new Map());
    const [colorMapSize, setColorMapSize] = React.useState(0);
    const [mappedName, setMappedName] = React.useState(new Map());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pamTestReq = Axios.get(`http://10.14.255.53:3010/get-pam-test-by-pam/${idPam}`);      
                const pamTestResp = await pamTestReq;
                setPamTestArray(pamTestResp.data.pam_tests);

                const testDimensionReq = Axios.get(`http://10.14.255.53:3010/get-tests-by-dimension/${idDimension}`);
                const testDimensionResp = await testDimensionReq;
                setTestsByDimensionArray(testDimensionResp.data.tests);


                const testReq = Axios.get(`http://10.14.255.53:3010/get-tests`);
                const testResp = await testReq;
                setTestArray(testResp.data.tests);

            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
      
        fetchData();

    }, []);

    useEffect(() => {

        if (pamTestArray && testsByDimensionArray && testArray) {
            mapNames();
            mapColors();
        }

        //mapColors();
    }, [pamTestArray, testsByDimensionArray, testArray]);

    useEffect(() => {
        if (pamTestArray && mappedColor.size === pamTestArray.length && mappedName.size > 0) {
            setIsLoading(false);
        }
    }, [colorMapSize]);


    const mapNames = async () => {

        for (const test of testArray) {
            const name = test.test_name;
            mappedName.set(test.test_id, name);
            }
        setMappedName(mappedName);
    }

    const mapColors = async () => {
        for (const pam_test of pamTestArray) {
            const color = await getColorFromPamTest(pam_test.pam_test_id);
            mappedColor.set(pam_test.pam_test_id, color);
            setColorMapSize(mappedColor.size);
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
                        .sort(function(x, y) {
                            if (x.test_date < y.test_date) {
                               return 1;
                            }
                            if (x.test_date > y.test_date) {
                               return -1;
                            }
                            return 0;
                         })
                        //.reverse()
                        //.filter((pam_test) => {testDimensionData.tests.filter((test_dimension) => test_dimension.test_id === pam_test.test_id).length > 0})
                        .map((pam_test) => (
                            <tr>
                                <td>{mappedName.get(pam_test.test_id)}</td>
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
