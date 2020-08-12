import React from 'react'

import './styles/FyloHeader.css'
import fyloImagotipo from '../images/fylo/logo.svg'

function FyloHeader() {
  return (
    <header className="FyloHeader">
      <figure className="FyloHeader__imageContainer">
        <img className="FyloHeader__image" src={fyloImagotipo} width="80" alt="Fylo" />
      </figure>
      <nav className="FyloMenu">
        <li>
          <a className="FyloMenu__link" href="#features" id="features">Features</a>
        </li>
        <li>
          <a className="FyloMenu__link" href="#team" id="team">Team</a>
        </li>
        <li>
          <a className="FyloMenu__link" href="#signIn" id="signIn">Sign In</a>
        </li>
      </nav>
    </header>
  )
}

export default FyloHeader