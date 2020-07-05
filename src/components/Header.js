import React from 'react'
import './styles/Header.css'
import brandLogo from '../images/the-new-york-times-logotipo.svg'

function Header() {
  return (
      <header className="Header">
        <img className="Header__logotipo" width="600" src={brandLogo} alt="The New York Times" />
        <section className="subheading">
          <h2 className="text-left">Contenido de subcabecera</h2>
        </section>
      </header>
  )
}

export default Header