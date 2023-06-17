import React, { useEffect, useState } from 'react'
import './HistorialPorDimension.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

function HistorialPorDimension({ idPam, idDimension }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [isLoading, setIsLoading] = React.useState(true);
    const [pamTestArray, setPamTestArray] = React.useState(null);
    const [testsByDimensionArray, setTestsByDimensionArray] = React.useState(null);
    const [testArray, setTestArray] = React.useState(null);
    const [recommendationArray, setRecommendationArray] = React.useState(null);

    const [colorMapSize, setColorMapSize] = React.useState(0);
    const [recommendationMapSize, setRecommendationMapSize] = React.useState(0);
    const [mappedColor, setMappedColor] = React.useState(new Map());
    const [mappedRecommendation, setMappedRecommendation] = React.useState(new Map());
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

                const recommReq = Axios.get(`http://10.14.255.53:3010/get-recommendations`);
                const recommResp = await recommReq;
                setRecommendationArray(recommResp.data.recommendations);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    useEffect(() => {

        if (pamTestArray && testsByDimensionArray && testArray && recommendationArray) {
            mapRecommendations();
            mapNames();
            mapColors();
        }

        //mapColors();
    }, [pamTestArray, testsByDimensionArray, testArray, recommendationArray]);

    useEffect(() => {
        if (pamTestArray &&
            mappedColor.size === pamTestArray.length &&
            mappedRecommendation.size === pamTestArray.length &&
            mappedName.size > 0 &&
            mappedRecommendation.size > 0) {
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

    const mapRecommendations = async () => {
        for (const pam_test of pamTestArray) {
            const recommendationObj = await getRecommFromPamTest(pam_test.pam_test_id);
            //console.log(recommendationObj);

            if (!recommendationObj) {
                mappedRecommendation.set(pam_test.pam_test_id, "No hay recomendación en la base de datos");
            } else {
                mappedRecommendation.set(pam_test.pam_test_id, recommendationObj.recommendation);
            }


            setRecommendationMapSize(mappedRecommendation.size);
        }
        setMappedRecommendation(mappedRecommendation);
    }

    const mapColors = async () => {
        for (const pam_test of pamTestArray) {
            const color = await getColorFromPamTest(pam_test.pam_test_id);
            mappedColor.set(pam_test.pam_test_id, color);
            setColorMapSize(mappedColor.size);
        }
        setMappedColor(mappedColor);
    }

    const getRecommFromPamTest = async (idPamTest) => {
        try {
            const recommReq = Axios.get(`http://10.14.255.53:3010/get-recommendation-by-test-result/${idPamTest}`);
            const recommResp = await recommReq;

            return recommResp.data.recommendation[0];

            //return colorResp.data.color;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
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
                            <th>Recomendación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pamTestArray
                            .sort(function (x, y) {
                                if (x.test_date < y.test_date) {
                                    return 1;
                                }
                                if (x.test_date > y.test_date) {
                                    return -1;
                                }
                                return 0;
                            })
                            .slice(0, 30)
                            //.reverse()
                            //.filter((pam_test) => {testDimensionData.tests.filter((test_dimension) => test_dimension.test_id === pam_test.test_id).length > 0})
                            .map((pam_test) => (
                                <tr>
                                    <td>{mappedName.get(pam_test.test_id)}</td>
                                    <td>{pam_test.test_date.substring(0, 10)}</td>
                                    <td>{pam_test.test_result}</td>
                                    <td style={{ background: `${mappedColor.get(pam_test.pam_test_id)}` }}></td>
                                    <td>
                                        <Button className={"botonRecomendacion"} key={`boton${pam_test.pam_test_id}`}
                                            onClick={() => handleShowModal(pam_test)}>
                                            Recomendación
                                        </Button>

                                        <Modal show={showModal && selectedItem === pam_test} onHide={handleCloseModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{"Recomendación"}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>{`${mappedRecommendation.get(pam_test.pam_test_id)}`}</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleCloseModal}>
                                                    Cerrar
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>

            )}

        </div>
    );
}
export default HistorialPorDimension;
