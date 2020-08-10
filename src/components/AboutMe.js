import React from 'react'
import { Link } from 'react-router-dom'

import './styles/AboutMe.css'

function AboutMe() {
  return (
    <article className="AboutMe">
      <h2 className="AboutMe__title">quien
        <br /> <span>soy</span>
      </h2>
      <p className="AboutMe__description">
        Etiam lectus nulla, vestibulum vel luctus eu, 
        ultricie Sit amet arcu. In a sem a nibh fringilla 
        blandit. Ut u Metus turpis ultricies.
      </p>
      <Link to="/" className="AboutMe__link bg-gray-gradient">
        leer más
      </Link>
    </article>
  )
}

export default AboutMe