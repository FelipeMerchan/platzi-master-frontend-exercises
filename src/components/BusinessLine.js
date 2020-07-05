import React from 'react'

import './styles/BusinessLine.css'

function BusinessLine(props) {
  return (
    <article className="BusinessLine">
      <figure className="BusinessLine__imageContainer">
        <img className="BusinessLine__image" width="200" src={props.image} alt={props.alt} />
      </figure>
      <div>
        <h3 className="BusinessLine__name text-consultancy-color" style={props.style} >{props.title}</h3>
        <p className="BusinessLine__description">
          Lorem ipsum dolor sit amet, consectetuer aiscing elit.
        </p>
      </div>
    </article>
  )
}

export default BusinessLine