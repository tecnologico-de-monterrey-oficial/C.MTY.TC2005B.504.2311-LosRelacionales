import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PruebaGijon() {
  const [respuestas, setRespuestas] = useState({
    pregunta1: null,
    pregunta2: null,
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

    if (respuestas.pregunta1 !== null) {
      puntuacion += respuestas.pregunta1;
    }

    if (respuestas.pregunta2 !== null) {
      puntuacion += respuestas.pregunta2;
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
      <h1>Prueba de Gijón caca</h1>
      <div>
        <p>Pregunta 1: Situación familiar</p>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta1 === 1}
              onChange={() => handleRespuesta("pregunta1", 1)}
            />
            1 punto - Vive con pareja y/o familia sin conflicto.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta1 === 2}
              onChange={() => handleRespuesta("pregunta1", 2)}
            />
            2 puntos - Vive con pareja de similar edad.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta1 === 3}
              onChange={() => handleRespuesta("pregunta1", 3)}
            />
            3 puntos - Vive con pareja y/o familia y/o otros, pero no pueden o no quieren atenderlo.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta1 === 4}
              onChange={() => handleRespuesta("pregunta1", 4)}
            />
            4 puntos - Vive solo, hijos y/o familiares próximos que no cubren todas las necesidades.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta1 === 5}
              onChange={() => handleRespuesta("pregunta1", 5)}
            />
            5 puntos - Vive solo, familia lejana, desatendido, sin familia.
          </label>
        </div>
      </div>
      <div>
        <p>Pregunta 2: Relaciones y contactos sociales</p>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta2 === 1}
              onChange={() => handleRespuesta("pregunta2", 1)}
            />
            1 punto - Mantiene relaciones sociales fuera del domicilio.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta2 === 2}
              onChange={() => handleRespuesta("pregunta2", 2)}
            />
            2 puntos - Solo se relaciona con familia/vecinos/otros, sale de casa.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta2 === 3}
              onChange={() => handleRespuesta("pregunta2", 3)}
            />
            3 puntos - Solo se relaciona con familia, sale de casa.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta2 === 4}
              onChange={() => handleRespuesta("pregunta2", 4)}
            />
            4 puntos - No sale de su domicilio, recibe familia o visitas (mas de una vez por semana).
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={respuestas.pregunta2 === 5}
              onChange={() => handleRespuesta("pregunta2", 5)}
            />
            5 puntos - No sale del domicilio, ni recibe visitas (una vez por semana).
          </label>
        </div>
      </div>
      <Button variant="secondary" onClick={handleSubmit}>Calcular</Button>
      <div>
        <p>Resultado:</p>
        <input type="text" value={resultado} readOnly />
      </div>
      <br />
      <Link to="/MiPerfil">Regresar</Link>
    </div>
  );
}

export default PruebaGijon;
