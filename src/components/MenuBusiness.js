import React, { useState, useEffect } from 'react'

import './styles/MenuBusiness.css'

function MenuBusiness(props) {
  const [count, setCount] = useState(0)
  const composeEvent = new Event('composed')

  const handleClick = event => {
    event.preventDefault()
    props.onClick(event)
    const { target: { id } } = event

    event.target.dispatchEvent(composeEvent);
    setCount(count + 1)
    console.log(`Id:${id}, Count: ${count}`)
  }

  useEffect(() => {
    const links = document.querySelectorAll('.MenuBusiness__item > a')

    links.forEach(object => {
      object.addEventListener('composed', function(event) {
        event.stopPropagation()
        console.log('I´m not propagating')
      })
    })
  })

  return (
    <nav className="MenuBusiness">
      <ul>
        <li className="MenuBusiness__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button='nav' href="#home" id="home" >Inicio</a>
        </li>
        <li className="MenuBusiness__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button='nav' href="#aboutUs" id="aboutUs" >Acerca</a>
        </li>
        <li className="MenuBusiness__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button='nav' href="#services" id="services" >Servicios</a>
        </li>
        <li className="MenuBusiness__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button='nav' href="#products" id="products" >Productos</a>
        </li>
        <li className="MenuBusiness__item">
          <a role="button" onClick={ (event) => handleClick(event) } data-button='nav' href="#contact" id="contact" >Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuBusiness