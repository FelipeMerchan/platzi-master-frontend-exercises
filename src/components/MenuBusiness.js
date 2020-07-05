import React from 'react'

import './styles/MenuBusiness.css'

function MenuBusiness() {
  return (
    <nav className="MenuBusiness">
      <ul>
        <li className="MenuBusiness__item">
          <a href="/">Inicio</a>
        </li>
        <li className="MenuBusiness__item">
          <a href="/">Acerca</a>
        </li>
        <li className="MenuBusiness__item">
          <a href="/">Servicios</a>
        </li>
        <li className="MenuBusiness__item">
          <a href="/">Productos</a>
        </li>
        <li className="MenuBusiness__item">
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuBusiness