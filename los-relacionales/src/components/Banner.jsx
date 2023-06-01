import { useState } from 'react'
import './Banner.css'

function Banner() {

  return (
    <>
      <div className='banner'>
      <section className='text'>
      <h1>Abuelitos ABP</h1>
      <h3>"Los abuelitos somos fuente de sabiduría"</h3>
      <h6>¡Bienvenidos a Abuelitos ABP!</h6>
      <br></br>
      <p>En esta página te guiaremos en cada proceso para evaluar los distintos aspectos de tu salud.
       Te daremos recomendaciones para seguir teniendo una salud y vida plena.</p>
       <br></br>
      <p>Si deseas continuar, oprime el botón de abajo para registrarte.</p>
      <button className='buttons'>Registro</button>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
      <button className='buttons'>Acceder a mi cuenta</button>
      </section>
      <aside className='images'>
        <img className='image2' src='/Abuelitos2.png' width={300} height={200}></img>
        <img className='image1' src='/Abuelitos.png' width={300} height={200}></img>
      </aside>
      </div>
    </>
  )
}

export default Banner
