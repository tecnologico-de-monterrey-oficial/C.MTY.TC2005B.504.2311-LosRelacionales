import React, { useEffect } from 'react'
import './BotonDimension.css';
import Button from 'react-bootstrap/Button';
import { useFetchDimensionByIdQuery } from '../store';


function BotonDimension( { id }) {
    const {data, isFetching, isError } = useFetchDimensionByIdQuery(id);
    console.log("botonTexto");
    console.log(id);
    
    const [dimension, setDimension] = React.useState(null);

    useEffect(() => {
        console.log(data);
        if (data) {
            console.log(data);
            setDimension("hola");
        }
    }, [data]);

    return (
        <div className="botonDimension">
            {!isFetching && (
                <Button variant="secondary" size="lg">
                {dimension}
                </Button>
            )}
        </div>    
    );
}
export default BotonDimension;
