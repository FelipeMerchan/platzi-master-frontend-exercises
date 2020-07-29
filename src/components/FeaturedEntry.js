import React from 'react'

import featuredEntryImage from '../images/featured-entry.jpg'
import './styles/FeaturedEntry.css'

function FeaturedEntry() {
  return (
    <article className="FeaturedEntry mt-2 mb-2">
      <div className="FeaturedEntry__details">
        <h5 className="mb">
          Entrada destacada
        </h5>
        <h2 className="mb">
          Crea un sitio web usando HTML5
        </h2>
        <p className="FeaturedEntry__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
          molestie consequat.
        </p>
      </div>
      <figure className="FeaturedEntry__imageContainer">
        <img className="FeaturedEntry__image" src={ featuredEntryImage } alt="Imagen principal" />
      </figure>
    </article>
  )
}

export default FeaturedEntry