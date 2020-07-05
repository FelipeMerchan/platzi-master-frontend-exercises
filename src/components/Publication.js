import React from 'react'

import './styles/Publication.css'

function Publication(props) {
  return (
    <article className="Publication">
      <div className="Publication__data">
        <span>
          El {props.date} <br />
          Por <span className="text-red">{props.autor}</span><br />
          <small>{props.comments} comentarios</small>
        </span>
      </div>
      <div className="Publication__details">
        <h2 className="Publication__title mb">
          {props.title}
        </h2>
        <p className="Publication__text mb-2">
          {props.summary}
        </p>
        <a href={props.url} className="Publication__link">Leer más</a>
      </div>
    </article>
  )
}

export default Publication