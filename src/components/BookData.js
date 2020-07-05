import React from 'react'

import './styles/BookData.css'

function BookData() {
  return (
    <div className="BookData">
      <h3 className="BookData__title">Datos del libro</h3>
      <ul className="BookData__list">
        <li>
          <span>Título: HTML &amp; CSS:: Curso práctico avanzado.</span>
        </li>
        <li>
          <span>Autor: Sergio Luis Mora</span>
        </li>
        <li>
          <span>Editorial: Publicaciones Altamar</span>
        </li>
        <li>
          <span>Año de publicaci&oacuten: 2015</span>
        </li>
        <li>
          <span>ISBN</span>
        </li>
      </ul>
    </div>
  )
}

export default BookData