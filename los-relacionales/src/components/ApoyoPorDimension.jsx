import React, { useEffect } from 'react'
import './ApoyoPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchTestByDimensionIdQuery } from '../store';


function ApoyoPorDimension( { id }) {
    // const {data: testData, isFetching, isError } = useFetchTestByDimensionIdQuery(id);
    
    // const [testArray, setTestArray] = React.useState(null);

    // useEffect(() => {
    //     if (testData) {
    //         setTestArray(testData.tests);
    //     }
    // }, [testData]);

    return (
        <div className="apoyo">

            <h2>Apoyo</h2>

            {/* {!isFetching && testArray && (
                testArray.map((test) => (
                    <Button variant="secondary" size="lg">
                    {test.test_name}
                    </Button>
                ))
            )} */}
        </div>    
    );
}
export default ApoyoPorDimension;
