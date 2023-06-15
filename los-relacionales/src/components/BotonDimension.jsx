import React, { useEffect } from 'react'
import './BotonDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchDimensionByIdQuery } from '../store';


function BotonDimension( { id }) {
    const {data: dimensionData, isFetching, isError } = useFetchDimensionByIdQuery(id);
    
    const [dimension, setDimension] = React.useState(null);

    useEffect(() => {
        if (dimensionData) {
            console.log(dimensionData.dimension[0]);
            setDimension(dimensionData.dimension[0]);
        }
    }, [dimensionData]);

    return (
        <div className="botonDimension">
            {!isFetching && dimension && (
                <Button variant="secondary" size="lg">
                {dimension.dimension}
                </Button>
            )}
        </div>    
    );
}
export default BotonDimension;
