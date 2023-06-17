import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAddPamTestMutation, useAddPamTestAnswerMutation, useFetchAnswerByQuestionIdQuery, useFetchQuestionByTestIdQuery,
  useFetchPamByPersonIdQuery, useFetchPamTestByPamIdQuery } from '../../store';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Pruebas2() {
  const [addPamTest] = useAddPamTestMutation();
  const urlString = window.location.href;
  const id = urlString.split("/")[4];
  const intid = parseInt(id);

const pamId = useSelector((state) => state.person.pam_id);
//   addPamTest({test_id: intid, test_result: 0 ,pam_id: pamId, test_date: new Date().toISOString().substring(0, 10)});  
// const {data: pamTestData, isFetching: FetchingPamTest} = useFetchPamTestByPamIdQuery(pamId);
// var pamTestId = 0;
//   {
//     FetchingPamTest ? <div><h1>Loading...</h1></div> : pamTestId = pamTestData.pam_tests[0].pam_test_id
//   }
  const [addPamTestAnswer] = useAddPamTestAnswerMutation();
  const [questionId, setQuestionId] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([QuestionNumber]);
  const { data: questionData, isFetching: FetchingQuestion , isError } = useFetchQuestionByTestIdQuery(id);
  const { data: answerData, isFetching: FetchingAnswer } = useFetchAnswerByQuestionIdQuery(questionId);
    
    
    let answerIndex = 0;

useEffect(() => {
  if (questionData) {
    setQuestionNumber(questionData.questions.length);
  }
}, [questionData]);

useEffect(() => {
  if (answerData) {
    setAnswerArray(answerData.answer);
  }
}, [answerData]);

useEffect(() => {
  if (questionData) {
    setQuestionArray(questionData.questions.map((question) => (
      question.question_id
    ))
    );
  }
}, [questionData]);

  const HandleAnswer = (answerId) => {
  console.log(answerId);
  console.log(questionId);
  answerIndex = questionArray.indexOf(questionId);
  console.log(answerIndex);
  answers[answerIndex] = answerId;
  console.log(answers);
  }


const handleSubmit = () => {

  answers.forEach((answer) => {
    addPamTestAnswer({ pamTestId: pamTestId, answerId: answer });
    console.log(answer);
    console.log(pamTestId);
  });
}

  return (
    <div className='questions'>
      {FetchingQuestion || FetchingAnswer ?
        <div><h1>Loading...</h1></div> :
        questionData && questionData.questions.map((question) => (
          <Button key={question.question_id} variant="secondary" size="lg" onClick={() => setQuestionId(question.question_id)}>
            {question.question}</Button>
        ))
      }
      <div className='answer'>
          <ListGroup>
        {answerArray && answerArray.map((answer) => (
          <ListGroup.Item action onClick={() => HandleAnswer(answer.answer_id)}>
            {answer.answer}
          </ListGroup.Item>
        ))}
        </ListGroup>
        </div>  
      <div className='button'>
        <Button variant="secondary" size="lg" onClick={() => handleSubmit()}>
          Submit
        </Button>
        </div>
    </div>
  );
}

export default Pruebas2;
