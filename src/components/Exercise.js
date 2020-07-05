import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Exercise.css'

class Exercise extends React.Component {
  render() {
    return (
      <article className="Exercise">
        <figure className="Exercise__imageContainer">
          <img className="Exercise__image" loading="lazy" src={this.props.image} alt={this.props.alt}/>
        </figure>
        <div className="Exercise__details d-flex">
          <h3 className="Exercise__title text-uppercase">{this.props.title}</h3>
          <h5 className="Exercise__difficulty text-uppercase">{this.props.difficulty}</h5>
          <Link className="Exercise__link text-uppercase" exact="true" to={this.props.link}>Descubrir</Link>
        </div>
        <div className="Exercise__border"></div>
      </article>
    )
  }
}

export default Exercise