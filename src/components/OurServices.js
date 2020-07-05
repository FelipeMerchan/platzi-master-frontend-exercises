import React from 'react'

import './styles/OurServices.css'

function OurServices() {
  return (
    <section className="OurServices">
      <div>
        <h2 className="OurServices___title">Nuestros Servicios</h2>
        <ul className="OurServices__list">
          <li>
            <a href="/" target="_blank">Consultoría Gerencial</a>
          </li>
          <li>
            <a href="/" target="_blank">Análisis Regulatorio de Políticas</a>
          </li>
          <li>
            <a href="/" target="_blank">Investigación de Mercado</a>
          </li>
          <li>
            <a href="/" target="_blank">Gestión de Proyectos</a>
          </li>
          <li>
            <a href="/" target="_blank">Regulación de Soporte</a>
          </li>
          <li>
            <a href="/" target="_blank">Análisis de Riesgos</a>
          </li>
          <li>
            <a href="/" target="_blank">Formación Gerencial</a>
          </li>
        </ul>
      </div>
      <div>
        <a className="button" href="/" target="_blank">Leer más</a>
      </div>
    </section>
  )
}

export default OurServices