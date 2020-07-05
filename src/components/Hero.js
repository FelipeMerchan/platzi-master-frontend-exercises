import React from 'react'

import './styles/Hero.css'
import felipeScImage from '../images/felipe-sc-photo@2x.png'

function Hero() {
  return (
    <section className="Hero">
      <figure className="Hero__imageContainer">
        <img className="Hero__image" src={felipeScImage} width="400" alt="Felipe Sc" />
        <div></div>
      </figure>
      <h1 className="Hero__title text-uppercase">Ejercicios<br /><span>frontend</span></h1>
      <h3 className="Hero__program text-uppercase">Platzi Master</h3>
      <a href="#exercises" className="Hero__scroll-down text-uppercase">Scroll down</a>
    </section>
  )
}

export default Hero