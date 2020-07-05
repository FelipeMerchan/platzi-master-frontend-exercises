import React from 'react'

import './styles/MainNew.css'
import noticeImage from '../images/barack-obama.png'

function MainNew() {
  return (
    <section className="MainNew">
      <figure>
        <img className="w-100" width="600" src={ noticeImage } alt="Barack Obama" />
        <figcaption>Lorem ipsum dolor sit amet, consectetuer</figcaption>
        <p className="text-justify">Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit, sed diam nonummy nibh 
          euismod tincidunt ut laoreet dolore magna aliquam erat 
          volutpat. Ut wisi enim ad minim veniam
        </p>
      </figure>
    </section>
  )
}

export default MainNew