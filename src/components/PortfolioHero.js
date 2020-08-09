import React from 'react'

import './styles/PortfolioHero.css'
import title from '../images/portfolio-felipe-merchan.png'

function PortfolioHero() {
  return (
    <section className="PortfolioHero">
      <figure className="PortfolioHero__imageContainer">
        <img className="PortfolioHero__image" width="350" src={ title } />
      </figure>
      <h1 className="PortfolioHero__title">Mira mis últimos diseños y proyectos. Oh, por cierto, <span>¡Bienvenido!</span></h1>
    </section>
  )
}

export default PortfolioHero