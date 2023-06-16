import './Prueba.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useFetchDimensionsQuery } from '../../store';

function Prueba(test_id){
    const [currentDimension, setCurrentDimension] = React.useState(null);
    const {data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions} = useFetchDimensionsQuery();
    return(
        <div className="dimensionPrueba">
            <h1>Prueba</h1>
        {currentDimension && currentDimension.dimension && (
            console.Log(currentDimension.dimension_id),
        <h1>{currentDimension.dimension}</h1>
      )}
        </div>
    );
}
export default Prueba;