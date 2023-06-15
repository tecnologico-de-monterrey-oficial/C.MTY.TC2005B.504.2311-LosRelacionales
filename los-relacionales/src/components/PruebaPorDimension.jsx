import React, { useEffect } from 'react'
import './PruebaPorDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchTestByDimensionIdQuery } from '../store';


function PruebaPorDimension( { id }) {
    const {data: testData, isFetching, isError } = useFetchTestByDimensionIdQuery(id);
    
    const [testArray, setTestArray] = React.useState(null);

    useEffect(() => {
        if (testData) {
            setTestArray(testData.tests);
        }
    }, [testData]);

    return (
        <div className="testsList">
            {!isFetching && testArray && (
                testArray.map((test) => (
                    <Button key={test.test_id} variant="secondary" size="lg">
                    {test.test_name}
                    </Button>
                ))
            )}
        </div>    
    );
}
export default PruebaPorDimension;
