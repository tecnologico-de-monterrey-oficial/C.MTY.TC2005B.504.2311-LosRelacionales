import './Prueba.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useAddPamTestMutation } from '../../store';
import Axios from 'axios';

function PruebaGijon() {

  const pamIdJaime = 7;

  const [respuestas, setRespuestas] = useState({
    pregunta1: 0,
    pregunta2: 0,
  });
  const [resultado, setResultado] = useState("");

  const handleRespuesta = (pregunta, valor) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [pregunta]: valor,
    }));
  };

  const calcularPuntuacion = () => {
    let puntuacion = 0;

    // Pregunta 1
    if (respuestas.pregunta1 === 1) {
      puntuacion += 1;
    } else if (respuestas.pregunta1 === 2) {
      puntuacion += 2;
    } else if (respuestas.pregunta1 === 3) {
      puntuacion += 3;
    } else if (respuestas.pregunta1 === 4) {
      puntuacion += 4;
    } else if (respuestas.pregunta1 === 5) {
      puntuacion += 5;
    }

    // Pregunta 2
    if (respuestas.pregunta2 === 1) {
      puntuacion += 1;
    } else if (respuestas.pregunta2 === 2) {
      puntuacion += 2;
    } else if (respuestas.pregunta2 === 3) {
      puntuacion += 3;
    } else if (respuestas.pregunta2 === 4) {
      puntuacion += 4;
    } else if (respuestas.pregunta2 === 5) {
      puntuacion += 5;
    }

    // Pregunta 3
    if (respuestas.pregunta3 === 1) {
      puntuacion += 1;
    } else if (respuestas.pregunta3 === 2) {
      puntuacion += 2;
    } else if (respuestas.pregunta3 === 3) {
      puntuacion += 3;
    } else if (respuestas.pregunta3 === 4) {
      puntuacion += 4;
    } else if (respuestas.pregunta3 === 5) {
      puntuacion += 5;
    }

    return puntuacion;
  };

  const handleSubmit = () => {
    const puntuacion = calcularPuntuacion();
    setResultado(puntuacion.toString());

    Axios.post('http://10.14.255.53:3010/add-pam-test', {
      test_id: 12,
      test_result: puntuacion,
      pam_id: pamIdJaime,
      test_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }).then(() => {
      console.log("success");
    });

  };

  return (
    <div className='test'>
      <h1>Prueba de Gijón</h1>
      <div>
        <p>Puntaje: {resultado}</p>
      </div>
      <div className='questions'>
        <div className='question'>
          <p>Situación familiar</p>
          <Form.Select
            value={respuestas.pregunta1}
            onChange={(e) => handleRespuesta("pregunta1", parseInt(e.target.value))}
          >
            <option value={0}>Seleccione una opción</option>
            <option value={1}>1 punto - Vive con pareja y/o familia sin conflicto.</option>
            <option value={2}>2 puntos - Vive con pareja de similar edad.</option>
            <option value={3}>3 puntos - Vive con pareja y/o familia y/o otros, pero no puedes o no quieren atenderlo.</option>
            <option value={4}>4 puntos - Vive solo, hijos y/o familiares próximos que no cubren todas las necesidades.</option>
            <option value={5}>5 puntos - Vive solo, familia lejana, desatendido, sin familia.</option>
          </Form.Select>
        </div>
        <div className='question'>
          <p>Relaciones y contactos sociales</p>
          <Form.Select
            value={respuestas.pregunta2}
            onChange={(e) => handleRespuesta("pregunta2", parseInt(e.target.value))}
          >
            <option value={0}>Seleccione una opción</option>
            <option value={1}>1 punto - Mantiene relaciones sociales fuera del domicilio.</option>
            <option value={2}>2 puntos - Solo se relaciona con familia/vecinos/otros, sale de casa.</option>
            <option value={3}>3 puntos - Solo se relaciona con familia, sale de casa.</option>
            <option value={4}>4 puntos - No sale de su domicilio, recibe familia o visitas (más de una vez por semana).</option>
            <option value={5}>5 puntos - No sale del domicilio, ni recibe visitas (una vez por semana).</option>
          </Form.Select>
        </div>
        <div className='question'>
          <p>Apoyo red social</p>
          <Form.Select
            value={respuestas.pregunta3}
            onChange={(e) => handleRespuesta("pregunta3", parseInt(e.target.value))}
          >
            <option value={0}>Seleccione una opción</option>
            <option value={1}>1 punto -  No necesita ningun apoyo.</option>
            <option value={2}>2 puntos - Recibe apoyo de la familia y/o vecinos.</option>
            <option value={3}>3 puntos - Recibe apoyo social formal suficiente (centro de día, trabajador/familiar, vive en residencia, etc.)</option>
            <option value={4}>4 puntos - Tiene soporte pero es insuficiente.</option>
            <option value={5}>5 puntos - No tiene ningun soporte social y lo necesita.</option>
          </Form.Select>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="secondary" onClick={handleSubmit}>Enviar</Button>
      </div>
      <br />
      <Link to="/Profile">Regresar</Link>
    </div>
  );
}

export default PruebaGijon;
