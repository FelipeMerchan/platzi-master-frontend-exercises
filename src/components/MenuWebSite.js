import React from 'react'

import './styles/MenuWebSite.css'

function MenuWebSite() {
  return (
    <nav className="MenuWebSite">
      <ul>
        <li className="MenuWebSite_item">
          <a href="/">Home</a>
        </li>
        <li className="MenuWebSite_item">
          <a href="/">Acerca de</a>
        </li>
        <li className="MenuWebSite_item">
          <a href="/">Portafolio</a>
        </li>
        <li className="MenuWebSite_item">
          <a href="/">Blog</a>
        </li>
        <li className="MenuWebSite_item">
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuWebSite