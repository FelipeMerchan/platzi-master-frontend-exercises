import React from 'react'

import MenuWebSite from './MenuWebSite'
import './styles/HeaderWebSite.css'

function HeaderWebSite() {
  return (
    <header className="HeaderWebSite text-left">
        <h1 className="HeaderWebSite__title">Ejercicio Web</h1>
        <h4 className="HeaderWebSite__subtitle">Página creada con HTML5</h4>
        <MenuWebSite />
    </header>
  )
}

export default HeaderWebSite