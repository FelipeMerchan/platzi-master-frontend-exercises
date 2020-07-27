import React from 'react'

import './styles/BookContent.css'

function BookContent() {
  return (
    <div className="BookContent">
      <h3 className="BookContent__title">Contenido del libro</h3>
      <p className="BookContent__text mt-2 mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
      <ul className="BookContent__list">
        <li>
          <p className="BookContent__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
            vulputate velit esse molestie consequat.
          </p>
        </li>
        <li>
          <p className="BookContent__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.
          </p>
        </li>
        <li>
          <p className="BookContent__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
            commodo consequat.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default BookContent