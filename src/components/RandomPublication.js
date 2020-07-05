import React from 'react'

import './styles/RandomPublication.css'
import randomImage from '../images/cat.jpg'

function RandomPublication() {
  return (
    <section>
      <article className="RandomPublication skin">
        <figure className="RandomPublication__imageContainer">
          <img className="RandomPublication__image" src={randomImage} alt="Gato" />
        </figure>
        <div className="RandomPublication__details">
          <p className="RandomPublication__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </article>
    </section>
  )
}

export default RandomPublication