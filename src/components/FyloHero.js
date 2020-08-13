import React from 'react'

import './styles/FyloHero.css'
import illustrationIntro from '../images/fylo/illustration-intro.png'

function FyloHero() {
  return (
    <section className="FyloHero">
      <figure className="FyloHero__imageContainer">
        <img className="FyloHero__image" width="640" src={illustrationIntro} alt="Guarda todos tus archivos en un solo lugar" />
      </figure>
      <h1 className="FyloHero__title">
        All your files in one secure location, accesible anywhere.
      </h1>
      <div>
        <p className="FyloHero__description">Fylo stores all your most important files in one secure location. 
          Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <a className="FyloHero__button" href="#getStarted" id="getStarted">Get Started</a>
      </div>
    </section>
  )
}

export default FyloHero