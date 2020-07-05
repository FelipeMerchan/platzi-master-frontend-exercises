import React from 'react'

import './styles/New4.css'
import noticeImage from '../images/picture.png'

function New4() {
  return (
    <section className="New4">
      <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <h5 className="text-uppercase float-left text-center">Lorem<br />Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. exerci tation 
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequatexerci tation 
            ullamcorper suscipit lobortis nisl orper suscipit lobortis nisl.
          </p>
        </div>
        <figure>
          <img className="w-100" width="500" src={ noticeImage } alt="Imagen de la noticia" />
        </figure>
      </div>
    </section>
  )
}

export default New4