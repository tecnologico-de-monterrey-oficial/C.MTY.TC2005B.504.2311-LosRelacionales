import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  useAddPamTestMutation, useAddPamTestAnswerMutation, useFetchAnswerByQuestionIdQuery, useFetchQuestionByTestIdQuery,
  useFetchPamByPersonIdQuery, useFetchPamTestByPamIdQuery
} from '../../store';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './Prueba2.css'

function Pruebas2() {
  const [addPamTest] = useAddPamTestMutation();
  const urlString = window.location.href;
  const id = urlString.split("/")[4];
  const intid = parseInt(id);
  const navigate = useNavigate();

  const pamId = useSelector((state) => state.person.pam_id);
  let insertedId = 0;
  //   addPamTest({test_id: intid, test_result: 0 ,pam_id: pamId, test_date: new Date().toISOString().substring(0, 10)});  
  // const {data: pamTestData, isFetching: FetchingPamTest} = useFetchPamTestByPamIdQuery(pamId);
  // var pamTestId = 0;
  //   {
  //     FetchingPamTest ? <div><h1>Loading...</h1></div> : pamTestId = pamTestData.pam_tests[0].pam_test_id
  //   }
  //const [addPamTestAnswer] = useAddPamTestAnswerMutation();
  const [curTest, setCurTest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPrueba, setShowPrueba] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([QuestionNumber]);
  const { data: questionData, isFetching: FetchingQuestion, isError } = useFetchQuestionByTestIdQuery(id);
  const { data: answerData, isFetching: FetchingAnswer } = useFetchAnswerByQuestionIdQuery(questionId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testReq = Axios.get(`http://10.14.255.53:3010/get-test/${intid}`);
        const testResp = await testReq;
        setCurTest(testResp.data.test[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    if (curTest) {

      if (curTest.self_test === 1) {
        setShowPrueba(true);
      } else {
        setShowPrueba(false);
      }

      setIsLoading(false);

    }
  }, [curTest]);


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

  const addPamTestAnswer = async (answerId) => {
    try {
      const pamTestAnswerData = {
        pam_test_id: insertedId,
        answer_id: answerId
      };

      const pamTestAnswerResp = await Axios.post("http://10.14.255.53:3010/add-pam-test-answer", pamTestAnswerData);
      console.log(pamTestAnswerResp);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async () => {

    try {
      const pamTestData = {
        test_id: intid,
        test_result: 0,
        pam_id: pamId,
        test_date: new Date().toISOString().substring(0, 10)
      };

      const pamTestResp = await Axios.post("http://10.14.255.53:3010/add-pam-test-retrieve", pamTestData);
      console.log(pamTestResp);
      insertedId = pamTestResp.data.inserted_id;

      answers.forEach((answer) => {
        addPamTestAnswer(answer);
      });

      navigate('/profile');

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>

      {!isLoading && (
        <>
          {!showPrueba ? (
            <h1> Esta prueba no es autoaplicable </h1>
          ) : (
            <div className='questions'>
              {FetchingQuestion || FetchingAnswer ?
                <div><h1>Loading...</h1></div> :
                questionData && questionData.questions.map((question) => (
                  <Button className='question' key={question.question_id} variant="secondary" size="lg" onClick={() => setQuestionId(question.question_id)}>
                    {question.question}</Button>
                ))
              }
              <div className='answer'>
                <ListGroup>
                  {answerArray && answerArray.map((answer) => (
                    <ListGroup.Item action variant='secondary' onClick={() => HandleAnswer(answer.answer_id)}>
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
          )
          }
        </>

      )}


    </>
  );
}

export default Pruebas2;
