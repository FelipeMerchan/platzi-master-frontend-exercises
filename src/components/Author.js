import React from 'react'

import './styles/Author.css'

function Author({ photo, name, jobTitle }) {
  return (
    <div className="Autor">
      <figure className="Author__photoContainer">
        <img className="Author__photo" src={photo} alt="Foto de perfil" />
      </figure>
      <div>
        <p className="Author__name">{name}</p>
        <p className="Author__jobTitle">{jobTitle}</p>
      </div>
    </div>
  )
}

export default Author