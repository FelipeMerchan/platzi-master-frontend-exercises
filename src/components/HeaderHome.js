import React from 'react'

import './styles/HeaderHome.css'
import felipeScImagotipo from '../images/felipe-sc-imagotipo.svg'

function HeaderHome() {
  return (
    <header className="HeaderHome">
      <img className="HeaderHome__brand"width="220" src={felipeScImagotipo} alt="Felipe Sc" />
    </header>
  )
}

export default HeaderHome