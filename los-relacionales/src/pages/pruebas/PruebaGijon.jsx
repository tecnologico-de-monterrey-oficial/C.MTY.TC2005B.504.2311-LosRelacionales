import './PruebaGijon.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PruebaGijon() {
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

    return puntuacion;
  };

  const obtenerResultado = (puntuacion) => {
    if (puntuacion < 7) {
      return "verde";
    } else if (puntuacion >= 8 && puntuacion <= 9) {
      return "amarillo";
    } else {
      return "rojo";
    }
  };

  const handleSubmit = () => {
    const puntuacion = calcularPuntuacion();
    const resultado = obtenerResultado(puntuacion);
    setResultado(resultado);
  };

  return (
    <div className='test'>
      <h1>Prueba de Gijón caca</h1>import 
      <div>
        <p>Pregunta 1: Situación familiar</p>
        <select
          value={respuestas.pregunta1}
          onChange={(e) => handleRespuesta("pregunta1", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>1 punto - Vive con pareja y/o familia sin conflicto.</option>
          <option value={2}>2 puntos - Vive con pareja de similar edad.</option>
          <option value={3}>3 puntos - Vive con pareja y/o familia y/o otros, pero no puedes o no quieren atenderlo.</option>
          <option value={4}>4 puntos - Vive solo, hijos y/o familiares próximos que no cubren todas las necesidades.</option>
          <option value={5}>5 puntos - Vive solo, familia lejana, desatendido, sin familia.</option>
        </select>
      </div>
      <div>
        <p>Pregunta 2: Relaciones y contactos sociales</p>
        <select
          value={respuestas.pregunta2}
          onChange={(e) => handleRespuesta("pregunta2", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>1 punto - Mantiene relaciones sociales fuera del domicilio.</option>
          <option value={2}>2 puntos - Solo se relaciona con familia/vecinos/otros, sale de casa.</option>
          <option value={3}>3 puntos - Solo se relaciona con familia, sale de casa.</option>
          <option value={4}>4 puntos - No sale de su domicilio, recibe familia o visitas (mas de una vez por semana).</option>
          <option value={5}>5 puntos - No sale del domicilio, ni recibe visitas (una vez por semana).</option>
        </select>
      </div>
      <Button variant="secondary" onClick={handleSubmit}>Calcular</Button>
      <div>
        <p>Resultado: </p>
        <input type="text" value={resultado} readOnly />
      </div>
      <br />
      <Link to="/MiPerfil">Regresar</Link>
    </div>
  );
}

export default PruebaGijon;
