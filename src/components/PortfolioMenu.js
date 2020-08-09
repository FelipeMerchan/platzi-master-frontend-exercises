import React from 'react'
import { Link } from 'react-router-dom'

import './styles/PortfolioMenu.css'

function PortfolioMenu() {
  return (
    <nav className="PortfolioMenu">
      <ul>
        <li className="PortfolioMenu__item">
          <Link to="#">inicio</Link>
        </li>
        <li className="PortfolioMenu__item">
          <Link to="#">acerca</Link>
        </li>
        <li className="PortfolioMenu__item">
          <Link to="#">portafolio</Link>
        </li>
        <li className="PortfolioMenu__item">
          <Link to="#">contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default PortfolioMenu