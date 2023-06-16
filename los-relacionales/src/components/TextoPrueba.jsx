import { useFetchTestInstructionByIdQuery } from "../store";
import React, { useEffect } from "react";

function InstruccionesPrueba(id) {
    const [currentTestInstruction, setCurrentTestInstruction] = React.useState(null);
    const { data: testInstructionData, isFetching, isError } = useFetchTestInstructionByIdQuery(id);

    useEffect(() => {
        if (testInstructionData) {
            setCurrentTestInstruction(testInstructionData.test_instruction[0]);
        }
    }, [testInstructionData]);


    return (
        <div>
            <h1>Instrucciones</h1>
            <p>{currentTestInstruction && currentTestInstruction.test_instruction}</p>
            
        </div>

    );
}
export default InstruccionesPrueba;