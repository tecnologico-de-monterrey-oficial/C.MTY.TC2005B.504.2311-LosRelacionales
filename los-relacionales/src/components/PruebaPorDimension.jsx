import React, { useEffect } from 'react'
import './PruebaPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchTestByDimensionIdQuery } from '../store';


function PruebaPorDimension( { id }) {
    const {data: testData, isFetching, isError } = useFetchTestByDimensionIdQuery(id);
    
    const [testArray, setTestArray] = React.useState(null);

    useEffect(() => {
        if (testData) {
            console.log(testData.tests);
            setTestArray(testData.tests);
        }
    }, [testData]);

    return (
        <div className="testsLists">
            {!isFetching && testArray && (
                testArray.map((test) => (
                    <Button variant="secondary" size="lg">
                    {test.test_name}
                    </Button>
                ))
            )}
        </div>    
    );
}
export default BotonDimension;
