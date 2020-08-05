import React, { useState, useEffect } from 'react'
import { getRandomColor } from '../utils/getRandomColor'

import './styles/MenuWebSite.css'

function MenuWebSite() {
  const [count, setCount] = useState(0)
  const composeEvent = new Event('composed')


  const handleClick = (e, composeEvent, getRandomColor) => {
    e.preventDefault()
    const { target: { id } } = e
    const anchorActive = document.querySelector('.is-active')

    anchorActive.classList.remove('is-active')
    e.target.classList.add('is-active')
    document.documentElement.style.setProperty('--primaryColor', getRandomColor())

    e.target.dispatchEvent(composeEvent);

    setCount(count + 1)
    console.log(`Id: ${id}, Count:${count}`)
  }

  useEffect(() => {
    const links = document.querySelectorAll('.MenuWebSite_item > a')

    links.forEach(object => {
      object.addEventListener('composed', function(e) {
        e.stopPropagation()
        console.log('I´m not propagating')
      })
    })
  })

  return (
    <nav className="MenuWebSite">
      <ul>
        <li className="MenuWebSite_item">
          <a className="is-active" role="button" onClick={ (e) => handleClick(e, composeEvent, getRandomColor) } href="#" id="home">Home</a>
        </li>
        <li className="MenuWebSite_item">
          <a role="button" onClick={ (e) => handleClick(e, composeEvent, getRandomColor) } href="#" id="aboutUs">Acerca de</a>
        </li>
        <li className="MenuWebSite_item">
          <a role="button" onClick={ (e) => handleClick(e, composeEvent, getRandomColor) } href="#" id="portfolio">Portafolio</a>
        </li>
        <li className="MenuWebSite_item">
          <a role="button" onClick={ (e) => handleClick(e, composeEvent, getRandomColor) } href="#" id="blog">Blog</a>
        </li>
        <li className="MenuWebSite_item">
          <a role="button" onClick={ (e) => handleClick(e, composeEvent, getRandomColor) } href="#" id="contactUs">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuWebSite