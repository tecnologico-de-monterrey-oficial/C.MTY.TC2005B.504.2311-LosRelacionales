import './Prueba.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useFetchDimensionsQuery } from '../../store';
import { useFetchTestByDimensionIdQuery } from '../../store';
import { useFetchQuestionsByTestIdQuery } from '../../store';
import RespuestaPrueba from '../../components/RespuestaPrueba';

function Prueba(test_id){
    const [currentDimension, setCurrentDimension] = React.useState(null);
    const {data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions} = useFetchDimensionsQuery();
    const [questionsArray, setQuestionsArray] = React.useState(null);
    const [answerArray, setAnswerArray] = React.useState(null);
  const { data: questionsData, isFetching: isFetchingQuestions, isError: isErrorQuestions } = useFetchQuestionsByTestIdQuery(test_id);
  const { data: answersData, isFetching: isFetchingAnswers, isError: isErrorAnswers } = useFetchAnswersByQuestionIdQuery(question_id);

    useEffect(() => {
        if (dimensionsData) {
          setCurrentDimension(dimensionsData.dimension[0]);
        }
      }, [dimensionsData]);
    
      useEffect(() => {
        if (questionsData) {
          setQuestionsArray(questionsData.questions);
        }
      }, [questionsData]);
    
      useEffect(() => {
        if (answersData) {
          setAnswerArray(answersData.answers);
        }
      }, [answersData]);

    return(
    <div>
        <div className="dimensionPrueba">
            <h1>Prueba</h1>
        {currentDimension && currentDimension.dimension && (
            console.Log(currentDimension.dimension_id),
            <h1>{currentDimension.dimension}</h1>
            )}
        </div>
        <div className="testsList">
        {questionsArray && (
          <Form>
            {questionsArray.map((questionOption) => (
              <Form.Group key={questionOption.id} controlId={`question-${questionOption.id}`}>
                <Form.Label>{questionOption.question}</Form.Label>
                <Form.Select aria-label="Default select example">
                  {answerArray &&
                    answerArray
                      .filter((answer) => answer.question_id === questionOption.id)
                      .map((answerOption) => (
                        <option key={answerOption.id} value={answerOption.id}>
                          {answerOption.answer}
                        </option>
                      ))}
                </Form.Select>
              </Form.Group>
            ))}
          </Form>
        )}
      </div>
    </div>
    );
}
export default Prueba;