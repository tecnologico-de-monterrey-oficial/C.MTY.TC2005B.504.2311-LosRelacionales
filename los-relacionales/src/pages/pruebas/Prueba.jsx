import './Prueba.css';
import { useEffect } from 'react';
import { URLSearchParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { 
  useFetchQuestionsQuery,
  useFetchTestByDimensionIdQuery 
} from '../../store';
import { 
    useFetchQuestionByTestIdQuery, useFetchAnswerByQuestionIdQuery 
} from '../../store';
import RespuestaPrueba from '../../components/RespuestaPrueba';
import { useFetchTestWeightByIdQuery } from '../../store';
import cerebro from '../../assets/cerebro.png';
import TextoPrueba from '../../components/TextoPrueba';

function Prueba(){

    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")

    console.log(test_id);
    const [currentDimension, setCurrentDimension] = React.useState(null);
    //const {data: dimensionsData, isFetching: isFetchingDimensions, isError: isErrorDimensions} = useFetchDimensionsQuery();
    const [questionsArray, setQuestionsArray] = React.useState(null);
    const [answerArray, setAnswerArray] = React.useState(null);
    const { data: questionsData, isFetching: isFetchingQuestions, isError: isErrorQuestions } = useFetchQuestionsQuery();
    //const { data: answersData, isFetching: isFetchingAnswers, isError: isErrorAnswers } = useFetchAnswerByQuestionIdQuery(question_id);
    //const {data: weightData, isFetching: isFetchingWeight, isError: isErrorWeight} = useFetchTestWeightByIdQuery(id);
    
      useEffect(() => {
        if (questionsData) {
          setQuestionsArray(questionsData.questions);
        }
      }, [questionsData]);

    return(
    <div>
        {/* <div className="dimensionPrueba">
            <h1>Prueba</h1>
        {currentDimension && currentDimension.dimension && (
            console.Log(currentDimension.dimension_id),
            <h1>{currentDimension.dimension}</h1>
            )}
        </div> */}
        <div>
            {/* <TextoPrueba/> */}
        </div>
        <div className="testsList">

        {questionsArray && (
          questionsArray
          //.filter((question) => question.test_id === test_id)
          .map((questionOption) => (
            <h1>{questionOption.question}</h1>
          ))
        )}

        {/* {questionsArray && (
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
        )} */}
      </div>
      {/* <div className="Weight">
        {weight && weight.weight && (
            <p>Peso</p>)}
        </div> */}
        <div className="imagenn">
        <img
            alt=""
            src={cerebro}
            height="200"
            className="imagen_prueba"
          />
          {/* <RespuestaPrueba/> */}
          </div>
    </div>
    );
}
export default Prueba;