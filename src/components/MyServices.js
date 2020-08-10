import React from 'react'

import './styles/MyServices.css'

function MyServices() {
  return (
    <article className="MyServices">
      <h2 className="MyServices__title">Servicios
        <br /> <span>destacados</span>
      </h2>
      <ul className="MyServices__details">
        <li>
          <p>
            Lorem Ipsum servicio destacado
          </p>
        </li>
        <li>
          <p>
            Otro servicio que debemos destacar
          </p>
        </li>
        <li>
          <p>
            Aquí va otro servicio
          </p>
        </li>
      </ul>
    </article>
  )
}

export default MyServices