import React from "react";
import { useFetchAnswerByQuestionIdQuery } from "../store";
import { useFetchQuestionByTestIdQuery } from "../store";

function RespuestaPrueba() {
const {data: answerData, isFetching, isError } = useFetchAnswerByQuestionIdQuery(id)
const [answer, setAnswer] = React.useState(null);

const {data: questionData, isFetching: isFetchingQuestion, isError: isErrorQuestion} = useFetchQuestionByTestIdQuery(id);
const [question, setQuestion] = React.useState(null);

useEffect(() => {
    if (answerData) {
        setAnswer(answerData.answer[0]);
    }
}, [answerData]);
  return (
    <div>
    <div className="QuestionPrueba">
        {question && question.question && (
        <h1>Pregunta Prueba</h1>)}
    </div>
    <div className="AnswerPrueba">
        {answer && answer.answer && (
        <h1>RespuestaPrueba</h1>)}
    </div>
    </div>
  );
}
export default RespuestaPrueba;