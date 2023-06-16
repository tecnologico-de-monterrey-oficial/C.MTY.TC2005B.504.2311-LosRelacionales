import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useAddPamTestMutation, useAddPamTestAnswerMutation,
  useFetchAnswerByQuestionIdQuery, useFetchQuestionByTestIdQuery, changeTest } from '../../store';
import Axios from 'axios';


function Pruebas2() {

const dispatch = useDispatch();
const [addPamTest] = useAddPamTestMutation();
const [addPamTestAnswer] = useAddPamTestAnswerMutation();
const { data: questionData } = useFetchQuestionByTestIdQuery();
const { data: answerData } = useFetchAnswerByQuestionIdQuery();
const { testId } = useSelector((state) => state.test);
console.log(testId);


}

export default Pruebas2;
