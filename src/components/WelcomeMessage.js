import React from 'react'

import './styles/WelcomeMessage.css'

function WelcomeMessage(props) {
  const handleClick = (event) => {
    event.preventDefault()
    props.onClick(event)
  }

  return (
    <section className="WelcomeMessage">
      <h2 className="WelcomeMessage___title">¡Bienvenido!</h2>
      <p className="WelcomeMessage__text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <a href="/" target="_blank">Aenean massa.</a> Ut wisi enim ad minim veniam, quis nostrud exerci tation 
        ullamcorper suscipit lobortis nisl <a href="/" target="_blank">Nuliam dictum</a> ex ea commodo consequat.
      </p>
      <p className="WelcomeMessage__text">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum 
        zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>
      <div className="mt-2">
        <a
          className="button"
          role="button"
          onClick={handleClick}
          href="/"
          target="_blank"
          data-button="footer"
        >
          Leer más
        </a>
      </div>
    </section>
  )
}

export default WelcomeMessage