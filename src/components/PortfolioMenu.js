import React, { useEffect } from 'react'

import './styles/PortfolioMenu.css'

function PortfolioMenu(props) {
  const composeEvent = new Event('composed')

  const handleClick = event => {
    event.preventDefault()
    props.onClick(event)
    event.target.dispatchEvent(composeEvent);
  }

  useEffect(() => {
    const links = document.querySelectorAll('.PortfolioMenu__item > a')

    links.forEach(object => {
      object.addEventListener('composed', function(event) {
        event.stopPropagation()
        console.log('I´m not propagating')
      })
    })
  })

  return (
    <nav className="PortfolioMenu">
      <ul>
        <li className="PortfolioMenu__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button={props.dataset} href="#home" id="home">inicio</a>
        </li>
        <li className="PortfolioMenu__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button={props.dataset} href="#aboutMe" id="aboutMe">acerca</a>
        </li>
        <li className="PortfolioMenu__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button={props.dataset} href="#portfolio" id="portfolio">portafolio</a>
        </li>
        <li className="PortfolioMenu__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button={props.dataset} href="#contact" id="contact">contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default PortfolioMenu