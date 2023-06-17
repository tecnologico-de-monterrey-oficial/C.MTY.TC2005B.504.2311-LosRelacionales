import React, { useEffect } from 'react'
import './PruebaPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchTestByDimensionIdQuery } from '../store';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function PruebaPorDimension({ id }) {

    //const { data: testData, isFetching, isError } = useFetchTestByDimensionIdQuery(id);

    const [testArray, setTestArray] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);



    useEffect(() => {
        Axios.get(`http://10.14.255.53:3010/get-tests-by-dimension/${id}`)
            .then((response) => {
                setTestArray(response.data.tests);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    useEffect(() => {
        if (testArray) {
            setIsLoading(false);
            console.log(testArray);
        }
    }, [testArray]);


    return (

        <>

            <div className="tests-list">
                {!isLoading && (

                    testArray.map((test) => (
                        <Link to={`/pruebas/${test.test_id}`}>
                            <Button key={test.test_id} variant="secondary" size="lg">
                                {test.test_name}
                            </Button>
                        </Link>
                    ))
                )}
            </div>

        </>
        
    );
}
export default PruebaPorDimension;
