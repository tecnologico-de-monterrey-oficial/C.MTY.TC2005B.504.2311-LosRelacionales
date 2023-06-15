import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function PruebaFrail() {
    const [respuestas, setRespuestas] = useState({
        pregunta1: 0,
        pregunta2: 0,
        pregunta3: 0,
        pregunta4: 0,
        pregunta5: 0,
        pregunta6: 0,
        pregunta7: 0,
        pregunta8: 0,
        pregunta9: 0,
        pregunta10: 0,
        pregunta11: 0,
        pregunta12: 0,
        pregunta13: 0,
        pregunta14: 0,
        pregunta15: 0,
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
        } else if (respuestas.pregunta1 === 1) {
          puntuacion += 1;
        } 
    
        // Pregunta 2
        if (respuestas.pregunta2 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta2 === 1) {
          puntuacion += 1;
        } 

        // Pregunta 3
        if (respuestas.pregunta3 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta3 === 1) {
          puntuacion += 1;
        }
        
        // Pregunta 4
        if (respuestas.pregunta4 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta4 === 1) {
          puntuacion += 1;
        }
        // Pregunta 5
        if (respuestas.pregunta5 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta5 === 1) {
          puntuacion += 1;
        }
        // Pregunta 6
        if (respuestas.pregunta6 === 0) {
            puntuacion += 0;
        } else if (respuestas.pregunta6 === 1) {
          puntuacion += 1;
        } 
    
        // Pregunta 7
        if (respuestas.pregunta7 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta7 === 1) {
          puntuacion += 1;
        } 

        // Pregunta 8
        if (respuestas.pregunta8 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta8 === 1) {
          puntuacion += 1;
        }
        
        // Pregunta 9
        if (respuestas.pregunta9 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta9 === 1) {
          puntuacion += 1;
        }
        // Pregunta 10
        if (respuestas.pregunta10 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta10 === 1) {
          puntuacion += 1;
        }
        // Pregunta 11
        if (respuestas.pregunta11 === 0) {
            puntuacion += 0;
        } else if (respuestas.pregunta11 === 1) {
          puntuacion += 1;
        } 
    
        // Pregunta 12
        if (respuestas.pregunta12 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta12 === 1) {
          puntuacion += 1;
        } 

        // Pregunta 13
        if (respuestas.pregunta13 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta13 === 1) {
          puntuacion += 1;
        }
        
        // Pregunta 14
        if (respuestas.pregunta14 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta14 === 1) {
          puntuacion += 1;
        }
        // Pregunta 15
        if (respuestas.pregunta15 === 0) {
          puntuacion += 0;
        } else if (respuestas.pregunta15 === 1) {
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
      <h1>Prueba de Fragilidad</h1>
      <div>
        <p>¿Está usted satisfecho con su vida?</p>
        <select
          value={respuestas.pregunta1}
          onChange={(e) => handleRespuesta("pregunta1", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={0}>Si</option>
          <option value={1}>No</option>
          </select>
      </div>
      <div>
        <p>¿Ha abandonado sus actividades e intereses?</p>
        <select
          value={respuestas.pregunta2}
          onChange={(e) => handleRespuesta("pregunta2", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div>
      <div>
        <p>¿Sinete su vida vacía?</p>
        <select
          value={respuestas.pregunta3}
          onChange={(e) => handleRespuesta("pregunta3", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se aburre a menudo?</p>
        <select
          value={respuestas.pregunta4}
          onChange={(e) => handleRespuesta("pregunta4", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se encuentra de buen humor la mayor parte del tiempo?</p>
        <select
          value={respuestas.pregunta5}
          onChange={(e) => handleRespuesta("pregunta5", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Teme que algo malo le ocurra?</p>
        <select
          value={respuestas.pregunta6}
          onChange={(e) => handleRespuesta("pregunta6", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Esta usted feliz la mayor parte del tiempo?</p>
        <select
          value={respuestas.pregunta7}
          onChange={(e) => handleRespuesta("pregunta7", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿A menudo siente que su situacion no tiene remedio?</p>
        <select
          value={respuestas.pregunta8}
          onChange={(e) => handleRespuesta("pregunta8", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Prefiere quedarse en casa que salir?</p>
        <select
          value={respuestas.pregunta9}
          onChange={(e) => handleRespuesta("pregunta9", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Cree que tiene más problemas de memoria que otros?</p>
        <select
          value={respuestas.pregunta10}
          onChange={(e) => handleRespuesta("pregunta10", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Piensa que es maravilloso vivir?</p>
        <select
          value={respuestas.pregunta11}
          onChange={(e) => handleRespuesta("pregunta11", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se siente inútil?</p>
        <select
          value={respuestas.pregunta12}
          onChange={(e) => handleRespuesta("pregunta12", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Se siente lleno de energía?</p>
        <select
          value={respuestas.pregunta13}
          onChange={(e) => handleRespuesta("pregunta13", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={0}>Si</option>
          <option value={1}>No</option></select>
      </div><div>
        <p>¿Ha perdido toda la esperanza?</p>
        <select
          value={respuestas.pregunta14}
          onChange={(e) => handleRespuesta("pregunta14", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
          <option value={1}>Si</option>
          <option value={0}>No</option></select>
      </div><div>
        <p>¿Piensa que los demás están mejorr que usted?</p>
        <select
          value={respuestas.pregunta15}
          onChange={(e) => handleRespuesta("pregunta15", parseInt(e.target.value))}
        >
          <option value={0}>Seleccione una opción</option>
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
export default PruebaFrail;