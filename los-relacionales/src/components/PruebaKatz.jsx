import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PruebaKatz() {
    const [respuestas, setRespuestas] = useState({
        pregunta1: 2,
        pregunta2: 2,
        pregunta3: 2,
        pregunta4: 2,
        pregunta5: 2,
        pregunta6: 2,
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
        if (respuestas.pregunta1 === 0) {
            puntuacion += 0;
        } else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
          }else if (respuestas.pregunta1 === 1) {
          puntuacion += 1;
        } 
    
        // Pregunta 2
        if (respuestas.pregunta2 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
          }else if (respuestas.pregunta2 === 1) {
          puntuacion += 1;
        } 

        // Pregunta 3
        if (respuestas.pregunta3 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
          }else if (respuestas.pregunta3 === 1) {
          puntuacion += 1;
        }
        
        // Pregunta 4
        if (respuestas.pregunta4 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
          }else if (respuestas.pregunta4 === 1) {
          puntuacion += 1;
        }
        // Pregunta 5
        if (respuestas.pregunta5 === 0) {
          puntuacion += 0;
        }else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
          } else if (respuestas.pregunta6 === 0.5) {
            puntuacion += 0.5;
        }
          else if (respuestas.pregunta5 === 1) {
          puntuacion += 1;
        }
        // Pregunta 6
        if (respuestas.pregunta6 === 0) {
            puntuacion += 0;
        } else if (respuestas.pregunta6 === 0.5) {
          puntuacion += 0.5;
        } else if (respuestas.pregunta6 === 1) {
            puntuacion += 1;
        } 
    
    
        return puntuacion;
      };
    
      const handleSubmit = () => {
        const puntuacion = calcularPuntuacion();
        setResultado(puntuacion.toString());
      };
    return (
        <div>
      <h1>Prueba de Katz</h1>
      <p>Indice de Katz (Actividades básicas de la vida diaria)</p>
      <div>
        <p>Bañarse</p>
        <select
          value={respuestas.pregunta1}
          onChange={(e) => handleRespuesta("pregunta1", parseInt(e.target.value))}
        >
          <option value={2}>No recibe ayuda</option>
          <option value={0.5}>Recibe Ayuda con una parte del cuerpo</option>
          <option value={0.5}>Recibe Ayuda con una parte del cuerpo</option>
          <option value={1}>No</option>
          </select>
      </div>
      <div>
        <p>¿Ha abandonado sus actividades e intereses?</p>
        <select
          value={respuestas.pregunta2}
          onChange={(e) => handleRespuesta("pregunta2", parseInt(e.target.value))}
        >
          <option value={2}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div>
      <div>
        <p>¿Sinete su vida vacía?</p>
        <select
          value={respuestas.pregunta3}
          onChange={(e) => handleRespuesta("pregunta3", parseInt(e.target.value))}
        >
          <option value={2}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se aburre a menudo?</p>
        <select
          value={respuestas.pregunta4}
          onChange={(e) => handleRespuesta("pregunta4", parseInt(e.target.value))}
        >
          <option value={2}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se encuentra de buen humor la mayor parte del tiempo?</p>
        <select
          value={respuestas.pregunta5}
          onChange={(e) => handleRespuesta("pregunta5", parseInt(e.target.value))}
        >
          <option value={2}>Seleccione una opción</option>
          <option value={0}>Si</option>
          <option value={1}>No</option></select>
      </div><div>
        <p>¿Teme que algo malo le ocurra?</p>
        <select
          value={respuestas.pregunta6}
          onChange={(e) => handleRespuesta("pregunta6", parseInt(e.target.value))}
        >
          <option value={2}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div>
      <Button variant="secondary" onClick={handleSubmit}>Calcular</Button>
      <div>
        <p>Puntaje: {resultado}</p>
      </div>
      <br />
      <Link to="/MiPerfil">Regresar</Link>
    </div>

    );
}
export default PruebaKatz;