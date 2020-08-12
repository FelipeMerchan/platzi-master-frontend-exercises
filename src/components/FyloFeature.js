import React from 'react'

import './styles/FyloFeature.css'

function FyloFeature({ image, imageAlt, title, description }) {
  return (
    <article className="FyloFeature">
      <figure className="FyloFeature__imageContainer text-center">
        <img className="FyloFeature__image" src={image} width="75" alt={imageAlt} />
      </figure>
      <div>
      <h3 className="FyloFeature__title text-center">{title}</h3>
      <p className="FyloFeature__description text-center">{description}</p>
      </div>
    </article>
  )
}

export default FyloFeature